//focus on the name field when the page is loaded
document.getElementById('name').focus();

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
		$(this).after(input);
	//if another section is selected hide the input
	} else {
		$("#other-title").hide();
	}
});

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