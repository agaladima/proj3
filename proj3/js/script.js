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

//hide shirt colors until design is selected
$('.dColor').hide();
//when the design is changed
$('#design').change(function () {
	//hide all options
	$('.dColor').show();
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
let html = '<div><h2 id="total">Total: $0</h2></div>';
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
//when the page loads, set the credit card selection for payment section as default
$('#payment option[value="credit card"]').prop('selected', true);
if ($('#payment').val() === 'credit card') {
		$('#credit-card').show();
		$('div p:nth-last-child(2)').hide();
		$('div p:last-child').hide();
}

//when the payment section is changed, the appropriate payment option is reflected
$('#payment').change(function() {
	if ($(this).val() === 'credit card') {
		$('#credit-card').show();
		$('#paypal').hide();
		$('#bitcoin').hide();
	} else if ($(this).val() === 'paypal') {
		$('#paypal').show();
		$('#credit-card').hide();
		$('#bitcoin').hide();
	} else if ($(this).val() === 'bitcoin') {
		$('#bitcoin').show();
		$('#credit-card').hide();
		$('#paypal').hide();
	}
});

function errorName() {
	if ($('#name').val().length === 0) {
		$('#name').css("border", "5px solid tomato");
		return false;
	} else {
		$('#name').removeAttr('style');
		return true;
	}
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function errorEmail() {
	var email = $('#mail').val();
	if(validateEmail(email)) {
		$('#mail').removeAttr('style');
		return true;
	} else {
		$('#mail').css("border", "5px solid tomato");
		return false;
	}
}

function errorCheckbox() {
	if ($(".activities input:checkbox:checked").length > 0) {
		$('.activities').removeAttr('style');
		return true;
	} else {
		$('.activities').css("border", "5px solid tomato");
		return false;
	}
}

function errorCreditCard() {
	var ccNum = $('#cc-num').val();
	if (ccNum.length > 12 && ccNum.length < 17 && /^\d+$/.test(ccNum)) {
		$('#cc-num').removeAttr('style');
		return true;
	} else if (ccNum.length > 16 || ccNum.length < 12 && ccNum.length > 0 && /^\d+$/.test(ccNum)) {
		alert('Oops! Looks like you have '+ ccNum.length + ' digits for the Credit Card section when you need between 13 and 16.');
		$('#cc-num').css("border", "5px solid tomato");
		return false;
	} else if (/^\d+$/.test(ccNum) === false && ccNum.length != 0) {
		alert('Oops! Looks like you have letters in there! Only numbers please.');
		$('#cc-num').css("border", "5px solid tomato");
		return false;
	} else {
		alert('Oops! Looks like you did\'t enter any numbers in the Credit Card section.')
		$('#cc-num').css("border", "5px solid tomato");
		return false;
	}
}

function errorZip() {
	var zip = $('#zip').val();
	if (zip.length === 5 && /^\d+$/.test(zip)) {
		$('#zip').removeAttr('style');
		return true;
	} else {
		$('#zip').css("border", "5px solid tomato");
		return false;
	}
	//real time validation of zip
	if (zip.length < 5) {
		var lengthTG = 5 - zip.length;
		var html = document.createElement('P');
		var text = document.createTextNode('Please enter '+lengthTG+' more digits.');
		html.appendChild(text);
		document.getElementById('zip').appendChild();
		$('input #zip').append(html);
	} else if (zip.length === 5) {
		//$('').hide();
	}
}

function errorCVV() {
	var cvv = $('#cvv').val();
	if (cvv.length === 3 && /^\d+$/.test(cvv)) {
		$('#cvv').removeAttr('style');
		return true;
	} else {
		$('#cvv').css("border", "5px solid tomato");
		return false;
	}
}

$('button').on('click', function () {
	errorName();
	errorEmail();
	errorCheckbox();
	errorCreditCard();
	errorZip();
	errorCVV();

	if(errorName() === false || errorEmail() === false || errorCheckbox() === false ||
		errorCreditCard() === false || errorZip() === false || errorCVV() === false) {
		// add some html at the top that focuses on the the title saying there's a mistake
		alert('Please fix the fields outlined in red!');
		return false;
	} else {
		return true;
	}
});
