//Формируем state как {id: { url}}
export const normalizeData = (data) => {
    const res = data.reduce(
        (acc, { id, ...info }) => ({ ...acc, [id]: { ...info } }),
        {}
    );
    return res;
};
