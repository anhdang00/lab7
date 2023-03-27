function init(){
//add your javascrip between these two lines of code
  var content = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', function(){
  	alert("Anh Dang: " + content.value);
  });
 };







window.addEventListener('load', init);
