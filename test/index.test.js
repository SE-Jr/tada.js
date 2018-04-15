import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Tada from '../src/index';
import testHelper from './test.helper';

chai.use(sinonChai);
const expect = chai.expect;


describe('initial test', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    testHelper.createFixture();
  });

  afterEach(() => {
    sandbox.restore();
    testHelper.removeFixture();

  });

  describe('when create instance of Tada >> ', () => {
    it('should throw error when no `selector` option', () => {
      //given
      const option = {};

      //when
      const tada = new Tada(option);

      //then
      expect(tada).to.be.a('error', 'required selector');
    });

    it('should throw error when selector is not string', () => {
      //given
      const option = { selector: 1 };
      //when
      const tada = new Tada(option);
      //then
      expect(tada).to.be.a('error', 'selector must be string type');
    });

    it('should throw error when wrapper is not element', () => {
      //given
      const option = { selector: '#hi' };
      //when
      const tada = new Tada(option);
      //then
      expect(tada).to.be.a('error', 'wrapper must be element node');
    });

    it('invoke `_createConfig` function', () => {
      //given
      const option = { selector: '#tada-class' };
      const spyConfig = sandbox.spy(Tada.prototype, '_createConfig');

      //when
      const tada = new Tada(option);
      //then
      expect(spyConfig.calledWith(option)).to.be.true;
    });

    it('invoke `_loadController` function', () => {
      //given
      const option = { selector: '#tada-class' };
      //when
      const tada = new Tada(option);
      //then
      expect(tada.controller).to.exist;
    });
  });

  describe('when register event of Tada >> ', () => {
    it('invoke `on` function of controller', () => {
      const option = { selector: '#tada-class' };
      const tada = new Tada(option);
      const nextSpy = sinon.spy();
      tada.controller = { on: () => {}};
      const eventSpy = sandbox.spy(tada.controller, 'on');
      //when
      tada.on('next', nextSpy);
      //then
      expect(eventSpy.calledWith('next', nextSpy));
    });
  });

  describe('custom Tada ', () => {
    describe('in default Tada case without no options >> ', () => {
      it('hide navigator and pagination', () => {
        //given
        const option = {selector: '#tada-class'};
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.showNavigator).to.be.false;
        expect(tada.controller._config.showPagination).to.be.false;
        expect(tada.controller._config.paginationShape).to.equal('circle');
      });
    });
    describe('when user set option >> ', () => {
      it('can show navigator', () => {
        //given
        const option = {selector: '#tada-class', navigator: true };
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.showNavigator).to.be.true;
      });
      it('can hide navigator', () => {
        //given
        const option = {selector: '#tada-class', navigator: false };
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.showNavigator).to.be.false;
      });
      it('can show pagination', () => {
        //given
        const option = {selector: '#tada-class', pagination: true };
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.showPagination).to.be.true;
      });
      it('can hide pagination', () => {
        //given
        const option = {selector: '#tada-class', pagination: false };
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.showPagination).to.be.false;
      });
      it('can change pagination shape to circle', () => {
        //given
        const option = {selector: '#tada-class', paginationShape: 'circle' };
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.paginationShape).to.equal('circle');
      });
      it('can change pagination shape to bar', () => {
        //given
        const option = {selector: '#tada-class', paginationShape: 'bar' };
        //when
        const tada = new Tada(option);
        //then
        expect(tada.controller._config.paginationShape).to.equal('bar');
      });
    });
  });

});

