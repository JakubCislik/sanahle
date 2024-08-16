const songs = [
    { title: "Da Bóg kiedyś zasiąść w Polsce wolnej (z cyklu Polonia Resurrecta - J. Lechoń)", file: "Da Bóg kiedyś zasiąść w Polsce wolnej (z cyklu Polonia Resurrecta - J. Lechoń).mp3" },
    { title: "2/10", file: "2 na 10.mp3" },
    { title: "2.00 (prod. Arkadiusz)", file: "2.00 (prod. Arkadiusz).mp3" },
    { title: "Aha (kwiecień 2020)", file: "Aha (kwiecień 2020).mp3" },
    { title: "Ale jazz! (Vito Bambino)", file: "Ale jazz! (Vito Bambino).mp3" },
    { title: "Aniołom Szepnij To", file: "Aniołom Szepnij To.mp3" },
    { title: "audi (Miętha)", file: "audi (Miętha).mp3" },
    { title: "Baczyński (Pisz do mnie listy) (Ania Dąbrowska)", file: "Baczyński (Pisz do mnie listy) (Ania Dąbrowska).mp3" },
    { title: "Bajka (K.K. Baczyński)", file: "Bajka (K.K. Baczyński).mp3" },
    { title: "bez słów", file: "bez słów.mp3" },
    { title: "bipping", file: "bipping.mp3" },
    { title: "Cała sala śpiewa! (gość. u Sióstr Grabowskich)", file: "Cała sala śpiewa! (gość. u Sióstr Grabowskich).mp3" },
    { title: "Co ja robię tutaj?", file: "Co ja robię tutaj.mp3" },
    { title: "CZĄSTKA", file: "CZĄSTKA.mp3" },
    { title: "Czesława (Natalia Grosiak)", file: "Czesława (Natalia Grosiak).mp3" },
    { title: "Cześć, jak się masz? (Sobel)", file: "Cześć, jak się masz (Sobel).mp3" },
    { title: "Do kiedy jestem", file: "Do kiedy jestem.mp3" },
    { title: "Do w sztambuch (A. Mickiewicz)", file: "Do w sztambuch (A. Mickiewicz).mp3" },
    { title: "duszki", file: "duszki.mp3" },
    { title: "Eldorado (Daria Zawiałow)", file: "Eldorado (Daria Zawiałow).mp3" },
    { title: "Eldorado (E. A. Poe)", file: "Eldorado (E. A. Poe).mp3" },
    { title: "etc. (na disco)", file: "etc. (na disco).mp3" },
    { title: "Fafarafa", file: "Fafarafa.mp3" },
    { title: "Heal me", file: "Heal me.mp3" },
    { title: "Heartbreak", file: "Heartbreak.mp3" },
    { title: "hip hip hura!", file: "hip hip hura!.mp3" },
    { title: "hot16challenge2", file: "hot16challenge2.mp3" },
    { title: "Hymn (J. Słowacki)", file: "Hymn (J. Słowacki).mp3" },
    { title: "Idź", file: "Idź.mp3" },
    { title: "Interludium", file: "Interludium.mp3" },
    { title: "Intrada", file: "Intrada.mp3" },
    { title: "Invisible dress", file: "Invisible dress.mp3" },
    { title: "Irenka", file: "Irenka.mp3" },
    { title: "Jestem Twoją Bajką", file: "Jestem Twoją Bajką.mp3" },
    { title: "Kamień (A. Asnyk)", file: "Kamień (A. Asnyk).mp3" },
    { title: "Kapela gra", file: "Kapela gra.mp3" },
    { title: "Kaziu zakochaj się", file: "Kaziu zakochaj się.mp3" },
    { title: "kolońska i szlugi", file: "kolońska i szlugi.mp3" },
    { title: "Koniec", file: "Koniec.mp3" },
    { title: "Koronki", file: "Koronki.mp3" },
    { title: "Królowa dram", file: "Królowa dram.mp3" },
    { title: "Łezki me", file: "Łezki me.mp3" },
    { title: "Mamo tyś płakała (Igor Herbut)", file: "Mamo tyś płakała (Igor Herbut).mp3" },
    { title: "Marcepan", file: "Marcepan.mp3" },
    { title: "Melodia", file: "Melodia.mp3" },
    { title: "Miałam taki kaprys!!!", file: "Miałam taki kaprys!!!.mp3" },
    { title: "Miłość jest ślepa", file: "Miłość jest ślepa.mp3" },
    { title: "Mleczna droga", file: "Mleczna droga.mp3" },
    { title: "Mustang (gość. u Vita Bambino)", file: "Mustang (gość. u Vita Bambino).mp3" },
    { title: "Na grobie rycerz (M. Konopnicka)", file: "Na grobie rycerz (M. Konopnicka).mp3" },
    { title: "najlepszy dzień w moim życiu", file: "najlepszy dzień w moim życiu.mp3" },
    { title: "Nic dwa razy (W. Szymborska)", file: "Nic dwa razy (W. Szymborska).mp3" },
    { title: "Nimbostratus", file: "Nimbostratus.mp3" },
    { title: "No sory (wersja alternatywna)", file: "No sory (wersja alternatywna).mp3" },
    { title: "No sory", file: "No sory.mp3" },
    { title: "O czym śnisz (gośc. u Dawida Podsiadło)", file: "O czym śnisz (gośc. u Dawida Podsiadło).mp3" },
    { title: "O miłości", file: "O miłości.mp3" },
    { title: "Oczy", file: "Oczy.mp3" },
    { title: "oscar (Vito Bambino)", file: "oscar (Vito Bambino).mp3" },
    { title: "ostatnia nadzieja (Dawid Podsiadło)", file: "ostatnia nadzieja (Dawid Podsiadło).mp3" },
    { title: "Oto cała ja", file: "Oto cała ja.mp3" },
    { title: "Pańskie łzy to woda", file: "Pańskie łzy to woda.mp3" },
    { title: "Piękno tej niechcianej", file: "Piękno tej niechcianej.mp3" },
    { title: "płomień", file: "płomień.mp3" },
    { title: "Pocałunki (M. Pawlikowska-Jasnorzewska)", file: "Pocałunki (M. Pawlikowska-Jasnorzewska).mp3" },
    { title: "Początek", file: "Początek.mp3" },
    { title: "pora roku zła", file: "pora roku zła.mp3" },
    { title: "Pożal się Boże", file: "Pożal się Boże.mp3" },
    { title: "projekt nieznajomy nie kłamie", file: "projekt nieznajomy nie kłamie.mp3" },
    { title: "Proszę Pana", file: "Proszę Pana.mp3" },
    { title: "Proszę", file: "Proszę.mp3" },
    { title: "Przyjdzie Panie zaginąć (gość. u Michała Szpaka)", file: "Przyjdzie Panie zaginąć (gość. u Michała Szpaka).mp3" },
    { title: "puk puk", file: "puk puk.mp3" },
    { title: "Rehab", file: "Rehab.mp3" },
    { title: "Rich In Love (gość. u Matta Duska)", file: "Rich In Love (gość. u Matta Duska).mp3" },
    { title: "Rozwijając Rilkego (J. Cygan)", file: "Rozwijając Rilkego (J. Cygan).mp3" },
    { title: "róże", file: "róże.mp3" },
    { title: "Sad", file: "Sad.mp3" },
    { title: "Sama", file: "Sama.mp3" },
    { title: "Sen we śnie (Grzegorz Turnau)", file: "Sen we śnie (Grzegorz Turnau).mp3" },
    { title: "SIEBIE ZAPYTASZ", file: "SIEBIE ZAPYTASZ.mp3" },
    { title: "skanah", file: "skanah.mp3" },
    { title: "SOLO", file: "SOLO.mp3" },
    { title: "Szampan", file: "Szampan.mp3" },
    { title: "Szary świat (Kwiat Jabłoni)", file: "Szary świat (Kwiat Jabłoni).mp3" },
    { title: "Szmpan (wersja piano)", file: "Szmpan (wersja piano).mp3" },
    { title: "Śrubka", file: "Śrubka.mp3" },
    { title: "Święty Graal (Ten Stan)", file: "Święty Graal (Ten Stan).mp3" },
    { title: "Talenty i mankamenty", file: "Talenty i mankamenty.mp3" },
    { title: "ten Stan", file: "ten Stan.mp3" },
    { title: "Tęsknię sobie (Artur Rojek)", file: "Tęsknię sobie (Artur Rojek).mp3" },
    { title: "To był dobry dzień", file: "To był dobry dzień.mp3" },
    { title: "To ja a nie inna", file: "To ja a nie inna.mp3" },
    { title: "To koniec", file: "To koniec.mp3" },
    { title: "Warcaby", file: "Warcaby.mp3" },
    { title: "wars", file: "wars.mp3" },
    { title: "Warszawa (J. Tuwim)", file: "Warszawa (J. Tuwim).mp3" },
    { title: "Warszawa ja i ty (gość. u Kwiatu Jabłonii)", file: "Warszawa ja i ty (gość. u Kwiatu Jabłonii).mp3" },
    { title: "Wista wio!", file: "Wista wio!.mp3" },
    { title: "Wszystko mi mówi, że mnie ktoś pokochał", file: "Wszystko mi mówi, że mnie ktoś pokochał.mp3" }
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
