<template>
    <div class="container">
        <h1 class="text-primary">Inicio de sesión</h1>
        <div class="row">
            <label for="user" class="col-2">Usuario</label>
            <div class="col-10">
                <input type="text" name="user" class="form-control" v-model="user.name"/>
            </div>
        </div>
        <div class="form-group row mt-1">            
            <label for="password" class="form-label col-2">Contraseña</label>
            <div class="col-10">
                <input type="password" class="form-control" name="password" v-model="user.password"/>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col-2">
                <label></label>
            </div>
            <div class="col-10">
                <button class="btn btn-primary" @click="login">Iniciar sesión</button>
            </div>
        </div>
    </div>
</template>
<script>
import { useLoginStore } from '@/stores/loginStore'

export default{
    name: 'login-vue',
    data(){
        return {
            user:{
                name:'',
                password:''
            }         
        }
    },
    setup(){
        const loginStore = useLoginStore()

        return {
            loginStore
        }
    },
    methods:{
        login(){
            if(this.user.name == 'vmartinez' && this.user.password == '123456'){
                this.loginStore.logIn(this.user.name, 'operator')
                this.$router.push({name : 'home'})
                alert('Bienvenido')
            }else if(this.user.name == 'admin' && this.user.password == '123456'){
                this.loginStore.login(this.user.name,'admin')
                this.$router.push({name : 'home'})
                alert('Bienvenido')
            }else{
                alert('Datos incorrectos')
            }
        }
    }
}
</script>