// 非同期通信 AJAX

// fetch(URL, オブジェクト);

import SAMPLE08_URL from "./config.js";

// thenで処理を順番通りに繋ぐ
// fetch("http://10.202.10.3/ecc/sfukusima/PHP1/sample08-1.php")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     });

//awaitを使って、処理待ちを指定する。
const fetchSweetsData = await fetch(SAMPLE08_URL).then((response) => response.json());

console.log(fetchSweetsData);
