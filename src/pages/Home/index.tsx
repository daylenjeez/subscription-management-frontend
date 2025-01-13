import { memo } from "react";
import { IonHeader, IonPage } from "@ionic/react";
import Header from "./Header";
import All from "./AllList";
import UpComing from "./UpComingList";
import "./index.scss";
import Modal from "../../components/Modal";

const Home = memo(() => {
	return (
		<IonPage>
			<IonHeader>
				<Header />
			</IonHeader>
			<div className="home-container ion-padding">
				<UpComing />
				<All />

				<Modal isOpen={true}></Modal>
			</div>
		</IonPage>
	);
});

export default Home;
