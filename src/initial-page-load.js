import restaurantImg from './assets/restaurant-image.jpeg';

export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();
 
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Saad's Restaurant!";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = restaurantImg;
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    const paral = document.createElement("p");
    paral.classList.add("landing-page-copy");
    paral.textContent = "This is a very upscale restaurant that is well known around the world";
    contentDiv.appendChild(paral);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Please wear business casual attire in this restaurant!";
    contentDiv.appendChild(para2);
    
    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks!";
    contentDiv.appendChild(para3);
}