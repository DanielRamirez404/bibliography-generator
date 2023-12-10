function getCitation() {
  let citation = '';
  if (document.getElementById('name').value !== '' && document.getElementById('last-name').value !== '') {
    citation += document.getElementById('last-name').value;
    citation += ' ';
    citation += document.getElementById('last-name').value[0];
    citation += '. ';
    citation += '(' + document.getElementById('year').value + '). ';
    citation += document.getElementById('title').value + '. ';
  } else {
    citation += document.getElementById('title').value + ' ';
    citation += '(' + document.getElementById('year').value + '). ';
  }
  switch (sourceType) {
    case 'webpage':
      citation += document.getElementById('link').value;
      break;
    case 'book':
      citation += document.getElementById('publisher').value;
      break;
  }
  return citation;
}

function updateOutput() {
  document.querySelector('output').innerHTML = getCitation();
}
