



/**
 * PV/UV记录
 */
router.afterEach((to, from) => {
    const path = to.path
    /** 如果开启了登陆权限验证 */
    if (process.env.AUTH_ENABLED) {
        /** 除了登陆界面，其他路由界面都请求记录 */
        if (to.path !== '/login') {
            pathBeaconAction(path)
        }
    }
})
  