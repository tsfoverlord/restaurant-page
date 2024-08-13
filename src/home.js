import burger from './burger.svg';

export default function Home() {
	const home = document.createElement('div');
	home.id = "home-container";
	const title = document.createElement('h2');
	title.textContent = "Home";
	home.appendChild(title);

	const bugerImage = new Image();
	bugerImage.src = burger;
	home.appendChild(bugerImage);

	const quote = document.createElement('q');
	quote.innerHTML = "Burger is always better";
	home.appendChild(quote);
	return home;
}

