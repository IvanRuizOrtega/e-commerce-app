<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Mostrar producto
                        <router-link
                            :to="{ name: 'products' }"
                            class="btn btn-sm btn-outline-success">
                            Volver
                        </router-link>
                    </div>
                    <div class="card-body">
                        <template v-if="processing">
                            Cargando...
                        </template>
                        <template v-else>
                            <div class="jumbotron jumbotron-fluid">
                                <h1 class="display-6">ID {{ product.id }}</h1>
                                <p class="lead">
                                    Nombre: {{ product.name }}. <br>
                                    Precio: {{ product.price }}. <br>
                                    Slug: {{ product.slug }}. <br>
                                    Descripcion: {{ product.description ? product.description : 'No aplica' }}. <br>
                                    Categoria: {{ product.category.name }}. <br>
                                </p>
                                <hr>
                                <h1 class="display-5">
                                    Comentarios
                                </h1>
                                <form method="POST" action="#" @submit.prevent="comment">
                                    <div v-if="errors.length">
                                        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                        <ul>
                                            <li v-for="(error, ke) in errors" :key="ke">{{ error }}</li>
                                        </ul>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col col-form-label text-md-end">
                                            Comentario
                                        </label>

                                        <div class="col">
                                    <textarea
                                        v-model="form.comment"
                                        type="text"
                                        class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="row mb-0">
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-sm btn-outline-primary">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <br>
                                <ul class="list-unstyled">
                                    <li v-for="(c, kc) in product.comments">
                                        <strong :style="user.id === c.commentable.id ? 'height: 10px; background-color: #83E894' : null"> {{ kc +1 }}: </strong>
                                        <strong>
                                            Comentario:
                                        </strong> {{ c.comment }}. <br>
                                        <strong>
                                            Nombre del usuario:
                                        </strong>  {{ c.commentable.name }}. <br>
                                        <strong>
                                            Email del usuario:
                                        </strong> {{ c.commentable.email }}.<br>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "ShowProductComponent",
    data:() => ({
        product: {},
        processing: true,
        form: {
            comment: ''
        },
        errors: []
    }),
    computed: {
        ...mapGetters({
            user: 'user/user'
        })
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            await axios.get(`/api/products/${this.$route.params.id}`).then(({ data }) => {
                this.product = data
                this.processing = false
            }).catch(({ response:{ data } }) => {
                alert(data.errors)
            })
        },
        async comment() {
            await axios.put(`/api/products/${this.product.id}`, this.form).then(({  }) => {
                this.errors = []
                alert('Su comentario fue enviado con exito, sera evaluado')
            }).catch(({ response:{ data } }) => {
                this.errors = []
                this.errors.push(data.errors)
            })

        }
    }
}
</script>

<style scoped>

</style>
