import { useNavigate } from 'react-router-dom';

type NavigateArgs = { type: string; id: string };

export const useHandleNavigate = () => {
  const navigate = useNavigate();

  return ({ type, id }: NavigateArgs) => {
    navigate(`/${type}/${id}`);
  };
};
