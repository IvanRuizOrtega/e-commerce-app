export default function auth({ next, router, store }) {
    const strategy = localStorage.getItem('strategy')
    if(strategy !== store.getters['admin/strategy']) {
        return router.push({ name: 'admin.login' })
    }
    return next()
}
