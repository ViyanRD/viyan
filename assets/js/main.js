/* Renders content from SITE (data.js) and handles theme, language, menu, dialog and form. */
(function () {
  "use strict";
  var D = SITE, root = document.documentElement;
  var lang = root.lang === "fa" ? "fa" : "en";
  var current = null, opener = null;

  function $(s) { return document.querySelector(s); }
  function L(o) { return o && typeof o === "object" ? o[lang] : o; }
  function U(k) { return D.ui[k][lang]; }
  function h(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function link(href, txt) {
    var a = h("a", "", txt);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }
  function chips(items) {
    var ul = h("ul", "chips");
    items.forEach(function (i) { ul.appendChild(h("li", "", L(i))); });
    return ul;
  }
  function titleParts(m) { return [].concat(m.title).map(L); }
  function memberLinks(m) {
    var out = [];
    if (m.website) out.push(["Website", m.website]);
    if (m.github) out.push(["GitHub", "https://github.com/" + m.github]);
    if (m.linkedin) out.push(["LinkedIn", "https://www.linkedin.com/in/" + m.linkedin]);
    if (m.email) out.push([m.email, "mailto:" + m.email]);
    return out;
  }

  /* Language and static strings */
  function applyLang() {
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = U(n.getAttribute("data-i18n")); });
    var lb = $("#lang-btn");
    lb.textContent = lang === "fa" ? "EN" : "فا";
    lb.setAttribute("aria-label", lang === "fa" ? "English" : "فارسی");
    $("#rd-close").setAttribute("aria-label", U("close"));
    var f = $("#focus"); f.replaceChildren();
    D.team.focus.forEach(function (x) { f.appendChild(h("li", "", L(x))); });
    renderProjects(); renderMembers(); renderContact(); renderFooter();
    if (current && $("#resume-dialog").open) fillResume(current);
  }

  /* Team projects */
  function renderProjects() {
    var box = $("#project-list"); box.replaceChildren();
    D.projects.forEach(function (p) {
      var c = h("article", "proj" + (p.status === "active" ? " proj-active" : ""));
      c.appendChild(h("p", "status", U(p.status === "active" ? "st_active" : "st_done")));
      c.appendChild(h("h3", "", L(p.name)));
      c.appendChild(h("p", "bio", L(p.desc)));
      c.appendChild(chips(p.tags));
      box.appendChild(c);
    });
  }

  /* Members */
  function renderMembers() {
    var grid = $("#member-grid"); grid.replaceChildren();
    D.members.forEach(function (m) {
      var c = h("article", "card");
      if (m.photo) {
        var im = h("img", "avatar avatar-img");
        im.src = m.photo; im.alt = L(m.name); im.width = 72; im.height = 72; im.loading = "lazy";
        c.appendChild(im);
      } else { c.appendChild(h("div", "avatar", m.initials)); }
      c.appendChild(h("h3", "", L(m.name)));
      var role = h("p", "role");
      titleParts(m).forEach(function (x) { role.appendChild(h("span", "", x)); });
      c.appendChild(role);
      c.appendChild(h("p", "bio", L(m.bio)));
      c.appendChild(chips(m.core));
      var links = h("div", "links");
      memberLinks(m).forEach(function (l) { links.appendChild(link(l[1], l[0])); });
      c.appendChild(links);
      var b = h("button", "btn", U("view_resume"));
      b.type = "button";
      b.setAttribute("aria-haspopup", "dialog");
      b.addEventListener("click", function () { opener = b; current = m; fillResume(m); $("#resume-dialog").showModal(); });
      c.appendChild(b);
      grid.appendChild(c);
    });
  }

  /* Resume dialog */
  function sec(title, node) {
    var s = h("section", "rd-sec");
    s.appendChild(h("h3", "", title)); s.appendChild(node);
    return s;
  }
  function items(list) {
    var box = h("div");
    list.forEach(function (e) {
      var d = h("div", "item");
      d.appendChild(h("h4", "", L(e.role || e.name)));
      var meta = [e.org && L(e.org), e.period && L(e.period)].filter(Boolean).join(" | ");
      if (meta) d.appendChild(h("p", "meta", meta));
      if (e.desc) d.appendChild(h("p", "meta", L(e.desc)));
      if (e.points && e.points.length) {
        var ul = h("ul");
        e.points.forEach(function (p) { ul.appendChild(h("li", "", L(p))); });
        d.appendChild(ul);
      }
      box.appendChild(d);
    });
    return box;
  }
  function fillResume(m) {
    var r = m.resume, body = $("#rd-body");
    $("#rd-title").textContent = L(m.name);
    $("#rd-sub").textContent = titleParts(m).join(" | ");
    body.replaceChildren();
    body.appendChild(sec(U("summary"), h("p", "muted", L(m.bio))));
    var cl = h("div", "links");
    memberLinks(m).forEach(function (l) { cl.appendChild(link(l[1], l[0])); });
    body.appendChild(sec(U("contact"), cl));
    if (r.experience && r.experience.length) body.appendChild(sec(U("experience"), items(r.experience)));
    if (r.education && r.education.length) body.appendChild(sec(U("education"), items(r.education)));
    if (r.projects && r.projects.length) body.appendChild(sec(U("projects"), items(r.projects)));
    if (r.skills && r.skills.length) {
      var wrap = h("div");
      r.skills.forEach(function (g) { wrap.appendChild(h("p", "meta muted", L(g.label))); wrap.appendChild(chips(g.items)); });
      body.appendChild(sec(U("skills"), wrap));
    }
    (r.extras || []).forEach(function (x) {
      var ul = h("ul", "meta");
      x.items.forEach(function (i) { ul.appendChild(h("li", "", L(i))); });
      ul.style.cssText = "list-style:disc;padding-inline-start:18px";
      body.appendChild(sec(L(x.title), ul));
    });
  }
  var dlg = $("#resume-dialog");
  $("#rd-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); }); /* click on backdrop */
  dlg.addEventListener("close", function () { if (opener) opener.focus(); }); /* Esc closes natively; restore focus */

  /* Contact and footer */
  function renderContact() {
    var list = $("#contact-list"); list.replaceChildren();
    D.members.forEach(function (m) {
      var d = h("div");
      d.appendChild(h("strong", "", L(m.name)));
      memberLinks(m).forEach(function (l) { d.appendChild(link(l[1], l[0])); });
      list.appendChild(d);
    });
    $("#contact-form").hidden = !D.team.email;
  }
  function renderFooter() {
    var ul = $("#foot-links"); ul.replaceChildren();
    D.team.socials.forEach(function (s) { var li = h("li"); li.appendChild(link(s.url, s.label)); ul.appendChild(li); });
  }
  $("#contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, subject = "Message from " + f.name.value;
    var body = f.msg.value + "\n\n" + f.name.value + " <" + f.email.value + ">";
    location.href = "mailto:" + D.team.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  /* Theme, language, menu */
  $("#theme-btn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  $("#lang-btn").addEventListener("click", function () {
    lang = lang === "fa" ? "en" : "fa";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  });
  var menu = $("#menu-btn"), nav = $("#nav");
  menu.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
  });

  /* Scroll reveal for section containers only */
  var rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    rev.forEach(function (n) { io.observe(n); });
  } else { rev.forEach(function (n) { n.classList.add("in"); }); }

  /* Cursor-reactive glow on hero (subtle electric feel, no neon) */
  var heroGrid = document.querySelector(".hero-grid");
  if (heroGrid && window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var raf = null;
    heroGrid.addEventListener("pointermove", function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var r = heroGrid.getBoundingClientRect();
        var mx = ((e.clientX - r.left) / r.width) * 100;
        var my = ((e.clientY - r.top) / r.height) * 100;
        heroGrid.style.setProperty("--mx", mx.toFixed(2) + "%");
        heroGrid.style.setProperty("--my", my.toFixed(2) + "%");
        raf = null;
      });
    }, { passive: true });
  }

  $("#year").textContent = new Date().getFullYear();
  applyLang();
})();
