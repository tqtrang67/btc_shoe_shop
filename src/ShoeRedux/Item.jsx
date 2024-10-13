import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./redux/constant";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";

export default function Item({ shoe }) {
	let dispatch = useDispatch();
	let handleAdd = (shoe) => {
		console.log("🚀 ~ handleAdd ~ shoe:", shoe);
		let action = {
			type: ADD_TO_CART,
			payload: shoe,
		};
		dispatch(action);
	};
	return (
		<div className="col-3 p-2">
			<Card
				hoverable
				style={{
					width: "100%",
				}}
				cover={<img src={shoe.image} alt="" />}
			>
				<Meta title={shoe.name} />
				<Meta
					title={<span style={{ color: "red" }}>{shoe.price}$</span>}
				/>
				<Button
					type="primary"
					onClick={() => {
						handleAdd(shoe);
					}}
				>
					Add
				</Button>
			</Card>
		</div>
	);
}
