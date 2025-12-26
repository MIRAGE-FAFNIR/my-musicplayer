import { Home, Search, Library, Plus, Heart } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar flex-shrink-0 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">♪</span>
          </div>
          <span className="text-foreground font-bold text-xl">Spotify</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-3 space-y-1">
        <a
          href="#"
          className="flex items-center gap-4 px-3 py-2 text-foreground font-semibold rounded-md hover:bg-sidebar-accent transition-colors"
        >
          <Home size={24} />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-4 px-3 py-2 text-sidebar-foreground rounded-md hover:text-foreground hover:bg-sidebar-accent transition-colors"
        >
          <Search size={24} />
          <span>Search</span>
        </a>
      </nav>

      {/* Library Section */}
      <div className="mt-6 px-3 flex-1 overflow-hidden flex flex-col">
        <div className="bg-card rounded-lg p-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sidebar-foreground hover:text-foreground cursor-pointer transition-colors">
              <Library size={24} />
              <span className="font-semibold">Your Library</span>
            </div>
            <button className="p-1 text-sidebar-foreground hover:text-foreground hover:bg-hover rounded-full transition-colors">
              <Plus size={20} />
            </button>
          </div>

          {/* Playlists */}
          <div className="space-y-2 overflow-y-auto scrollbar-thin flex-1">
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-hover cursor-pointer transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-800 to-indigo-400 rounded flex items-center justify-center">
                <Heart size={16} className="text-foreground" />
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Liked Songs</p>
                <p className="text-muted-foreground text-xs">Playlist • 32 songs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-hover cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-800 to-emerald-400 rounded" />
              <div>
                <p className="text-foreground text-sm font-medium">Chill Vibes</p>
                <p className="text-muted-foreground text-xs">Playlist • 18 songs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-hover cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-800 to-orange-400 rounded" />
              <div>
                <p className="text-foreground text-sm font-medium">Workout Mix</p>
                <p className="text-muted-foreground text-xs">Playlist • 24 songs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-hover cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-800 to-pink-400 rounded" />
              <div>
                <p className="text-foreground text-sm font-medium">Late Night</p>
                <p className="text-muted-foreground text-xs">Playlist • 15 songs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
