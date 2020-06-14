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
    var saveCol = $("<div>").addClass("col-sm-2 saveBtn");
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
    $(".saveBtn").text("this is where the save button goes");

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
    // var newRow = $('.row');
    // for (var i = 0; i < 8; i++) {
    //     newRow.clone().insertAfter(newRow);
    // };



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