import { message } from "antd";
import { shoeArr } from "../dataShoe";
import { ADD_TO_CART, DELETE_CART } from "./constant";

let initialState = {
	listShoe: shoeArr,
	cart: [],
};

let shoeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			let shoe = action.payload;
			let cloneCart = [...state.cart];

			let index = cloneCart.findIndex((item) => item.id === shoe.id);
			if (index == -1) {
				let newShoe = { ...shoe, total: 1 };
				cloneCart.push(newShoe);
			} else {
				cloneCart[index].total++;
			}
			return { ...state, cart: cloneCart };
		}
		case DELETE_CART: {
			let id = action.payload;
			let newCart = state.cart.filter((item) => item.id !== id);
			message.success("Delete succes");
			return { ...state, cart: newCart };
		}
		default:
			return state;
	}
};

export default shoeReducer;
