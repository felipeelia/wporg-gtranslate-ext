/* global chrome */

const translateButtonsRows = document.querySelectorAll('.translation-actions__secondary');

const translateString = (e) => {
	const button = e.target;
	const pathArray = window.location.pathname.split('/');
	const trEditor = button.closest('tr.editor');
	const string = trEditor.querySelector('span.original-raw').textContent;
	const textArea = trEditor.querySelector('textarea');

	let language;
	if (pathArray?.[2] === 'wp-plugins' && pathArray?.[5].match(/[a-z]{2}(-[a-z]{2})?/)) {
		language = pathArray[5];
	} else {
		language = pathArray?.[4].match(/[a-z]{2}(-[a-z]{2})?/) ? pathArray[4] : 'en';
	}

	chrome.runtime.sendMessage({ string, language }, (response) => {
		textArea.value = response.data.translations[0].translatedText;
	});
};

const addButton = () => {
	if (!translateButtonsRows) {
		return;
	}

	translateButtonsRows.forEach((row) => {
		const button = document.createElement('button');
		button.innerHTML = 'Translate';
		button.classList.add('button', 'is-small', 'translation-actions__gtranslate');
		button.addEventListener('click', translateString);
		row.prepend(button);
	});
};

window.addEventListener('load', addButton);
