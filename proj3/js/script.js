//focus on the name field when the page is loaded
document.getElementById('name').focus();

//when the select option is changed 
$('#title').change(function() {
	//if option selected has value of 'other'
	if ($(this).val() === 'other') {
		//create input element
		const input = document.createElement('input');
		//set appropriate id and placeholder attribute
		$(input).attr('id', 'other-title');
		$(input).attr('placeholder', 'Your Job Role');
		//insert input element after the dropdown menu
		$('#title').after(input);
	}
});

