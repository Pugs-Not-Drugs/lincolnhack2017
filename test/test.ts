import { expect } from "chai";
import { Thing } from "../src/Thing";

describe("example test", () => {
    let thingUnderTest: Thing;

    beforeEach(() => {
        thingUnderTest = new Thing();
    });

    it("does something", () => {
        expect(thingUnderTest.doSomething(1)).to.be.equal(2);
    });
});
