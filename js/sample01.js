// sample01.js

const p = document.querySelector("p");
const className = document.querySelector("#className");

// カスタムデータ属性へのアクセス
console.log(p.dataset);

//属性名を指定して値を取得する
console.log(p.getAttribute("data-short-name"));

// 属性を設定する
p.setAttribute("data-school-year", "2");
p.dataset.class = "A";

console.log(p.dataset);

className.textContent = `
  "${p.dataset.shortName}${p.dataset.schoolYear}${p.dataset.class}"
`;
