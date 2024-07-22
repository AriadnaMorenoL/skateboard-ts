import { Board, CartItem } from "../types/types";
import { db } from "../data/db";

export type CartActions =
    | { type: "add-to-cart"; payload: { item: Board } }
    | { type: "remove-from-cart"; payload: { id: Board["id"] } }
    | { type: "decrease-item"; payload: { id: Board["id"] } }
    | { type: "increase-item"; payload: { id: Board["id"] } }
    | { type: "clear-cart" };
    

const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
};
    

export type CartState = {
    data: Board[];
    cart: CartItem[];
};

export const initialState: CartState = {
    data: db,
    cart: initialCart(),
};
const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === "add-to-cart") {
        const itemExist = state.cart.find(
            (board) => board.id === action.payload.item.id
        );
        let updateCart: CartItem[] = [];
        if (itemExist) {
            updateCart = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < MAX_ITEMS) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } else {
                    return item
                }

            })
        } else {
            const newItem: CartItem = { ...action.payload.item, quantity: 1 };
            updateCart = [...state.cart, newItem];
        }
        return {
            ...state,
            cart: updateCart,
        };
    }

    if (action.type === "decrease-item") {
        const updateQuantity = state.cart.map((item) => {
            if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        return {
            ...state,
            cart: updateQuantity
        };
    }

    if (action.type === "increase-item") {
        const updateQuantity = state.cart.map((item) => {
            if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        return {
            ...state,
            cart: updateQuantity
        };
    }

    if (action.type === "remove-from-cart") {
        const updateCart = state.cart.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            cart: updateCart
        };
    }

    if (action.type === "clear-cart") {
        return {
            ...state,
            cart : []
        };
    }
    return state;
};
