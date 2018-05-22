//Triggers
$(document).ready(function () {
    $('main').hide();
    $('#nav-bar').show();
    $('#landing-screen').show();
    $('#footer-container').show();
    //login button on landing screen(hero)
    $('#hero-login-button-js').on('click', function (event) {
        event.preventDefault();
        alert("login button clicked");
    });

    //Login button at Nav bar
    $('#navbar-login-js').on('click', function (event) {
        event.preventDefault();
        alert("login  clicked - navbar");
    });

    //Login button at Login form
    $('#login-button-js').on('click', function (event) {
        event.preventDefault();
        alert("login  clicked - login form");
    });

    //Signup button at signup form
    $('#signup-button-js').on('click', function (event) {
        event.preventDefault();
        alert("signup  clicked - signup form");
    });

    //login button at signup form
    $('#singup-screen-login-button-js').on('click', function (event) {
        event.preventDefault();
        alert("login  clicked - signup form");
    });

    //user dashboard - add habit button
    $('#add-habit-button-js').on('click', function (event) {
        event.preventDefault();
        alert("add habit button clicked");
    });

    //habit container - add notes
    $('#edit-notes-js').on('click', function (event) {
        event.preventDefault();
        alert("edit habit notes icon clicked");
    });

    //habit container - add milestones
    $('#edit-milestones-js').on('click', function (event) {
        event.preventDefault();
        alert("edit habit milestones icon clicked");
    });

    //habit container - checkin
    $('#checkin-habit-js').on('click', function (event) {
        event.preventDefault();
        alert("habit checkin icon clicked");
    });

    //habit container - edit habit
    $('#edit-habit-js').on('click', function (event) {
        event.preventDefault();
        alert("habit edit icon clicked");
    });

    ////habit container - delete habit
    $('#delete-habit-js').on('click', function (event) {
        event.preventDefault();
        alert("habit delete icon clicked");
    });

    //habit edit form done and cancel button

    //Add milestone item button

    //Can button at notes

});

// Signup button on langing screen(hero)
$(document).on('click', '#hero-signup-button-js', function (event) {
    alert("signup button clicked");
    event.preventDefault();
    $('main').hide();
    $('#nav-bar').show();
    $('#signup-screen').show();
    $('#footer-container').show();

});
