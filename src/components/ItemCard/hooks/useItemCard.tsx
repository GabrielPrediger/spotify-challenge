import { useNavigate } from 'react-router-dom';
import type { useItemCardProps } from '../@types';

export const useItemCard = ({ id, type }: useItemCardProps) => {
  const navigate = useNavigate();

  const handleItemCardNavigate = () => {
    navigate(`/${type}/${id}`);
  };

  return {
    handleItemCardNavigate,
  };
};
