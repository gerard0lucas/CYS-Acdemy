/**
 * Course curriculum accordion – vanilla JS, no jQuery.
 * Run on DOMContentLoaded so it works regardless of other script load order.
 */
(function() {
    function init() {
        document.addEventListener('click', function(e) {
            var t = e.target;
            var header = null;
            while (t && t !== document.body) {
                if (t.classList && t.classList.contains('curriculum-item-header')) {
                    header = t;
                    break;
                }
                t = t.parentNode;
            }
            if (!header) return;
            var item = header.parentNode;
            while (item && (!item.classList || !item.classList.contains('curriculum-item'))) {
                item = item.parentNode;
            }
            if (!item) return;
            e.preventDefault();
            var isOpen = item.classList.contains('open');
            var all = document.querySelectorAll('.curriculum-item');
            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove('open');
                var h = all[i].querySelector('.curriculum-item-header');
                if (h) h.setAttribute('aria-expanded', 'false');
            }
            if (!isOpen) {
                item.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
