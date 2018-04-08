import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Tada from '../src/index';

// chai.should();
chai.use(sinonChai);
const expect = chai.expec; // expect ?


describe('initial test', function() {
  let sandbox;
  let spyConfig;
  let spyController;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    spyConfig = sandbox.stub(Tada.prototype, '_createConfig').callsFake(() => 1);
    spyController = sandbox.stub(Tada.prototype, '_loadController').callsFake(() => 1);
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
      spyConfig.calledWith(option).should.be.true;
    });

    //!!!this test case is not working
    it('invoke `_loadController` function', function () {
      //given
      const config = { a: 'blah' };
      const option = { selector: '.tada-class' };
      //when
      const tada = new Tada(option);
      //then
      spyController.calledWith(config).should.be.true;
    });
  });

  // describe('on >> ', function () {
  //   it('', function () {
  //     //given
  //     const option = { selector: '.tada-class' };
  //     const tada = new Tada(option);
  //     //when
  //     tada.on('next', fun)
  //
  //     //then
  //   });
  // });
});
