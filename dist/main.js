(()=>{"use strict";function e(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Saad's Restaurant!",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("top-image"),n.src=" ../src/assets/restaurant-image.jpeg",n.alt="Image of Restaurant",e.appendChild(n);const a=document.createElement("p");a.classList.add("landing-page-copy"),a.textContent="This is a very upscale restaurant that is well known around the world",e.appendChild(a);const s=document.createElement("p");s.classList.add("landing-page-copy"),s.textContent="Please wear business casual attire in this restaurant!",e.appendChild(s);const c=document.createElement("p");c.classList.add("landing-page-copy"),c.textContent="Thanks!",e.appendChild(c)}function t(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Saad's Restaurant!",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("image"),n.src="../src/assets/greenbeancass.jpg",n.alt="Image of Green Bean Casserole",e.appendChild(n);const a=document.createElement("p");a.classList.add("menu-copy"),a.textContent="An amazing Green Bean Casserole that's a favorite for many people!",e.appendChild(a);const s=document.createElement("img");s.classList.add("image"),s.src="../src/assets/macncheese.jpeg",s.alt="Image of Mac N Cheese",e.appendChild(s);const c=document.createElement("p");c.classList.add("menu-copy"),c.textContent="This simple Mac N Cheese will leave you satisfied!",e.appendChild(c)}e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",t)})();