import { Play } from "lucide-react";
import { Track } from "@/data/playlist";
import TrackList from "./TrackList";

interface MainContentProps {
  tracks: Track[];
  currentTrackIndex: number;
  isPlaying: boolean;
  onTrackSelect: (index: number) => void;
  onPlayAll: () => void;
}

const MainContent = ({
  tracks,
  currentTrackIndex,
  isPlaying,
  onTrackSelect,
  onPlayAll,
}: MainContentProps) => {
  return (
    <main className="flex-1 bg-background overflow-y-auto scrollbar-thin">
      {/* Header with gradient */}
      <div className="relative">
        <div 
          className="absolute inset-0 h-80"
          style={{
            background: "linear-gradient(180deg, hsl(var(--primary) / 0.4) 0%, hsl(var(--background)) 100%)",
          }}
        />
        
        <div className="relative px-6 pt-16 pb-6">
          {/* Playlist Header */}
          <div className="flex items-end gap-6">
            <div className="w-56 h-56 bg-gradient-to-br from-primary/60 to-primary/20 shadow-2xl rounded flex items-center justify-center">
              <span className="text-8xl text-foreground/80">♪</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase text-foreground">Playlist</span>
              <h1 className="text-6xl font-bold text-foreground tracking-tight">
                Electronic Vibes
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                The best electronic music for focus and relaxation
              </p>
              <div className="flex items-center gap-1 text-sm text-foreground mt-2">
                <span className="font-semibold">Spotify</span>
                <span className="text-muted-foreground">• {tracks.length} songs, about 32 min</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={onPlayAll}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:scale-105 hover:bg-primary/90 transition-all shadow-lg"
            >
              <Play size={28} className="text-primary-foreground ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {/* Track List */}
      <TrackList
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        isPlaying={isPlaying}
        onTrackSelect={onTrackSelect}
      />
    </main>
  );
};

export default MainContent;
