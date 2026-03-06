(function() {
    function getBaseUrl() {
        var href = window.location.href;
        var lastSlash = href.lastIndexOf('/');
        return lastSlash >= 0 ? href.substring(0, lastSlash + 1) : href + '/';
    }
    function getHeaderUrl() {
        return getBaseUrl() + 'includes/header.html';
    }
    function getFooterUrl() {
        return getBaseUrl() + 'includes/footer.html';
    }
    var headerEl = document.getElementById('header-include');
    var footerEl = document.getElementById('footer-include');

    if (headerEl) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', getHeaderUrl(), false);
            xhr.send();
            if (xhr.status === 200 && xhr.responseText && xhr.responseText.length > 100) {
                headerEl.outerHTML = xhr.responseText;
                var script = document.getElementById('header-mobile-script');
                if (script) {
                    var s = document.createElement('script');
                    s.textContent = script.textContent;
                    document.body.appendChild(s);
                    script.remove();
                }
            } else {
                headerEl.outerHTML = '<header class="header-section header-section-3" style="display:block;visibility:visible;"><div class="topbar-area"><div class="container"><div class="row"><div class="col-lg-6"><div class="topbar-contact"><a href="tel:+919876543210"><i class="fa fa-phone"></i> +91 98765 43210</a><a href="mailto:info@cysacademy.com" class="margin-left"><i class="fa fa-envelope"></i> info@cysacademy.com</a></div></div><div class="col-lg-6"><div class="topbar-button"><a href="contact.html"><i class="fa fa-sign-in"></i> Enquire Now</a><a href="courses.html" class="margin-left"><i class="fa fa-book"></i> View Courses</a></div></div></div></div></div><div class="menu-area"><div class="container"><div class="row align-items-center"><div class="col-lg-2 col-6"><div class="logo-area"><a href="index.html"><img src="assets/images/logo.png" alt="CYS Academy"></a></div></div><div class="col-lg-10 d-none d-lg-block"><nav><ul class="main-menu"><li><a href="index.html">Home</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="courses.html">Courses</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="contact.html">Get Started</a></li></ul></nav></div></div></div></div></header>';
            }
        } catch (e) {
            headerEl.outerHTML = '<header class="header-section header-section-3" style="display:block;visibility:visible;"><div class="topbar-area"><div class="container"><div class="row"><div class="col-lg-6"><div class="topbar-contact"><a href="tel:+919876543210"><i class="fa fa-phone"></i> +91 98765 43210</a><a href="mailto:info@cysacademy.com" class="margin-left"><i class="fa fa-envelope"></i> info@cysacademy.com</a></div></div><div class="col-lg-6"><div class="topbar-button"><a href="contact.html"><i class="fa fa-sign-in"></i> Enquire Now</a><a href="courses.html" class="margin-left"><i class="fa fa-book"></i> View Courses</a></div></div></div></div></div><div class="menu-area"><div class="container"><div class="row align-items-center"><div class="col-lg-2 col-6"><div class="logo-area"><a href="index.html"><img src="assets/images/logo.png" alt="CYS Academy"></a></div></div><div class="col-lg-10 d-none d-lg-block"><nav><ul class="main-menu"><li><a href="index.html">Home</a></li><li><a href="aboutus.html">About Us</a></li><li><a href="courses.html">Courses</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="contact.html">Get Started</a></li></ul></nav></div></div></div></div></header>';
        }
    }
    if (footerEl) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', getFooterUrl(), false);
            xhr.send();
            if (xhr.status === 200) footerEl.outerHTML = xhr.responseText;
        } catch (e) { console.warn('Could not load footer:', e); }
    }
})();
