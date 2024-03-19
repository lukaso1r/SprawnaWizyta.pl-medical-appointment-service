<script setup>

    import { useUserStore } from '@/stores/users';
    import {ref} from 'vue'
    import HeaderComponent from '../components/HeaderComponent.vue';

    
    const store = useUserStore();
    const userId = ref();
    const userName = ref('');
    let deleteId = ref();
    const addUserToStore = () =>{
        try {
            store.addUser({id: userId.value, name: userName.value});
            alert(`"Added: id:${userId.value}" name:${userName.value}`)
        } catch (error) {
            alert(error);
        }
    }

    const deleteUserFromStore = () =>{
        try {
            console.log(deleteId.value)
            store.deleteUser(deleteId.value)
            alert(`"Deleted: id:${deleteId.value}"`)
            console.log(store.users)
        } catch (error) {
            alert(error)
        }
    }

</script>

<template>
    <div>
        <HeaderComponent/>
        <h1>Playground</h1>
        <h3>Test store users: {{ store.users.length }}</h3>
        <input v-model="userId" type="number">
        <input type="text" v-model="userName">
        <button @click="addUserToStore">AddUserToStore</button>
        <br>
        <input type="number" v-model="deleteId">
        <button @click="deleteUserFromStore">deleteUserFromStore</button>
        <h4>Users list</h4>
        <ul>
            <li v-for="user in store.users">UserID: {{ user.id }} UserName: {{ user.name }}</li>
        </ul>
    </div>
</template>

<style scoped>


</style>
