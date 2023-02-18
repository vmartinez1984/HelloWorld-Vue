<template>
    <div>
        <formulario @insertarPersonaEvent="insertarPersona" :editarPersona="persona" :key="persona" />
        <h2>Listado</h2>
        <table>
            <tr v-for="persona in personas" :key="persona.id">
                <td>{{ persona.nombre }}</td>
                <td>{{ persona.correo }}</td>
                <td>
                    <button @click="editarPersona(persona)">Editar</button>
                </td>
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
            personas:[],
            persona: {}
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
            console.log("Se guardo la persona")
            console.log(persona)
            var personaBuscada = this.personas.find(x => x.id === persona.id)
            if(personaBuscada == undefined){
                console.log("Persona agregada")
                this.personas.push(persona)
            }else{
                console.log("Person actualizada")
                personaBuscada.nombre = persona.nombre
                personaBuscada.id = persona.id
                personaBuscada.correo = persona.correo
            }
        },
        editarPersona(persona){
            this.persona = persona
            //console.log(persona)
        }
    }
}
</script>
