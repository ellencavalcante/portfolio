(function () {
  "use strict";

  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var STORAGE_KEY = "ec-theme";

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentPreference() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  applyTheme(currentPreference());

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var active = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
      var next = active === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage unavailable, theme still applies for this view */
      }
    });
  }

  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var CASE_PASSWORD = "gameboard";
  var ACCESS_KEY = "ec-case-access";

  var gatedWrap = document.getElementById("case-gated-wrap");
  var gate = document.getElementById("case-gate");
  var gateForm = document.getElementById("case-gate-form");
  var gateInput = document.getElementById("case-gate-input");
  var gateError = document.getElementById("case-gate-error");

  function hasStoredAccess() {
    try {
      return localStorage.getItem(ACCESS_KEY) === "granted";
    } catch (e) {
      return false;
    }
  }

  function unlockCase() {
    if (gatedWrap) {
      gatedWrap.classList.remove("is-locked");
      gatedWrap.classList.add("is-unlocked");
    }
    if (gate) {
      gate.classList.add("is-hidden");
    }
  }

  if (gatedWrap && gate && gateForm) {
    if (hasStoredAccess()) {
      unlockCase();
    }

    gateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = gateInput ? gateInput.value.trim().toLowerCase() : "";

      if (value === CASE_PASSWORD) {
        try {
          localStorage.setItem(ACCESS_KEY, "granted");
        } catch (err) {
          /* storage unavailable, access still granted for this view */
        }
        if (gateError) gateError.textContent = "";
        unlockCase();
      } else if (gateError) {
        gateError.textContent = "Incorrect password. Please try again.";
        if (gateInput) {
          gateInput.value = "";
          gateInput.focus();
        }
      }
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
