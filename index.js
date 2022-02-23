import { jest } from "@jest/globals";
function withMyFunction(myFunction) {
    myFunction();
}
// Ok
withMyFunction(jest.fn());
// Not ok; defaults to Mock<unknown, unknown[]> instead of <any, any[]>
const spy = jest.fn();
withMyFunction(spy);
