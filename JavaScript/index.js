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