let sourceType = localStorage.getItem('sourceType') || 'webpage';

function applySourceType() {
  if (sourceType === 'webpage') {
    document.getElementById('webpage').checked = true;
    document.getElementById('link-input').style.display = 'inline';
    document.getElementById('publisher-input').style.display = 'none';
  } else if (sourceType === 'book') {
    document.getElementById('book').checked = true;
    document.getElementById('publisher-input').style.display = 'inline';
    document.getElementById('link-input').style.display = 'none';
  }
}

function changeSourceType() {
  if (document.getElementById('webpage').checked) {
    sourceType = 'webpage'
  } else if (document.getElementById('book').checked) {
    sourceType = 'book';
  }
  localStorage.setItem('sourceType', sourceType);
  applySourceType();
}
