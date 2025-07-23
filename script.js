// character list
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

// choose random player killer
const randomIndex = Math.floor(Math.random() * killers.length);
const chosenKiller = killers[randomIndex];

const playerPortrait = document.getElementById("player-portrait");
playerPortrait.src = `assets/portraits/${chosenKiller}`;
playerPortrait.alt = `You are ${chosenKiller.replace('.png', '')}`;

// allow player to hide own portrait
const playerInfo = document.getElementById("player-info");
playerInfo.addEventListener("click", () => {
    playerInfo.classList.toggle("flipped");
})

// populate and logic for hiding portraits //
const board = document.querySelector(".board");

killers.forEach(file =>{
    const card = document.createElement("div");
    card.className = "card";

    const portrait = document.createElement("img");
    portrait.src = `assets/portraits/${file}`;
    portrait.className = "portrait"

    const flipped = document.createElement("img");
    flipped.src = 'assets/icons/portraitFlippedIcon.png';
    flipped.className = "flipped-img-icon"

    card.appendChild(portrait);
    card.appendChild(flipped);
    board.appendChild(card);

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});