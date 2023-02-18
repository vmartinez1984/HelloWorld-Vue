<template>
    <div>
        <form @submit.prevent="guardar">
            <p>{{ persona.id }}</p>
            <label>Nombre</label>
            <input type="text" v-model="persona.nombre"/>
            <br/>
            <label>Correo</label>
            <input type="text" v-model="persona.correo"/>
            <br/>
            <button type="reset" @click="inicializarPersona">Cancelar</button>
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>
<script>
export default{
    props:['editarPersona'],
    name: 'formulario-persona',
    data(){
        return{
            persona:{
                id :0,
                nombre:'',
                correo: ''
            }
        }
    },
    created(){
        this.persona.nombre = this.editarPersona.nombre
        this.persona.correo = this.editarPersona.correo
        this.persona.id = this.editarPersona.id
    },
    methods:{
        guardar(){
            alert("datos enviados")
        },       
    }
}
</script>