import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IonApp, IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { routes } from "./router/routes";
import { Route } from "react-router-dom";

const queryClient = new QueryClient();
console.log(routes)

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<IonApp>
				<IonReactRouter>
					<Suspense fallback={<IonSpinner name="crescent" />}>
						<IonRouterOutlet>
							{routes.map((route) => (
								<Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
							))}
						</IonRouterOutlet>
					</Suspense>
				</IonReactRouter>
			</IonApp>
		</QueryClientProvider>
	</StrictMode>,
);
