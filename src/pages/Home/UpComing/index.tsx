import { IonLabel, IonList, IonListHeader } from "@ionic/react";
import "./index.scss";
import Card from "./Card";

const UpComing = () => {
	return (
		<IonList>
			<IonListHeader>
				<IonLabel>即将订阅</IonLabel>
			</IonListHeader>
			<Card />
		</IonList>
	);
};

export default UpComing;
