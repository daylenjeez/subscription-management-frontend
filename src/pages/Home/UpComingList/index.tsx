import Card from "./Card";
import { memo } from "react";
import "./index.scss";

const UpComing = memo(() => {
	return (
		<div className="upcoming-subscription-container">
			<div className="upcoming-subscription-container__header">
				<h2>即将订阅</h2>
			</div>
			<div className="upcoming-subscription-container__content hide-scrollbar">
				<Card
					name="Netflix"
					price={10}
					currency="USD"
					period="month"
					dueDate={new Date()}
				/>
				<Card
					name="Netflix"
					price={10}
					currency="USD"
					period="month"
					dueDate={new Date()}
				/>
				<Card
					name="Netflix"
					price={10}
					currency="USD"
					period="month"
					dueDate={new Date()}
				/>
			</div>
		</div>
	);
});

export default UpComing;
