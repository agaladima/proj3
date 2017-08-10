//focus on the name field when the page is loaded
document.getElementById('name').focus();

//when the select option is changed 
$('#title').change(function() {
	//create input element
	const input = document.createElement('input');
	//if option selected has value of 'other'
	if ($(this).val() === 'other') {
		//set input tags values for 'id' and 'placeholder'
		$(input).attr('id', 'other-title');
		$(input).attr('placeholder', 'Your Job Role');
		//add created input element after 'select' element
		$(this).after(input);
	} else {
		//toggle input element depending on whether it's selected or not
		$("#other-title").hide();
	}
});

