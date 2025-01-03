import { type ComponentType, lazy, type LazyExoticComponent } from "react";

export interface RouteConfig {
	path: string;
	component: LazyExoticComponent<ComponentType>;
	exact?: boolean;//完全匹配
	title?: string;
}

export const routes: RouteConfig[] = [
	{
		path: "/",
		component: lazy(() => import("../pages/Home")),
		exact: true,
	},
];
