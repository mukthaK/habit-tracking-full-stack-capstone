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
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();
});

//Login button at Nav bar
$(document).on('click', '#navbar-login-js', function (event) {
    event.preventDefault();
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();
});

//Signup button at signup form
$(document).on('click', '#signup-button-js', function (event) {
    event.preventDefault();

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
                $('#loggedin-user').val(result.username);
                $('#nav-bar span').text("Hello " + result.username);
                $('main').hide();
                $('#nav-bar').show();
                $('#nav-bar').addClass('nav-background');
                $('#footer-container').show();
                $('#dashboard-js').show();
                //                $('#habit-notes - js ').hide();
                //                $('#habit-milestones-js').hide();
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
    //    $('#dashboard - js').show();
    $('#habit-add-screen').show();
});

// login button at signup form
$(document).on('click', '#singup-screen-login-button-js', function (event) {
    event.preventDefault();
    $('main').hide();
    $('#nav-bar').show();
    $('#nav-bar').addClass('nav-background');
    $('#footer-container').show();
    $('#login-screen').show();
});

// Login button at Login form
$(document).on('click', '#login-button-js', function (event) {
    event.preventDefault();

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
                $('#loggedin-user').val(result.username);
                $('#nav-bar span').text("Hello " + result.username);

                $('main').hide();
                $('#nav-bar').show();
                $('#nav-bar').addClass('nav-background');
                $('#footer-container').show();
                $('#dashboard-js').show();
                //                $('#habit-notes-js').hide();
                //                $('#habit-milestones-js').hide();

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
//habit container - add notes -- REMOVE
$(document).on('click', '#add-notes-button-js', function (event) {
    event.preventDefault();
    //    alert("edit habit notes button clicked");
    //    $('main').hide();
    //    $('#nav-bar').show();
    //    $('#nav-bar').addClass('nav-background');
    //    $('#footer-container').show();
    //    $('#dashboard-js').show();
    $('#habit-notes-js').show();
});

//habit container - add milestones -- REMOVE
$(document).on('click', '#add-milestones-button-js', function (event) {
    event.preventDefault();
    //    alert("edit habit milestones button clicked");
    //    $('main').hide();
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
    $('main').hide();
    $('#habit-add-screen').show();
    //pre populate the habit form values with the details already there
});

//habit container - delete habit
$('#delete-habit-js').on('click', function (event) {
    event.preventDefault();
    //    alert("habit delete icon clicked");
    $('#habit-container-js').hide();

    // Get values of habit name and logged in user
    const habitName = $("#habit-name").val();
    const loggedinUser = $('#loggedin-user').val();

    //const

});

// habit edit form done button
$(document).on('click', '#habit-form-done-js', function (event) {
    event.preventDefault();


    // Get the inputs from the user in Log In form
    const habitName = $("#habit-name").val();
    const weekday = $("input[type='radio']:checked").val();
    const time = $('#habit-time').val();

    const loggedinUser = $('#loggedin-user').val();
    //    console.log(habitName, weekday, time);

    // validate the input
    if (habitName == "") {
        alert('Please input habit name');
    } else if (weekday == "") {
        alert('Please select the weekday');
    } else if (time == '') {
        alert('Please select the time');
    }
    // if the input is valid
    else {
        // create the payload object (what data we send to the api call)
        const newHabitObject = {
            habitName: habitName,
            weekday: weekday,
            time: time,
            loggedinUser: loggedinUser
        };
        //        console.log(newHabitObject);

        //make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/habit/create',
                dataType: 'json',
                data: JSON.stringify(newHabitObject),
                contentType: 'application/json'
            })
            //if call is successfull
            .done(function (result) {
                console.log(result);
                populateHabitsByUsername(result.loggedinUser);

                $('#habit-add-screen').hide();
                $('#dashboard-js').show();
            })
            //if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Incorrect New habit object');
            });
    };
});


