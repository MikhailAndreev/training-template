import { DateTime } from 'luxon';

export const toDateFormat = (date: string, format: string) => {
    return DateTime.fromISO(date?.replace(' ', 'T')).toFormat(format);
};
