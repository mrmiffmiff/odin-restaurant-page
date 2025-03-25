function showHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("div");
    home.id = "home";

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "Oakland Kosher Pizza";
    home.appendChild(mainHeader);

    const secondHeader = document.createElement("h2");
    secondHeader.textContent = "Grand Opening 20XX";
    home.appendChild(secondHeader);

    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = "Welcome, one and all, to the website of the brand-new kosher pizza restaurant we've all wanted in Oakland. In this incredible establishment, we are dedicated to bringing you delicious pizza, pizza that meets not only the standards of kashrut of our community, but also the standards of our taste buds! It's just good pizza! So good, that it can appeal to anyone and everyone! You don't need to keep kosher to come here! You don't need to be Jewish, even!";
    home.appendChild(firstParagraph);

    const secondParagraph = document.createElement("p");
    secondParagraph.textContent = "This has been the dream of a few members of our community for years. And now, it's finally here!";
    home.appendChild(secondParagraph);

    const thirdParagraph = document.createElement("p");
    thirdParagraph.textContent = "So please come down to our restaurant at [Insert Address Here] and have some incredible pizza.";
    home.appendChild(thirdParagraph);

    const hourHeader = document.createElement("h3");
    hourHeader.textContent = "Hours";
    home.appendChild(hourHeader);

    const hoursList = document.createElement("ul");

    const sunday = document.createElement("li");
    sunday.textContent = "Sunday: 10:00 AM - 9:00 PM";
    hoursList.appendChild(sunday);
    const monday = document.createElement("li");
    monday.textContent = "Monday: 11:30 AM - 9:00 PM";
    hoursList.appendChild(monday);
    const tuesday = document.createElement("li");
    tuesday.textContent = "Tuesday: 11:30 AM - 9:00 PM";
    hoursList.appendChild(tuesday);
    const wednesday = document.createElement("li");
    wednesday.textContent = "Wednesday: 11:30 AM - 9:00 PM";
    hoursList.appendChild(wednesday);
    const thursday = document.createElement("li");
    thursday.textContent = "Thursday: 11:30 AM - 8:00 PM";
    hoursList.appendChild(thursday);
    const friday = document.createElement("li");
    friday.textContent = "Friday: 10:00 AM - 2:00 PM";
    hoursList.appendChild(friday);
    const saturday = document.createElement("li");
    saturday.textContent = "Saturday: Closed";
    hoursList.appendChild(saturday);

    const chagim = document.createElement("p");
    chagim.textContent = "Closed for Chagim";
    hoursList.appendChild(chagim);

    home.appendChild(hoursList);

    content.appendChild(home);
}

export default showHome;