//first pinia store
//state : test
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useUserStore = defineStore('users', () =>{
    const users = ref([])
    function addUser(user){
        this.users.push({
            ...user
        })
    }
    function deleteUser(userId){
        this.users = this.users.filter(user => user.id !== userId)
    }

    return {users, addUser, deleteUser}
})