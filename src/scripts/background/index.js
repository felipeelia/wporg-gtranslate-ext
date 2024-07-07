/* global chrome */

const fetchResponse = (gTranslateKey, string, sendResponse) => {
	// Timeout after 3 seconds.
	const timeoutController = new AbortController();
	setTimeout(() => {
		timeoutController.abort();
	}, 10000);

	const urlParams = new URLSearchParams({
		q: string,
		key: gTranslateKey,
		target: 'pt-br',
	}).toString();

	fetch(`https://translation.googleapis.com/language/translate/v2?${urlParams}`, {
		redirect: 'manual',
		headers: {
			'Content-Type': 'application/json',
		},
		signal: timeoutController.signal,
	})
		.then((response) => {
			return response.json();
		})
		.then(async (json) => {
			sendResponse(json);
		})
		.catch((err) => {
			if (timeoutController.signal.aborted) {
				sendResponse({
					Error: {
						'': `Error`,
					},
				});
				return;
			}
			sendResponse({ Error: { '': err.toString() } });
		});
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	chrome.storage.sync.get({ gTranslateKey: '' }, (items) => {
		const gTranslateKey = items.gTranslateKey || '';
		fetchResponse(gTranslateKey, request.string, sendResponse);
	});
	return true;
});
