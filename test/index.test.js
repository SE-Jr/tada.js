import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Tada from '../src/index';
chai.use(sinonChai);
const expect = chai.expect;


describe('initial test', () => {
  let sandbox;
  let fixture;

  const createFixture = function (){
    fixture = document.createElement('div');
    fixture.id = 'tada-class';
    fixture.innerHTML = '<div></div>';
    document.body.append(fixture);
  };

  const removeFixture = function () {
    document.body.removeChild(fixture);
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    createFixture();
  });

  afterEach(() => {
    sandbox.restore();
    removeFixture();

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
});
