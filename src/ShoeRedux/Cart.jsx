import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CART } from "./redux/constant";

export default function Cart() {
	let dataCart = useSelector((state) => state.shoeReducer.cart);
	let dispatch = useDispatch();
	let handleDelete = (id) => {
		let action = {
			type: DELETE_CART,
			payload: id,
		};
		dispatch(action);
	};
	let renderCart = () => {
		return dataCart.map((shoe) => {
			console.log("🚀 ~ returndataCart.map ~ shoe:", shoe);
			return (
				<tr key={shoe.id}>
					<td>{shoe.name}</td>
					<td>{shoe.price}</td>
					<td>
						<img width={100} src={shoe.image} alt="" />
					</td>
					<td>{shoe.total}</td>
					<td>
						<button
							onClick={() => {
								handleDelete(shoe.id);
							}}
							className="btn btn-danger"
						>
							Delele
						</button>
					</td>
				</tr>
			);
		});
	};
	return (
		<div className="col-7">
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Image</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{renderCart()}</tbody>
			</table>
			{dataCart.length === 0 && (
				<h3 className="text-center text-danger">No items to display</h3>
			)}
		</div>
	);
}
