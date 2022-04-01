<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Productos
                        <router-link
                            :to="{ name: 'admin.products.create' }"
                            class="btn btn-sm btn-outline-success">
                            Nuevo producto
                        </router-link>
                    </div>

                    <div class="card-body">
                        <template v-if="processing">
                            Cargando...
                        </template>
                        <template v-else>
                            <div
                                v-for="(p, kp) in products"
                                :key="kp"
                                class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                                <div class="media d-block d-sm-flex text-center text-sm-left">
                                    <a class="cart-item-thumb mx-auto mr-sm-4" href="#">
                                        <img :src="`/storage/${p.image}`" alt="Product" width="180" height="100">
                                    </a>
                                    <div class="media-body pt-3">
                                        <h3 class="product-card-title font-weight-semibold border-0 pb-0">
                                            <router-link
                                                :to="{ name: 'admin.products.show', params: { id: p.id } }"
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
                                <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style="max-width: 10rem;">
                                    <router-link
                                        :to="{ name: 'admin.products.edit', params: { id: p.id } }"
                                        class="btn btn-sm btn-outline-success">
                                        Actualizar
                                    </router-link>
                                    <br>
                                    <button
                                        @click.prevent="removeProduct(p.id)"
                                        class="btn btn-sm btn-outline-danger">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
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
        processing: true,
    }),
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            await axios.get('/api/admin:products').then(({ data }) => {
                this.products = data
            }).catch(({ response:{ data } }) => {
                alert(data.errors)
            }).finally(() => {
                this.processing = false
            })
        },
        async removeProduct(product = ''){
            const result = confirm('¿Esta seguro?')
            if (result) {
                await axios.delete(`/api/admin:products/${product}`).then(() => {
                    alert('Ok')
                    this.getProducts()
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
