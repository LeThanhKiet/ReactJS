import { createSlice } from "@reduxjs/toolkit";

import Product from "@/models/Product.model";

const initialState = {
    items: [] as Array<Product>,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       // addToCart: (state, action) => {
       //     state.items = [...state.items, action.payload];
       // },

        addToCart: (state, { payload }) => {
            console.log(payload);
            state.items = [...state.items, payload];
        },

        // removeFromCart: (state, { payload }) => {
        //     const newCart = [...state.items];
        //     const itemToRemove = state.items.findIndex((item) => item.id === payload.id);
        //
        //     if (itemToRemove) {
        //         newCart.splice(itemToRemove, 1);
        //     } else {
        //         console.log(`Không xóa được sản phẩm (id: ${payload.id}) vì nó không tồn tại trong giỏ hàng`);
        //     }
        //     state.items = newCart;
        // },

        removeFromCart: (state, {payload}) => {
            console.log(`Xóa sản phẩm có id: ${payload.id}`);
            const newCart = state.items;
            const itemToRemove = state.items.filter(
                item => item.id === payload.id
            );
            // Continue


            state.items = newCart;
        },

        emptyCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItem = (state: any) => state.cart.items;

export default cartSlice;
