export default function userAuth({ next, router, store }) {
    const strategy = localStorage.getItem('strategy')
    if(strategy !== store.getters['user/strategy']) {
        return router.push({ name: 'login' })
    }
    return next()
}
