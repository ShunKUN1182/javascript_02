const list = document.querySelector("#list");
const btn = document.querySelector("#btn");
const inputText = document.querySelector("#inputText");

btn.addEventListener("click", () => {
    if (!inputText.value) {
        alert("テキストフィールドに文字を入力してくださいな");
        return;
    }
    list.insertAdjacentHTML(
        "beforeend",
        `
          <li>
            <span>${inputText.value}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
          </li>
        `,
    );

    const completeBtn = document.querySelectorAll(".complete");
    const deleteBtn = document.querySelectorAll(".delete");

    deleteBtn.forEach((e) => {
        e.addEventListener("click", () => {
            e.closest("li").remove();
        });
    });

    completeBtn.forEach((ele) => {
        ele.addEventListener("click", () => {
            ele.closest("li").classList.add("remove");
        });
    });
});
