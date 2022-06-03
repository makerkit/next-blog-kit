import { parseISO, format } from 'date-fns';

const DateFormatter: React.FCC<{
  dateString: string;
}> = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'PP')}</time>;
};

export default DateFormatter;
