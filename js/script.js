function init(){
//add your javascrip between these two lines of code
  var entryinput = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var textoutput = document.getElementById('textoutput');
  button.addEventListener('click', function(){
  	alert("Anh Dang: " + entryinput.value);
  	textoutput.innerHTML = entryinput.value;
  });
 };







window.addEventListener('load', init);
