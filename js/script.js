$(document).ready(function () {
  //Hide our extra section
  document.getElementById('hide-logo').classList.add('hide-section');
  document.getElementById('work-content-second').classList.add('hide-section');

  //set up smooth scroll
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
  //Javascript for our top button

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const topButton = document.getElementById('top-button');
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  };
});

//Expand portfolio section
$('#work-view-more').on('click', function (event) {
  const section = document.getElementById('work-content-second');
  if (section.classList.contains('hide-section')) {
    //Show section
    section.classList.remove('hide-section');
    document.getElementById('show-logo').classList.add('hide-section');
    document.getElementById('hide-logo').classList.remove('hide-section');
  } else {
    section.classList.add('hide-section');
    document.getElementById('hide-logo').classList.add('hide-section');
    document.getElementById('show-logo').classList.remove('hide-section');
  }
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

sr.reveal('#about-content', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
});

sr.reveal('#about-content', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
});

sr.reveal('#profile-skills', {
  duration: 700,
  origin: 'bottom',
  distance: '70px',
});

sr.reveal('#work-content', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
});

sr.reveal('.work-content-inner', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
});
