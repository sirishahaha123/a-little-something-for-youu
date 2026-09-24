/* =========================
   GET ELEMENTS
========================= */

const opening = document.getElementById("opening");
const howAreYou = document.getElementById("howAreYou");
const messageSection = document.getElementById("messageSection");
const finalSection = document.getElementById("finalSection");

const helloBtn = document.getElementById("helloBtn");
const feelingBtn = document.getElementById("feelingBtn");
const lastThingBtn = document.getElementById("lastThingBtn");

const reaction = document.getElementById("reaction");
const personalMessage = document.getElementById("personalMessage");
const tomJerry = document.getElementById("tomJerry");


/* =========================
   SCREEN CHANGE FUNCTION
========================= */

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(section => {
        section.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   HELLO BUTTON
========================= */

helloBtn.addEventListener("click", () => {

    helloBtn.style.transform = "scale(0.9)";

    setTimeout(() => {
        showScreen(howAreYou);
    }, 300);

});


/* =========================
   PLAYFUL BUTTONS
========================= */

const choiceButtons = document.querySelectorAll(".choice-btn");

choiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const message = button.dataset.message;

        reaction.textContent = message;

        reaction.style.animation = "none";

        setTimeout(() => {
            reaction.style.animation = "reactionPop 0.5s ease";
        }, 10);

    });

});


/* =========================
   PERSONAL MESSAGE
========================= */

feelingBtn.addEventListener("click", () => {

    showScreen(messageSection);

    feelingBtn.disabled = true;

    const text =
        "Potti fellow..... pandhiii... pehh 🤧👊\nAnyway… just wanted to say I’m missing you";

    personalMessage.innerHTML = "";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            if (text[index] === "\n") {
                personalMessage.innerHTML += "<br>";
            } else {
                personalMessage.innerHTML += text[index];
            }

            index++;

            setTimeout(typeText, 45);

        } else {

            setTimeout(() => {

                tomJerry.classList.remove("hidden");

                setTimeout(() => {

                    lastThingBtn.classList.remove("hidden");

                }, 4000);

            }, 700);
        }
    }

    typeText();

});


/* =========================
   LAST THING
========================= */

lastThingBtn.addEventListener("click", () => {

    showScreen(finalSection);

    document.body.style.transition = "background 1s ease";

    document.body.style.background =
        "linear-gradient(135deg, #7666b8, #8fb9d8, #9a8bd1)";

});