function populateHabitsByUsername(loggedinUser) { //Get AJAX User Entries call, render on page

    if ((loggedinUser == "") || (loggedinUser == undefined) || (loggedinUser == null)) {
        loggedinUser = $('#loggedin-user').val();
    }
    // console.log(loggedinUser);
    //make the api call using the payload above
    $.ajax({
            type: 'GET',
            url: `/get-habit/${loggedinUser}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is successfull
        .done(function (result) {
            console.log(result);
            //            if(result.entriesOutput.length === 0) {
            //                $('#no-entry').show();
            //            } else {
            //                $('#no-entry').hide();
            //            }
            //empty the user-list container before populating it dynamically
            //            $('#user-list').html("");
            //            htmlUserDashboard(result);

        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

// habit edit form cancel button
$(document).on('click', '#habit-form-cancel-js', function (event) {
    event.preventDefault();
    $('main').hide();
    $('#habit-add-screen').hide();
    $('#dashboard-js').show();
});
//add + at milestones

//Save button for Notes  ?? Notes save or Add ??
$(document).on('click', '#notes-save-js', function (event) {
    event.preventDefault();
    //    alert("save clicked");

    // Get the value from the notes container
    const notesContent = $('.notes-content-js').html()
    console.log(notesContent);

    // No validation - Because notes can be personal and can be anything ??

    // Get the user name
    const loggedinUser = $('#loggedin-user').val();
    console.log(loggedinUser);

    // Get the habit name associated with the notes
    const habitName = $('#habit-container-js h4').html();
    console.log(habitName);

    // create the payload object (what data we send to the api call)
    const notesObject = {
        notesContent: notesContent,
        loggedinUser: loggedinUser,
        habitName: habitName
    };
    console.log(notesObject);

    //make the api call using the payload above
    $.ajax({
            type: 'POST',
            url: '/notes/save',
            dataType: 'json',
            data: JSON.stringify(notesObject),
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            console.log(result);
            //                $('#habit-add-screen').hide();
            $('#dashboard-js').show();
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
            alert('Incorrect Notes');
        });
});

// Update on Notes ?? NEEDED ??  SAVE doed the same function

// Delete button on Notes -- REMOVE
$(document).on('click', '#notes-delete-js', function (event) {
    event.preventDefault();
    //    alert("delete clicked");
    //    $('#habit-notes-js').hide();
    //    $('.notes-container').html(renderNotesAddButton);

    // Empty the notes content
    $('.notes-content-js').text('Type here...');

    // Update/ DELETE the entry from the DB
    const itemId = $(this).attr(_id);
    console.log(itemId);
});

// Adding an item in Milestones list -- ??
$(document).on('click', '#milestone-item-add-js', function (event) {
    event.preventDefault();

    // Get the value from the milestone item input
    const milestonesContent = $('#milestoneInput').val();
    console.log(milestonesContent);

    const htmlMilestoneItem = `<li>
        <input type="checkbox" id="milestone-item">
        <label for="milestone-item">${milestonesContent}</label>
        <button class="delete-milestone-item"><i class="fas fa-times"></i></button>
        </li>`;
    $('#milestonesItems').append(htmlMilestoneItem);

    // Set the default checked value as false
    //    const checked = "false";

    // Get the user name
    const loggedinUser = $('#loggedin-user').val();
    console.log(loggedinUser);


    // Get the habit name associated with the milestones
    const habitName = $('#habit-container-js h4').html();
    console.log(habitName);


    // create the payload object (what data we send to the api call)
    const milestonesObject = {
        milestonesContent: milestonesContent,
        loggedinUser: loggedinUser,
        habitName: habitName
    };
    console.log(milestonesObject);

    //make the api call using the payload above
    $.ajax({
            type: 'POST',
            url: '/milestones/add',
            dataType: 'json',
            data: JSON.stringify(milestonesObject),
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            console.log(result);
            $('#dashboard-js').show();
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
            alert('Incorrect milestone');
        });


});

// Delete button on Milestones
$(document).on('click', '.delete-milestone-item', function (event) {
    event.preventDefault();
    //alert("delete clicked");

    // Get the clicked elemt and remove the item
    const listItem = $(this).parent();
    const itemToRemove = listItem.find('label').text();
    console.log("itemToRemove label - " + itemToRemove);

    // Remove item from display
    listItem.remove();

    //Remove item from DB
    const itemId = listItem.attr(_id);
    console.log(itemId);
});



////Save button for Milestones
//$(document).on('click', '#milestones-save-js', function (event) {
//    event.preventDefault();
//    //    alert("save clicked");
//
//    // Get the value from the milestones container
//    const milestonesContent = $('#milestone').val();
//    console.log("milestonesContent" + milestonesContent);
//    console.log("milestonesContent length" + milestonesContent.length);
//
//
//
//    // Get the user name
//    const loggedinUser = $('#loggedin-user').val();
//    console.log(loggedinUser);
//
//    //validation
//
//
//    // Get the habit name associated with the milestones
//    const habitName = $('#habit-container-js h4').html();
//    console.log(habitName);
//
//    // create the payload object (what data we send to the api call)
//    const milestonesObject = {
//        milestonesContent: milestonesContent,
//        loggedinUser: loggedinUser,
//        habitName: habitName
//    };
//    console.log(milestonesObject);
//
//    //make the api call using the payload above
//    $.ajax({
//            type: 'POST',
//            url: '/milestones/save',
//            dataType: 'json',
//            data: JSON.stringify(milestonesObject),
//            contentType: 'application/json'
//        })
//        //if call is succefull
//        .done(function (result) {
//            console.log(result);
//
//            $('#dashboard-js').show();
//        })
//        //if the call is failing
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//            alert('Incorrect milestone');
//        });
//
//});
