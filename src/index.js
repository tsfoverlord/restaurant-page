import './style.css';
import Home from './home';
import About from './about';
import Menu from './menu';

const root = document.querySelector("#container");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

function showPage(page) {
	root.innerHTML = "";
	root.appendChild(page);
}

homeBtn.addEventListener('click', (e) => {
	showPage(Home());
});

menuBtn.addEventListener('click', (e) => {
	showPage(Menu());
});

aboutBtn.addEventListener('click', (e) => {
	showPage(About());
});

showPage(Home());
