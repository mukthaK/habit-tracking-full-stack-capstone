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


    // get values from sign up form
    const username = $('#signup-username').val();
    const password = $('#signup-password').val();
    const confirmPassword = $('#signup-confirm-password').val();

    console.log(username, password, confirmPassword);

    // validate user inputs
    if (username == '')
        alert('Must input username');
    else if (password == '')
        alert('Must input password');
    else if (confirmPassword == '')
        alert('Must re-enter password');
    else if (password != confirmPassword)
        alert('Passwords do not match');
    // if valid
    else {
        //        alert("success");

        // create the payload object (what data we send to the api call)
        const newUserObject = {
            username: username,
            password: password
        };
        // console.log(newUserObject);

        // make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            // if call is succefull
            .done(function (result) {
                console.log(result);
                $('main').hide();
                $('#nav-bar').show();
                $('#nav-bar').addClass('nav-background');
                $('#footer-container').show();
                $('#dashboard-js').show();
                $('#habit-notes-js').hide();
                $('#habit-milestones-js').hide();
                //    $('#habit-container - js ').hide();
                //            populateUserDashboardDate(result.username);
            })
            // if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    }
});

// user dashboard - add habit button
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

// login button at signup form
$(document).on('click', '#singup-screen-login-button-js', function (event) {
    event.preventDefault();
    //    alert("login  clicked - signup form");
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();

});

// Login button at Login form
$(document).on('click', '#login-button-js', function (event) {
    event.preventDefault();
    //    alert("login  clicked - login form");



    // Get the inputs from the user in Log In form
    const username = $("#login-username").val();
    const password = $("#login-password").val();

    // validate the input
    if (username == "") {
        alert('Please input user name');
    } else if (password == "") {
        alert('Please input password');
    }
    // if the input is valid
    else {
        // create the payload object (what data we send to the api call)
        const loginUserObject = {
            username: username,
            password: password
        };
        console.log(loginUserObject);

        //make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/users/login',
                dataType: 'json',
                data: JSON.stringify(loginUserObject),
                contentType: 'application/json'
            })
            //if call is succefull
            .done(function (result) {
                console.log(result);
                $('main').hide();
                $('#nav-bar').show();
                $('#nav-bar').addClass('nav-background');
                $('#footer-container').show();
                $('#dashboard-js').show();
                $('#habit-notes-js').hide();
                $('#habit-milestones-js').hide();

                //            $('#loggedInName').text(result.name);
                //            $('#loggedInUserName').val(result.username);
                //            populateUserDashboardDate(result.username); //AJAX call in here??

            })
            //if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Incorrect Username or Password');
            });
    };

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





//habit edit form done and cancel button

//add + at milestones
//Cancel button at notes
