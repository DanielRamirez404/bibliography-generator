let theme = 'light';

function applyTheme() {
  const colors = document.querySelector(':root');
  if (theme === 'light') {
    colors.style.setProperty('--transparent-background', 'rgba(0, 0, 0, 0.08)');
    colors.style.setProperty('--background', '#e9ebec');
    colors.style.setProperty('--secondary-background', '#f7f8f8');
    colors.style.setProperty('--text', '#171b1c');
    colors.style.setProperty('--primary', '#b6adaa');
    colors.style.setProperty('--secondary', '#e1d4d0');
    colors.style.setProperty('--accent', '#746763');
  } else {
    colors.style.setProperty('--transparent-background', 'rgba(0, 0, 0, 1)');
    colors.style.setProperty('--background', '#171717');
    colors.style.setProperty('--secondary-background', '#f7f8f8');
    colors.style.setProperty('--text', '#f2f2f2');
    colors.style.setProperty('--primary', '#525152');
    colors.style.setProperty('--secondary', '#232423');
    colors.style.setProperty('--accent', '#7d7e7c');
  }
}

function changeTheme() {
  theme = (theme === 'light') ? 'dark' : 'light';
  applyTheme();
}