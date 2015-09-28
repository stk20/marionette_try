$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
})

function timeStamp(dateObject) {
// Create an array with the current hour and minute
  var time = [ dateObject.getHours(), dateObject.getMinutes()];

// Determine AM or PM suffix based on the hour
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

// Convert hour from military time
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

// If hour is 0, set it to 12
  time[0] = time[0] || 12;

// If minutes are less than 10, add a zero
	if ( time[1] < 10 ) {
      time[1] = "0" + time[1];
    }

// Return the formatted string
  return time.join(":") + " " + suffix;
}

function dateInput(milliseconds) {
	var day, month, year;
	dateObject = new Date(milliseconds);
	day = dateObject.getDate();
	if (day < 10) {
  		day = "0" + day;
	}

	month = dateObject.getMonth() + 1;
	if (month < 10) {
  		month = "0" + month;
  	}

	year = dateObject.getFullYear();
	return year + "-" + month + "-" + day;
}

function randomBpData() {
	var data = [];
	var date = new Date();
	var mils = date.getTime()
	var i;
	var entries = [];
	for (i = 0; i < 100; i++)
	{
		mils -= 23940000 // ~7 hours
		entries.push ({
			date:mils,
			systolic: Math.floor((Math.random() * 15) + 115),
			diastolic: Math.floor((Math.random() * 15) + 70)
		})
	}
	return entries;
}