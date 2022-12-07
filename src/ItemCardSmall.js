// A component that displays a single tea item

function ItemCardSmall(props) {
	return (
		<div className="item-card">
			{/* image */}
			<img src={props.item.image} alt={props.item.name}></img>
			{/* name and condition*/}
			<h2>{props.item.name} - {props.item.condition}</h2>
			{/* distance */}
			<h3>{props.item.distance} miles away</h3>
			{/* price */}
			<h3>${props.item.price}</h3>
			{/* button */}
			<button onClick={() => props.addToCart(props.item)}>Add to Cart</button>
		</div>
	)
}

export default ItemCardSmall;
