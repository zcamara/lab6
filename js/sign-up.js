//signup.js 
// add your JavaScript code to this file
var required = ["first-name","last-name","email"];
//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
	var stateSelect = $('select[name="state"]');
	var option;
	//for each state in the array, append to state dropdown list
	$.each(usStates, function(){
		option = $(document.createElement('option'));
		option.attr('value', this.abbreviation);
		option.html(this.name);
		stateSelect.append(option);
	});
     
	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function

	$('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);
	    var formComplete = true;
	        //select a descendant input element with the name "addr-1"
	    var addr1 = signupForm.find('input[name="addr-1"]').val().trim();
	    if (addr1.length > 0)  {
	    	var zip = signupForm.find('input[name="zip"]').val().trim();
	    	if (zip.length < 1) {
	    		alert('Please fill in the zip field.');
	    		formComplete = false;
	    	}
	    }
	    $.each(required, function(){
	    	req = signupForm.find('input[name='+this+']').val().trim();
	    	if (req.length === 0) {
	    		//required field has no value
	    		alert('You must enter your '+this+'!');
	    		formComplete = false;
	    	}
	    });
	    return formComplete;
	});

	$('.cancel-signup').click(function(){
	    //code to run when user clicks "No Thanks!" button
	    //show the modal confirmation dialog
	    //and don't reset window.location until the user clicks
	    //the "Yes, Get Me Out of Here!" button
	    $('.cancel-signup-modal').modal();
	}); //cancel-signup click

	//add this at the end of your document ready function
	$('.btn-abandon').click(function(){
	    window.location = 'http://www.google.com';
	});
	                    
}); //on document ready 