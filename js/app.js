// Alert Button 
// Make button disappear when the button is clicked
$('.alert').click(function(){
	$('.alert').hide();
});

//Message User Widget functionality

var $submit = $('.submit_alert');
var $userError = $('.user_error');
var $messageError = $('.message_error');
var $userSearch = $('#user_search');
var $userMessage = $('#user_message');

//Hide the alert messages
$submit.hide();
$userError.hide();
$messageError.hide();

// 1. Use JS to allow you to submit form and display a confirmation the message was sent.
$('button#send').click(function(){
	event.preventDefault();
	// 2. Use JS to display error messages if user isn't selected or message field is empty.
	if($userSearch.val() === '') {
		$userError.show();
	} 
	if ($userMessage.val() === '') {
		$messageError.show();
	}
	if($userSearch.val() !== '' && $userMessage.val() !== '') {
		$submit.show();
	}
});

$submit.click(function(){
	$submit.hide();
});

$userSearch.keyup(function(){
	$userError.hide();
});

$userMessage.keyup(function(){
	$messageError.hide();
});


