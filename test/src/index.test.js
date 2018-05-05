import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Tada from "../../src/index";
import { CLASSNAMES } from "../../src/scripts/Consts";
import testHelper from "./test.helper";

chai.use(sinonChai);
const { expect } = chai;


describe("initial test", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        testHelper.createFixture("<ul><li><div>1</div></li><li><div>2</div></li><li><div>3</div></li></ul>");
    });

    afterEach(() => {
        sandbox.restore();
        testHelper.removeFixture();
    });

    describe("when create instance of Tada >> ", () => {
        it("should throw error when no `selector` option", () => {
            // given
            const option = {};

            // when
            const tada = new Tada(option);

            // then
            expect(tada).to.be.a("error", "required selector");
        });

        it("should throw error when selector is not string", () => {
            // given
            const option = { selector: 1 };
            // when
            const tada = new Tada(option);
            // then
            expect(tada).to.be.a("error", "selector must be string type");
        });

        it("should throw error when wrapper is not element", () => {
            // given
            const option = { selector: "#hi" };
            // when
            const tada = new Tada(option);
            // then
            expect(tada).to.be.a("error", "wrapper must be element node");
        });

        it("invoke `_createConfig` function", () => {
            // given
            const option = { selector: "#tada-class" };
            const spyConfig = sandbox.spy(Tada.prototype, "_createConfig");

            // when
            const tada = new Tada(option);

            // then
            expect(tada instanceof Tada);
            expect(spyConfig.calledWith(option));
        });

        it("invoke `_loadController` function", () => {
            // given
            const option = { selector: "#tada-class" };
            // when
            const tada = new Tada(option);
            // then
            expect(tada.controller);
        });
    });

    describe("if current slide is first slide >> ", () => {
        let tada;
        beforeEach(() => {
            tada = new Tada({ selector: "#tada-class" });
        });

        afterEach(() => {
            tada = null;
        });

        it("a left navigator should disabled", () => {
            // given


            // when
            const rightNavigator = document.querySelector(`.${CLASSNAMES.leftNavigator}`);
            rightNavigator.click();

            // then
            expect(rightNavigator.disabled);
        });

        it("when click a left navigator should not move", () => {
            // given

            // when
            const leftNavigator = document.querySelector(`.${CLASSNAMES.leftNavigator}`);
            leftNavigator.click();

            // then
            const expectPagination = document.querySelector(`.${CLASSNAMES.paginationButton}.active`);
            const activateIndex = parseInt(expectPagination.getAttribute("data-slide-index"), 10);
            const currentIndex = 0;
            expect(activateIndex).to.be.equal(currentIndex);
            expect(tada.controller._state.currentPage).to.be.equal(currentIndex);
        });

        it("when click a right navigator, should move to next slide and next pagination", () => {
            // given

            // when
            const rightNavigator = document.querySelector(`.${CLASSNAMES.rightNavigator}`);
            rightNavigator.click();

            // then
            const expectPagination = document.querySelector(`.${CLASSNAMES.paginationButton}.active`);
            const activateIndex = parseInt(expectPagination.getAttribute("data-slide-index"), 10);
            const nextIndex = 1;
            expect(activateIndex).to.be.equal(nextIndex);
            expect(tada.controller._state.currentPage).to.be.equal(nextIndex);
        });
    });

    describe("if current slide is last slide >> ", () => {
        let tada;
        let rightNavigator;

        beforeEach(() => {
            tada = new Tada({ selector: "#tada-class" });
            rightNavigator = document.querySelector(`.${CLASSNAMES.rightNavigator}`);
            rightNavigator.click();
            rightNavigator.click();
        });

        afterEach(() => {
            tada = null;
        });

        it("a right navigator should disabled", () => {
            // given

            // when

            // then
            expect(rightNavigator.disabled);
        });

        it("when click a right navigator should not move", () => {
            // given

            // when
            rightNavigator.click();

            // then
            const expectPagination = document.querySelector(`.${CLASSNAMES.paginationButton}.active`);
            const activateIndex = parseInt(expectPagination.getAttribute("data-slide-index"), 10);
            const currentIndex = 2;
            expect(activateIndex).to.be.equal(currentIndex);
            expect(tada.controller._state.currentPage).to.be.equal(currentIndex);
        });

        it("when click a left navigator, should move to prev slide and prev pagination", () => {
            // given

            // when
            const leftNavigator = document.querySelector(`.${CLASSNAMES.leftNavigator}`);
            leftNavigator.click();

            // then
            const expectPagination = document.querySelector(`.${CLASSNAMES.paginationButton}.active`);
            const activateIndex = parseInt(expectPagination.getAttribute("data-slide-index"), 10);
            const prevIndex = 1;
            expect(activateIndex).to.be.equal(prevIndex);
            expect(tada.controller._state.currentPage).to.be.equal(prevIndex);
        });
    });


    describe("click pagination >>", () => {
        let tada;

        function clickPagination(page) {
            const paginationItem = document.querySelectorAll(`.${CLASSNAMES.paginationItem}`)[page];
            paginationItem.click();
        }

        function getActivePagination() {
            const expectPagination = document.querySelector(`.${CLASSNAMES.paginationButton}.active`);
            return parseInt(expectPagination.getAttribute("data-slide-index"), 10);
        }

        beforeEach(() => {
            tada = new Tada({ selector: "#tada-class" });
        });

        afterEach(() => {
            tada = null;
        });
        it("when clicking specific pagination, move to the page", () => {
            // given
            const page = 2;
            // when
            clickPagination(page);
            // then
            const activateIndex = getActivePagination();
            expect(activateIndex).to.be.equal(page);
            expect(parseInt(tada.controller._state.currentPage, 10)).to.be.equal(page);
        });

        it("when clicking same pagination, page is not changed", () => {
            // given
            const samePage = 1;
            clickPagination(samePage);
            // when
            clickPagination(samePage);

            // then
            const activateIndex = getActivePagination();

            expect(activateIndex).to.be.equal(samePage);
            expect(parseInt(tada.controller._state.currentPage, 10)).to.be.equal(samePage);
        });
    });

    describe("when register event of Tada >> ", () => {
        it("invoke `on` function of controller", () => {
            const option = { selector: "#tada-class" };
            const tada = new Tada(option);
            const nextSpy = sinon.spy();
            tada.controller = { on: () => {} };
            const eventSpy = sandbox.spy(tada.controller, "on");
            // when
            tada.on("next", nextSpy);
            // then
            expect(eventSpy.calledWith("next", nextSpy));
        });
    });
});
