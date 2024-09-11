let playingSounds = []; // Array om de momenteel spelende geluiden op te slaan

function playSound(soundName) {
    const audio = new Audio(`Sounds/${soundName}.mp3`);
    audio.play();
    playingSounds.push(audio); // Voeg het geluid toe aan de lijst van spelende geluiden
    audio.onended = () => {
        playingSounds = playingSounds.filter((a) => a !== audio); // Verwijder het geluid als het is gestopt
    };
}

function muteAllSounds() {
    playingSounds.forEach(audio => audio.pause()); // Pauzeer alle geluiden
    playingSounds = []; // Leeg de lijst van spelende geluiden
}

function resetSoundboard() {
    muteAllSounds(); // Stop alle geluiden
    // Hier kun je andere resetfunctionaliteiten toevoegen als dat nodig is
}
