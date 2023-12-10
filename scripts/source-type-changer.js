const SourceTypes = {
  Webpage: 'webpage',
  Book: 'book'
};

let currentType = localStorage.getItem('sourceType') || SourceTypes.Webpage;

function applySourceType() {
  document.getElementById(currentType).checked = true;
  switch (currentType) {
    case SourceTypes.Webpage:
      document.getElementById('link-input').style.display = 'inline';
      document.getElementById('publisher-input').style.display = 'none';
      break;
    case SourceTypes.Book:
      document.getElementById('publisher-input').style.display = 'inline';
      document.getElementById('link-input').style.display = 'none';
      break;
  }
}

function changeSourceType() {
  if (document.getElementById(SourceTypes.Webpage).checked) {
    currentType = SourceTypes.Webpage
  } else if (document.getElementById(SourceTypes.Book).checked) {
    currentType = SourceTypes.Book;
  }
  localStorage.setItem('sourceType', currentType);
  applySourceType();
}
