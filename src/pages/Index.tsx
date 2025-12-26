/**
 * Index Page
 * 
 * The main entry point of our Music Player app.
 * This page simply renders the MusicPlayer component.
 */

import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <main>
      {/* 
        The MusicPlayer component handles all the player logic and UI.
        Keeping the Index page simple makes the code easier to understand.
      */}
      <MusicPlayer />
    </main>
  );
};

export default Index;
