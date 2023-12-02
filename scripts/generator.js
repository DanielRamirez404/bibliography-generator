function getCitation() {
  let citation = '';
  if (document.getElementById('name').value !== '' && document.getElementById('last-name').value !== '') {
    citation += document.getElementById('last-name').value;
    citation += ' ';
    citation += document.getElementById('last-name').value[0];
    citation += '. ';
    citation += '(' + document.getElementById('year').value + '). ';
    citation += document.getElementById('title').value + '. ';
    if (document.getElementById('webpage').checked) {
      citation += document.getElementById('link').value;
    } else if (document.getElementById('book').checked) {
      citation += document.getElementById('publisher').value;
    }
  } else {
    citation += document.getElementById('title').value + ' ';
    citation += '(' + document.getElementById('year').value + '). ';
    if (document.getElementById('webpage').checked) {
      citation += document.getElementById('link').value;
    } else if (document.getElementById('book').checked) {
      citation += document.getElementById('publisher').value;
    }
  }
  return citation;
}

function updateOutput() {
  document.querySelector('output').innerHTML = getCitation();
}
