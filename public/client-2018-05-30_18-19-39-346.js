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

// login button at signup form
$(document).on('click', '#singup-screen-login-button-js', function (event) {
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
                populateHabitsByUsername(result.username);
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

                populateHabitsByUsername(result.username);

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








//habit container - edit habit
//$(document).on('click', '#edit-habit-js', function (event) {
//    event.preventDefault();
//    //    alert("habit edit icon clicked");
//    $('main').hide();
//    $('#habit-add-screen').show();
//    console.log(event.currentTarget);
//    //pre populate the habit form values with the details already there
//});

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
                $('#habit-add-screen').hide();
                $('#dashboard-js').show();
                populateHabitsByUsername(result.loggedinUser);
                //console.log("After calling function populate habits by username");

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

// Get the Habits for that user
function populateHabitsByUsername(loggedinUser) { //Get AJAX User Entries call, render on page

    if ((loggedinUser == "") || (loggedinUser == undefined) || (loggedinUser == null)) {
        loggedinUser = $('#loggedin-user').val();
    }
    //console.log(loggedinUser);
    //make the api call to get habits by username
    $.ajax({
            type: 'GET',
            url: `/get-habit/${loggedinUser}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is successfull
        .done(function (result) {
            console.log(result);
            displayHabits(result.habitsOutput);
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

// To display habits on user dashboard
function displayHabits(result) {
    //create an empty variable to store each habits of a user
    let buildTheHtmlOutput = "";

    $.each(result, function (resultKey, resultValue) {
        //        console.log("result value [id] - " + resultValue._id);
        //        console.log(result);
        //        console.log(resultKey);

        buildTheHtmlOutput += '<div class="habit-container" id="habit-container-js">';
        buildTheHtmlOutput += '<div class="habit-name">';
        buildTheHtmlOutput += '<div class="habit-title">';
        buildTheHtmlOutput += '<h4>' + resultValue.habitName + '</h4>';
        buildTheHtmlOutput += '<p><i class="fas fa-trophy"></i>0 Check-ins</p>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div class="habit-edit-bar">';
        buildTheHtmlOutput += '<a onclick="deleteHabit(\'' + resultValue._id + '\')"><i class="far fa-trash-alt" id="delete-habit-js"></i><span>Delete</span></a>';
        buildTheHtmlOutput += '<a onclick="editHabit(\'' + resultValue._id + '\');"><i class="fas fa-pencil-alt" id="edit-habit-js"></i><span>Edit</span></a>';
        buildTheHtmlOutput += '<a onclick="checkinHabit(\'' + resultValue._id + '\')"><i class="far fa-calendar-check"></i><span>Check-in</span></a>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div class="note-milestone-container">';
        buildTheHtmlOutput += '<input type="hidden" class="noteMilestoneContainerID" value="' + resultValue._id + '">';

        //notes wrapper start
        buildTheHtmlOutput += '<div class="notes-container ' + resultValue._id + '">';
        //buildTheHtmlOutput += '<span><i class="far fa-sticky-note"></i>Notes</span>';
        //buildTheHtmlOutput += '<button type="submit" class="add-notes-button" id="add-notes-button-js"><i class="fas fa-plus-circle"></i><span>Notes</span></button>';

        //notes container start
        //        buildTheHtmlOutput += '<div class="habit-notes" id="habit-notes-js">';
        //        //buildTheHtmlOutput += '<div class="sticky-note-pre ui-widget-content">';
        //        buildTheHtmlOutput += '<div class="notes-handle">';
        //        buildTheHtmlOutput += '<span>Notes & Journal</span>';
        //        //buildTheHtmlOutput += '<button type="submit" class="notes-delete" id="notes-delete-js"><i class="far fa-trash-alt"></i></button>';
        //        buildTheHtmlOutput += '<button type="submit" class="notes-save notesSaveJs"><i class="far fa-save"></i></button>';
        //        buildTheHtmlOutput += '</div>';
        //        buildTheHtmlOutput += '<div contenteditable class="notes-content-js">Type here...';
        //
        //
        //        buildTheHtmlOutput += '</div>';
        //
        //        buildTheHtmlOutput += '</div>';
        //notes container stop

        // Get the notes content and display
        populateNotesByHabitId(resultValue._id);

        //        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
        //notes wrapper stop

        //milestone wrapper start
        buildTheHtmlOutput += '<div class="milestone-container ' + resultValue._id + '">';
        //        buildTheHtmlOutput += '<p><i class="fas fa-tasks"></i>Milestones</p>';
        //        buildTheHtmlOutput += '<button type="submit"class="add-milestones-button" id="add-milestones-button-js"><i class="fas fa-plus-circle"></i><span>Milestones</span></button>';

        //        //milestone container start
        //        buildTheHtmlOutput += '<div class="habit-milestones" id="habit-milestones-js">';
        //        buildTheHtmlOutput += '<div class="milestone-list">';
        //        buildTheHtmlOutput += '<div class="milestones-header">';
        //        buildTheHtmlOutput += '<label for="milestoneInput" class="milestone-title">Milestones</label>';
        //        buildTheHtmlOutput += '<input type="text" class="milestoneInput" placeholder="Enter title..." required>';
        //        buildTheHtmlOutput += '<button type="submit" class="milestone-add-button" id="milestone-item-add-js">+</button>';
        //        buildTheHtmlOutput += '</div>';
        //        buildTheHtmlOutput += '<ul id="milestonesItems">';
        //
        //        buildTheHtmlOutput += '</ul>';
        //        buildTheHtmlOutput += '</div>';
        //        buildTheHtmlOutput += '</div>';
        //        //milestone container stop

        buildTheHtmlOutput += '</div>';
        //milestone wrapper stop

        // Get the milestone items and display here
        populateMilestoneItemsByHabitId(resultValue._id);

        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
    });

    //use the HTML output to show it in the index.html
    $(".habit-container-wrapper").html(buildTheHtmlOutput);

}

// Get Notes content from DB by Habit Id
function populateNotesByHabitId(habitId) {
    //    console.log("habit id inside populate notes " + habitId);

    $.ajax({
            type: 'GET',
            url: `/get-notes/${habitId}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is successfull
        .done(function (result) {
            //console.log("get notes result done function", result);
            displayNotes(result, habitId);
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function displayNotes(result, habitId) {
    let buildTheHtmlOutput = "";

    $.each(result, function (resultKey, resultValue) {
        //notes container start
        buildTheHtmlOutput += '<div class="habit-notes" id="habit-notes-js">';
        //buildTheHtmlOutput += '<div class="sticky-note-pre ui-widget-content">';
        buildTheHtmlOutput += '<div class="notes-handle">';
        buildTheHtmlOutput += '<span>Notes & Journal</span>';
        buildTheHtmlOutput += '<input type="hidden" class="save-note-id" value="' + resultValue._id + '">';
        //buildTheHtmlOutput += '<button type="submit" class="notes-delete" id="notes-delete-js"><i class="far fa-trash-alt"></i></button>';
        buildTheHtmlOutput += '<button type="submit" class="notes-save notesSaveJs"><i class="far fa-save"></i></button>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div contenteditable class="notes-content-js">' + resultValue.notesContent;
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
        //notes container stop
    });

    //use the HTML output to show it in the index.html
    $(".notes-container." + habitId).html(buildTheHtmlOutput);
}

// Edit habit option - is it possible to pass object so that
// it has all the details to populate edit form ???? <----
function editHabit(habitId) {
    console.log(habitId);
}

// Delete habit by habit Id
function deleteHabit(habitId) {
    console.log(habitId);
    // Make a DELETE call to delete item by ID
}

// Checkin habit by habit ID
function checkinHabit(habitId) {
    console.log(habitId);
    // Add checkin value to Schema
    // Increment the value in DB for every checkin
    // Display checkin value on user dashboard
}

// Make a GET call to get the milestone items for the habit
function populateMilestoneItemsByHabitId(habitId) {
    // console.log("habit id inside milestone item populate" + habitId);

    $.ajax({
            type: 'GET',
            url: `/get-milestones/${habitId}`,
            dataType: 'json',
            contentType: 'application/json'
        })
        //if call is successfull
        .done(function (result) {
            console.log("get milestones result done function" + result);
            displayMilestones(result, habitId);
        })
        //if the call is failing
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function displayMilestones(result, habitId) {
    let buildTheHtmlOutput = "";

    //milestone container start
    buildTheHtmlOutput += '<div class="habit-milestones" id="habit-milestones-js">';
    buildTheHtmlOutput += '<div class="milestone-list">';
    buildTheHtmlOutput += '<div class="milestones-header">';
    buildTheHtmlOutput += '<label for="milestoneInput" class="milestone-title">Milestones</label>';
    buildTheHtmlOutput += '<input type="text" class="milestoneInput" placeholder="Enter title..." required>';
    buildTheHtmlOutput += '<button type="submit" class="milestone-add-button" id="milestone-item-add-js">+</button>';
    buildTheHtmlOutput += '</div>';
    buildTheHtmlOutput += '<ul id="milestonesItems">';

    $.each(result, function (resultKey, resultValue) {

        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<input type="checkbox" class="milestone-item">';
        buildTheHtmlOutput += '<input type="hidden" class="save-milestone-id" value="' + resultValue._id + '">';
        buildTheHtmlOutput += '<label for="milestone-item">';
        buildTheHtmlOutput += resultValue.milestonesContent;
        buildTheHtmlOutput += '</label>';
        buildTheHtmlOutput += '<button class="delete-milestone-item"><i class="fas fa-times"></i></button>';
        buildTheHtmlOutput += '</li>';

    });

    buildTheHtmlOutput += '</ul>';
    buildTheHtmlOutput += '</div>';
    buildTheHtmlOutput += '</div>';
    //milestone container stop

    //use the HTML output to show it in the index.html
    $(".milestone-container." + habitId).html(buildTheHtmlOutput);
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
$(document).on('click', '.notesSaveJs', function (event) {
    event.preventDefault();
    //    alert("save clicked");

    // Get the value from the notes container
    const notesContent = $(this).parent().find('.notes-content-js').html();
    const notesID = $(this).parent().find('.save-note-id').val();


    // No validation - Because notes can be personal and can be anything ??

    // Get the user name
    const loggedinUser = $('#loggedin-user').val();

    // Get the habit name associated with the notes
    const habitName = $(this).parent().parent().parent().parent().parent().find('#habit-container-js h4').html();
    const habitID = $(this).parent().parent().parent().parent().parent().find('.noteMilestoneContainerID').val();

    // create the payload object (what data we send to the api call)
    const notesObject = {
        notesContent: notesContent,
        loggedinUser: loggedinUser,
        habitName: habitName,
        habitID
    };
    console.log("notes object initialized", notesObject);

    //make the api call using the payload above
    $.ajax({
            type: 'PUT',
            url: '/notes/save',
            dataType: 'json',
            data: JSON.stringify(notesObject),
            contentType: 'application/json'
        })
        //if call is succefull
        .done(function (result) {
            console.log("notes object within done function" + result);
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

// Adding an item in Milestones list habitId(unique) instead of Habit name(not unique)-- ??
$(document).on('click', '#milestone-item-add-js', function (event) {
    event.preventDefault();

    // Get the value from the milestone item input
    const milestonesContent = $('.milestoneInput').val();
    console.log(milestonesContent);

    // validate
    if (milestonesContent == "") {
        alert("Must input milestone title");
        $('.milestoneInput ').focus();
    } else {
        // HTML element for Milestone list item with data populated with user input
        const htmlMilestoneItem = `<li>
        <input type="checkbox" id="milestone-item">
        <label for="milestone-item">${milestonesContent}</label>
        <button class="delete-milestone-item"><i class="fas fa-times"></i></button>
        </li>`;
        $('#milestonesItems').append(htmlMilestoneItem);

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
    }
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