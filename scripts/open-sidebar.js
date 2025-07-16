class Sidebar {
	selectors = {
		layout: '[data-js-layout]',
		burgerButton: '[data-js-burger-button]'
	}

	stateClasses = {
		isActive: 'menu-is-open',
		isLock: 'is-lock'
	}

	constructor() {
		this.layoutElement = document.querySelector(this.selectors.layout)
		this.burgerButtonElement = document.querySelector(this.selectors.burgerButton)
		this.bindEvents()
	}

	onBurgerButtonClick = () => {
		this.layoutElement.classList.toggle(this.stateClasses.isActive)
		document.documentElement.classList.toggle(this.stateClasses.isLock)
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
	}
}

new Sidebar ();