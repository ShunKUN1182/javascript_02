const todo = document.querySelector(".📝");
const modal = document.querySelector(".🪟");

const createConfirm = (modal) => {
    const messageWrap = modal.querySelector(".🪟__💬");

    const show = (message = "") => {
        messageWrap.textContent = message;
        modal.showModal();
        return new Promise((resolve) => {
            // ダイアログのOKボタンをクリックした時
            const okBtn = modal.querySelector(".🪟__🔘--✅");
            okBtn.addEventListener(
                "click",
                () => {
                    modal.close();
                    resolve(true);
                },
                { once: true },
            );
            //ダイアログのキャンセルボタンをクリック
            const ngBtn = modal.querySelector(".🪟__🔘--❌");
            ngBtn.addEventListener(
                "click",
                () => {
                    modal.close();
                    resolve(false);
                },
                { once: true },
            );
        });
    };

    return { show };
};
const confirm = createConfirm(modal);

todo.addEventListener("click", async (e) => {
    const element = e.target;

    if (
        element.classList.contains("📝__🗑️") ||
        element.classList.contains("material-symbols-outlined")
    ) {
        const todoItemWrap = element.closest(".📝__📄");
        if (!(await confirm.show("このアイテムを削除しますか？"))) {
            return;
        }
        todoItemWrap.remove();
    }
});
