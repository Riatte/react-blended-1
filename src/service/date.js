import { formatDistanceToNow, format } from 'date-fns';

export const formateDateToNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const formateDate = data => {
  return format(new Date(data), 'Pp', { addSuffix: true });
};
