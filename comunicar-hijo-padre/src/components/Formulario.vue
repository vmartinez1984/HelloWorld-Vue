<template>
    <div>
        <form @submit.prevent="guardarProducto">
            <label>Nombre</label>
            <input type="text" v-model="persona.nombre"/>
            <br/>
            <label>Correo</label>
            <input type="text" v-model="persona.correo"/>
            <br/>
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>
<script>
const urlBase = 'https://localhost:7218/api/'
var url = urlBase + "Empleados"
export default{
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
    methods:{
        guardarProducto(){
            if(this.persona.id == 0){
                this.agregarProducto()
            }
        },
        async agregarProducto(){
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
            
            //return data
        }
    }
}
</script>