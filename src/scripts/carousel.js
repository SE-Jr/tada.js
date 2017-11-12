import { CONFIG } from "./config";

export default class Carousel {
	constructor(option={}) {
		this._init(option);
	}

	_init(option) {
		this.option = Object.assign({}, 
			CONFIG.DEFAULT_OPTION,
			option
		);

		const containers = document.getElementsByClassName(this.option.containerClass);
		for (const container of containers) {
			this._carouselize(container);
		}
	}

	_carouselize(container) {
		container.classList.add(CONFIG.CONTROL_CLASS);

		const items = container.children;
		this._show(items[0]);
	}

	_show(target) {
		target.classList.add('is-on');
	}
}
