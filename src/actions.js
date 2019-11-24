export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const res = (value = 0) => ({type: 'RES', value});