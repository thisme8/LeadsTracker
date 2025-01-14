# LeadsTracker

Overview :

This LeadTracker Chrome Extension allows users to easily save and manage important website links or leads directly from their browser. It provides three core features:
-> Save Input Links: Enter any URL into the input box and save it to a list.
-> Save Active Tab URL: Save the current active tab's URL directly by clicking the "Save Tab" button.
-> Clear All Saved Links: Delete all saved links with the "Delete All" button.

The extension stores all saved links in the browser's local storage and presents them in a dynamic list that users can access at any time.this is a google chrome extension designed using Javascript for tracking and managing sales leads and storing them directly wirhin the browser

JavaScript Logic :
-> The extension listens for button clicks, handles saving URLs to localStorage, and renders the saved links dynamically using JavaScript.
-> The active tab URL can be saved by using chrome.tabs.query() to fetch the URL of the current tab.
