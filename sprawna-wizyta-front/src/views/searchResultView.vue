<script setup>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';

    import axios from 'axios'
    import {ref} from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    console.log(route.params)
    const doctors = ref('')
    
    const loadDoctors = async () =>{
        console.log("route param: " + route.params.specialization)
        const response = await axios.get("https://swpl-backend.onrender.com/api/v1/doctors/search?searchQuery=" + route.params.specialization + "&city=" + "")
        doctors.value = response.data
        console.log(doctors.value)
    }
    
    loadDoctors()

</script>

<template>
    <HeaderComponent />
    <main>
        <p>Wyświetlono wyniki dla specjalizacji: <span style="font-weight: 700;">{{ route.params.specialization }}</span> </p>
        <div v-if="doctors.length>0" class="doctorsSearchResult">
            <div class="colOne">
                <div class="doctor-single" v-for="lekarz in doctors">
                    <div class="topRow">
                        <div class="doctorProfileImage"><img src="../assets/images/doctorProfile.jpg" alt="" srcset=""></div>
                        <div class="topRowNameSpec">
                            <h3 class="name">{{ lekarz.name + " " + lekarz.surname }}</h3>
                            <h4 class="specialization">Specjalizacja: {{ lekarz.specialization }}</h4>
                            <div class="opinionsReceived">Opinie{{ lekarz.opinionsReceived }}</div>
                        </div>
                        
                    </div>
                    <h5 class="address">Adres: {{ lekarz.address }}</h5>
                    <div class="phoneNr">Numer:{{ lekarz.phoneNr}}</div>
                    <h6 class="services">Usługi {{ lekarz.services }}</h6>
                </div>
            </div>
            <div class="colTwo">
                tu będzie kalendarz
            </div>
            
        </div>
        <div v-else>Nie znaleziono wyników</div>
    </main>
    
    <FooterComponent />
</template>

<style scoped>

main{
    width:70%;
    margin: 2% auto;
}
.doctorsSearchResult{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 0.103);
    margin: 2% 0;
    background-color: white;
}

.colOne{
    width: 50%;
    border-right: 1px solid rgba(128, 128, 128, 0.377);
    padding: 2%;

}

.colTwo{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;

}

.doctor-single{
    width: 100%;
}

.topRow{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 20px;
}

.topRowNameSpec{
    width: auto;
    display: flex;
    flex-direction: column;
}

.doctorProfileImage{
    width: 20%;
}

.doctorProfileImage img{
    width: 100%;
    border-radius: 20px;

}
.name{
    font-size: 1.8rem;
    font-weight: 600;
}

.address, .phoneNr {
    font-size: 1.4rem;
    font-weight: 500;
}



</style>