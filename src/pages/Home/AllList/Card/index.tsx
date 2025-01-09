import "./index.scss";
const Card = () => {
	return (
		<div className="all-card">
			<div className="all-card__info">
				<div className="all-card__info__logo-wrapper">
					<img src="" alt="" />
				</div>
				<div className="all-card__info__name">
					<div className="all-card__info__name__title">Netflix</div>
					<div className="all-card__info__name__subtitle">2024/06/07</div>
				</div>
			</div>
			<div className="all-card__price-info">
				<div className="all-card__price-info__price">10 USD</div>
				<div className="all-card__price-info__type">按月订阅</div>
			</div>
		</div>
	);
};

export default Card;
