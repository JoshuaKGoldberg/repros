import { expect } from "chai";
import { FooClass } from "./FooClass";

describe('FooClass', () => {
    it('getMessage should return hi', function() {
        expect(FooClass.getMessage()).equals("hi")
      });
});

