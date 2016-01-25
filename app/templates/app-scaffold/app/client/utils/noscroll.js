
/**
 * Prevent body scroll on mobile
 */

var defaultPrevent = function (e) {
    e.preventDefault();
};

document.body.parentElement.addEventListener('touchmove', defaultPrevent);
document.body.addEventListener('touchmove', defaultPrevent);
