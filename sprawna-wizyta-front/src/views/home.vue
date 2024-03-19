<script setup>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import searchForDoctorHomePage from '../components/searchForDoctorHomePage.vue'


</script>

<template>
    <div id="home">
       <HeaderComponent />
        <!-- <p v-for="lekarz in quote">{{ lekarz.name + " " + lekarz.surname }}</p> -->
        <main>
            <div class="mainColOne">
                <p class="welcomeText">Dzień dobry!</p>
                <h1>Umów wizytę <br>przez internet</h1>
                <h3>Świadczymy pomoc w szybkim dostępie dospecjalistów i usprawniamy proces diagnostyki</h3>
                <searchForDoctorHomePage/>
            </div>

            <div class="mainColTwo">
                <img src="../assets/images/mainDoctor.jpg" alt="" >
            </div>
        </main>


        <FooterComponent /> 
    </div>
    
</template>

<style scoped>

body{
    width: 100%;
    margin: 0;
    padding: 0;
    
}
#home{
    width: 100%;
    margin: 0;
    padding: 0;
}

main{
    width: 84%;
    margin: 2% auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.mainColOne{
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* background-color: gray; */

}

.welcomeText{
    color: #23A6F0;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 0;
    margin: 0% 0 -2% 0; 
}

.mainColOne h1{
    font-size: 4rem;
    font-weight: 700;
    line-height: 5rem;
    color: black;
}

.mainColOne h3{
    color:gray;
    font-size: 1.2rem;
    font-weight: 600;
    width: 80%;
}

.mainColTwo{
   width:40%;
   display: flex;
   justify-content: center;
}

.mainColTwo img{
    width: 80%;
    border-radius: 30% 2% 2% 2%;
}

</style>
