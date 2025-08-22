export interface ItemCardProps {
  id: string;
  name: string;
  subtitle: string;
  imageUrl?: string;
  type: ItemCardType;
}

export interface useItemCardProps {
  id: string;
  type: ItemCardType;
}

type ItemCardType = 'artist' | 'album' | 'track' | 'playlist';
