var play = document.createElement("button");
var showAnswer = document.getElementById("ansbuta"); // the existing answer button
play.innerHTML = "Show Answer";
play.classList.add("btn", "btn-lg", "btn-primary");
play.onclick = function () {
    var word = document.getElementById("qa").innerText;
    word = word.trim();
    word = word.toLowerCase();
    word = word.replace(". ", "");
    new Audio(chrome.extension.getURL("assets/" + word + ".m4a")).play();
    showAnswer.click(); // pass the click forward to the existing btn
};
// but the new button next to the old one and hide the old one
showAnswer.parentElement.appendChild(play);
play.focus();
showAnswer.style.display = "none";
