import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Tada from '../src/index';
chai.use(sinonChai);
const expect = chai.expect;


describe('initial test', function() {
  let sandbox;
  let spyConfig;
  let spyController;
  let fakeConfig = {fake: 'config'}

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    spyConfig = sandbox.stub(Tada.prototype, '_createConfig').callsFake(() => fakeConfig);
    spyController = sandbox.stub(Tada.prototype, '_loadController').callsFake(() => {});
  });

  afterEach(() => {
    sandbox.restore();
    spyConfig = null;
    spyController = null;
  });

  describe('when create instance of Tada >> ', function () {
    it('invoke `_createConfig` function', function () {
      //given
      const option = { selector: '.tada-class' };
      //when
      const tada = new Tada(option);
      //then
      expect(spyConfig.calledWith(option)).to.be.true;
    });

    it('invoke `_loadController` function', function () {
      //given
      const option = { selector: '.tada-class' };
      //when
      const tada = new Tada(option);
      //then
      expect(spyController.calledWith(fakeConfig)).to.be.true;
    });
  });

  describe('when register event of Tada >> ', function () {
    it('invoke `on` function of controller', function () {
      const option = { selector: '.tada-class' };
      const tada = new Tada(option);
      const nextSpy = sinon.spy();
      tada.controller = { on: () => {}}
      const eventSpy = sandbox.spy(tada.controller, 'on');
      //when
      tada.on('next', nextSpy)
      //then
      expect(eventSpy.calledWith('next', nextSpy))
    });
  });
});
