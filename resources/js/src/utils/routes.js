import {
    createRouter,
    createWebHistory
} from "vue-router"
import auth from '../admin/middleware/auth'
import guest from '../admin/middleware/guest'
import userAuth from '../user/middleware/auth'
import userGuest from '../user/middleware/guest'
import store from '../../store'

const routes = [
    {
        path: '/sign-in',
        name: 'login',
        component: () => import('../user/components/LoginComponent.vue'),
        meta: {
            middleware: userGuest
        }
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../user/components/ProductsComponents.vue'),
        meta: {
            middleware: userAuth
        }
    },
    {
        path: '/products/:id',
        name: 'products.show',
        component: () => import('../user/components/ShowProductComponent.vue'),
        meta: {
            middleware: userAuth
        }
    },
    {
        path : '/admin/products',
        name : 'admin.products',
        component: () => import('../admin/components/ProductsComponents.vue'),
        meta: {
            middleware: auth
        }
    },
    {
        path : '/admin/products/:id',
        name : 'admin.products.show',
        component: () => import('../admin/components/ShowProductComponent.vue'),
        meta: {
            middleware: auth
        }
    },
    {
        path : '/admin/products/create',
        name : 'admin.products.create',
        component: () => import('../admin/components/CreateProductComponent.vue'),
        meta: {
            middleware: auth
        }
    },
    {
        path : '/admin/products/:id/edit',
        name : 'admin.products.edit',
        component: () => import('../admin/components/EditProductComponent.vue'),
        meta: {
            middleware: auth
        }
    },
    {
        path: '/admin/sign-in',
        name: 'admin.login',
        component: () => import('../admin/components/LoginComponent.vue'),
        meta: {
            middleware: guest
        }
    },
    {
        path: "/:catchAll(.*)",
        redirect: 'products',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index]
    if (!subsequentMiddleware) return context.next
    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
        const context = {
            from,
            next,
            router,
            store,
            to,
        }
        const nextMiddleware = nextFactory(context, middleware, 1)
        return middleware[0]({ ...context, next: nextMiddleware })
    }
    return next()
})
export default router
