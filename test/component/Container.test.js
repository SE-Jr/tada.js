import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import testHelper from '../test.helper';
import Container from '../../src/scripts/component/Container';
import State from '../../src/scripts/State';

chai.use(sinonChai);
const expect = chai.expect;

describe('Container component test >>', () => {
  beforeEach(() => {
    testHelper.createFixture();
  });
  afterEach(() => {
    testHelper.removeFixture();
  });

  describe('slide container rendering >> ', () => {
    describe('when user set `containerWidth` config >>', () => {
      it('should equal `containerWidth` config', () => {
        // given
        const state = new State();
        const wrapper = document.getElementById('tada-class');
        const configs = { wrapper, containerWidth: 100 };
  
        // when
        const container = new Container(configs, state);
      
        // then
        expect(container._containerWidth).to.be.equal(configs.containerWidth);
      });
    });
  
  });
});
