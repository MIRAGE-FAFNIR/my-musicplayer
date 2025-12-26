import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Volume2, 
  VolumeX,
  Maximize2,
  ListMusic
} from "lucide-react";
import { Track } from "@/data/playlist";
import { Slider } from "@/components/ui/slider";

interface PlayerBarProps {
  currentTrack: Track;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isShuffle: boolean;
  repeatMode: "off" | "all" | "one";
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onToggleShuffle: () => void;
  onToggleRepeat: () => void;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const PlayerBar = ({
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  volume,
  isShuffle,
  repeatMode,
  onTogglePlay,
  onNext,
  onPrevious,
  onSeek,
  onVolumeChange,
  onToggleShuffle,
  onToggleRepeat,
}: PlayerBarProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-player border-t border-border px-4 flex items-center justify-between z-50">
      {/* Left: Current Track Info */}
      <div className="flex items-center gap-3 w-[30%] min-w-[180px]">
        <div className="w-14 h-14 bg-secondary rounded flex-shrink-0 flex items-center justify-center">
          <span className="text-muted-foreground text-2xl">♪</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground truncate hover:underline cursor-pointer">
            {currentTrack.title}
          </p>
          <p className="text-xs text-muted-foreground truncate hover:underline cursor-pointer">
            {currentTrack.artist}
          </p>
        </div>
      </div>

      {/* Center: Playback Controls */}
      <div className="flex flex-col items-center gap-2 w-[40%] max-w-[722px]">
        {/* Control Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleShuffle}
            className={`p-2 transition-colors ${
              isShuffle ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Shuffle size={18} />
          </button>

          <button
            onClick={onPrevious}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <SkipBack size={20} fill="currentColor" />
          </button>

          <button
            onClick={onTogglePlay}
            className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause size={18} className="text-background" fill="currentColor" />
            ) : (
              <Play size={18} className="text-background ml-0.5" fill="currentColor" />
            )}
          </button>

          <button
            onClick={onNext}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <SkipForward size={20} fill="currentColor" />
          </button>

          <button
            onClick={onToggleRepeat}
            className={`p-2 transition-colors ${
              repeatMode !== "off" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {repeatMode === "one" ? <Repeat1 size={18} /> : <Repeat size={18} />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={([value]) => onSeek(value)}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Right: Volume & Other Controls */}
      <div className="flex items-center justify-end gap-3 w-[30%] min-w-[180px]">
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <ListMusic size={18} />
        </button>

        <div className="flex items-center gap-2 w-32">
          <button
            onClick={() => onVolumeChange(volume === 0 ? 0.7 : 0)}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <Slider
            value={[volume * 100]}
            max={100}
            step={1}
            onValueChange={([value]) => onVolumeChange(value / 100)}
            className="flex-1"
          />
        </div>

        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Maximize2 size={18} />
        </button>
      </div>
    </footer>
  );
};

export default PlayerBar;
