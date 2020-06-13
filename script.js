$(document).ready(function () {
    console.log("you did it");

    //Create Variables
    // Display Date in the Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    //Create div 
    //Needs row with column
    // modify div / Append a div to the class="time-block"
    //Have it say the Current day using moment.js
    var container = $(".time-block");
    var timeRow = $("<div>").addClass("row");
    var timeCol = $("<div>").addClass("hour col-sm-2");
    
    timeRow.append(timeCol);
    container.append(timeRow);
    $(".hour").text("9am");
    var scheduleCol = $("<div>").addClass("col-sm-8 past present future");
    timeCol.after(scheduleCol);
    $(".past").text("this is where the main text appears");
    var saveCol = $("<div>").addClass(" col-sm-2 saveBtn");
    scheduleCol.after(saveCol);
    $(".saveBtn").text("this is where the save button goes");

    $(".row").clone().insertAfter(".row");



    // Create Functions

    //  We need to build


    // Call the Functions


    // Add EventListeners

    // Use this function as Eventlistener
    // $("#click-me").on("click", function() {
    //     alert("I've been clicked!");
    //   });









});