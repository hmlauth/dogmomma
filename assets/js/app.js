$(document).ready(() => {
    
    // Scrollspy
    $('body').scrollspy({ target: '#navbar-link' });

    $('#submit').on('click', () => {
        event.preventDefault();
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();
        let animalName = $('#animal-name').val().trim();
        let message = $('#message').val().trim();

        let contactMessage = {
            name, 
            email, 
            phone, 
            animalName, 
            message
        };

        console.log(contactMessage);

    })

})
