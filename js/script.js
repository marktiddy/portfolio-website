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
$("#home").waypoint(
  function(direction) {
    $(".navigation-list__item").removeClass("navigation-list__item--active");
    $("#home-button").addClass("navigation-list__item--active");
  },
  {
    offset: "-15%"
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
});

//Function to validate
function inputValidation(field) {
  if ($(`#input-${field}`).val()) {
    $(`#${field}-error`)
      .hide()
      .fadeOut();
  } else {
    $(`#${field}-error`)
      .fadeIn()
      .show();
  }
}

//To write!
