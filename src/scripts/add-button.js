/* global chrome */

const translateButtonsRows = document.querySelectorAll('.translation-actions__secondary');

const translateString = (e) => {
	const button = e.target;
	const trEditor = button.closest('tr.editor');
	const string = trEditor.querySelector('span.original-raw').textContent;
	const textArea = trEditor.querySelector('textarea');

	chrome.runtime.sendMessage({ string }, (response) => {
		console.log(response);
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
