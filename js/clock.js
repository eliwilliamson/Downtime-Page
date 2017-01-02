var tyear = 2017, tmonth = 00, tday = 20, thours = 9, tminutes = 30, tseconds = 00;

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

    var days = daysLeft ;

	var $s = $(".second"),
	$m = $(".minute"),
  $h = $(".hour"),
	$d = $(".day");

	s = seconds;
	m = minutes;
  h = hours;
	d = days;

	$s.val(s).trigger("change");
	$m.val(m).trigger("change");
  $h.val(h).trigger("change");
	$d.val(d).trigger("change");

	setTimeout("countdown()", 1000);
}

countdown();

$(function() {
    $(".clock").knob();
});