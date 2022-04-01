<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Mostrar producto
                        <router-link
                            :to="{ name: 'admin.products' }"
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
                                    Log de actividades
                                </h1>
                                <ul class="list-unstyled">
                                    <li v-for="(la, kla) in product.log_activities">
                                        <strong :style="user.id === la.model.id ? 'height: 10px; background-color: #83E894' : null"> {{ kla +1 }}: </strong>
                                        Tema: {{ la.subject }}. <br>
                                        Accion: {{ la.action }}. <br>
                                        Nombre del usuario: {{ la.model.name }}. <br>
                                        Email del usuario: {{ la.model.email }}.<br><br>
                                    </li>
                                </ul>
                                <hr>
                                <h1 class="display-5">
                                    Todos los comentarios
                                </h1>
                                <ul class="list-unstyled">
                                    <li v-for="(c, kc) in product.all_comments">
                                        <strong :style=" c.is_approved  ? null : 'height: 10px; background-color: #FA6363'"> {{ kc +1 }}: </strong>
                                        <strong>
                                            Comentario:
                                        </strong> {{ c.comment }}. <br>
                                        <strong>
                                            Aprobado:
                                        </strong> {{ c.is_approved ? 'Si':'No'}}.
                                        <a
                                            @click.prevent="update(c.id, c.is_approved)"
                                            href="#"
                                            v-if="c.is_approved === 0">
                                            aceptar comentario
                                        </a><br>
                                        <strong>
                                            Nombre del usuario:
                                        </strong>
                                        {{ c.commentable.name }}. <br>
                                        <strong>
                                            Email del usuario:
                                        </strong>
                                        {{ c.commentable.email }}.<br>
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
        processing: true
    }),
    computed: {
        ...mapGetters({
            user: 'admin/user'
        })
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            await axios.get(`/api/admin:products/${this.$route.params.id}`).then(({ data }) => {
                this.product = data
                this.processing = false
            }).catch(({ response:{ data } }) => {
                alert(data.errors)
            })
        },
        async update(id, value) {
            const result = confirm('¿Esta seguro?')
            if (result) {
                await axios.put(`/api/admin:products/${this.product.id}/is-approved-comment/${id}`, { is_approved: !value}).then(() => {
                    location.reload()
                }).catch(({ response:{ data } }) => {
                    alert(data.errors)
                })
            }
        }
    }
}
</script>

<style scoped>

</style>
