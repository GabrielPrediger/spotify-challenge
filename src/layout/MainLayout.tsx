import { Header } from '@/components/layout/Header/Header';
import { MediaPlayer } from '@/components/layout/MediaPlayer/MediaPlayer';
import { Sidebar } from '@/components/layout/Sidebar/SideBar';
import { PlayerProvider } from '@/context/PlayerContext/PlayerContext';
import { SearchProvider } from '@/context/SearchContext/SearchContext';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export function MainLayout() {
  return (
    <SearchProvider>
      <PlayerProvider>
        <div className="flex h-screen w-full flex-col overflow-hidden bg-gradient-to-br from-[#544863] to-[#08060f] font-sans text-white">
          <Header />

          <Toaster
            richColors
            theme="dark"
            position="bottom-right"
            duration={1000}
          />

          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
          <div className="absolute bottom-0 w-full bg-transparent">
            <MediaPlayer />
          </div>
        </div>
      </PlayerProvider>
    </SearchProvider>
  );
}
