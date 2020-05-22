//JQuery Smooth Scrolling

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//form Validation

$('#input-submit').on('click', function (event) {
  event.preventDefault();

  //Validation

  inputValidation('name');
  inputValidation('email');
  inputValidation('message');

  if (
    inputValidation('name') &&
    inputValidation('email') &&
    inputValidation('message')
  ) {
    let email = $('#input-email');
    let message = $('#input-message');
    let name = $('#input-name');

    Email.send({
      SecureToken: '90be18cd-f4fa-4f3c-9c95-ff4639bf9673',
      To: 'hello@marktiddy.co.uk',
      From: `${email[0].value}`,
      Subject: `Portfolio email from ${name[0].value}`,
      Body: `${message[0].value}`,
    }).then(
      $('#sent-message').fadeIn().show(),

      (email[0].value = ''),
      (message[0].value = ''),
      (name[0].value = ''),
      setTimeout(hideSuccess, 4000)
    );
  }
});

//Hide sucess
function hideSuccess() {
  $('#sent-message').fadeOut().hide();
}

//Function to validate
function inputValidation(field) {
  if ($(`#input-${field}`).val()) {
    $(`#${field}-error`).hide().fadeOut();
    return true;
  } else {
    $(`#${field}-error`).fadeIn().show();
    return false;
  }
}

//Set up animation

window.sr = ScrollReveal({ reset: true });
sr.reveal('.header--container', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
});

sr.reveal('#about', {
  duration: 900,
  origin: 'bottom',
  distance: '50px',
});

sr.reveal('.projects-title', {
  duration: 500,
  origin: 'bottom',
  distance: '50px',
});

sr.reveal('.animate-1', {
  duration: 600,
  origin: 'bottom',
  distance: '50px',
});

sr.reveal('.animate-2', {
  duration: 500,
  origin: 'bottom',
  distance: '120px',
});

sr.reveal('#contact', {
  duration: 300,
  origin: 'bottom',
  distance: '150px',
});
sr.reveal('.cf', {
  duration: 600,
  origin: 'bottom',
  distance: '75px',
});

sr.reveal('.contact-info', {
  duration: 600,
  origin: 'bottom',
  distance: '75px',
});

sr.reveal('.page-footer', {
  duration: 500,
  origin: 'bottom',
  distance: '150px',
});

sr.reveal('.social-media', {
  duration: 600,
  origin: 'bottom',
  distance: '75px',
});
