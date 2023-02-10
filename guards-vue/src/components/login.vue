<template>
    <h1>login</h1>
    <div>
        <label for="user">Usuario</label>
        <input type="text" name="user" v-model="user.name"/>
    </div>
    <div>
        <label for="password">Contraseña</label>
        <input type="text" name="password" v-model="user.password"/>
    </div>
    <div>
        <button @click="login">Iniciar sesión</button>
    </div>
</template>
<script>
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
    methods:{
        login(){
            if(this.user.name == 'vmartinez' && this.user.password == '123456'){
                localStorage.setItem('isLogin','1')
                localStorage.setItem('role','operator')
                alert('Bienvenido')
                this.$route.push('/home')
            }else if(this.user.name == 'admin' && this.user.password == '123456'){
                localStorage.setItem('role','admin')
                localStorage.setItem('isLogin','1')
                alert('Bienvenido')
            }else{
                alert('Datos incorrectos')
            }
        }
    }
}
</script>