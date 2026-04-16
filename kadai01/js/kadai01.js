const btns = document.querySelectorAll(".set-btn");
const clearBtn = document.querySelector(".clear-btn");
const viewImg = document.querySelector("#img-field img");
console.log(viewImg);

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        viewImg.src = `img/${e.currentTarget.dataset.name}.${e.currentTarget.dataset.ex}`;
    });
});

clearBtn.addEventListener("click", () => {
    viewImg.src = `img/img_kadai01_000.jpg`;
});
