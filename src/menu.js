export default function Menu() {
	const menu = document.createElement('div');
	menu.id = "menu";
	const title = document.createElement('h2');
	title.textContent = 'Menu';
	menu.appendChild(title);

	const menuItems = [
		{
			name: "Burgir",
			cost: 40,
		},
		{
			name: "Butter Chicken",
			cost: 60,
		},
		{
			name: "Pizza",
			cost: 110,
		},
		{
			name: "Ramen",
			cost: 100,
		},
		{
			name: "Nothing",
			cost: 0,
		},
	];

	const content = document.createElement('div');
	content.id = "menu-items";
	for (let i in menuItems) {
		content.appendChild(createDiv(menuItems[i]));
	}
	menu.appendChild(content);


	return menu;
}

function createDiv(item) {
	const itemDiv = document.createElement('div');
	itemDiv.classList.add('item');
	const itemName = document.createElement('h3');
	itemName.textContent = item.name;
	const itemPrice = document.createElement('p');
	itemPrice.textContent = "₹ " + item.cost;

	itemDiv.appendChild(itemName);
	itemDiv.appendChild(itemPrice);

	return itemDiv;
}






