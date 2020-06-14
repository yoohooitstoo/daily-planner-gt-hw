$(document).ready(function () {
    console.log("you did it");

    //Have it say the Current day using moment.js
    // Display Date in the Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY"));


    //Create Variables
    //The container of the scheduler
    var container = $(".time-block");
    //the first row of the time scheduler
    var timeRow = $("<div>").addClass("row");
    var timeCol = $("<div>").addClass("hour col-sm-2");
    var saveCol = $("<button>").addClass("col-sm-2 saveBtn");
    var scheduleCol = $("<div>").addClass("col-sm-8 past present future");


    //Create div 
    //Needs row with column
    // modify div / Append a div to the class="time-block"
    timeRow.append(timeCol);
    container.append(timeRow);
    $(".hour").text("");
    //the text area
    timeCol.after(scheduleCol);
    $(".past").text("this is where the main text appears");
    //the save button
    scheduleCol.after(saveCol);
    $(".saveBtn").html('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>');
    saveCol.addClass(".saveBtn i:hover");
    // FOR LOOP TO CREATE NEW ROW
    var timeList = [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
    ];

    //    for (var i =0; i < arrayLength; i ++) {
    //        timeCol.append(timeList);
    //        }
    //var timeDisplay= timeList.length;
    var newRow = $('.row');
    for (var i = 0; i < 8; i++) {
        newRow.clone().insertAfter(newRow);
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