import chai from "chai";
import sinonChai from "sinon-chai";
import testHelper from "../test.helper";
import State from "../../../src/scripts/State";
import Config from "../../../src/scripts/Config";
import Navigator from "../../../src/scripts/component/Navigator";

chai.use(sinonChai);
const { expect } = chai;

describe("Navigator component test >>", () => {
    describe("slide navigator rendering >>", () => {
        let state;
        let wrapper;
        beforeEach(() => {
            testHelper.createFixture("<ul><li><div>1</div></li><li><div>2</div></li></ul>");
            state = new State();
            wrapper = document.getElementById("tada-class");
        });

        afterEach(() => {
            testHelper.removeFixture();
            state = null;
            wrapper = null;
        });

        it("should exist right navigator and left navigator", () => {
            // given
            const option = {};
            const config = new Config(option, wrapper);

            // when
            const navigator = new Navigator(config, state);
            navigator.render();

            // then
            expect(document.querySelector(".tada-navigator-left"));
            expect(document.querySelector(".tada-navigator-right"));
        });
    });
});
