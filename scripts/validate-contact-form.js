class ContactForm {
	selectors = {
		form: 'form-contact',
		email: '#form-email',
		message: '#form-message',
		errorEmail: '#form-email-error',
		errorMessage: '#form-message-error'
	}

	stateClasses = {
		invalid: 'invalid'
	}

	constructor() {
		this.formElement = document.getElementById(this.selectors.form)
		this.emailInputElement = this.formElement.querySelector(this.selectors.email)
		this.messageInputElement = this.formElement.querySelector(this.selectors.message)
		this.errorEmailElement = this.formElement.querySelector(this.selectors.errorEmail)
		this.errorMessageElement = this.formElement.querySelector(this.selectors.errorMessage)

		this.bindEvents()
	}

	bindEvents() {
		this.formElement.addEventListener('submit', this.onSubmit)
	}

	onSubmit = (e) => {
		e.preventDefault()
		const isValid = this.validate()
		if (isValid) {
			this.showSuccess()
			this.formElement.reset()
			this.clearErrors()
		}
	}

	validate() {
		let valid = true

		const email = this.emailInputElement.value.trim()
		const message = this.messageInputElement.value.trim()

		if (!email) {
			this.setError(this.emailInputElement, this.errorEmailElement, 'Email is required.')
			valid = false
		} else if (!this.isValidEmail(email)) {
			this.setError(this.emailInputElement, this.errorEmailElement, 'Please enter a valid email.')
			valid = false
		} else {
			this.clearError(this.emailInputElement, this.errorEmailElement)
		}

		if (!message) {
			this.setError(this.messageInputElement, this.errorMessageElement, 'Message is required.')
			valid = false
		} else if (message.length < 10) {
			this.setError(this.messageInputElement, this.errorMessageElement, 'Message must be at least 10 characters.')
			valid = false
		} else {
			this.clearError(this.messageInputElement, this.errorMessageElement)
		}

		return valid
	}

	isValidEmail(email) {
		return /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/.test(email)
	}

	setError(input, errorElement, message) {
		input.classList.add(this.stateClasses.invalid)
		errorElement.textContent = message
	}

	clearError(input, errorElement) {
		input.classList.remove(this.stateClasses.invalid)
		errorElement.textContent = ''
	}

	clearErrors() {
		this.clearError(this.emailInputElement, this.errorEmailElement)
		this.clearError(this.messageInputElement, this.errorMessageElement)
	}

	showSuccess() {
		alert('✅ Your message has been sent successfully!')
	}
}

new ContactForm()
