// Redux
import {useSelector, useDispatch} from "react-redux";
import {emptyCart, selectCartItem, removeFromCart} from "@/redux/slices/cartSlice";

import ProductType from "@/models/Product.model";
import ProductItem from "@/components/ProductItem";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItem);

    const handleRemoveAllItems = () => dispatch(emptyCart());

    const handleRemoveItem = (item: ProductType) => {
        dispatch(removeFromCart(item));
    };

    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>This is Cartpage</h1>
                <button onClick={handleRemoveAllItems}>Xóa tất cả</button>
            </div>

            <div style={{textAlign: "center"}}>
                {
                    cartItem.map((item: ProductType) => {
                        return (
                            <div key={item.id} style={{border: "1px solid red", margin: "10px"}}>
                                <ProductItem name={item.name} price={item.price}/>
                                <div>
                                    <button onClick={() => handleRemoveItem(item)}>Remove from Cart</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Cart;
