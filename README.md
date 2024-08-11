WP.org - Google Translate Browser Extension
===

This browser extension adds a "Translate" button on WordPress.org's Translation system.
It requires a Google Cloud Translation API key. Check [this section](#google-cloud-translation-api-key) on how to get yours.

<p align="center">
  <img width="460" src="https://raw.githubusercontent.com/felipeelia/wporg-gtranslate-ext/trunk/assets/wp-org-ext-translate-button.png">
</p>

# How to Install

1. Go to [chrome://extensions](chrome://extensions)
1. Enable Developer Mode by clicking the toggle switch next to Developer mode
1. Click the Load unpacked button and select the extension `src` directory

# How to update

1. Go to [chrome://extensions](chrome://extensions)
1. Find the extension
1. Click the refresh icon next to the on/off toggle

# Google Cloud Translation API Key

1. Go to https://console.cloud.google.com/
1. Select or add the project you want to use
1. Click on "APIs & Services"
1. Click on "Enable APIs and Services"
1. Search for "Cloud Translation" and click on it. Then click on "Enable"
1. If you don't have it yet, set up Billing. The free quota is quite large, check [this link](https://cloud.google.com/translate/?hl=en#pricing).
1. Back to APIs & Services, click on "Credentials" on the left site
1. Click on "Create Credentials" > API Key
1. Copy the API Key created
1. On your browser's extensions, right-click on the "W" (this extension icon) and then select "Options"
1. Paste the API Key in the screen that opens up and click "Save".

Although completely unrelated to this project, [this link](https://crmsupport.freshworks.com/support/solutions/articles/50000004404-google-translate-key) contains the steps to generate an API key.