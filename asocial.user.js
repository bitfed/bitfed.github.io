// ==UserScript==
// @name         Asocial reddit
// @namespace    http://bitfed.net/
// @version      1.0
// @description  Hides notification count on Reddit and from the page title.
// @author       bitfed
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide notification count in the Reddit UI
    function hideNotificationCount() {
        var notificationButton = document.querySelector('button[aria-label="Open notifications inbox"]');
        if (notificationButton) {
            var notificationCount = notificationButton.querySelector('span');
            if (notificationCount) {
                notificationCount.style.display = 'none';
            }
        }
    }

    // Function to clean notification count from the page title
    function cleanPageTitle() {
        document.title = document.title.replace(/^\(\d+\)\s*/, '');
    }

    // MutationObserver callback for changes in the DOM
    function domCallback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                hideNotificationCount();
            }
        }
    }

    // MutationObserver callback for changes in the page title
    function titleCallback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            cleanPageTitle();
        }
    }

    // Create and observe DOM mutations
    let domObserver = new MutationObserver(domCallback);
    domObserver.observe(document, { childList: true, subtree: true });

    // Create and observe title mutations
    let titleObserver = new MutationObserver(titleCallback);
    titleObserver.observe(document.querySelector('title'), { childList: true });

    // Initial execution
    hideNotificationCount();
    cleanPageTitle();
})();
