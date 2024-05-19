
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  

  window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        closeModal(modals[i].id);
      }
    }
  }
  

  var closeButtons = document.getElementsByClassName('close');
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      closeModal(this.parentNode.parentNode.id);
    };
  }
  
  document.getElementById('loginBtn').onclick = function() {
    openModal('loginModal');
  };
  

  document.getElementById('registerBtn').onclick = function() {
    openModal('registerModal');
  };
  


document.getElementById('registerForm').onsubmit = function(event) {
        event.preventDefault(); 
      

        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var address = document.getElementById('address').value;
        var dob = document.getElementById('dob').value;
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var phone = document.getElementById('phone').value;
        var occupation = document.getElementById('occupation').value;
      
        
        if (firstName === '' || lastName === '' || address === '' || dob === '' || email === '' || username === '' || password === '' || phone === '' || occupation === '') {
          alert('Molimo vas da popunite sva polja.');
          return;
        }
      
       
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(emailRegex)) {
          alert('Unesite ispravan format emaila.');
          return;
        }
      
        
        var phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!phone.match(phoneRegex)) {
          alert('Unesite ispravan format telefona (npr. 123-456-7890).');
          return;
        }
      
        
        alert('Registracija uspješna!');
        closeModal('registerModal');
      };
  