<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Editar producto
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
                            <h1 class="display-6">
                                ID {{ product.id }}
                            </h1>
                            <form method="POST" action="#" @submit.prevent="update">
                                <div v-if="errors.length">
                                    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                    <ul>
                                        <li v-for="(error, ke) in errors" :key="ke">{{ error }}</li>
                                    </ul>
                                </div>

                                <div class="form-group mb-3">
                                    <label class="col col-form-label text-md-end">
                                        Precio
                                    </label>

                                    <div class="col">
                                        <input
                                            v-model="product.price"
                                            type="text"
                                            class="form-control"
                                            required
                                            autofocus>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="col col-form-label text-md-end">
                                        Categoria
                                    </label>

                                    <div class="col">
                                        <select
                                            v-model="product.category"
                                            class="form-control"
                                            required
                                            autofocus>
                                            <option v-for="(c, kc) in categories"
                                                    :ke="kc"
                                                    :value="c.id">
                                                {{ c.name }}
                                            </option>
                                        </select>

                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-sm btn-outline-primary">
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditProductComponent",
    data:() => ({
        product: {
            id: '',
            price: '',
            category: ''
        },
        processing: true,
        categories: [],
        errors: []
    }),
    mounted() {
        this.getCategories()
        this.getProduct()
    },
    methods: {
        async getCategories() {
            await axios.get('/api/admin:categories').then(({ data }) => {
                this.categories = data
            }).catch(({ response:{ data } }) => {
                this.errors = []
                this.errors.push(data.errors)
            })
        },
        async getProduct() {
            await axios.get(`/api/admin:products/${this.$route.params.id}`).then(({ data }) => {
                this.product.id = data.id
                this.product.price = data.price
                this.product.category = data.category.id
                this.processing = false
            }).catch(({ response:{ data } }) => {
                alert(data.errors)
            })
        },
        async update() {
            await axios.put(`/api/admin:products/${this.product.id}`, this.product).then(() => {
                this.errors = []
                alert('Exito')
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
