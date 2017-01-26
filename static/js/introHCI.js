'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Claire's Jumbotr0n Java test");
		$("#testjs").text("There you go, breaking things again");
		$(".jumbotron p").toggleClass("active");

	});

	// Add any additional listeners here


	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#D0DCD3");
   var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project. When you click on this again, this will disappear.</p></div>");
    } else {
       description.html("<p>I was able to get the tags to disappear and reappear, but not the description of the title.</p>");
    	$('#hide').click(function(){
		  $('#title').hide();
		});

		$('#show').click(function(){
		  $('#title').show();
		});
}


}


}