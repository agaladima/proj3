//focus on the name field when the page is loaded
document.getElementById('name').focus();

//showing a text field when 'other' is selected
$('#title').change(function() {
	if ($(this).val() === 'other') {
		console.log('this is other');
	}
});