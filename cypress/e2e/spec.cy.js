import "cypress-iframe";

const GENERIC_TIMEOUT = 1_000;

describe("template spec", () => {
  it("passes", () => {
    let iframeWindow;
    let spyErrorIframe;

    cy.visit("http://127.0.0.1:1337");

    cy.enter().then((getBody) => {
      getBody()
        .its("0.ownerDocument.defaultView")
        .then((win) => {
          iframeWindow = win;

          function errorHandler(...args) {
            console.log("~~~ iframe"); // log appears in console
            return iframeWindow.console.error(...args);
          }

          spyErrorIframe = cy
            .spy(iframeWindow.console, "error", errorHandler)
            .as("spyErrorIframe");
        });
    });

    // Using alias should means you don't have to wait
    cy.get("@spyErrorIframe").should("have.been.calledOnceWith", "Catch me"); // passes

    cy.wait(1000).then(() => {
      // one call logged
      console.log("~~~ iframe error event", spyErrorIframe.getCalls());
    });
  });
});
