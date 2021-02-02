// import People from "../views/People";
// import Welcome from "./../views/Welcome";
import Home from "../views/Home";

export const SIGNIN = "/SignIn";
export const SIGNUP = "/SignUp";

const routesList = ["ViewCredential"];

const children = routesList.map((route) => {
  switch (route) {
    case "ViewCredential":
      return {
        path: "Dashboard/" + route,
        name: route,
        component: () =>
          import(
            /* webpackChunkName: "[request]" */ "../views/" + route + ".vue"
          ),
        title: route,
        // fill vue props from query
      };
    default:
      return {
        path: route,
        name: route,
        component: () =>
          import(
            /* webpackChunkName: "[request]" */ "../views/" + route + ".vue"
          ),
        title: route,
      };
  }
});

export const routes = [
  {
    path: "/",
    component: Home,
    children: children,
  },
  {
    path: "/*",
    redirect: "/ViewCredential",
  },
];
