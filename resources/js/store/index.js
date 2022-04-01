import { createStore } from 'vuex'
import user from './modules/user/auth'

import admin from './modules/admin/auth'

const store = createStore({
    modules: {
        user,
        admin
    }
})
export default store
