// Loaded synchronously in <head> so the theme applies before first paint.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    var order = ["light", "sepia", "dark"];
    btn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = order[(order.indexOf(current) + 1) % order.length];
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
})();
