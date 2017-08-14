//focus on the name field when the page is loaded
document.getElementById('name').focus();

<<<<<<< HEAD
//when the select element option is changed
$('#title').change(function() {
	//if the selected option has a value of 'other'
	if ($(this).val() === 'other') {
		//create a new input element
		const input = document.createElement('input');
		//set the id and placeholder attributes
		$(input).attr('id', 'other-title');
		$(input).attr('placeholder', 'Your Job Role');
		//add the created input to the 'Job Role' section
=======
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
>>>>>>> 867358b2abc25a657c198c3c64afd30d5dcd62be
		$(this).after(input);
	//if another section is selected hide the input
	} else {
		//toggle input element depending on whether it's selected or not
		$("#other-title").hide();
	}
});

<<<<<<< HEAD
$('#design').change(function () {
	if($(this).val() === 'js puns') {
		//$('#color').hide();
		if ($('#color').val() === 'tomato' ||
			$('#color').val() === 'steelblue' ||
			$('#color').val() === 'dimgrey') {
			$('#color').hide();
		}
	}
});
=======
>>>>>>> 867358b2abc25a657c198c3c64afd30d5dcd62be
