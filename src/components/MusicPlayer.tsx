/**
 * MusicPlayer Component
 * 
 * A simple, beginner-friendly music player using the HTML5 <audio> tag.
 * Features:
 * - Play/Pause controls (built into the audio tag)
 * - Volume control (built into the audio tag)
 * - Progress bar (built into the audio tag)
 * 
 * The 'controls' attribute on the <audio> tag provides all basic functionality.
 */

const MusicPlayer = () => {
  // Sample audio file - using a free sample music file
  const audioSource = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  return (
    // Main container - centers the player on the page
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      
      {/* Player Card - white card with shadow */}
      <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md">
        
        {/* Header Section */}
        <header className="text-center mb-6">
          {/* Main Title */}
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Simple Music Player
          </h1>
          
          {/* Subtitle / Description */}
          <p className="text-muted-foreground text-sm">
            A minimal player for beginners
          </p>
        </header>

        {/* Music Icon - simple visual indicator */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            {/* Music Note Symbol */}
            <span className="text-4xl text-primary">♪</span>
          </div>
        </div>

        {/* Song Information */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-foreground">
            Sample Track
          </h2>
          <p className="text-sm text-muted-foreground">
            SoundHelix Music
          </p>
        </div>

        {/* 
          Audio Player
          
          The <audio> tag is the HTML5 way to play audio files.
          
          Attributes explained:
          - controls: Shows the default browser controls (play, pause, volume, etc.)
          - src: The URL or path to the audio file
          - className: Styling for the audio element
          
          The 'controls' attribute automatically provides:
          - Play/Pause button
          - Volume slider
          - Progress bar
          - Time display
        */}
        <audio 
          controls 
          src={audioSource}
          className="w-full"
        >
          {/* Fallback message for browsers that don't support audio */}
          Your browser does not support the audio element.
        </audio>

        {/* Footer with helpful tip */}
        <footer className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Use the controls above to play, pause, and adjust volume
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MusicPlayer;
