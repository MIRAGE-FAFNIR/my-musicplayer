import { playlist } from "@/data/playlist";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import PlayerBar from "./PlayerBar";

const MusicPlayer = () => {
  const {
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
  } = useAudioPlayer(playlist);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent
          tracks={playlist}
          currentTrackIndex={currentTrackIndex}
          isPlaying={isPlaying}
          onTrackSelect={playTrack}
          onPlayAll={() => playTrack(0)}
        />
      </div>
      
      <PlayerBar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        isShuffle={isShuffle}
        repeatMode={repeatMode}
        onTogglePlay={togglePlay}
        onNext={playNext}
        onPrevious={playPrevious}
        onSeek={seek}
        onVolumeChange={setVolume}
        onToggleShuffle={toggleShuffle}
        onToggleRepeat={toggleRepeat}
      />
    </div>
  );
};

export default MusicPlayer;
