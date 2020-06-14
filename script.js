$(document).ready(function () {
    console.log("you did it");

    //Have it say the Current day using moment.js
    // Display Date in the Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY"));


    //Create Variables
    //The container of the scheduler

    // FOR LOOP TO CREATE NEW ROW
    //var timeListindex = 0;

    var timeList = [
        "9 AM ",
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
        var timeRow = $("<div class='row' >");
        var timeCol = $("<div class= 'hour col-sm-1'>");
        var saveCol = $("<button type='button' class= 'col-sm-1 saveBtn'>");
        var scheduleCol = $("<textarea class= 'col-sm-10 past'>");
        timeCol.text(hourList);
        timeRow.append(timeCol).append(scheduleCol).append(saveCol);
        container.append(timeRow);
        scheduleCol.after(saveCol);
        $(".saveBtn").html('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>');
        saveCol.addClass(".saveBtn i:hover");
        
        if (hourList === currentTime) {
            scheduleCol.addClass("present");
        } else if  (hourList < currentTime) {
            scheduleCol.addClass("past");
        } else{
            scheduleCol.addClass("future");
        };
        //Condtiontional statement to have timeCol display color
        // var timeFrame = 
        //Create div 
        //Needs row with column
        // modify div / Append a div to the class="time-block"
        saveCol.on("click", function (e) {
            var scheduleEntry = scheduleCol.html();
            console.log(scheduleCol);
            event.preventDefault();
            if (scheduleEntry.length > 0); {};
                

        //$(".hour").text("");
        //the text area

        //the save button

    };



    // We have array of times and we want to display set in col hour
    //create a <p> tag and append it to the div
    //We want to call on that and append our first index to the first div
    // Have consecutive cols display index i until end of array




    // Create Functions

    //  We need to build


    // Call the Functions


    // Add EventListeners

    // Use this function as Event listener
    // $("#click-me").on("click", function() {
    //     alert("I've been clicked!");
    //   });









});