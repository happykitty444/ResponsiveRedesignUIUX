import { Col, Row } from 'antd';

import ItemCardSmall from './ItemCardSmall';

function ItemsSection(props) {
	return (
		<div className="items-section">
			{/* Map items from info to grid */}
				{props.itemData.map(item => (
						<div>
							<ItemCardSmall item={item}></ItemCardSmall>
						</div>
				))}
		</div>
	);
}
// function ItemsSection(props) {
// 	return (
// 		<div className="items-section">
// 			{/* Map items from info to grid */}
// 			<Row gutter={16}>
// 				{props.itemData.map(item => (
// 					<Col lg={4}>
// 						<div>
// 							<ItemCardSmall item={item}></ItemCardSmall>
// 						</div>
// 					</Col>
// 				))}
// 			</Row>
// 		</div>
// 	);
// }
export default ItemsSection;
