<template>
    <div class="row mt-5">

        <div class="col-3"></div>
        
        <div class="col-6">
                <div class="text-center">  
                    <form @submit.prevent="iniciarSesionAsync">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" v-model="usuario" focus>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" v-model="contrasenia">
                            </div>
                        </div>
                        <div class="mb-3 row">                            
                            <label class="col-sm-2 col-form-label"></label>
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                            </div>
                        </div>
                    </form>     
                </div>
            </div>
        </div>

    <div class="col-3"></div>
</template>
<script>
import urlBase from '@/services/urls'

export default {
    name :'login-vue',
    data(){
        return {
            usuario: '',
            contrasenia:''
        }
    },
    methods:{
        async iniciarSesionAsync(){
            var url
            var response1
            var data ={
                userName : this.usuario
                , password: this.contrasenia
            }

            //console.log(data)
            url = urlBase.urlApi +'/Auth'
            await this.axios.post(url, data)
            .then(response=> {
                response1 = response     
                this.$store.commit('login')
                this.$store.commit('setToken', response.data)
            })
            .catch(error => {
                alert(error.response.data)
            })
            // if(response1.status == 200){
            //     this.$store.commit('login')
            // }
            console.log(response1)
        }
    }
}
</script>
