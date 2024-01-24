const fullName = document.querySelector('#fullname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const checkbox = document.querySelector('#checkbox');
const submitButton = document.querySelector('.contact__button');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const formMsg = formBox.querySelector('.contact__error');
	formBox.classList.add('error');
	formMsg.innerHTML = msg;
	formMsg.style.visibility = 'visible';
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
	const formMsg = formBox.querySelector('.contact__error');
	formMsg.style.visibility = 'hidden';
};

const checkEmail = input => {
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (re.test(input.value)) {
	} else {
		showError(input, 'Podałeś niepoprawny email');
	}
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value !== '') {
			clearError(el);
		} else {
			showError(el, el.placeholder);
		}
	});
};

const checkCheckbox = input => {
	if (input.checked) {
		const formBox = input.parentElement;
		formBox.classList.remove('error');
		const formMsg = formBox.querySelector('.contact__error');
		formMsg.style.visibility = 'hidden';
	} else {
		showError(input, 'Akceptuj nasze warunki.');
	}
};

const checkErrors = () => {
	const allBoxes = document.querySelectorAll('.contact__form-box');
	let counter = 0;

	allBoxes.forEach(el => {
		if (el.classList.contains('error')) {
			counter++;
		}
	});

	if (counter === 0 && checkbox.checked) {
		alert(
			'Wiadomość została wysłana. Dziękujemy za kontakt z naszym działem obsługi.'
		);
	}
};

submitButton.addEventListener('click', e => {
	e.preventDefault();
	checkForm([fullName, email, message]);
	checkEmail(email);
	checkCheckbox(checkbox);
	checkErrors();
});
