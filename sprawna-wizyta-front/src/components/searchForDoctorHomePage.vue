<script setup>

    import { useRouter } from 'vue-router';
import { ref } from 'vue';
 
    

    const router = useRouter()
    const searchInput = ref('')

</script>

<template>

    <div class="searchInput">
        <input v-model.trim="searchInput" maxlength="100" type="text" placeholder="Specjalizacja, nazwisko lekarza">
        <button @click="router.push(`/search/${searchInput}`)" id="searchBtn">Wyszukaj specjalistę</button>
        <!-- <button @click="() => {console.log(searchInput.length)}">test</button> -->
    </div>
    


</template>


<style scoped>

.searchInput{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    gap: 15px;
}


input{
    width: 50%;
    text-align: center;
    height: 55px;
    font-weight: 600;
    border: 2px solid gray;
    border-radius: 7px;

}

#searchBtn{
    background-color: #23A6F0;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    border: 0px;
    border-radius: 5px;
    height: 55px;
    padding: 0 20px;
    
}

</style>