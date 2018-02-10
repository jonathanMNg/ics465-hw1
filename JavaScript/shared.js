//javascript function for all html files

//this function will get the element for the hidden elements
//then it will display the elements on trigger if the item is hidden
//otherwise, it will be hidden again.
//It also get the buttonText from the button, to implement it to
//the popup, to display the types of threat in the popup message
function popupVisibility(id, buttonText) {
  let e = document.getElementById(id);
  if(buttonText != null) {
    document.getElementById('alertType').textContent = buttonText;
  }

  if(e.style.display == 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }

}
//this function is just like popupVisibility
//however, instead of display type of threat,
//this function will be trigger if the user click continue
//to send alert.
//and prompt the user to type "Serious Threat" (get the "input" element from id)
//if user entered correct, the warning will be sent.
//otherwise it will display error
function typeToConfirm(id) {
  let e = document.getElementById(id);
  if(e.value == "Serious Threat")
  {
    alert("Warning has been sent!!");
    popupVisibility('typeToConfirm', null);
  }
  else
  {
    alert("Incorrect, try again!");
  }
  e.value = "";
}
//this function will add the popupVisibility to every button
//in the html element when window is onload
window.onload = function init() {
  let buttons =document.getElementsByClassName('button');
  _.map(buttons, function(button) {
    if(button.getAttribute('onclick') != '') {
      button.setAttribute('onclick', `popupVisibility('popupConfirm', '${button.innerText}')`);
    }
  });
}