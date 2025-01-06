import "./index.scss";

interface CardProps {
	logo?: string;
	name: string;
	price: string;
	currency: string;
	period: string;
	dueDate: string;
}

const Card = (props: CardProps) => {
	const { logo, name, price, currency, period, dueDate } = props;

	return (
		<div className="upcoming-card">
			<div className="upcoming-card__header">
				<div className="upcoming-card__logo-wrapper">
					<img src={logo} alt={name} />
				</div>

				<div className="upcoming-card__price-tag">
					<div className="upcoming-card__price">{currency}{price}</div>
					<div className="upcoming-card__frequency">{period}</div>
				</div>
			</div>

			<div className="upcoming-card__content">
				<div className="upcoming-card__name">{name}</div>
				<div className="upcoming-card__due-date">{dueDate}</div>
			</div>
		</div>
	);
};

export default Card;
