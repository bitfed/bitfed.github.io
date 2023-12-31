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
            if (notificationCount && notificationCount.style.display !== 'none') {
                notificationCount.style.display = 'none';
            }
        }
    }

    // Function to clean notification count from the page title
    function cleanPageTitle() {
        var newTitle = document.title.replace(/^\(\d+\)\s*/, '');
        if (document.title !== newTitle) {
            document.title = newTitle;
        }
    }

    // MutationObserver callback for changes in the DOM
    function domCallback(mutationsList, observer) {
        hideNotificationCount();
    }

    // MutationObserver callback for changes in the page title
    function titleCallback(mutationsList, observer) {
        cleanPageTitle();
    }

    // Create and observe DOM mutations
    let domObserver = new MutationObserver(domCallback);
    // Observe a more specific part of the DOM if possible
    domObserver.observe(document.body, { childList: true, subtree: true });

    // Create and observe title mutations
    let titleObserver = new MutationObserver(titleCallback);
    titleObserver.observe(document.querySelector('title'), { childList: true });

    // Initial execution
    hideNotificationCount();
    cleanPageTitle();
})();
