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
	//if another section is selected hide the input
	} else {
		//toggle input element depending on whether it's selected or not
		$("#other-title").hide();
	}
});

//when the design is changed
$('#design').change(function () {
	//hide all options
	$('#color').children('option').hide();
	/* if the options are changed, it will toggle the color
	sections to reveal the corresponding options there */
	if($(this).val() === 'js puns') {
		$('#color').val('cornflowerblue');
		$('#color option:eq(0)').show();
		$('#color option:eq(1)').show();
		$('#color option:eq(2)').show();
	} else if($(this).val() === 'heart js') {
		$('#color').val('tomato');
		$('#color option:eq(3)').show();
		$('#color option:eq(4)').show();
		$('#color option:eq(5)').show();
	} else if($('#design option:first-child')) {
		$('#color').val('cornflowerblue');
		$('#color option:eq(0)').show();
		$('#color option:eq(1)').show();
		$('#color option:eq(2)').show();
		$('#color option:eq(3)').show();
		$('#color option:eq(4)').show();
		$('#color option:eq(5)').show();
	}
});

/* when checkbox is engaged, this function disables other inputs checkboxes
when there is an overlap in time with the selected checkbox
and enables that same checkbox when the input is unselected.
This section is also to create a new div that calculates the total cost.
When a checkbox is clicked, the cost is added and when it is unchecked
the cost is subtracted from the total, which is declared outside the function*/
let html = '<div><h2 id="total">Total: $0</h2></div>'
$('.activities').append(html);
let total = 0;
$('input[type="checkbox"]').change(function(){
	$('#total').html('Total: $' + total);
	if($(this).is(':checked') && $(this).attr('name') === 'all') {
		total += 200;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'all') {
		total = total - 200;
	}

	if($(this).is(':checked') && $(this).attr('name') === 'js-frameworks') {
		$('input[name=express]').attr('disabled', true);
		total += 100;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'js-frameworks') {
		$('input[name=express]').removeAttr('disabled');
		total = total - 100;
	}

	if($(this).is(':checked') && $(this).attr('name') === 'express') {
		$('input[name=js-frameworks]').attr('disabled', true);
		total += 100;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'express') {
		$('input[name=js-frameworks]').removeAttr('disabled');
		total = total - 100;
	}

	if($(this).is(':checked') && $(this).attr('name') === 'js-libs') {
		$('input[name=node]').attr('disabled', true);
		total += 100;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'js-libs') {
		$('input[name=node]').removeAttr('disabled');
		total = total - 100;
	}

	if($(this).is(':checked') && $(this).attr('name') === 'node') {
		$('input[name=js-libs]').attr('disabled', true);
		total += 100;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'node') {
		$('input[name=js-libs]').removeAttr('disabled');
		total = total - 100;
	}

	if($(this).is(':checked') && $(this).attr('name') === 'build-tools') {
		total += 100;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'build-tools') {
		total = total - 100;
	}

	if($(this).is(':checked') && $(this).attr('name') === 'npm') {
		total += 100;
	}
	if(!$(this).is(':checked') && $(this).attr('name') === 'npm') {
		total = total - 100;
	}
	$('#total').html('Total: $' + total);
});



