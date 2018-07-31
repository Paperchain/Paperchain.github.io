'use strict';

//Mask input
$(".js-field__phone").mask("( 999 ) 999 - 9999");

//Submiting form
var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function (e) {
  submitForm(e, formName);
});

//Send data to mail.php
function submitForm(e, formName) {
  e.preventDefault();
  var name = $(formName + ' .js-field__first-name').val();
  var lastName = $(formName + ' .js-field__last-name').val();
  var email = $(formName + ' .js-field__email').val();
  var phone = $(formName + ' .js-field__phone').val();
  var company = $(formName + ' .js-field__company').val();
  var size = $(formName + ' .radio-btn__radio[name="company-size"]:checked').val();
  
  
  var formData = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
    company: company,
    size: size
  };
  
  $.ajax({
    type: "POST",
    url: 'mail.php',
    data: formData,
    success: function () {
      console.log('success');
      //...
    },
    error: function () {
      console.log('error');
      //...
    }
  });
}