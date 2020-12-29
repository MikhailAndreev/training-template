import decode from 'unescape';

export const transformNormalContentText = (str: string | undefined) => {
    if (typeof str === 'string') {
        return decode(str).replace(/(?:\r\n|\r|\n)/g, '<br />');
    }

    return str;
};
