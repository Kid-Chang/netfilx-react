import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import VidItemLayout from "../itemLayoutComp/VidItemLayout";
import WishVidItemLayout from "../itemLayoutComp/WishVidItemLayout";
const WishListLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 50px;
    grid-column-gap: 0px;
`;

function MainMyWishComp() {
    const [data, setData] = useState([]);

    //global state
    const { wishList } = useSelector((state) => state.WishReducer);
    console.log("wishList에서: ");
    console.log(wishList);
    const wishListArray =
        wishList.length >= 1 ? (
            wishList.map((wishItem, idx) => {
                console.log("새롭게 뿌리는중..");
                return (
                    <WishVidItemLayout
                        index={idx}
                        src={wishItem.src}
                        title={wishItem.title}
                        key={idx}
                        desc={wishItem.desc}
                        wished={true}
                    />
                );
            })
        ) : (
            <div className="cart-empty">찜한 콘텐츠가 없습니다.</div>
        );
    // console.log(wishListArray);
    return (
        <div style={{ position: "relative", top: "10vh", left: "3vw" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
                내가 찜한 콘텐츠
            </div>
            <WishListLayout>{wishListArray}</WishListLayout>
        </div>
    );
}

export default MainMyWishComp;

// export default function CartList () {
//     const cart = useSelector(store => store.cartReducer);

//     const cartItem = cart.length >= 1 ? cart.map((item, idx) => {
//         return <CartItem key={idx} item={item} idx={idx} />
//     }) : <div className="cart-empty">장바구니가 비어 있습니다</div>

//     return (
//         <section className="cart-list">
//             <h2 className="cart-list-title">장바구니</h2>
//             {cartItem}
//         </section>
//     );
// }
