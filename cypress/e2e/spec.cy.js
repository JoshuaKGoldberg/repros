const GENERIC_TIMEOUT = 1_000;

describe("template spec", () => {
  it("passes", () => {
    let iframeWindow;
    let spyErrorIframe;

    cy.visit("127.0.0.1:1337");

    cy.get("iframe").then(($iframe) => {
      iframeWindow = $iframe[0].contentWindow;
      function errorHandler(...args) {
        console.log("~~~ iframe");
        return iframeWindow.console.error(...args);
      }
      spyErrorIframe = cy.spy(errorHandler);
      iframeWindow.addEventListener("error", spyErrorIframe);
      iframeWindow.onerror = spyErrorIframe;
      cy.spy(iframeWindow.console, "log");
      cy.spy(iframeWindow.console, "error");
      cy.spy(iframeWindow, "alert");
    });

    let mainWindow;
    let spyErrorWindow;

    cy.window().then((win) => {
      mainWindow = win;
      function errorHandler(...args) {
        console.log("~~~ window");
        return iframeWindow.console.error(...args);
      }
      spyErrorWindow = cy.spy(errorHandler);
      mainWindow.addEventListener("error", spyErrorWindow);
      mainWindow.onerror = spyErrorWindow;
      cy.spy(win, "alert");
      cy.spy(win.console, "log");
      cy.spy(win.console, "error");
    });

    cy.wait(GENERIC_TIMEOUT + 1000).then(() => {
      const [call] = iframeWindow.console.error.getCalls();
      expect(call).not.to.equal(undefined);
      expect(call.args).to.deep.equal(["Catch me"]);
    });
  });
});
