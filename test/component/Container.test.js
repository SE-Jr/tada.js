import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import testHelper from '../test.helper';
import Container from '../../src/scripts/component/Container';
import State from '../../src/scripts/State';
import Config from '../../src/scripts/Config';

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
    let state;
    let wrapper;
    beforeEach(() => {
      state = new State();
      wrapper = document.getElementById('tada-class');
    });

    afterEach(() => {
      state = null;
      wrapper = null;
    });

    it('when create instance of Container should set `currentPage` first slide', () => {
      // given
      const option = {};
      const config = new Config(option, wrapper);
      
      // when
      const container = new Container(config, state);
  
      // then
      expect(state.currentPage).to.be.equal(0);
    });

    it('when user set `containerWidth` config >> should equal `containerWidth` config', () => {
      // given
      const option = { containerWidth: 100 };
      const config = new Config(option, wrapper);

      // when
      const container = new Container(config, state);

      // then
      expect(container._containerWidth).to.be.equal(config.containerWidth);
    });

    it('when user does not set `containerWidth` config >> should equal parent width with `containerWith` config', () => {
      // given
      const option = {};
      const config = new Config(option, wrapper);

      // when
      const container = new Container(config, state);

      // then
      expect(container._containerWidth).to.be.equal(wrapper.parentElement.clientWidth);
    });
  });
});
