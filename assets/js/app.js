// TODO: Create validate input function, not just email
// Confirm if input in name field - indicate required in HTML
// Confirm if phone number actually a number - indicate required in HTML
// Animal name and message not required
// TODO: Apply roll effect instead of jumping to section
// TODO: When scolled, show heading of section
// TODO: Security of email functionality and form
// TODO: Add thank you message 'Megan will be in contact within 24 hours'

let errorMessage = document.querySelector('#email-error-message');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let phoneInput = document.querySelector('#phone');
let animalNameInput = document.querySelector('#animal-name');
let messageInput = document.querySelector('#message');
let submitButton = document.querySelector('#submit');

const validateEmail = email => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

window.addEventListener('DOMContentLoaded', () => {
    
    // Scrollspy
    $('body').scrollspy({ target: '#navbar-link' });

    submitButton.addEventListener('click', async () => {
        event.preventDefault();
        
        email = emailInput.value.trim();

        if (validateEmail(email)) {
            
            // grab inputs
            name = nameInput.value.trim();
            
            phone = phoneInput.value.trim();
            animalName = animalNameInput.value.trim();
            message = messageInput.value.trim();

            // clear from values
            errorMessage.innerHTML = '';
            nameInput.value = '';
            emailInput.value = '';
            animalNameInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';

            // package up inputs and send to server
            let contactMessage = {
                name, 
                email, 
                phone, 
                animalName, 
                message
            };

            // HTTP post request to express server 
            $.post('http://localhost:3001/api/contact', contactMessage)
            .then(res => console.log(response))
            .catch(err => console.log(err))
    
        } else {
            errorMessage.setAttribute("style", "color: red");
            errorMessage.innerHTML = 'Please enter valid email';
        }
   
        });

            

    });
