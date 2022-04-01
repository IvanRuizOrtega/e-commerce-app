<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#">
                    E-commerce
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->

                    <ul class="navbar-nav me-auto">
                        <template v-if="isAuthenticated">
                            <li class="nav-item">
                                <router-link
                                    to="/admin/products"
                                    class="nav-link">
                                    Productos</router-link>
                            </li>
                        </template>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <template v-if="isAuthenticated">
                            <li class="nav-item dropdown">
                                <a
                                    id="navbarDropdown"
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    {{ user.name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a
                                        @click.prevent="logout"
                                        class="dropdown-item"
                                        href="#">
                                        Salir
                                    </a>
                                </div>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <router-link
                                    to="/admin/sign-in"
                                    class="nav-link">
                                    Iniciar sesión</router-link>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            <router-view> </router-view>
        </main>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "admin-app",
    computed: {
        ...mapGetters({
            isAuthenticated: 'admin/authenticated',
            strategy: 'admin/strategy',
            user: 'admin/user'
        })
    },
    methods: {
        ...mapActions({
            singOut: 'admin/logout'
        }),
        async logout() {
            await axios.post('/api/admin:logout').then(() => {
                localStorage.removeItem('access_token')
                localStorage.removeItem('strategy')
                this.singOut()
                window.location.href = '/admin/login'
            }).catch(({ response:{ data } })=>{
                alert(`Error: ${data.errors}`)
            })
        }
    }
}
</script>

<style scoped>

</style>
