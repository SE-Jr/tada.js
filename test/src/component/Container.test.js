import chai from "chai";
import sinonChai from "sinon-chai";
import testHelper from "../test.helper";
import Container from "../../../src/scripts/component/Container";
import State from "../../../src/scripts/State";
import Config from "../../../src/scripts/Config";
import { CLASSNAMES } from "../../../src/scripts/Consts";

chai.use(sinonChai);
const { expect } = chai;

describe("Container component test >>", () => {
    describe("slide container initialize >> ", () => {
        let state;
        let wrapper;
        beforeEach(() => {
            testHelper.createFixture();
            state = new State();
            wrapper = document.getElementById("tada-class");
        });
        afterEach(() => {
            testHelper.removeFixture();
            state = null;
            wrapper = null;
        });
        it("when user set `containerWidth` config should equal `containerWidth` config", () => {
            // given
            const option = { containerWidth: 100 };
            const config = new Config(option, wrapper);

            // when
            const container = new Container(config, state);

            // then
            expect(container._containerWidth).to.be.equal(config.containerWidth);
        });

        it("when user does not set `containerWidth` config it should equal parent's element's width", () => {
            // given
            const option = {};
            const config = new Config(option, wrapper);

            // when
            const container = new Container(config, state);

            // then
            expect(container._containerWidth).to.be.equal(wrapper.parentElement.clientWidth);
        });
    });

    describe("slide container rendering >>", () => {
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

        describe("when invoke `render` >>", () => {
            it("container's width should equal all slide width and has container class", () => {
                // given
                const option = {};
                const config = new Config(option, wrapper);

                // when
                const container = new Container(config, state);
                container.render();

                // then
                const { containerWidth, slideCount } = config.toJson();
                expect(container.containerElement.style.width).to.be.equal(`${containerWidth * slideCount}px`);
                expect(container.containerElement.classList.contains(CLASSNAMES.container));
            });

            it("wrapper's width should equal container's width and has wrapper class", () => {
                // given
                const option = {};
                const config = new Config(option, wrapper);

                // when
                const container = new Container(config, state);
                container.render();

                // then
                expect(container.wrapperElement.style.width).to.be.equal(`${container._containerWidth}px`);
                expect(container.wrapperElement.classList.contains(CLASSNAMES.wrapper));
            });

            it("slide's width should be set to the same ratio", () => {
                // given
                const option = {};
                const config = new Config(option, wrapper);

                // when
                const container = new Container(config, state);
                container.render();

                // then
                const expectSlideWidth = `${100 / 2}%`;
                const slides = container.containerElement.children;
                expect(slides[0].style.width).to.be.equal(expectSlideWidth);
                expect(slides[1].style.width).to.be.equal(expectSlideWidth);
            });
        });

        describe("when invoke `moveTo` with page >>", () => {
            it("should move to slide page ", () => {
                // given
                const option = {};
                const config = new Config(option, wrapper);
                const container = new Container(config, state);
                container.render();

                // when
                const page = 1;
                container.moveTo(page);

                // then
                const { containerWidth } = config.toJson();
                const expectContainerWidth = -1 * page * containerWidth;
                expect(container.containerElement.style.transform).to.include(expectContainerWidth);
            });
        });
    });
});
