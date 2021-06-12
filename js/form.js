(function () {
  let $submitButton = document.querySelector ('.submit-btn');
  let $firstName = document.querySelector ('[name="first-name"]');
  let $phone = document.querySelector ('[name="phone"]');
  let $message = document.querySelector ('[name="message"]');

  $submitButton.addEventListener ('click', function (e) {
    e.preventDefault ();

    [$firstName, $phone, $message].forEach (function ($e) {
      if (!$e.value) {
        $e.closest ('div').classList.add ('has-error');
      } else {
        $e.closest ('div').classList.remove ('has-error');
      }
    });
  });
}) ();
