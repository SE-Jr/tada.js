import chai from 'chai';
import Carousel from '../scripts/carousel';

chai.should();

describe("Carousel 렌더링", () => {
	let container;

	beforeEach(() => {
		container = document.createElement('DIV');
		container.classList.add('se-container');

		let image = document.createElement('IMG');
		image.src = 'sample.com';

		let child1 = document.createElement('DIV');
		child1.appendChild(image);
		container.appendChild(child1);

		let child2 = document.createElement('DIV');
		child2.appendChild(image);
		container.appendChild(child2);

		let child3 = document.createElement('DIV');
		child3.appendChild(image);
		container.appendChild(child3);

		document.body.appendChild(container);
	})

	afterEach(() => {
		document.body.removeChild(container);
		container = null;
	})

	it("하나의 캐러셀에는 하나의 요소만이 보여야한다.", () => {
		// given

		// when
		new Carousel();

		// then
		const container = document.getElementsByClassName('se-container');
		const visibleElements = document.querySelectorAll('.se-container > div.is-on');

		container.length.should.be.eql(1);
		visibleElements.length.should.be.eql(1);
	});
});
