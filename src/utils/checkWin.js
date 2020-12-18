export const checkWin = (array = []) => {
    return array.every((item) => item.active === true);
};