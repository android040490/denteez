import R from 'ramda';

export const getSliceIfOverflow = (str, len) => {
    if (str.length > len) {
        return R.take(len, str) + '...'
    }
    return str
}