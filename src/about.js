export default function About() {
	const about = document.createElement('div');
	about.id = "about";
	const title = document.createElement('h2');
	title.textContent = "About";
	about.appendChild(title);
	const phone = document.createElement('p');
	phone.textContent = "Phone: 123-456-7890";

	const mail = document.createElement('p')
	mail.textContent = "Email: jondoe@email.com";

	about.appendChild(phone);
	about.appendChild(mail);
	return about;
}

