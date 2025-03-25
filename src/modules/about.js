function showAbout() {
    const content = document.querySelector("#content");

    const about = document.createElement("div");
    about.id = "about";

    const header = document.createElement("h2");
    header.textContent = "All About Us";
    about.appendChild(header);

    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "Now, I know what you're thinking. A kosher pizza restaurant? In Oakland? Yes, it's something we've all wanted for ages, but it's just a pipe dream, we can't actually have it. It simply wouldn't make money. It would cost more to maintain than it would make. No profits. Would hemorrhage money. Couldn't stay afloat. Just can't be done.";
    about.appendChild(aboutText1);

    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "Well, we rejected those assertions. Instead, we chose something different. We chose the impossible. We chose... Oakland Kosher Pizza. And now it's here. And you will love it."
    about.appendChild(aboutText2);

    content.appendChild(about);
}

export default showAbout;