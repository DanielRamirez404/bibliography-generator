function getCitation() {
  const info = getInfo();
  let citation = '';
  if (info.author != '') {
    citation += info.author + ' ';
    citation += info.year + '. ';
    citation += info.title + '. ';
  } else {
    citation += info.title + ' ';
    citation += info.year + '. ';
  }
  switch (sourceType) {
    case 'webpage':
      citation += 'Retrieved from: ' + info.link;
      break;
    case 'book':
      citation += info.publisher;
      break;
  }
  return citation;
}

function getInfo() {
  return {
    author: getParsedAuthor(document.getElementById('name').value, document.getElementById('last-name').value),
    year: getParsedYear(document.getElementById('year').value),
    title: document.getElementById('title').value,
    link: document.getElementById('link').value,
    publisher: document.getElementById('publisher').value,
  };
}

function getParsedAuthor(name, lastName) {
  return (name === '') ? '' : ((lastName === '') ? name : lastName + '. ' + name[0] + '.');
}

function getParsedYear(year) {
  return (year === '') ? '(n.d)' : '(' + year + ')';
}

function updateOutput() {
  document.querySelector('output').innerHTML = getCitation();
}
