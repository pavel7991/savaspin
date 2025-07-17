class Dropdown {
	selectors = {
		root: '[data-js-dropdown]',
		toggleButton: '[data-js-dropdown-toggle]',
	}

	stateClasses = {
		isOpen: 'is-open',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.toggleButtonElement = this.rootElement.querySelector(this.selectors.toggleButton)

		this.bindEvents()
	}

	bindEvents() {
		if (this.toggleButtonElement) {
			this.toggleButtonElement.addEventListener('click', this.toggleContent)
		}
	}

	toggleContent = () => {
		this.rootElement.classList.toggle(this.stateClasses.isOpen)
	}

}

new Dropdown();