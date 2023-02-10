import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
  id:'counter',
  state:()=>({
    count: 10,
    name: 'Víctor Mtz'
  }),   
  persist: true,
  actions:{
    increaseCount(){
      this.count++
    },    
    decreaseCount(){
      this.count--
    }
  },
  getters:{
    oddOrEven: (state) =>{
      if(state.count % 2 == 0){
        return 'even'
      }else{
        return 'odd'
      }
    }
  }
})
