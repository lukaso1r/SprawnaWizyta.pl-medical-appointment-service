<script setup>

    import { RouterLink } from 'vue-router';
    import { useRouter } from 'vue-router';
    const router = useRouter()

    

</script>

<template>

    <header>
        <RouterLink to="/"><h1>SprawnaWizyta.pl</h1></RouterLink> 
        <div class="menu">
            <!-- active-class coś nie ten teges -->
            <ul>
                <li><RouterLink active-class="activeMenu" to="/forum">Forum</RouterLink> </li>
                <li><RouterLink active-class="activeMenu" to="/o-nas">O nas</RouterLink></li>
                <li><RouterLink active-class="activeMenu" to="/dla-lekarzy">Dla lekarzy</RouterLink></li>
                <li><RouterLink active-class="activeMenu" to="/kontakt">Kontakt</RouterLink></li>
            </ul>
        </div>
        <div class="loginRegister">
            <button @click="router.push('/zaloguj')" id="login">Zaloguj</button>
            <button @click="router.push('/rejestracja')" id="register">Zarejestruj -></button>
        </div>
    </header>
</template>

<style scoped>

header{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1%;
    padding-bottom: 1%;
}

h1{
    font-size: 2rem;
    font-weight: 700;
}

.menu{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 30%;
}

.menu ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:start;
    list-style-type:none;
    list-style: none;
    gap: 20px;
    
    
}

.menu ul li a{
    margin: 0 0 0 0%;
    font-size: 1.2rem;
    font-weight: 600;
    color: #737373;
}

.loginRegister{
    min-width: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 30px;
}

#login{
    background: transparent;
    color: #23A6F0;
    font-weight: 600;
    font-size: 1.2rem;
    border: none;
    color: #23A6F0;
}

#register{
    background-color: #23A6F0;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    border: 0px;
    border-radius: 5px;
    padding: 15px 30px;
    
}

a{
    text-decoration: none;
    color: black;
}

a:hover{
    color: rgba(0, 0, 0, 0.568);
}

.menu ul li a:hover{
    color: rgb(0, 0, 0);
    font-weight: 700;
}

.menu ul li a .activeMenu{
    color: rgb(0, 0, 0);
    font-weight: 700;
}
    

</style>
