import Card from "./Card";
import "./index.scss";
const All = () => {
	return (
		<section className="all-subscription-container">
			<div className="all-subscription-container__header">
				<h2>全部订阅</h2>
			</div>
			<div className="all-subscription-container__content">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};

export default All;
