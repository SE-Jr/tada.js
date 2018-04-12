
const testHelper = {
  createFixture() {
    this.fixture = document.createElement('div');
    this.fixture.id = 'tada-class';
    this.fixture.innerHTML = '<div></div>';
    document.body.append(this.fixture);
  },
  removeFixture() {
    document.body.removeChild(this.fixture);
  },
};
export default testHelper;
