  // Language switcher: determine current language from first path segment (no fragile regex)
  document.addEventListener('DOMContentLoaded', function () {
    var sel = document.getElementById('lang-switcher');
    if (!sel) return;
    var path = window.location.pathname || '/';
    // Remove trailing slash (except for root) to normalize
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    var firstSegment = path.split('/')[1] || '';
    var lang = (firstSegment === 'nl' || firstSegment === 'ru') ? firstSegment : 'en';
    sel.value = (lang === 'en') ? '/' : '/' + lang;
    sel.addEventListener('change', function () {
      var hash = window.location.hash || '';
      window.location.href = this.value + hash;
    });
  });