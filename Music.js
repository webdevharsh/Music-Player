let musicTitle = document.querySelector('.container .music-title');
let artistName = document.querySelector('.container .artist-name');
let musicImg = document.querySelector('.container .music-img img');
let prevBtn = document.querySelector('.container .prev-btn');
let nextBtn = document.querySelector('.container .next-btn');
let playPauseBtn = document.querySelector('.container .play-pause-btn');
let playIcon = document.querySelector('.container .play-pause-btn .fa-play');
let pauseIcon = document.querySelector('.container .play-pause-btn .fa-pause');
let music = document.querySelector('#music');
let nextMusicBtn = document.querySelector('.container .next-btn');
let prevMusicBtn = document.querySelector('.container .prev-btn');

let musicIndex = 2;

let loadMusic = (musicIndex) => {
        musicTitle.innerHTML = `${allmusic[musicIndex - 1].name}`;
        artistName.innerHTML = `${allmusic[musicIndex - 1].artist}`;
        musicImg.src = `${allmusic[musicIndex - 1].img}.jpg`;
        music.src = `${allmusic[musicIndex - 1].src}.mp3`;
}

playPauseBtn.addEventListener('click', () => {
        if (playPauseBtn.classList.contains('play')) {
                playPauseBtn.classList.remove('play');
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
                musicImg.classList.add('rotate-img');
                music.play();
        } else {
                playPauseBtn.classList.add('play');
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
                musicImg.classList.remove('rotate-img');
                music.pause();
        }
})

nextMusicBtn.addEventListener('click', () => {
        musicIndex++;
        musicIndex > allmusic.length ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(musicIndex);
        music.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        musicImg.classList.remove('rotate-img');
});

prevMusicBtn.addEventListener('click', () => {
        musicIndex--;
        musicIndex < 1 ? musicIndex = allmusic.length : musicIndex = musicIndex;
        loadMusic(musicIndex);
        music.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        musicImg.classList.remove('rotate-img');
})

loadMusic(musicIndex);