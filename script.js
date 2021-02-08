
function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
	  var day = date.getDate();


    var monthList = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
    'августа', 'сентября', 'октября', 'ноября', 'декабря');
    var month = monthList[date.getMonth()];


    if(minutes < 10)
    {minutes = '0' + minutes;}
	if(day < 10)
    {day = '0' + day;}
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;


	document.getElementById('datedisplay').innerHTML = day + ' ' + month;
}
setInterval(getDate, 0);


var radio = Array.apply(null, document.querySelectorAll("input[name=a_o]"));

radio.forEach(radioBtn => {
  var checked = false;

  radioBtn.addEventListener("mousedown", event => {
    checked = radioBtn.checked;
  });
  radioBtn.addEventListener("click", event => {
    radioBtn.checked = !checked;
  });
});
