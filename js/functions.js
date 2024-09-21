// functions.js

// Hae kaikki noppa-elementit
const diceElements = document.querySelectorAll('#dice img');

// Lisää kuuntelija jokaiselle noppa-elementille
diceElements.forEach(dice => {
    dice.addEventListener('click', () => {
        // Arvotaan satunnaisluku 1-6
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        // Aseta uusi kuva satunnaisluvun mukaan
        dice.src = `./img/${randomNumber}.png`;
    });
});

