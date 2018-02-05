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