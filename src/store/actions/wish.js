//action 설정
export const addWishAction = (data) => {
    return {
        type: "ADDWISH",
        data: data,
    };
};
export const delWishAction = (data) => {
    return {
        type: "DELWISH",
        data: data,
    };
};
