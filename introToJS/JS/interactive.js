<<<<<<< HEAD
//reg form code
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let message = document.getElementById('message');

  if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match!';
      return;
  }

  message.textContent = 'Registration successful!';
  message.style.color = 'green';

  // Here you can add code to send the form data to the server using AJAX or fetch API
});


//course one codes
//Console grp codes
=======
//reg form code
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let message = document.getElementById('message');

  if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match!';
      return;
  }

  message.textContent = 'Registration successful!';
  message.style.color = 'green';

  // Here you can add code to send the form data to the server using AJAX or fetch API
});



//Console grp codes
>>>>>>> 3d9e5590fc3259346636717976ebca905e211023
for (var i = 0; i < 10; i++) {
    console.log(i);
  }


  document.getElementsByTagName("h1")[0].style.color = "#ff0000";



  //EventCodes
  document.body.addEventListener('click',function() {
    var myParent = document.getElementByTagName("h1")[0];
    var myImage = document.createElement("img");
    myImage.src ='https://thecatapi.com/api/images/get?format=src&type=gif';
    myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});

//DataTypes
/*
 * Programming Quiz: First Expression (2-1)
 * Write an expression that uses at least three, distinct, arithmetic operators
 * to log the number 42 to the console.
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print the value `42`
 * 2. You should use at least 3 distinct operators. (`+`, `-`, `*`, `/`, or `%`)
 * 3. Your code should not be empty
 */


// this expression equals 4, change it to equal 42
console.log(1 + 5 - 2);
