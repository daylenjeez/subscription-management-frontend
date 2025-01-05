import { IonContent, IonHeader } from "@ionic/react";
import Header from "./Header";
import All from "./All";
import UpComing from "./UpComing";

const Home = () => {
	return (
		<>
			<IonHeader>
				<Header />
			</IonHeader>
			<IonContent className="ion-padding">
				<UpComing />
				<All />
			</IonContent>
		</>
	);
};

export default Home;
