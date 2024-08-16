const songs = [
    { title: "Da Bóg kiedyś zasiąść w Polsce wolnej (z cyklu Polonia Resurrecta - J. Lechoń)", file: "plik.mp3/Da Bóg kiedyś zasiąść w Polsce wolnej (z cyklu Polonia Resurrecta - J. Lechoń).mp3" },
    { title: "2 na 10", file: "plik.mp3/2/10.mp3" },
    // Dodaj resztę piosenek tutaj
];

const playBtn = document.getElementById('playBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const songSelect = document.getElementById('songSelect');
const result = document.getElementById('result');
const bioModal = document.getElementById('bioModal');
const closeModal = document.querySelector('.close');
let attempts = 0;
let maxAttempts = 3;
let currentSong = null;
let audio = null;
let fragmentStartTime = null;

// Dodaj piosenki do listy rozwijanej
songs.forEach(song => {
    const option = document.createElement('option');
    option.value = song.title;
    option.textContent = song.title;
    songSelect.appendChild(option);
    console.log(`Dodano piosenkę: ${song.title} z pliku ${song.file}`);
});

closeModal.addEventListener('click', () => {
    bioModal.style.display = 'none';
});

playBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    currentSong = songs[randomIndex];

    if (!fragmentStartTime) {
        fragmentStartTime = Math.floor(Math.random() * (audio.duration - 10));
    }

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    audio = new Audio(currentSong.file);

    audio.addEventListener('loadedmetadata', () => {
        console.log(`Odtwarzany plik: ${currentSong.title}, Długość: ${audio.duration} sekund`);

        if (audio.duration > 10) {
            audio.currentTime = fragmentStartTime;
            audio.play();

            setTimeout(() => {
                audio.pause();
            }, 10000); // Play for 10 seconds
        } else {
            console.warn("Plik jest za krótki, aby odtworzyć 10-sekundowy fragment.");
        }
    });

    audio.play().catch(error => {
        console.error("Błąd przy odtwarzaniu: ", error);
    });
});

submitBtn.addEventListener('click', () => {
    const selectedTitle = songSelect.value;

    if (selectedTitle === currentSong.title) {
        result.textContent = "Brawo! To poprawny tytuł!";
        result.classList.remove("error");
        result.classList.add("success");
        showConfetti();
        resetBtn.style.display = "block";
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            result.textContent = `Niestety, przegrałeś. To była piosenka: ${currentSong.title}`;
            result.classList.remove("success");
            result.classList.add("error");
            resetBtn.style.display = "block";
        } else {
            result.textContent = `Niestety, to nie jest poprawny tytuł. Pozostało prób: ${maxAttempts - attempts}`;
            result.classList.remove("success");
            result.classList.add("error");
        }
    }
});

resetBtn.addEventListener('click', () => {
    songSelect.value = "";
    result.textContent = "";
    result.classList.remove("success", "error");
    resetBtn.style.display = "none";
    attempts = 0;
    fragmentStartTime = null;
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});

// Funkcja do wyświetlenia konfetti w przypadku wygranej
function showConfetti() {
    for (let i = 0; i < 100; i++) { // Zwiększ ilość konfetti
        const confettiElement = document.createElement('div');
        confettiElement.className = "confetti";
        confettiElement.style.left = `${Math.random() * 100}%`;
        confettiElement.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiElement.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confettiElement);

        setTimeout(() => {
            confettiElement.remove();
        }, 3000);
    }
}
