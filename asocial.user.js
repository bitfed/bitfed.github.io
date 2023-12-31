// ==UserScript==
// @name         Asocial reddit
// @namespace    http://bitfed.net/
// @version      1.0
// @description  Hides the notification count flag on reddit.
// @author       bitfed
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide notification count
    function hideNotificationCount() {
        var notificationButton = document.querySelector('button[aria-label="Open notifications inbox"]');
        if (notificationButton) {
            var notificationCount = notificationButton.querySelector('span');
            if (notificationCount) {
                notificationCount.style.display = 'none';
            }
        }
    }

    // MutationObserver callback
    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                hideNotificationCount();
            }
        }
    }

    // Create a new MutationObserver instance
    let observer = new MutationObserver(callback);

    // Start observing the entire document for changes in the child elements
    observer.observe(document, { childList: true, subtree: true });

    // Initial run to hide notification count
    hideNotificationCount();
})();
