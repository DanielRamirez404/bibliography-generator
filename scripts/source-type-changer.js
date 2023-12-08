let sourceType = 'webpage'; //for later use

function setSourceType() {
  if (document.getElementById('webpage').checked) {
    sourceType = 'webpage';
    document.getElementById('link-input').style.display = 'inline';
    document.getElementById('publisher-input').style.display = 'none';
  } else if (document.getElementById('book').checked) {
    sourceType = 'book';
    document.getElementById('publisher-input').style.display = 'inline';
    document.getElementById('link-input').style.display = 'none';
  }
}
