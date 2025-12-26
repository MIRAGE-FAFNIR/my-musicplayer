export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  durationSeconds: number;
  src: string;
  cover: string;
}

export const playlist: Track[] = [
  {
    id: 1,
    title: "Ambient Dreams",
    artist: "SoundHelix",
    album: "Electronic Vibes",
    duration: "6:19",
    durationSeconds: 379,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Midnight Groove",
    artist: "SoundHelix",
    album: "Electronic Vibes",
    duration: "4:45",
    durationSeconds: 285,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Summer Beats",
    artist: "SoundHelix",
    album: "Chill Collection",
    duration: "5:32",
    durationSeconds: 332,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Urban Flow",
    artist: "SoundHelix",
    album: "Chill Collection",
    duration: "4:21",
    durationSeconds: 261,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Neon Lights",
    artist: "SoundHelix",
    album: "Night Sessions",
    duration: "5:58",
    durationSeconds: 358,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Deep Space",
    artist: "SoundHelix",
    album: "Night Sessions",
    duration: "6:12",
    durationSeconds: 372,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "/placeholder.svg",
  },
];
