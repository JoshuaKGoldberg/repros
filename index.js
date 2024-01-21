describe("test after each error", () => {
  afterEach(() => {
    throw new Error("Error from after each");
  });

  it("test one", () => {
    throw new Error("Error from test");
  });
});
