$(document).ready(function () {   //jQuery function always starts with $
  $("#goal-button").click(function () { //jQuery function click for interactivity
    //this .append adds the input to the current list when clicked
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");     //this clears the form fill
  });
});
