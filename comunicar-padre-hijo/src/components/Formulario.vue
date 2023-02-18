<template>
    <div>
        <form @submit.prevent="guardarProducto">
            <label>Nombre</label>
            <input type="text" v-model="persona.nombre"/>
            <p>{{ persona.nombre }}</p>
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
const urlBase = 'https://localhost:7218/api/'
var url = urlBase + "Empleados"

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
        guardarProducto(){
            if(this.persona.id == 0){
                this.agregarPersona()
            }else{
                this.actualizarPersona()
            }
        },
        async agregarPersona(){
            var headers = new Headers();
            headers.append("accept", "*/*");
            headers.append("Content-Type", "application/json");
            var raw = JSON.stringify({            
                "nombre": this.persona.nombre,
                "correo": this.persona.correo,            
            });
            const response = await fetch(url,{
                method: 'POST',
                headers: headers,
                body: raw
            })
            
            if(!response.ok){
                response.json().then((errorJson) => {
                    console.log(errorJson.errors); // should return the error json
                }); 
                console.log(response.text())
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.persona.id = data.id
            this.$emit('insertarPersonaEvent', this.persona)
            
            this.inicializarPersona()
        },
        async actualizarPersona(){
            console.log("Actualizar persona")
            console.log(this.persona)
            var headers = new Headers();
            headers.append("accept", "*/*");
            headers.append("Content-Type", "application/json");
            var raw = JSON.stringify({     
                "id"    : this.persona.id,
                "nombre": this.persona.nombre,
                "correo": this.persona.correo,            
            });
            const response = await fetch(url+"/"+this.persona.id,{
                method: 'PUT',
                headers: headers,
                body: raw
            })
            console.log(response)
            if(!response.ok){
                response.json().then((errorJson) => {
                    console.log(errorJson.errors); // should return the error json
                }); 
                console.log(response.text())
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            //const data = await response.json();
            //this.persona.id = data.id
            this.$emit('insertarPersonaEvent', this.persona)
            
            //return data
            this.inicializarPersona()
        },
        inicializarPersona(){
            this.persona.id = 0
            this.persona.correo = ''
            this.persona.nombre = ''
            
            // this.editarPersona.id = 0
            // this.editarPersona.correo = ''
            // this.editarPersona.nombre = ''
            
        }
    }
}
</script>