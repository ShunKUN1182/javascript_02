const tbody = document.querySelector("#tbody");
const inputText = document.querySelector(".add-form input");
const submitBtn = document.querySelector(".add-form button");
let trCheck = false;

console.log(inputText, submitBtn);

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputText.value) return;

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
