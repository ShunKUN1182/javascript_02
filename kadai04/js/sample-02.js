const addTodo = document.querySelector(".add-todo");
const inputTodo = document.querySelector(".input-todo");
const todo = document.querySelector(".todo");

addTodo.addEventListener("click", () => {
    let todoItem = inputTodo.value;
    if (!todoItem) {
        return;
    }
    todo.insertAdjacentHTML(
        "beforeend",
        `
        <li>
            <span class="label">${todoItem}</span>
            <button class="edit-todo">EDIT</button>
            <button class="delete">DELETE</button>
        </li>
        `,
    );

    const deleteBtn = document.querySelector("li:last-child .delete");
    console.log(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        deleteBtn.closest("li").remove();
    });

    const editBtn = document.querySelector("li:last-child .edit-todo");

    editBtn.addEventListener("click", () => {
        let text = editBtn.closest("li").textContent.split("\n")[1];

        editBtn.closest("li").insertAdjacentHTML(
            "afterbegin",
            `
              <input type="text" value="${text}">
            `,
        );
    });
});
