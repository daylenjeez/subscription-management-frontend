import { IonCard, IonItem } from "@ionic/react";
import "./index.scss";

const Card = () => {
	return (
		<IonCard className="upcoming-card ion-padding">
			<IonItem lines="none">
				<div className="subscription-card__header">
					<div className="subscription-card__logo-wrapper"></div>
					<div className="subscription-card__meta"></div>
				</div>

				<div className="subscription-card__content"></div>
			</IonItem>
		</IonCard>
	);
};

export default Card;
