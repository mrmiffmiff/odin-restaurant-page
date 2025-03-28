export default class MenuItem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    buildElement(menuElement) {
        const itemElement = document.createElement("div");
        itemElement.classList.add("menuItem");

        const nameP = document.createElement("p");
        nameP.classList.add("menuItemName");
        nameP.textContent = this.name;
        itemElement.appendChild(nameP);

        const descP = document.createElement("p");
        descP.classList.add("menuItemDesc");
        descP.textContent = this.description;
        itemElement.appendChild(descP);

        const priceP = document.createElement("p");
        priceP.classList.add("menuItemPrice");
        priceP.textContent = `$${this.price}`;
        itemElement.appendChild(priceP);

        menuElement.appendChild(itemElement);
    }
}