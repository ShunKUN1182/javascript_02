const storageKey = "sample04";
const deleteBtn = document.querySelector(".btn-remove");
const saveButton = document.querySelector(".btn-save");
let storageValue = localStorage.getItem(storageKey) || [];
// if (localStorage.getItem(storageKey)) {
//     storageValue = localStorage.getItem(storageKey);
// }

// localStorage.setItem(storageKey, Temporal.Now.plainDateTimeISO());

console.log(storageValue);

saveButton.addEventListener("click", () => {
    const keyword = document.querySelector(".keyword").value;
    if (keyword) {
        // JSONフォーマットから配列へ戻す
        console.log(typeof storageValue);

        if (typeof storageValue === "string") {
            storageValue = JSON.parse(storageValue);
        }
        storageValue.push(keyword);
        // 配列をJSONフォーマットへ変換
        storageValue = JSON.stringify(storageValue);
        localStorage.setItem(storageKey, keyword);
        console.log(storageValue);
    }
});

deleteBtn.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
});
