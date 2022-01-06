//using moment.js and jQuery to indicate current time
var now = moment();
//making the text to disolay in the website
$("#currentDay").text(now.format("dddd MMMM DD, YYYY"));
// set to 12:00 am today
var currentTime = moment().startOf('d').add(10, 'h');
console.log(currentTime);
var currentHour = moment().format('H');
console.log(currentHour);

//making the timeblocks for the day
for (var i = 10; i < 24; i++) {
    var timeSlot = currentTime.add(1, "hour").format("HH:mm A");
    //give a temp variable for indicate future use
    var temp;
}
//if statement for timeblocks
console.log(timeSlot);