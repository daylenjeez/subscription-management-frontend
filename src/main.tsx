import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IonApp, IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<IonApp>
				<IonReactRouter>
					<Suspense fallback={<IonSpinner name="crescent" />}>
						<IonRouterOutlet>
							<Route path="/" component={Home} />
						</IonRouterOutlet>
					</Suspense>
				</IonReactRouter>
			</IonApp>
		</QueryClientProvider>
	</StrictMode>,
);
