import chai from 'chai';
import sinonChai from 'sinon-chai';
import testHelper from '../test.helper';
import State from '../../../src/scripts/State';
import Config from '../../../src/scripts/Config';
import Pagination from '../../../src/scripts/component/Pagination';

chai.use(sinonChai);
const expect = chai.expect;

describe('Pagination component test >>', () => {
  describe('pagination rendering >>', () => {
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

    it('should render pagination according to slide count', () => {
      // given
      const option = {};
      const config = new Config(option, wrapper);

      // when
      const pagination = new Pagination(config, state);
      pagination.render();

      // then

      const paginationCount = document.querySelectorAll('.tada-pagination li').length;
      expect(paginationCount).to.be.eql(config._slideCount);
    });

    it('should be selected first pagination', () => {
      // given
      const option = {};
      const firstIndex = 0;
      const otherIndex = 1;
      const config = new Config(option, wrapper);

      // when
      const pagination = new Pagination(config, state);
      pagination.render();

      // then
      const paginationButton = document.querySelectorAll('.tada-pagination li .tada-pagination-button');
      const firstPagination = paginationButton[firstIndex];
      const otherPagination = paginationButton[otherIndex];
      expect(firstPagination.classList.contains('active')).to.be.true;
      expect(otherPagination.classList.contains('active')).to.be.false;

    });
  });


});