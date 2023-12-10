let sourceType = localStorage.getItem('sourceType') || 'webpage';

function applySourceType() {
  document.getElementById(sourceType).checked = true;
  switch (sourceType) {
    case 'webpage':
      document.getElementById('link-input').style.display = 'inline';
      document.getElementById('publisher-input').style.display = 'none';
      break;
    case 'book':
      document.getElementById('publisher-input').style.display = 'inline';
      document.getElementById('link-input').style.display = 'none';
      break;
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
