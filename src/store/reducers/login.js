//초기 상태값 설정
const initialState = {
    modalInfo: {},
};

//리듀서 설정
const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MODALINFO": {
            console.log("its work" + action.data.title);
            return {
                ...state,
                modalInfo: {
                    ...state.modalInfo,
                    src: action.data.src,
                    title: action.data.title,
                    desc: action.data.desc,
                },
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default ModalReducer;
