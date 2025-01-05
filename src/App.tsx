import { IonApp, IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Suspense } from "react";
import { routes } from "./router/routes";
import { Route } from "react-router-dom";
import "./styles/index.scss";

const App = () => (
	<IonApp>
		<IonReactRouter>
			<Suspense fallback={<IonSpinner name="crescent" />}>
				<IonRouterOutlet>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							component={route.component}
							exact={route.exact}
						/>
					))}
				</IonRouterOutlet>
			</Suspense>
		</IonReactRouter>
	</IonApp>
);

export default App;
