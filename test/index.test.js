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
        expect(tada._config.showNavigator).to.be.false;
        expect(tada._config.showPagination).to.be.false;
        expect(tada._config.paginationShape).to.equal('circle');
      });
    });
    describe('when user set option >> ', () => {
      it('should throw error when navigator is not boolean', () => {
        //given
        const option = { selector: '#tada-class', navigator: 'hi' };
        //when
        const tada = new Tada(option);
        //then
        expect(tada).to.be.a('error', 'navigator must be boolean type');
      });
      it('should throw error when pagination is not boolean', () => {
        //given
        const option = { selector: '#tada-class', pagination: 'hi' };
        //when
        const tada = new Tada(option);
        //then
        expect(tada).to.be.a('error', 'pagination must be boolean type');
      });
      it('can show navigator', () => {
        //given
        const option = {selector: '#tada-class', navigator: true };
        //when
        const tada = new Tada(option);
        //then
        expect(tada._config.showNavigator).to.be.true;
      });
      it('can hide navigator', () => {
        //given
        const option = {selector: '#tada-class', navigator: false };
        //when
        const tada = new Tada(option);
        //then
        expect(tada._config.showNavigator).to.be.false;
      });
      it('can show pagination', () => {
        //given
        const option = {selector: '#tada-class', pagination: true };
        //when
        const tada = new Tada(option);
        //then
        expect(tada._config.showPagination).to.be.true;
      });
      it('can hide pagination', () => {
        //given
        const option = {selector: '#tada-class', pagination: false };
        //when
        const tada = new Tada(option);
        //then
        expect(tada._config.showPagination).to.be.false;
      });
      it('can change pagination shape to circle from bar', () => {
        //given
        const option = {selector: '#tada-class', paginationShape: 'bar' };
        const tada = new Tada(option);
        //when
        tada._config.paginationShape = 'circle';
        //then
        expect(tada._config.paginationShape).to.equal('circle');
      });
      it('can change pagination shape to bar from circle', () => {
        //given
        const option = {selector: '#tada-class', paginationShape: 'circle' };
        const tada = new Tada(option);
        //when
        tada._config.paginationShape = 'bar';
        //then
        expect(tada._config.paginationShape).to.equal('bar');
      });

      it('can set default pagination shape to circle if user set weird shape', () => {
        //given
        const option = {selector: '#tada-class', paginationShape: 'hi' };
        //when
        const tada = new Tada(option);
        //then
        expect(tada._config.paginationShape).to.equal('circle');
      });
    });
  });

});

