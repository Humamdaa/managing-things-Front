import { useQuery } from '@tanstack/react-query';
import boardsApi from '../../api/endPoints/board';
import { QUERY_KEYS } from '../../api/queryKeys';

export const useBoards = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.BOARDS],
    queryFn: boardsApi.getAll,
  });

  return {
    boards: query.data, 
    isLoading: query.isPending, 
    isError: query.isError, 
    error: query.error, 
    refetch: query.refetch, 
  };
};
