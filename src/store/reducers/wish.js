//초기 상태값 설정
const initialState = {
    wishList: [
        {
            index: 1,
            src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcierLxhc-d_iIUgnGOqUU_BTLgkSPcJeLgsNMYq3MmhEkYIMuoKXAddGYkP6f5vWQPIZUm9_s0wBcQvaGqLZEywtuBK4M8m9tS_hNe8O2b91lVP_uTMjB-3rn6OjxAPi5Q9KsCV0pbnAyAP6naMUaKuDVQAGshmoL7MOthwXoiiVy7UXBhVgos.jpg?r=cbd",
            title: "아케인",
            desc: "흥미진진",
            wished: true,
        },
    ],
};

const WishReducer = (state = initialState, action) => {
    let idx = 1;
    switch (action.type) {
        case "ADDWISH": {
            console.log("wish add: " + action.data.title);
            console.log(state);

            return {
                ...state,
                // wishList: [...state.wishList, action.data.title],
                wishList: [
                    ...state.wishList,
                    {
                        index: idx++,
                        src: action.data.src,
                        title: action.data.title,
                        desc: action.data.desc,
                        wished: true,
                    },
                ],
            };
            // [...state, action.data.title];
        }
        case "DELWISH": {
            console.log("wish del: " + action.data.title);

            const { wishList } = state;
            const filterWishList = wishList.filter(
                (v) => v.title !== action.data.title,
            );
            const mapWishList = filterWishList.map((v) => ({
                ...v,
                wished: true,
            }));
            console.log(mapWishList);
            return { wishList: mapWishList };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default WishReducer;
