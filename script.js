let randomNumber = generateRandomNumber();
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let xAttempts = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnterButton);

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        document.querySelector(
            ".screen2 h2"
        ).innerText = `Acertou em ${xAttempts} tentativa(s)`;
    } else if (
        Number(inputNumber.value) > 10 ||
        Number(inputNumber.value < 0)
    ) {
        alert("Número inválido. Tente um número entre 0 e 10");
    }

    xAttempts++;
    inputNumber.value = "";
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
    randomNumber = generateRandomNumber();
}

function generateRandomNumber() {
    return Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleEnterButton(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        handleResetClick();
    }
}
