const content = document.getElementById('links');
const checkbox = document.getElementById('flip-toggle');
const volume = document.getElementById('audio-slider');
const muteButton = document.getElementById('mute-button');
const topLeftControls = document.getElementById('top-left');
const bottomRightQR = document.getElementById('bottom-right');

let audio;
let isPlaying = false;
let isMuted = false;
let lastAudioVolume;
let lastColorVolume;

const tracks = [
    { src: './Ressources/Music/Consideration.mp3', name: 'Consideration - TECHNOTRAIN', url: 'https://www.youtube.com/watch?v=oubcnf8xquM' },
    { src: './Ressources/Music/Growing in the Sky.mp3', name: 'Growing in the Sky - shimtone', url: 'https://www.youtube.com/watch?v=QbParl5F-uc' },
    { src: './Ressources/Music/Mauve.mp3', name: 'Mauve - shimtone', url: 'https://www.youtube.com/watch?v=6PvTIdpV6lI' },
];

let trackIndex = Math.floor(Math.random() * tracks.length)
let selectedTrack = tracks[trackIndex];

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        setTimeout(() => {
            content.style.display = 'block';
        }, 700);
    } else {
        content.style.display = 'none';
    }
});

const squares = document.querySelectorAll('.square');
const desc = document.querySelector('.description');
const paragraphs = desc.querySelectorAll('p');

squares.forEach(square => {
    if (square && desc) {
        square.addEventListener('mouseenter', () => {
            desc.classList.add('highlighted');
            // Hide all paragraphs first
            paragraphs.forEach(p => {
                p.style.display = 'none';
                p.style.opacity = '0';
            });

            // Show the corresponding paragraph
            if (square.classList.contains('first')) {
                desc.querySelector('p.first').style.display = 'block';
                setTimeout(() => desc.querySelector('p.first').style.opacity = '1', 10);
            }

            if (square.classList.contains('second')) {
                desc.querySelector('p.second').style.display = 'block';
                setTimeout(() => desc.querySelector('p.second').style.opacity = '1', 10);
            }

            if (square.classList.contains('third')) {
                desc.querySelector('p.third').style.display = 'block';
                setTimeout(() => desc.querySelector('p.third').style.opacity = '1', 10);
            }

            if (square.classList.contains('fourth')) {
                desc.querySelector('p.fourth').style.display = 'block';
                setTimeout(() => desc.querySelector('p.fourth').style.opacity = '1', 10);
            }

            if (square.classList.contains('fifth')) {
                desc.querySelector('p.fifth').style.display = 'block';
                setTimeout(() => desc.querySelector('p.fifth').style.opacity = '1', 10);
            }
        });

        square.addEventListener('mouseleave', () => {
            desc.classList.remove('highlighted');
            paragraphs.forEach(p => {
                p.style.display = 'none';
                p.style.opacity = '0';
            });
        });
    }
});

function StartAudio() {
    PlayAudio();
    ShowControls();
}

function PlayAudio() {
    if (!isPlaying) {
        audio = new Audio(selectedTrack.src);
        audio.volume = 0.20;
        lastAudioVolume = audio.volume;
        lastColorVolume = volume.style.background;
        audio.play();

        document.getElementById('track-name').innerHTML =
            `🎵 <a target="_blank" rel="noopener noreferrer" href=${selectedTrack.url} style="color:white"><i>${selectedTrack.name}</i></a> 🎵`;

        volume.addEventListener("change", function (e) {
            audio.volume = e.currentTarget.value / 100;
            lastAudioVolume = audio.volume;
            lastColorVolume = volume.style.background;
        });

        isPlaying = true;
    }
}

function ShowControls() {
    topLeftControls.classList.remove('hidden');
    bottomRightQR.classList.remove('hidden');
}

function MuteButton() {
    isMuted = !isMuted;

    if (isMuted) {
        audio.muted = true;
        muteButton.src = './Ressources/Images/VolumeOff.png';
        audio.volume = 0;
        volume.value = audio.volume;
        volume.style.background = "rgb(214, 214, 214)";
    }
    else {
        audio.muted = false;
        muteButton.src = './Ressources/Images/VolumeOn.png';
        audio.volume = lastAudioVolume;
        volume.value = lastAudioVolume * 100;
        volume.style.background = lastColorVolume;
    }

}

volume.addEventListener("input", function () {
    var x = volume.value;

    if (x <= 33) {
        color = 'linear-gradient(90deg,rgb(62, 174, 46)' + x +'%, rgb(214, 214, 214)' + x +'%';
    }
    else if (x > 33 && x <= 66) {
        color = 'linear-gradient(90deg,rgb(217, 205, 26)' + x + '%, rgb(214, 214, 214)' + x + '%';
    }
    else if (x > 66 && x <= 100) {
        color = 'linear-gradient(90deg,rgb(222, 24, 68)' + x + '%, rgb(214, 214, 214)' + x + '%';
    }

    volume.style.background = color;
})