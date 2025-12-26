import { Play, Pause, Clock } from "lucide-react";
import { Track } from "@/data/playlist";

interface TrackListProps {
  tracks: Track[];
  currentTrackIndex: number;
  isPlaying: boolean;
  onTrackSelect: (index: number) => void;
}

const TrackList = ({ tracks, currentTrackIndex, isPlaying, onTrackSelect }: TrackListProps) => {
  return (
    <div className="px-6 pb-32">
      {/* Table Header */}
      <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 text-muted-foreground text-sm border-b border-border mb-2">
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span className="flex justify-end">
          <Clock size={16} />
        </span>
      </div>

      {/* Track Rows */}
      <div className="space-y-1">
        {tracks.map((track, index) => {
          const isCurrentTrack = index === currentTrackIndex;
          
          return (
            <div
              key={track.id}
              onClick={() => onTrackSelect(index)}
              className={`group grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 rounded-md cursor-pointer transition-colors ${
                isCurrentTrack ? "bg-hover" : "hover:bg-hover"
              }`}
            >
              {/* Track Number / Play Icon */}
              <div className="flex items-center justify-center">
                <span className={`text-sm group-hover:hidden ${isCurrentTrack ? "text-primary" : "text-muted-foreground"}`}>
                  {isCurrentTrack && isPlaying ? (
                    <div className="w-3 h-3 flex items-end gap-0.5">
                      <div className="w-0.5 h-full bg-primary animate-pulse-glow" />
                      <div className="w-0.5 h-2/3 bg-primary animate-pulse-glow" style={{ animationDelay: "0.2s" }} />
                      <div className="w-0.5 h-full bg-primary animate-pulse-glow" style={{ animationDelay: "0.4s" }} />
                    </div>
                  ) : (
                    index + 1
                  )}
                </span>
                <button className="hidden group-hover:block text-foreground">
                  {isCurrentTrack && isPlaying ? (
                    <Pause size={14} fill="currentColor" />
                  ) : (
                    <Play size={14} fill="currentColor" />
                  )}
                </button>
              </div>

              {/* Track Info */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-secondary rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-lg">♪</span>
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-medium truncate ${isCurrentTrack ? "text-primary" : "text-foreground"}`}>
                    {track.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate hover:underline">
                    {track.artist}
                  </p>
                </div>
              </div>

              {/* Album */}
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground truncate hover:underline">
                  {track.album}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-end">
                <span className="text-sm text-muted-foreground">{track.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;
