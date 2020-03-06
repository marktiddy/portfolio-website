"use strict";
function hideSuccess() {
  $("#sent-message")
    .fadeOut()
    .hide();
}
function inputValidation(i) {
  return $("#input-" + i).val()
    ? ($("#" + i + "-error")
        .hide()
        .fadeOut(),
      !0)
    : ($("#" + i + "-error")
        .fadeIn()
        .show(),
      !1);
}
$(document).ready(function() {
  $("a").on("click", function(i) {
    if ("" !== this.hash) {
      i.preventDefault();
      var t = this.hash;
      $("html, body").animate(
        { scrollTop: $(t).offset().top },
        800,
        function() {
          window.location.hash = t;
        }
      );
    }
  }),
    $(".navigation-list__item").click(function(i) {
      $(".navigation-list__item").removeClass("navigation-list__item--active"),
        $(this).hasClass("navigation-list__item--active")
          ? $(this).removeClass("navigation-list__item--active")
          : $(this).addClass("navigation-list__item--active");
    });
}),
  $("#top").waypoint(
    function(i) {
      $(".navigation-list__item").removeClass("navigation-list__item--active"),
        $("#home-button").addClass("navigation-list__item--active");
    },
    { offset: "-20%" }
  ),
  $("#about").waypoint(function(i) {
    $(".navigation-list__item").removeClass("navigation-list__item--active"),
      $("#about-button").addClass("navigation-list__item--active");
  }),
  $("#portfolio").waypoint(function(i) {
    $(".navigation-list__item").removeClass("navigation-list__item--active"),
      $("#portfolio-button").addClass("navigation-list__item--active");
  }),
  $("#contact").waypoint(
    function(i) {
      $(".navigation-list__item").removeClass("navigation-list__item--active"),
        $("#contact-button").addClass("navigation-list__item--active");
    },
    { offset: "45%" }
  ),
  $("#input-submit").on("click", function(i) {
    if (
      (i.preventDefault(),
      inputValidation("name"),
      inputValidation("email"),
      inputValidation("message"),
      inputValidation("name") &&
        inputValidation("email") &&
        inputValidation("message"))
    ) {
      var t = $("#input-email"),
        a = $("#input-message"),
        e = $("#input-name");
      Email.send({
        SecureToken: "90be18cd-f4fa-4f3c-9c95-ff4639bf9673",
        To: "hello@marktiddy.co.uk",
        From: "" + t[0].value,
        Subject: "Portfolio email from " + e[0].value,
        Body: "" + a[0].value
      }).then(
        $("#sent-message")
          .fadeIn()
          .show(),
        (t[0].value = ""),
        (a[0].value = ""),
        (e[0].value = ""),
        setTimeout(hideSuccess, 4e3)
      );
    }
  });
var isMenuVisible = !1;
function mobileMenu() {
  var i = $(".navigation-list__item"),
    t = $("#mobile-bars");
  isMenuVisible
    ? (i.fadeOut().hide(), (isMenuVisible = !1), t.show())
    : (i.fadeIn().show(), (isMenuVisible = !0), t.show());
}
(window.sr = ScrollReveal({ reset: !0 })),
  sr.reveal(".header--container", {
    duration: 700,
    origin: "bottom",
    distance: "150px"
  }),
  sr.reveal("#about", { duration: 900, origin: "bottom", distance: "50px" }),
  sr.reveal(".projects-title", {
    duration: 500,
    origin: "bottom",
    distance: "50px"
  }),
  sr.reveal(".animate-1", {
    duration: 600,
    origin: "bottom",
    distance: "50px"
  }),
  sr.reveal(".animate-2", {
    duration: 500,
    origin: "bottom",
    distance: "120px"
  }),
  sr.reveal("#contact", { duration: 300, origin: "bottom", distance: "150px" }),
  sr.reveal(".cf", { duration: 600, origin: "bottom", distance: "75px" }),
  sr.reveal(".contact-info", {
    duration: 600,
    origin: "bottom",
    distance: "75px"
  }),
  sr.reveal(".page-footer", {
    duration: 500,
    origin: "bottom",
    distance: "150px"
  }),
  sr.reveal(".social-media", {
    duration: 600,
    origin: "bottom",
    distance: "75px"
  });
