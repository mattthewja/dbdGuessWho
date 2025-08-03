// character lists
const killers = [
    "Trapper.png",
    "Wraith.png",
    "Billy.png",
    "Nurse.png",
    "Myers.png",
    "Hag.png",
    "Doctor.png",
    "Huntress.png",
    "Bubba.png",
    "Freddy.png",
    "Pig.png",
    "Clown.png",
    "Spirit.png",
    "Legion.png",
    "Plague.png",
    "Ghostface.png",
    "Demo.png",
    "Oni.png",
    "Deathslinger.png",
    "Pyramid.png",
    "Blight.png",
    "Twins.png",
    "Trickster.png",
    "Nemesis.png",
    "Pinhead.png",
    "Artist.png",
    "Sadako.png",
    "Dredge.png",
    "Wesker.png",
    "Knight.png",
    "SkullMerchant.png",
    "Singu.png",
    "Alien.png",
    "Chucky.png",
    "Unknown.png",
    "Vecna.png",
    "DarkLord.png",
    "Doggo.png",
    "Kaneki.png",
    "SpringTrap.png"
];

const survivors = [
    "Wesker.png" // for debug
];

const allCharacters = killers.concat(survivors);

let currentMode = "killer";
let characters = killers;

//* Game state interaction
function changeGamemode() {
    if (currentMode == 'killer') {
        currentMode = "survivor";
        characters = survivors;
    } else if (currentMode == 'survivor') {
        currentMode = "all";
        characters = allCharacters;
    } else {
        currentMode = 'killer',
        characters = killers;
    };

    randomisePlayerCharacter();
    initialiseBoard();
};

const changeModeButton = document.getElementById("change-mode");
changeModeButton.addEventListener("click", () => {
    changeGamemode();
    console.log(`Changed to ${currentMode}`);
})

//* Player portrait
function randomisePlayerCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const chosenCharacter = characters[randomIndex];

    const playerPortrait = document.getElementById("player-portrait");
    playerPortrait.src = `assets/portraits/${chosenCharacter}`;
    playerPortrait.alt = `You are ${chosenCharacter.replace('.png', '')}`;
};

const newCharacterButton = document.getElementById("change-character");
newCharacterButton.addEventListener("click", () => {
    randomisePlayerCharacter(characters);

    document.getElementById("player-info");
    playerInfo.classList.remove("flipped");
})

// allow player to hide own portrait
const playerInfo = document.getElementById("player-info");
playerInfo.addEventListener("click", () => {
    playerInfo.classList.toggle("flipped");
});

//* populate and logic for hiding portraits //

function initialiseBoard() {
    const board = document.querySelector(".board");
    board.innerHTML = "";

    characters.forEach(file => {
        const card = document.createElement("div");
        card.className = "card";

        const portrait = document.createElement("img");
        portrait.src = `assets/portraits/${file}`;
        portrait.className = "portrait";

        const flipped = document.createElement("img");
        flipped.src = `assets/icons/portraitFlippedIcon.png`;
        flipped.className = "flipped-img-icon";

        card.appendChild(portrait);
        card.appendChild(flipped);
        board.appendChild(card);

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        })
    })
}

// Page start setup
randomisePlayerCharacter();
initialiseBoard();