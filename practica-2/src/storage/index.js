import {createStore} from 'vuex'

const storage = createStore({
    state:{
        isLogin : localStorage.getItem('isLogin') == '' ||  localStorage.getItem('isLogin') == 'false' ? false: true,
        userName: '',
        token: ''
    },
    mutations:{
        login(state){
            state.isLogin = true
            localStorage.setItem('isLogin', true)
        },
        setToken(state, token){
            state.token = token
            localStorage.setItem('token', token)
        },
        logOut(state){
            this.state.isLogin = false
            localStorage.setItem('isLogin', false)
            state.token = ''
            localStorage.setItem('token', '')
        }
    }
})

export default storage