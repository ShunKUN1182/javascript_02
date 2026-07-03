let element = document.createElement("p");

element.textContent = "動的に作成したタグ";
console.log(element);

document.body.append(element);

const insertAdjacentBox = document.querySelector(".insert");

insertAdjacentBox.style.border = "1px solid tomato";

insertAdjacentBox.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
insertAdjacentBox.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
insertAdjacentBox.insertAdjacentHTML("beforeend", "<p>beforeend</p>");
insertAdjacentBox.insertAdjacentHTML(
    "afterend",
    `
      <div>
        <p>afterend</p>
      </div>
    `,
);

const appendBox = document.querySelector(".append");
appendBox.append(element);

// document.querySelectorAll("p").forEach((e) => {
//     e.addEventListener("click", (eve) => {
//         e.remove();
//     });
// });

// 動的に追加されるタグに対してのイベントを上位の存在に予約する;
document.body.addEventListener("click", (e) => {
    console.log(e.target.tagName);

    if (e.target.tagName == "P") {
        e.target.remove();
    } else {
        console.log("はずれー残念でしたー！！");
    }
});
