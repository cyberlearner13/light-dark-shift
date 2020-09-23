const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

const darkBgcolor = 'rgb(0 0 0 / 50%)';
const lightBgcolor = 'rgb(255 255 255 / 50%)';

// Mode styles
function changeMode(mode) {
  let color = mode ? 'dark' : 'light';
  nav.style.backgroundColor = mode ? darkBgcolor : lightBgcolor;
  textBox.style.backgroundColor = mode ? lightBgcolor : darkBgcolor;
  toggleIcon.children[0].textContent = mode ? 'Dark Mode' : 'Light Mode';
  mode
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode(color);
}

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Switch Theme Dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    changeMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    changeMode(false);  
  }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    changeMode(true);
  }
}
