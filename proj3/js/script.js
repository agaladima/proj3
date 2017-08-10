//focus on the name field when the page is loaded
document.getElementById('name').focus();

//showing a text field when 'other' is selected
$('#title').change(function() {
	const input = document.createElement('input');
	if ($(this).val() === 'other') {
		$(input).attr('id', 'other-title');
		$(input).attr('placeholder', 'Your Job Role');
		$(this).after(input);
	} else {
		$("#other-title").hide();
	}
});