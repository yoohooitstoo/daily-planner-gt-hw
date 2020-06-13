$(document).ready(function () {
    console.log("you did it");

    //Have it say the Current day using moment.js
    // Display Date in the Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    
    //Create Variables
    var container = $(".time-block");
    var timeRow = $("<div>").addClass("row");
    var timeCol = $("<div>").addClass("hour col-sm-2");
    var saveCol = $("<div>").addClass("col-sm-2 saveBtn");
    var scheduleCol = $("<div>").addClass("col-sm-8 past present future");
    

    //Create div 
    //Needs row with column
    // modify div / Append a div to the class="time-block"
    timeRow.append(timeCol);
    container.append(timeRow);
    $(".hour").text("9am");
    //the text area
    timeCol.after(scheduleCol);
    $(".past").text("this is where the main text appears");
    //the save button
    scheduleCol.after(saveCol);
    $(".saveBtn").text("this is where the save button goes");

    // Create the additional rows
    var newRow = $('.row');
    for (var i = 0; i < 8; i++) {
      newRow.clone().insertAfter(newRow);
    };
    
    
    


    // Create Functions

    //  We need to build


    // Call the Functions


    // Add EventListeners

    // Use this function as Eventlistener
    // $("#click-me").on("click", function() {
    //     alert("I've been clicked!");
    //   });









});