const dictionary = 
    [
        ["ب", 1],
        ["پ", 3],
        ["ت", 2],
        ["ث", 3],
        ["ج", 1],
        ["چ", 3],
        ["خ", 1],
        ["ذ", 1],
        ["ز", 1],
        ["ژ", 3],
        ["ش", 3],
        ["ض", 1],
        ["غ", 1],
        ["ف", 1],
        ["ق", 2],
        ["ن", 1],
    ];
const input = document.querySelector(".input input");
const btn = document.querySelector(".btn button");
const content = document.querySelector(".content");
btn.addEventListener("click", countFunction);
function countFunction() {
    let count = 0
    const letter = input.value.split("");
    console.log(letter)
    letter.forEach(element => {
        dictionary.forEach(e => {
            if (element == e[0]) {
                count = count + e[1];
            }
        });
    });
    console.log(count)
    const result = document.createElement("p");
    result.innerHTML = `تعداد نقطه ها : ${count}`;
    content.appendChild(result);
}
