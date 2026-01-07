  // Language switcher: determine current language from first path segment (no fragile regex)
  document.addEventListener('DOMContentLoaded', function () {
    var sel = document.getElementById('lang-switcher');
    if (!sel) return;

    var path = window.location.pathname || '/';
    if (path.length > 1) path = path.replace(/\/+$/, '');

    var firstSegment = path.split('/')[1] || '';
    var lang = (firstSegment === 'nl' || firstSegment === 'ru') ? firstSegment : 'en';
    sel.value = (lang === 'en') ? '/' : '/' + lang;

    sel.addEventListener('change', function () {
      var raw = (this.value || '/').replace(/\/+$/, '');
      var target = (!raw || raw === '/') ? '/' : raw + '/';
      window.location.href = target + (window.location.hash || '');
    });
  });