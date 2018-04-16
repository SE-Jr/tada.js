
const testHelper = {
  createFixture(html = '<ul><li></li></ul>') {
    this.fixture = document.createElement('div');
    this.fixture.id = 'tada-class';
    this.fixture.innerHTML = html;
    document.body.append(this.fixture);
  },
  removeFixture() {
    document.body.removeChild(this.fixture);
  },
};
export default testHelper;
