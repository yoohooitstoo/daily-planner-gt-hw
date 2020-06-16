//This allows tha html page to load before becoming dynamic thru js
$(document).ready(function () {
    // console.log("you did it");

    //Have it say the Current day using moment.js
    // Display Date in the Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    //Empty array for scheduleEntry
    // var userEntry = [];
    // Time list array
    var timeList = [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM ",
        "2 PM ",
        "3 PM ",
        "4 PM ",
        "5 PM ",
    ];


    //Variable for the display time using moment.js
    var currentTime = moment().format("h A");




    // Variable for the container
    var container = $(".time-block");


    //For loop to create the scheduled time rows
    for (let i = 0; i < timeList.length; i++) {

        //the first row of the time scheduler
        var hourList = timeList[i];
        //Row that stores all the material
        var timeRow = $("<div>", {
            class: 'row'
        });
        //Column that displays the time
        var timeCol = $("<div>", {
            class: 'hour col-sm-1',
            id: "hourCol-" + i,
        });
        //Column that has the save icon Added value class to help with storage
        var saveCol = $("<button>", {
            class: "col-sm-1 saveBtn i:hover",
            id: "button-" + i,
        });
        //Column for text area and for the color scheme
        var scheduleCol = $("<textarea>", {
            class: 'col-sm-9 description',
            id: "scheduleText-" + i,
            value: localStorage.getItem(timeList[i]),
        });


        //Allows the timeCol to house the timeList
        timeCol.text(hourList);
        //Has each column one after the other
        timeRow.append(timeCol).append(scheduleCol).append(saveCol);
        //keeps all rows inside the container
        container.append(timeRow);
        //Inserts the floppy disc icon into the saveCol
        $(".saveBtn").html('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>');
        // Hopefully giving the saveCole the added class
        // saveCol.addClass("");


        //Local Storage that is dictated by the location of the text 
        $("#button-" + i).on("click", function (e) {
            event.preventDefault();
            var scheduleEntry = $(this).siblings(".description").val();
            var userKey = $(this).siblings(".hour").text();

            localStorage.setItem(userKey, scheduleEntry);

            console.log(scheduleEntry);
            
        });



        //Conditional statement to have timeCol display color
        if (hourList.match(currentTime)) {
            $(scheduleCol).addClass("present");
        } else if (hourList < currentTime) {
            $(scheduleCol).addClass("past");
        } else {
            $(scheduleCol).addClass("future");
        };



    };






    // console.log(currentTime);




});