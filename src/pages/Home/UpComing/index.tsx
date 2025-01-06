import { IonLabel } from "@ionic/react";
import "./index.scss";
import { memo } from "react";


const UpComing = memo(() => {

	return (
		<div className="upcoming-container">
			<div className="upcoming-container__header">
				<IonLabel>即将订阅</IonLabel>
			</div>
		</div>
	);
});

export default UpComing;
