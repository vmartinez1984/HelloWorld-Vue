<template>
  <div class="home">
    <h1>Home</h1>
    <hr/>
    <div>
      {{ storeCounter.count }}
    </div>
    <!-- <button @click="decreaseCount">-</button>
    <button @click="increaseCount">+</button> -->
    <button @click="storeCounter.decreaseCount">-</button>
    <button @click="storeCounter.increaseCount">+</button>
    <div>
      this counter is: {{ storeCounter.oddOrEven }}
    </div>
  </div>
</template>

<script setup>
//import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

//const count = ref(0)

// const increaseCount = () =>{
//   count.value++
// }

// const decreaseCount = () =>{
//   count.value--
// }

// const oddOrEven = computed(()=>{
//   if(count.value % 2 == 0){
//     return 'even'
//   }else{
//     return 'odd'
//   }
// })
</script>