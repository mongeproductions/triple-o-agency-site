(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";

  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- Nav: scrolled state ---------- */
  var navEl = document.getElementById("site-nav");
  var isHome = document.body.getAttribute("data-page") === "home";

  function updateNavState() {
    if (!navEl) return;
    var scrolled = window.scrollY > 40;
    if (scrolled || !isHome) {
      navEl.classList.add("bg-deep-green/95", "backdrop-blur-sm", "shadow-warm-sm");
    } else {
      navEl.classList.remove("bg-deep-green/95", "backdrop-blur-sm", "shadow-warm-sm");
    }
  }
  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("mobile-menu-btn");
  var menuPanel = document.getElementById("mobile-menu");
  var burgerLines = menuBtn ? menuBtn.querySelectorAll("[data-line]") : [];
  var menuOpen = false;

  function setMenu(open) {
    menuOpen = open;
    if (!menuPanel) return;
    menuPanel.classList.toggle("translate-x-full", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (burgerLines.length === 3) {
      burgerLines[0].style.transform = open ? "translateY(6px) rotate(45deg)" : "";
      burgerLines[1].style.opacity = open ? "0" : "1";
      burgerLines[2].style.transform = open ? "translateY(-6px) rotate(-45deg)" : "";
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!menuOpen);
    });
  }

  document.querySelectorAll("#mobile-menu a").forEach(function (a) {
    a.addEventListener("click", function () {
      setMenu(false);
    });
  });

  /* ---------- Mobile accordion (Services submenu) ---------- */
  document.querySelectorAll(".mobile-accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = btn.nextElementSibling;
      var icon = btn.querySelector("svg");
      var isOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";
      panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
      if (icon) icon.style.transform = isOpen ? "" : "rotate(180deg)";
    });
  });

  /* ---------- Scroll reveals ---------- */
  var allRevealTargets = [];
  if (hasGSAP && !prefersReducedMotion) {
    var groups = {};
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      // hero elements animate on load; grid children are animated by the grid-reveal pass below — skip both here to avoid double-tweening the same element
      if (el.closest("[data-hero]") || el.closest("[data-grid-reveal]")) return;
      var key = el.getAttribute("data-reveal-group") || "__section_" + (el.closest("section") ? Array.prototype.indexOf.call(document.querySelectorAll("section"), el.closest("section")) : "0");
      groups[key] = groups[key] || [];
      groups[key].push(el);
    });

    Object.keys(groups).forEach(function (key) {
      var els = groups[key];
      allRevealTargets = allRevealTargets.concat(els);
      gsap.set(els, {
        opacity: 0,
        y: function (i, target) {
          return parseFloat(target.getAttribute("data-reveal-y")) || 20;
        },
      });
      ScrollTrigger.create({
        trigger: els[0],
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(els, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" });
        },
      });
    });

    /* Hero elements animate on load, not scroll */
    var hero = document.querySelector("[data-hero]");
    if (hero) {
      var heroEls = hero.querySelectorAll("[data-reveal]");
      gsap.from(heroEls, {
        opacity: 0,
        y: function (i, target) {
          return parseFloat(target.getAttribute("data-reveal-y")) || 20;
        },
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.15,
      });
    }

    /* Card grid stagger-wave */
    document.querySelectorAll("[data-grid-reveal]").forEach(function (grid) {
      if (!grid.children.length) return;
      allRevealTargets = allRevealTargets.concat(Array.prototype.slice.call(grid.children));
      gsap.set(grid.children, { opacity: 0, y: 24, scale: 0.97 });
      ScrollTrigger.create({
        trigger: grid,
        start: "top 85%",
        once: true,
        onEnter: function () {
          gsap.to(grid.children, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: { each: 0.08, from: "start" },
            ease: "back.out(1.4)",
          });
        },
      });
    });

    /* Subtle parallax on decorative rings */
    document.querySelectorAll("[data-parallax]").forEach(function (el) {
      var speed = parseFloat(el.getAttribute("data-parallax")) || 10;
      gsap.to(el, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          scrub: 0.6,
        },
      });
    });

    /* Stat count-up */
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-count-suffix") || "";
      var obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: function () {
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.round(obj.val) + suffix;
            },
          });
        },
      });
    });

    /* Scroll-scrubbed hero image sequence (canvas draws whichever frame matches
       scroll progress through a pinned section — a lightweight, dependency-free
       stand-in for <video> frame scrubbing, which is unreliable across browsers). */
    var heroCanvas = document.getElementById("hero-scroll-canvas");
    if (heroCanvas && window.ScrollTrigger) {
      (function () {
        var ctx = heroCanvas.getContext("2d");
        var frameCount = parseInt(heroCanvas.getAttribute("data-frame-count"), 10) || 0;
        var framePath = heroCanvas.getAttribute("data-frame-path") || "";
        var images = new Array(frameCount);
        var currentFrame = 0;

        function frameSrc(i) {
          var n = String(i + 1);
          while (n.length < 3) n = "0" + n;
          return framePath + "/frame-" + n + ".jpg";
        }

        function nearestLoaded(index) {
          if (images[index] && images[index].complete) return images[index];
          for (var d = 1; d < frameCount; d++) {
            var lo = index - d,
              hi = index + d;
            if (lo >= 0 && images[lo] && images[lo].complete) return images[lo];
            if (hi < frameCount && images[hi] && images[hi].complete) return images[hi];
          }
          return null;
        }

        function drawFrame(index) {
          index = Math.max(0, Math.min(frameCount - 1, index));
          var img = nearestLoaded(index);
          if (!img) return;
          currentFrame = index;
          var rect = heroCanvas.getBoundingClientRect();
          var cw = rect.width,
            ch = rect.height;
          if (!cw || !ch) return;
          var iw = img.naturalWidth,
            ih = img.naturalHeight;
          var scale = Math.max(cw / iw, ch / ih);
          var dw = iw * scale,
            dh = ih * scale;
          var dx = (cw - dw) / 2,
            dy = (ch - dh) / 2;
          ctx.clearRect(0, 0, cw, ch);
          ctx.drawImage(img, dx, dy, dw, dh);
        }

        function resizeCanvas() {
          var rect = heroCanvas.getBoundingClientRect();
          var dpr = Math.min(window.devicePixelRatio || 1, 2);
          heroCanvas.width = rect.width * dpr;
          heroCanvas.height = rect.height * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          drawFrame(currentFrame);
        }

        for (var i = 0; i < frameCount; i++) {
          (function (idx) {
            var img = new Image();
            img.onload = function () {
              if (idx === 0 && currentFrame === 0) drawFrame(0);
            };
            img.src = frameSrc(idx);
            images[idx] = img;
          })(i);
        }

        window.addEventListener("resize", resizeCanvas, { passive: true });
        resizeCanvas();

        if (!prefersReducedMotion) {
          ScrollTrigger.create({
            trigger: heroCanvas.closest("[data-hero]"),
            start: "top top",
            end: "+=160%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            onUpdate: function (self) {
              drawFrame(Math.round(self.progress * (frameCount - 1)));
            },
          });
        } else {
          drawFrame(frameCount - 1);
        }
      })();
    }

    /* Safety net: content must never stay permanently invisible, no matter what.
       If a reveal target somehow never got triggered (slow connection, thrashed
       scroll, unforeseen edge case), force it visible a few seconds after load. */
    window.addEventListener("load", function () {
      setTimeout(function () {
        allRevealTargets.forEach(function (el) {
          if (parseFloat(getComputedStyle(el).opacity) < 1) {
            gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power1.out" });
          }
        });
      }, 3500);
    });
  } else {
    /* No GSAP or reduced motion: ensure everything is simply visible */
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.style.opacity = "1";
    });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-count-suffix") || "");
    });
  }

  /* ---------- Button press feedback ---------- */
  if (hasGSAP) {
    document.querySelectorAll(".btn, .card").forEach(function (el) {
      el.addEventListener("pointerdown", function () {
        if (!prefersReducedMotion) gsap.to(el, { scale: 0.97, duration: 0.12, ease: "power1.out" });
      });
      ["pointerup", "pointerleave"].forEach(function (evt) {
        el.addEventListener(evt, function () {
          if (!prefersReducedMotion) gsap.to(el, { scale: 1, duration: 0.2, ease: "power1.out" });
        });
      });
    });
  }

  /* ---------- Contact form (Netlify Forms AJAX pattern, with graceful fallback) ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var errorEl = document.getElementById("form-error");
      var btn = form.querySelector("button[type=submit]");
      var originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending...";

      var data = new FormData(form);
      var encoded = new URLSearchParams(data).toString();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Form endpoint not available");
          form.classList.add("hidden");
          if (status) {
            status.classList.remove("hidden");
            if (hasGSAP && !prefersReducedMotion) {
              gsap.from(status, { opacity: 0, y: 12, duration: 0.5, ease: "power2.out" });
            }
          }
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = originalLabel;
          if (errorEl) errorEl.classList.remove("hidden");
        });
    });
  }
})();
