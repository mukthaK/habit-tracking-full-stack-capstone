//Triggers
$(document).ready(function () {
    $('main').hide();
    $('#nav-bar').show();
    $('#landing-screen').show();
    $('#footer-container').show();


    //habit container - checkin
    $('#checkin-habit-js').on('click', function (event) {
        event.preventDefault();
        alert("habit checkin icon clicked");
    });





    //habit edit form done and cancel button

    //Add milestone item button

    //Can button at notes

});

// Signup button on landing screen(hero)
$(document).on('click', '#hero-signup-button-js', function (event) {
    //    alert("signup button clicked");
    event.preventDefault();
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#signup-screen').show();
    $('#footer-container').show();

});
//login button on landing screen(hero)
$(document).on('click', '#hero-login-button-js', function (event) {
    event.preventDefault();
    //    alert("login button clicked");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();

});

//Login button at Nav bar
$(document).on('click', '#navbar-login-js', function (event) {
    event.preventDefault();
    //    alert("login  clicked - navbar");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();
});

//Signup button at signup form
$(document).on('click', '#signup-button-js', function (event) {
    event.preventDefault();
    //    alert("signup  clicked - signup form");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#dashboard-js').show();
    $('#habit-notes-js').hide();
    $('#habit-milestones-js').hide();
    //    $('#habit-container - js ').hide();
});

//user dashboard - add habit button
$(document).on('click', '#add-habit-button-js', function (event) {
    event.preventDefault();
    //    alert("add habit button clicked");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    //    $('#dashboard - js ').show();
    $('#habit-add-screen').show();
});

//login button at signup form
$(document).on('click', '#singup-screen-login-button-js', function (event) {
    event.preventDefault();
    //    alert("login  clicked - signup form");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();
});

//Login button at Login form
$(document).on('click', '#login-button-js', function (event) {
    event.preventDefault();
    //    alert("login  clicked - login form");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#dashboard-js').show();
    $('#habit-notes-js').hide();
    $('#habit-milestones-js').hide();
});
//habit container - add notes
$(document).on('click', '#add-notes-button-js', function (event) {
    event.preventDefault();
    //    alert("edit habit notes button clicked");
    //    $('main ').hide();
    //    $('#nav-bar').show();
    //    $('#nav-bar').addClass('nav-background');
    //    $('#footer-container').show();
    //    $('#dashboard-js').show();
    $('#habit-notes-js').show();
});

//habit container - add milestones
$(document).on('click', '#add-milestones-button-js', function (event) {
    event.preventDefault();
    //    alert("edit habit milestones button clicked");
    //    $('main ').hide();
    //    $('#nav-bar').show();
    //    $('#nav-bar').addClass('nav-background');
    //    $('#footer-container').show();
    //    $('#dashboard-js').show();
    $('#habit-milestones-js').show();
});

//habit container - edit habit
$(document).on('click', '#edit-habit-js', function (event) {
    event.preventDefault();
    //    alert("habit edit icon clicked");
    $('main ').hide();
    $('#habit-add-screen').show();
});
//habit container - delete habit
$('#delete-habit-js').on('click', function (event) {
    event.preventDefault();
    //    alert("habit delete icon clicked");
    $('#habit-container-js').hide();
});
