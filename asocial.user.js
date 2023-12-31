// ==UserScript==
// @name         Asocial reddit
// @namespace    http://bitfed.net/
// @version      0.0
// @description  A brief description of what your script does.
// @author       bitfed
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide notification count
    function hideNotificationCount() {
        // Select the button with the specific aria-label
        var notificationButton = document.querySelector('button[aria-label="Open notifications inbox"]');

        // If the button is found, try to find the span inside it
        if (notificationButton) {
            var notificationCount = notificationButton.querySelector('span');

            // If the span (notification count) is found, hide it
            if (notificationCount) {
                notificationCount.style.display = 'none';
            }
        }
    }

    // Run the function on script start
    hideNotificationCount();

    // Run the function periodically to keep the count hidden
    // even when new notifications arrive
    setInterval(hideNotificationCount, 1000); // Adjust the interval as needed
})();
