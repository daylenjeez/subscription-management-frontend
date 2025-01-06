import { memo } from "react";
import { IonHeader, IonPage } from "@ionic/react";
import Header from "./Header";
import All from "./All";
import UpComing from "./UpComing";
import "./index.scss";

const Home = memo(() => {
	return (
		<IonPage>
			<IonHeader>
				<Header />
			</IonHeader>
			<div className="home-container ion-padding">
				<UpComing />
				<All />
			</div>
		</IonPage>
	);
});

export default Home;
