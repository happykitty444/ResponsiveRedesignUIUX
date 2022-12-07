// A component that displays a single tea item

function ItemCardSmall(props) {
	return (
		<div class="item-card">
			{/* image */}
			<img src={props.item.image} alt={props.item.name}></img>
			{/* name */}
			<h2>{props.item.name}</h2>
			{/* description */}
			<p>{props.item.description}</p>
			{/* price */}
			<h3>${props.item.price}</h3>
			{/* button */}
			<button onClick={() => props.addToCart(props.item)}>Add to Cart</button>
		</div>
	)
}

export default ItemCardSmall;
