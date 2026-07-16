import { API_KADAI05 } from "./config.js";
const URL = API_KADAI05;
const fetcData = await fetch(URL, {
    method: "GET",
    headers: {},
    // body: {},
    cache: "no-store",
});
const APIData = await fetcData.json();
console.log(APIData);
const body = document.querySelector("body");
const navList = document.querySelector("#category-navi ul");
const categoryWrap = document.querySelector("#category-wrap");
let categoryName = "ALL";
console.log(categoryWrap);

APIData.categories.forEach((c) => {
    navList.insertAdjacentHTML(
        "beforeend",
        `
          <li>${c}</li>
        `,
    );
});

body.addEventListener("click", (e) => {
    const list = document.querySelectorAll("#category-navi ul li");
    list.forEach((l) => {
        l.classList.remove("active");
        if (l == e.target) {
            l.classList.add("active");
            if (l.textContent == "すべてのセレクタ") {
                categoryName = "ALL";
            } else {
                categoryName = l.textContent;
            }
        }
    });
    renderData();
});

function renderData() {
    let renderHTML = "";
    APIData.selectors.forEach((s) => {
        if (categoryName == "ALL") {
            renderHTML += `
              <div class="category">
                <h2>${s.category}</h2>
              <dl>
            `;
            s.list.forEach((l) => {
                renderHTML += `
                    <dt>${l.type}</dt>
                    <dd>${l.range}</dd>
                `;
            });
            renderHTML += `
                </dl>
              </div>
            `;
        } else if (categoryName == s.category) {
            renderHTML += `
              <div class="category">
                <h2>${s.category}</h2>
                <dl>
            `;
            s.list.forEach((l) => {
                renderHTML += `
                    <dt>${l.type}</dt>
                    <dd>${l.range}</dd>
                `;
            });
            renderHTML += `
                </dl>
              </div>
            `;
        } else {
            return;
        }
    });
    categoryWrap.innerHTML = renderHTML;
}

renderData();
