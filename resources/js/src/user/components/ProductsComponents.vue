<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Productos
                        <div class="col-auto">
                            <select
                                v-model="category"
                                @change="filter"
                                class="my-3 form-select form-select-sm"
                                required
                                autofocus>
                                <option value="" selected disabled> Filtrar por categoria </option>
                                <option value=""> Todas </option>
                                <option v-for="(c, kc) in categories"
                                        :ke="kc"
                                        :value="c.id">
                                    {{ c.name }}
                                </option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select
                                v-model="subCategory"
                                @change="filterSub"
                                class="my-3 form-select form-select-sm"
                                required
                                autofocus>
                                <option value="" selected disabled> Filtrar por sub categoria </option>
                                <option value=""> Todas </option>
                                <option v-for="(sc, ksc) in subCategories"
                                        :ke="ksc"
                                        :value="sc.id">
                                    {{ sc.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="card-body">
                        <template v-if="processing">
                            Cargando...
                        </template>
                        <template v-else>
                            <template v-if="products.length">
                                <div class="row">
                                    <div
                                        v-for="(p, kp) in products"
                                        :key="kp"
                                        class="col align-self-start">
                                        <div class="media d-block text-center text-sm-left">
                                            <a class="cart-item-thumb mx-auto mr-sm-4" href="#">
                                                <img :src="`/storage/${p.image}`" alt="Product" width="180" height="100">
                                            </a>
                                            <div class="media-body pt-3">
                                                <h3 class="product-card-title font-weight-semibold border-0 pb-0">
                                                    <router-link
                                                        :to="{ name: 'products.show', params: { id: p.id } }"
                                                        class="nav-link">
                                                        {{p.name}}</router-link>
                                                </h3>
                                                <div class="font-size-sm">
                                                    <span class="text-muted mr-2">Slug: </span>
                                                    {{ p.slug }}
                                                </div>
                                                <div class="font-size-sm">
                                                    <span class="text-muted mr-2">Descripcion: </span>
                                                    {{  p.description ?  p.description : 'No tiene' }}
                                                </div>
                                                <div class="font-size-sm">
                                                    <span class="text-muted mr-2">Categoria: </span>
                                                    {{  p.category.name }}
                                                </div>
                                                <div class="font-size-lg text-primary pt-2">${{ p.price }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                               No hay datos :(
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsComponents",
    data:() => ({
        products: [],
        category: '',
        subCategory: '',
        categories: [],
        subCategories: [],
        processing: true,
    }),
    mounted() {
        this.getCategories()
        this.getProducts()
    },
    methods: {
        async getProducts() {
            let key = this.category ? this.category :  null
            this.subCategory ? key = this.subCategory : this.category
            const url = key ? `/api/products?category=${key}` : `/api/products`
           this.processing = true
            await axios.get(url).then(({ data }) => {
                this.products = data
            }).catch(({ response:{ data } }) => {
                alert(data.errors)
            }).finally(() => {
                this.processing = false
            })
        },
        async getCategories() {
            await axios.get('/api/categories').then(({ data }) => {
               this.categories = data
            }).catch(({ response:{ data } }) => {
                this.errors.push(data.errors)
            })
        },
        async getSubCategories() {
            this.subCategories = []
            await axios.get(`/api/categories/${this.category}`).then(({ data }) => {
                this.subCategories = data
            }).catch(({ response:{ data } }) => {
                this.errors.push(data.errors)
            })
        },
        filter() {
            this.getSubCategories()
            this.getProducts()
        },
        filterSub() {
            this.getProducts()
        }
    }
}
</script>

<style scoped>

</style>
