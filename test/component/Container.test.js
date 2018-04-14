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
  describe('slide container initialize >> ', () => {
    let state;
    let wrapper;
    beforeEach(() => {
      testHelper.createFixture();
      state = new State();
      wrapper = document.getElementById('tada-class');
    });
    afterEach(() => {
      testHelper.removeFixture();
      state = null;
      wrapper = null;
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

  describe('slide container rendering >>', () => {
    let state;
    let wrapper;  
    beforeEach(() => {
      testHelper.createFixture('<ul><li><div>1</div></li><li><div>2</div></li></ul>');
      state = new State();
      wrapper = document.getElementById('tada-class');
    });

    afterEach(() => {
      testHelper.removeFixture();
      state = null;
      wrapper = null;
    });

    it('when invonke `render` should equal `containerElement` with all slide continer width', () => {
      // given
      const option = {};
      const config = new Config(option, wrapper);
      
      // when
      const container = new Container(config, state);
      container.render();
  
      // then
      const { containerWidth, slideCount } = config.toJson();
      expect(container.containerElement.style.width).to.include(containerWidth * slideCount);
    });
  });
});
