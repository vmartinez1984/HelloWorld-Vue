<template>
    <div>
        <formulario @insertarPersonaEvent="insertarPersona"/>
        <h2>Listado</h2>
        <table>
            <tr v-for="persona in personas" :key="persona.id">
                <td>{{ persona.nombre }}</td>
                <td>{{ persona.correo }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Formulario from './Formulario.vue'
const urlBase = 'https://localhost:7218/api/'
var url = urlBase + "Empleados"

export default {
    components:{
        Formulario
    },
    data(){
        return {
            personas:[]
        }
    },
    created(){
        this.obtenerPersonas()
    },
    methods:{
        async obtenerPersonas(){
            const response = await fetch(url)
            if(!response.ok){
                response.json().then((errorJson) => {
                    console.log(errorJson.errors); // should return the error json
                }); 
                console.log(response.text())
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            this.personas = await response.json()
            console.log(this.personas)
        },
        insertarPersona(persona){
            console.log("Se inserto persona")
            console.log(persona)
            this.personas.push(persona)
        }
    }
}
</script>
