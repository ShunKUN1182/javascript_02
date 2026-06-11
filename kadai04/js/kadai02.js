const tbody = document.querySelector("#tbody");
const inputText = document.querySelector(".add-form input");
const submitBtn = document.querySelector(".add-form button");
const storageKey = "kadai04";
let storageValue = JSON.parse(localStorage.getItem(storageKey)) || [];
console.log(storageValue);

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputText.value) return;

    storageValue.push(inputText.value);
    JSON.stringify(storageValue);
    localStorage.setItem(storageKey, storageValue);
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

    const removeBtns = document.querySelectorAll(".remove");

    removeBtns.forEach((e) => {
        e.addEventListener("click", () => {
            e.closest("tr").remove();
        });
    });
});
