<template>
    <div class="container mt-5">
        <div class="row text-primary" v-for="state in states" :key="state.id">
            <div class="col">{{ state }}</div>
        </div>
    </div>
</template>
<script>
import urlBase from '@/services/urls'

export default {
    name: 'estados-',
    data(){
        return {
            states:[]
        }
    },
    methods:{
        async getListAsync(){
            var url

            url = urlBase.urlApi +'/States'
            await this.axios.get(url, {
                headers:{
                    "Authorization": "Bearer " + this.$store.state.token
                }
            })
            .then(response=> {                
                //console.log(response)
                this.states = response.data
            })
            .catch(error => {
                alert(error.response.data)
            })
        },    
        hello(){
            console.log('hola mundo')
        }
    },
    created(){
        this.getListAsync()
    },
}
</script>
