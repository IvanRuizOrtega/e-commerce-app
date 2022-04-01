<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Crear producto
                        <router-link
                            :to="{ name: 'admin.products' }"
                            class="btn btn-sm btn-outline-success">
                            Volver
                        </router-link>
                    </div>

                    <div class="card-body">
                        <form
                            method="POST"
                            action="#"
                            @submit.prevent="create"
                            enctype='multipart/form-data'>
                            <div v-if="errors.length">
                                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                <ul>
                                    <li v-for="(error, ke) in errors" :key="ke">{{ error }}</li>
                                </ul>
                            </div>
                            <div class="form-group mb-3">
                                <label class="col col-form-label text-md-end">
                                    Nombre
                                </label>

                                <div class="col">
                                    <input
                                        v-model="product.name"
                                        type="text"
                                        class="form-control"
                                        required
                                        autofocus>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="col col-form-label text-md-end">
                                    Slug
                                </label>

                                <div class="col">
                                    <input
                                        v-model="product.slug"
                                        type="text"
                                        class="form-control"
                                        required
                                        autofocus>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="col col-form-label text-md-end">
                                    Descripcion
                                </label>

                                <div class="col">
                                    <textarea
                                        v-model="product.description"
                                        type="text"
                                        class="form-control"/>
                                </div>
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
                                        <option value="" selected disabled>Escoge una opción...</option>
                                        <option v-for="(c, kc) in categories" :ke="kc" :value="c.id">
                                            {{ c.name }}
                                        </option>
                                    </select>

                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="col col-form-label text-md-end">
                                    Imagen
                                </label>

                                <div class="col">
                                    <input
                                        @change="handleFileUpload"
                                        ref="file"
                                        type="file"
                                        accept="image/jpeg"
                                        class="form-control"
                                        required
                                        autofocus>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-sm btn-outline-primary">
                                       Guardar
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
export default {
    name: "CreateProductComponent",
    data: () => ({
        product: {
            name: '',
            slug: '',
            description: '',
            price: '',
            category: '',
            file: null
        },
        categories: [],
        errors: []
    }),
    mounted() {
        this.getCategories()
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
        async create () {
            let formData = new FormData()
            formData.append('name', this.product.name);
            formData.append('slug', this.product.slug);
            formData.append('description', this.product.description);
            formData.append('price', this.product.price);
            formData.append('category', this.product.category);
            formData.append('image', this.product.file);
            await axios.post('/api/admin:products', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(() => {
                this.errors = []
                alert('Exito')
            }).catch(({ response:{ data } }) => {
                this.errors = []
                this.errors.push(data.errors)
            })
        },
        handleFileUpload() {
            this.product.file = this.$refs.file.files[0]
        }
    }
}
</script>

<style scoped>

</style>
