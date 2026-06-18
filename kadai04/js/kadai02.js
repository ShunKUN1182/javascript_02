const tbody = document.querySelector("#tbody");
const inputText = document.querySelector(".add-form input");
const submitBtn = document.querySelector(".add-form button");
const storageKey = "kadai04";
let storageValue = JSON.parse(localStorage.getItem(storageKey)) || [];
console.log(storageValue);

storageValue.forEach((e) => {
    tbody.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
          <td class="comment">${e}</td>
          <td class="control">
            <button type="button" class="remove">削除</button>
          </td>
        </tr>
      `,
    );
});

let removeBtns = document.querySelectorAll(".remove");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputText.value) return;

    storageValue.push(inputText.value);
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
    tbody.insertAdjacentHTML(
        "beforeend",
        `
          <tr>
            <td class="comment">${inputText.value}</td>
            <td class="control">
              <button type="button" class="remove">削除</button>
            </td>
          </tr>
        `,
    );
    removeBtns = document.querySelectorAll(".remove");
});

removeBtns.forEach((e) => {
    e.addEventListener("click", () => {
        console.log("aiueo");

        e.closest("tr").remove();
    });
});
