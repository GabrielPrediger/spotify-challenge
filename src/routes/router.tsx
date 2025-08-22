import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { HomePage } from '@/pages/HomePage/HomePage';
import { AlbumPage } from '@/pages/AlbumPage';
import { ArtistPage } from '@/pages/ArtistPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'artist/:artistId',
        element: <ArtistPage />,
      },
      {
        path: 'album/:albumId',
        element: <AlbumPage />,
      },
    ],
  },
]);
