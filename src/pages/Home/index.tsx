import { IonContent, IonHeader, IonPage } from "@ionic/react";
import Header from "./Header";
import All from "./All";
import UpComing from "./UpComing";
import { memo } from "react";

const Home = memo(() => {
	return (
		<IonPage>
			<IonHeader>
				<Header />
			</IonHeader>
			<IonContent className="ion-padding">
				<UpComing />
				<All />
			</IonContent>
		</IonPage>
	);
});

export default Home;
