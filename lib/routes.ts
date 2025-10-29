const routes = {
  auth: {
    login: "/login/",
    logout: "/logout/",
    refresh: "/refresh/",
  },
  user: {
    create: "/user/create/",
    detail: (username: string) => `/user/detail/${username}/`,
    list: "/user/list/",
    delete: "/user/delete/",
    update: "/user/update/",
  },
  affiliate: {
    // Placeholder for affiliate routes - add when backend URLs are provided
    base: "/affiliate/",
  },
}

export default routes
