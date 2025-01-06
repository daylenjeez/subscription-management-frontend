import Card from "./Card";
import "./index.scss";
const All = () => {
	return (
		<div className="all-container">
			<div className="all-container__header">
				<h2>全部订阅</h2>
			</div>
			<div className="all-container__content">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default All;
