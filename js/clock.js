var tyear = 2013, tmonth = 07, tday = 17, thours = 23, tminutes = 15, tseconds = 00;

function countdown() {
	var endDate = new Date(tyear, tmonth, tday, thours, tminutes, tseconds, 00);
	var thisDate = new Date();

	var daysLeft = parseInt((endDate-thisDate)/86400000);
    var hoursLeft = parseInt((endDate-thisDate)/3600000); 
    var minutesLeft = parseInt((endDate-thisDate)/60000);
    var secondsLeft = parseInt((endDate-thisDate)/1000);

    var seconds = minutesLeft * 60;
    seconds = secondsLeft - seconds;

    var minutes = hoursLeft * 60;
    minutes = minutesLeft - minutes;

    var hours = daysLeft * 24;
    hours = hoursLeft - hours;
    hours = hours < 0 ? 0 : hours;

	var $s = $(".second"),
	$m = $(".minute"),
	$h = $(".hour");

	s = seconds;
	m = minutes;
	h = hours;

	$s.val(s).trigger("change");
	$m.val(m).trigger("change");
	$h.val(h).trigger("change");

	setTimeout("countdown()", 1000);
}

countdown();

$(function() {
    $(".clock").knob();
});