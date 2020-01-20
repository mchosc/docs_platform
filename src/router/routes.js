const routes = [
  {path: "/", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/Index.vue") }]},
  {path: "/claim", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/claim.vue") }]},
  {path: "/mainnet", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/mainnet.vue") }]},
  {path: "/sp-earthday2020", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/sp-earthday2020.vue") }]}
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
