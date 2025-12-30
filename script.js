const songs = [
  {
    title: "Remedy",
    artist: "Annie Schindel",
    img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
  },
  {
    title: "I'm Fine",
    artist: "Ashe",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Drown",
    artist: "Dabin",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Night Drive",
    artist: "William Black",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  }
];

let current = 0;
let playing = false;
let timer = null;
let prog = 0;

const list = document.getElementById("songList");
const home = document.getElementById("home");
const player = document.getElementById("player");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const bar = document.getElementById("progress");
const playBtn = document.getElementById("play");

songs.forEach((s, i) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img class="thumb" src="${s.img}">
    <div class="info">
      ${s.title}
      <span>${s.artist}</span>
    </div>
  `;
  li.onclick = () => open(i);
  list.appendChild(li);
});

function open(i) {
  current = i;
  home.classList.remove("active");
  player.classList.add("active");
  load();
}

function back() {
  stop();
  player.classList.remove("active");
  home.classList.add("active");
}

function load() {
  cover.src = songs[current].img;
  title.textContent = songs[current].title;
  artist.textContent = songs[current].artist;
  prog = 0;
  bar.style.width = "0%";
}

function playPause() {
  playing ? stop() : play();
}

function play() {
  playing = true;
  playBtn.textContent = "⏸";
  timer = setInterval(() => {
    prog += 1;
    bar.style.width = prog + "%";
    if (prog >= 100) next();
  }, 120);
}

function stop() {
  playing = false;
  playBtn.textContent = "▶";
  clearInterval(timer);
}

function next() {
  stop();
  current = (current + 1) % songs.length;
  load();
  play();
}

function prev() {
  stop();
  current = (current - 1 + songs.length) % songs.length;
  load();
  play();
}
