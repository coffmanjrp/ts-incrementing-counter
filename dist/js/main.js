"use strict";
var counters = document.querySelectorAll('.counter');
counters.forEach(function (counter) {
    var element = counter;
    element.innerText = '0';
    var updateCounter = function () {
        var attr = element.getAttribute('data-target');
        var target = +attr;
        var c = +element.innerText;
        var increment = target / 200;
        if (c < target) {
            element.innerText = "".concat(Math.ceil(c + increment));
            setTimeout(updateCounter, 1);
        }
        else {
            element.innerText = target.toString();
        }
    };
    updateCounter();
});
