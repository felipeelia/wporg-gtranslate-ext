/* global chrome */

// Saves options to chrome.storage
const saveOptions = () => {
	const gTranslateKey = document.getElementById('gtranslate-key').value;

	chrome.storage.sync.set({ gTranslateKey }, () => {
		// Update status to let user know options were saved.
		const status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(() => {
			status.textContent = '';
		}, 1500);
	});
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
	chrome.storage.sync.get({ gTranslateKey: '' }, (items) => {
		document.getElementById('gtranslate-key').value = items.gTranslateKey;
	});
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
