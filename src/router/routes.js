const routes = [
  {path: "/", component: () => import("layouts/MainLayout.vue"), children: [{ path: "/", component: (Pagedocs) => import("pages/introduction.vue") }]},
  {path: "/mainnet", component: () => import("layouts/MainLayout.vue"), children: [{ path: "", component: () => import("pages/mainnet.vue") }]},
  {path: "/boidpower", component: () => import("layouts/MainLayout.vue"), children: [{ path: "", component: () => import("pages/boidpower.vue") }]},
  {path: "/teams", component: () => import("layouts/MainLayout.vue"), children: [{ path: "", component: () => import("pages/teams.vue") }]},
  {path: "/eosaccount", component: () => import("layouts/MainLayout.vue"), children: [{ path: "", component: () => import("pages/eosaccount.vue") }]},
  {path: "/claim", component: () => import("layouts/MainLayout.vue"), children: [{ path: "", component: () => import("pages/claim.vue") }]},
  {path: "/addinfo", component: () => import("layouts/MainLayout.vue"), children: [{ path: "", component: () => import("pages/graphics.vue") }]}
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
