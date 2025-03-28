import MenuItem from "./menuItem";

function showMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.id = "menu";

    let menuItems = [];

    menuItems.push(new MenuItem("Cheese", "A classic: Tomato sauce, mozzarella, asiago, parmesan, and a little bit of ground pepper", 9.99),
        new MenuItem("Margherita", "Tomatoes, mozzarella, basil, olive oil", 11.99),
        new MenuItem("Veggie", "As cheese, with tomatoes, olives, bell peppers, and onions", 12.99),
        new MenuItem("Special of the Day", "Ask the staff", 10.99));

    for (let pizza of menuItems) {
        pizza.buildElement(menu);
    }

    content.appendChild(menu);
}

export default showMenu;