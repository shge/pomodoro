$(function() {

setInterval(function(){console.log(moment().format('HH:mm:ss'));},30000); // dev
setInterval(function(){ // Prevent sleep
  setTimeout(function() {
    document.getElementById('video').play();
    console.log('Video played');
  }, 100);
}, 30000);

var target_time;
$('#start').on('click', function() {
  target_time = moment().add(moment.duration('0:25:00'));
  $('#timer').text('25:00'); // temp
});

var beep = new Audio('beep_short.mp3');
setInterval(function(){
  var diff = moment.duration(
    target_time.diff(moment())
  ).format('mm:ss', { trim: false });
  console.log(diff);
  if (diff.match(/00:00/)) {
    diff = '00:00';
    beep.play();
    console.log('Played: ' + moment().format());
  } else if (diff.match(/^-/)) {
    diff = '00:00';
  }
  $('#timer').text(diff);
}, 1000);

var timer = $('#timer').text();
moment.duration(timer);


}); // $
