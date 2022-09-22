import greenBeanCassImg from './assets/greenbeancass.jpg';
import macNCheeseImg from './assets/macncheese.jpeg';
export function menu(){
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Saad's Restaurant!";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const greenBean = document.createElement("img");
    greenBean.classList.add("image");
    greenBean.src = greenBeanCassImg;
    greenBean.alt = "Image of Green Bean Casserole";
    contentDiv.appendChild(greenBean);

    const para1GreenBean = document.createElement("p");
    para1GreenBean.classList.add("menu-copy");
    para1GreenBean.textContent = "An amazing Green Bean Casserole that's a favorite for many people!";
    contentDiv.appendChild(para1GreenBean);

    const macnCheese = document.createElement("img");
    macnCheese.classList.add("image");
    macnCheese.src = macNCheeseImg;
    macnCheese.alt = "Image of Mac N Cheese";
    contentDiv.appendChild(macnCheese);

    const para1MacNCheese = document.createElement("p");
    para1MacNCheese.classList.add("menu-copy");
    para1MacNCheese.textContent = "This simple Mac N Cheese will leave you satisfied!";
    contentDiv.appendChild(para1MacNCheese);
}