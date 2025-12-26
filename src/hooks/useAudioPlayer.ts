import { useState, useRef, useEffect, useCallback } from "react";
import { Track } from "@/data/playlist";

export const useAudioPlayer = (playlist: Track[]) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;
    audio.src = currentTrack.src;
    audio.volume = volume;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (repeatMode === "one") {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNext();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    if (isPlaying) {
      audio.play().catch(console.error);
    }

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, currentTrack.src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const playTrack = useCallback((index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play().catch(console.error);
    }, 100);
  }, []);

  const playNext = useCallback(() => {
    let nextIndex: number;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (currentTrackIndex + 1) % playlist.length;
    }
    if (repeatMode === "off" && nextIndex === 0 && !isShuffle) {
      setIsPlaying(false);
      return;
    }
    playTrack(nextIndex);
  }, [currentTrackIndex, isShuffle, repeatMode, playlist.length, playTrack]);

  const playPrevious = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    const prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
    playTrack(prevIndex);
  }, [currentTrackIndex, playlist.length, playTrack]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const toggleShuffle = useCallback(() => setIsShuffle(!isShuffle), [isShuffle]);

  const toggleRepeat = useCallback(() => {
    const modes: ("off" | "all" | "one")[] = ["off", "all", "one"];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  }, [repeatMode]);

  return {
    currentTrack,
    currentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffle,
    repeatMode,
    togglePlay,
    playTrack,
    playNext,
    playPrevious,
    seek,
    setVolume,
    toggleShuffle,
    toggleRepeat,
  };
};
