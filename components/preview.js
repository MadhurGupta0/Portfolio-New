(function () {
  var key = 'mg-preview-theme';
  var root = document.documentElement;
  var requested = new URL(location.href).searchParams.get('theme');
  var saved;
  try { saved = localStorage.getItem(key); } catch (_) {}
  var theme = requested === 'light' || requested === 'dark' ? requested : saved;
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function apply(next) {
    root.setAttribute('data-theme', next);
    root.style.colorScheme = next;
    try { localStorage.setItem(key, next); } catch (_) {}
    var current = new URL(location.href);
    current.searchParams.set('theme', next);
    try { history.replaceState(null, '', current.href); } catch (_) {}
  }
  apply(theme);
  new MutationObserver(function () {
    var next = root.getAttribute('data-theme');
    if ((next === 'light' || next === 'dark') && next !== theme) {
      theme = next;
      apply(next);
    }
  }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  // File URLs may have separate storage per page, so carry the choice in navigation too.
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, location.href);
    if (url.protocol !== location.protocol || url.host !== location.host || !url.pathname.endsWith('.html')) return;
    url.searchParams.set('theme', root.getAttribute('data-theme'));
    link.href = url.href;
  }, true);
})();
