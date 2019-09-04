//* This Validation IIFE module is going to validate the inputs.
const validation = (function() {
  // Regular Expressions are set and used to test the inputs.
  const isEmailValidRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isNameValidRegEx = /^[a-z]{4,}/i;
  const isTitleValidRegEx = /[a-z]{4,}/i;

  const isEmailValid = email => {
    return isEmailValidRegEx.test(email);
  };
  const isNameValid = name => {
    return isNameValidRegEx.test(name);
  };
  const isTitleValid = title => {
    return isTitleValidRegEx.test(title);
  };
  //   This checks the length of the message characters.
  const isMessageValid = message => {
    if (message.length >= 20) {
      return true;
    }
    return false;
  };

  return {
    isEmailValid,
    isMessageValid,
    isNameValid,
    isTitleValid
  };
})();

//* Selects the input and text area inputs using querySelector.
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const title = document.querySelector("#title");

//* The form is validated when the submit button is clicked.
document
  .querySelector("[type='submit']")
  .addEventListener("click", function(event) {
    event.preventDefault(); //Prevents the button from refreshing the page

    //* If validation of email fails, add the warning class to email input and set the display of warning message to inline.
    if (!validation.isEmailValid(email.value)) {
      email.classList.add("warning");
      email.nextElementSibling.style.display = "inline";
    }
    //* If validation of name fails, add the warning class to name input and set the display of warning message to inline.
    if (!validation.isNameValid(name.value)) {
      name.classList.add("warning");
      name.nextElementSibling.style.display = "inline";
    }
    /*
     * If validation of message fails, add the warning class to message text area and set the display of warning
     * message to inline
     */
    if (!validation.isMessageValid(message.value)) {
      message.classList.add("warning");
      message.nextElementSibling.style.display = "inline";
    }
    /*
     *If validation of title fails, add the warning class to title input and set the display of warning
     *message to inline
     */

    if (!validation.isTitleValid(title.value)) {
      title.classList.add("warning");
      title.nextElementSibling.style.display = "inline";
    }
  });

// * Validate name input when it loses focus
name.addEventListener("blur", function() {
  if (validation.isNameValid(name.value)) {
    name.classList.remove("warning");
    name.nextElementSibling.style.display = "none";
  }
});

//* Validate email input when it loses focus
email.addEventListener("blur", function() {
  if (validation.isEmailValid(email.value)) {
    email.classList.remove("warning");
    email.nextElementSibling.style.display = "none";
  }
});

//* Validate title input when it loses focus
title.addEventListener("blur", function() {
  if (validation.isTitleValid(title.value)) {
    title.classList.remove("warning");
    title.nextElementSibling.style.display = "none";
  }
});

//* Validate message input when it loses focus
message.addEventListener("blur", function() {
  if (validation.isMessageValid(message.value)) {
    message.classList.remove("warning");
    message.nextElementSibling.style.display = "none";
  }
});
