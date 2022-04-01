
export default function userGuest({ next, router, store }) {
    const strategy = localStorage.getItem('strategy')
    if(strategy === store.getters['user/strategy']) {
        return router.push({ name: 'products' })
    }
    return next()
}
