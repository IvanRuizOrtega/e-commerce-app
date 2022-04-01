<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Inicio de Sesión</div>

                    <div class="card-body">
                        <form method="POST" action="#" @submit.prevent="login" :disabled="processing">
                            <div v-if="errors.length">
                                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                <ul>
                                    <li v-for="(error, ke) in errors" :key="ke">{{ error }}</li>
                                </ul>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Email: </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="auth.email"
                                        type="email"
                                        class="form-control"
                                        required
                                        autofocus>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Contraseña: </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="auth.password"
                                        type="password"
                                        class="form-control"
                                        name="password"
                                        required
                                        autocomplete="current-password">
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button
                                        type="submit"
                                        :disabled="processing"
                                        class="btn btn-outline-primary">
                                        Inicar sesión
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Login",
    data: () => ({
        auth: {
            email: '',
            password: 'password'
        },
        processing: false,
        errors: [],
    }),
    computed: {
      ...mapGetters({
          strategy: 'user/strategy'
      })
    },
    methods: {
        ...mapActions({
            signIn:'user/login'
        }),
        async login() {
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/login',this.auth).then(({ data })=>{
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('strategy', this.strategy)
                this.signIn()
                window.location.href = '/products'
            }).catch(({ response:{ data } })=>{
               this.errors = []
               this.errors.push(data.errors)
            }).finally(()=>{
                this.processing = false
            })
        }
    }
}
</script>

<style scoped>

</style>
