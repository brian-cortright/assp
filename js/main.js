/**
 * Action Sports Safety Project — Main Script
 * Handles navigation, mobile drawer (with focus trap), donation form validation.
 */

(function () {
  'use strict';

  // =====================
  // NAV: scroll behavior
  // =====================
  const nav  = document.getElementById('site-nav');
  const hero = document.querySelector('.hero');

  const navObserver = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('nav--scrolled', !entry.isIntersecting),
    { threshold: 0, rootMargin: '-56px 0px 0px 0px' }
  );
  if (hero) navObserver.observe(hero);

  // =====================
  // MOBILE NAV (with focus trap)
  // =====================
  const burger      = document.getElementById('nav-burger');
  const drawer      = document.getElementById('nav-drawer');
  const drawerLinks = drawer.querySelectorAll('a');

  function getFocusableDrawerElements() {
    return Array.from(drawer.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openDrawer() {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close navigation menu');
    drawer.classList.add('is-open');
    drawer.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    if (drawerLinks[0]) drawerLinks[0].focus();
  }

  function closeDrawer() {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open navigation menu');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    burger.focus();
  }

  burger.addEventListener('click', function () {
    burger.getAttribute('aria-expanded') === 'true' ? closeDrawer() : openDrawer();
  });

  drawerLinks.forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // Focus trap: cycle through drawer links when open
  document.addEventListener('keydown', function (e) {
    if (!drawer.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeDrawer();
      return;
    }

    if (e.key === 'Tab') {
      var focusable = getFocusableDrawerElements();
      // Include the burger button in the trap
      focusable.unshift(burger);
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  // =====================
  // CUSTOM AMOUNT TOGGLE
  // =====================
  var amountRadios = document.querySelectorAll('input[name="amount"]');
  var customWrap   = document.getElementById('custom-wrap');
  var customInput  = document.getElementById('custom-amount');

  amountRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      var show = radio.value === 'custom' && radio.checked;
      customWrap.style.display = show ? 'block' : 'none';
      customWrap.setAttribute('aria-hidden', show ? 'false' : 'true');
      if (show) setTimeout(function () { customInput.focus(); }, 50);
    });
  });

  // =====================
  // FORM VALIDATION
  // =====================
  var form        = document.getElementById('donation-form');
  var formSuccess = document.getElementById('form-success');
  var submitBtn   = document.getElementById('submit-btn');
  var submitLabel = document.getElementById('submit-label');

  var nameInput   = document.getElementById('donor-name');
  var nameError   = document.getElementById('name-error');
  var emailInput  = document.getElementById('donor-email');
  var emailError  = document.getElementById('email-error');
  var customError = document.getElementById('custom-error');
  var emailRe     = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showErr(input, errorEl, msg) {
    input.setAttribute('aria-invalid', 'true');
    errorEl.textContent = msg;
    errorEl.classList.add('is-visible');
  }

  function clearErr(input, errorEl) {
    input.removeAttribute('aria-invalid');
    errorEl.textContent = '';
    errorEl.classList.remove('is-visible');
  }

  // Blur validation
  nameInput.addEventListener('blur', function () {
    nameInput.value.trim()
      ? clearErr(nameInput, nameError)
      : showErr(nameInput, nameError, 'Please enter your full name.');
  });
  nameInput.addEventListener('input', function () {
    if (nameInput.value.trim()) clearErr(nameInput, nameError);
  });

  emailInput.addEventListener('blur', function () {
    if (!emailInput.value.trim()) {
      showErr(emailInput, emailError, 'Please enter your email address.');
    } else if (!emailRe.test(emailInput.value)) {
      showErr(emailInput, emailError, 'Email needs to include an @ symbol and a domain (e.g., you@example.com).');
    } else {
      clearErr(emailInput, emailError);
    }
  });
  emailInput.addEventListener('input', function () {
    if (emailRe.test(emailInput.value)) clearErr(emailInput, emailError);
  });

  customInput.addEventListener('blur', function () {
    var checked = document.querySelector('input[name="amount"]:checked');
    if (!checked || checked.value !== 'custom') return;
    var val = parseFloat(customInput.value);
    (!customInput.value || isNaN(val) || val < 1)
      ? showErr(customInput, customError, 'Please enter a valid amount (minimum $1).')
      : clearErr(customInput, customError);
  });

  // Submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    if (!nameInput.value.trim()) {
      showErr(nameInput, nameError, 'Please enter your full name.');
      valid = false;
    }
    if (!emailInput.value.trim()) {
      showErr(emailInput, emailError, 'Please enter your email address.');
      valid = false;
    } else if (!emailRe.test(emailInput.value)) {
      showErr(emailInput, emailError, 'Email needs to include an @ symbol and a domain (e.g., you@example.com).');
      valid = false;
    }

    var selectedRadio = document.querySelector('input[name="amount"]:checked');
    if (selectedRadio && selectedRadio.value === 'custom') {
      var val = parseFloat(customInput.value);
      if (!customInput.value || isNaN(val) || val < 1) {
        showErr(customInput, customError, 'Please enter a valid amount (minimum $1).');
        valid = false;
      }
    }

    if (!valid) {
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitLabel.textContent = 'Sending\u2026';

    // Simulate async submit (replace with real endpoint integration)
    setTimeout(function () {
      form.style.display = 'none';
      formSuccess.classList.add('is-visible');
      formSuccess.focus();
    }, 1100);
  });

  // =====================
  // COPYRIGHT YEAR
  // =====================
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
