//JQuery Smooth Scrolling

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  //some code for the menu classes
  $(".navigation-list__item").click(function(e) {
    var listOfItems = $(".navigation-list__item");
    listOfItems.removeClass("navigation-list__item--active");
    if ($(this).hasClass("navigation-list__item--active")) {
      $(this).removeClass("navigation-list__item--active");
    } else {
      $(this).addClass("navigation-list__item--active");
    }
  });
});

//Code to update menu classes as we scroll
$("#top").waypoint(
  function(direction) {
    $(".navigation-list__item").removeClass("navigation-list__item--active");
    $("#home-button").addClass("navigation-list__item--active");
  },
  {
    offset: "-20%"
  }
);

$("#about").waypoint(function(direction) {
  $(".navigation-list__item").removeClass("navigation-list__item--active");
  $("#about-button").addClass("navigation-list__item--active");
});

$("#portfolio").waypoint(function(direction) {
  $(".navigation-list__item").removeClass("navigation-list__item--active");
  $("#portfolio-button").addClass("navigation-list__item--active");
});

$("#contact").waypoint(
  function(direction) {
    $(".navigation-list__item").removeClass("navigation-list__item--active");
    $("#contact-button").addClass("navigation-list__item--active");
  },
  {
    offset: "45%"
  }
);

//form Validation

$("#input-submit").on("click", function(event) {
  event.preventDefault();

  //Validation

  inputValidation("name");
  inputValidation("email");
  inputValidation("message");

  if (
    inputValidation("name") &&
    inputValidation("email") &&
    inputValidation("message")
  ) {
    let email = $("#input-email");
    let message = $("#input-message");
    let name = $("#input-name");

    Email.send({
      SecureToken: "90be18cd-f4fa-4f3c-9c95-ff4639bf9673",
      To: "hello@marktiddy.co.uk",
      From: `${email[0].value}`,
      Subject: `Portfolio email from ${name[0].value}`,
      Body: `${message[0].value}`
    }).then(
      $("#sent-message")
        .fadeIn()
        .show(),

      (email[0].value = ""),
      (message[0].value = ""),
      (name[0].value = ""),
      setTimeout(hideSuccess, 4000)
    );
  }
});

//Hide sucess
function hideSuccess() {
  $("#sent-message")
    .fadeOut()
    .hide();
}

//Function to validate
function inputValidation(field) {
  if ($(`#input-${field}`).val()) {
    $(`#${field}-error`)
      .hide()
      .fadeOut();
    return true;
  } else {
    $(`#${field}-error`)
      .fadeIn()
      .show();
    return false;
  }
}

//Mobile menu scripts
//global variable to keep track of showing
var isMenuVisible = false;

//mobile menu function
function mobileMenu() {
  var x = $(".navigation-list__item");
  var bars = $("#mobile-bars");
  if (isMenuVisible) {
    x.fadeOut().hide();
    isMenuVisible = false;
    bars.show();
  } else {
    x.fadeIn().show();
    isMenuVisible = true;
    bars.show();
  }
}
