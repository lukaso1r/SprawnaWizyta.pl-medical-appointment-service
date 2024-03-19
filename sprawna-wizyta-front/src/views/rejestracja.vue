<script setup>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import registerAsUser from '@/components/registerAsUser.vue';
    import registerDoctor from '@/components/registerDoctor.vue';
    import { ref } from 'vue';

    const registerOption = ref("user")

</script>

<template>
    <HeaderComponent registerBtn="register"/>
    
    <main>
        <div class="colOne">
            <h1>Załóż swoje konto jako:</h1>
            <div class="registerOptions">
                <button @click="() => {registerOption = 'doctor';}">Lekarz</button>
                <button @click="() => {registerOption = 'user';}">Pacjent</button>
            </div>
            <div class="promoText">
                <div class="promoTextUser" v-if="registerOption == 'user'">
                    <div class="textRow">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/doctor-male-skin-type-2.png" alt="doctor-male-skin-type-2"/>
                        <p>Znajdź specjalistę, którego szukasz i umów się na wizytę w dogodnym terminie za pomocą kilku kliknięć!</p>
                    </div>
                    <div class="textRow">
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/documents--v1.png" alt="documents--v1"/>
                        <p>Dokumentacja medyczna w jednym miejscu, łatwa komunikacja ze specjalistą</p>
                    </div>
                    <div class="textRow">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/about.png" alt="about"/>
                        <p>Uzupełnij wymagane informacje przed wizytą i skróć czas jej trwania odpowiadając na ważne pytania</p>
                    </div>  
                </div>

                <div class="promoTextUser" v-else>
                    <div class="textRow">
                        <img width="48" height="48" src="../assets/icons/patient.png" alt="recovery"/>
                        <p>Uzyskaj kontakt z setkami pacjentów szukających specjalisty i buduj swoją markę</p>
                    </div>
                    <div class="textRow">
                        <img width="48" height="48" src="../assets/icons/appointment.png" alt="appointment"/>
                        <p>Podaj dostępność i pozwól pacjentom na samodzielną rejestrację na wizytę</p>
                    </div>
                    <div class="textRow">
                        <img width="48" height="48" src="https://img.icons8.com/stickers/100/search-in-list.png" alt="search-in-list"/>
                        <p>Przejrzyj dokumentację pacjenta dostępną w systemie i zleć dodatkowe badania przed wizytą</p>
                    </div>  
                </div>
                     
            </div>
        </div>
        <div class="colTwo">
            <registerAsUser class="formComponent" v-if="registerOption == 'user'"/>
            <registerDoctor class="formComponent" v-if="registerOption=='doctor'"/>
        </div>

    </main>

    <FooterComponent /> 
</template>

<style scoped>

    
    main{
        width: 80%;
        margin: 4% auto;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 0px;
        max-width: 1200px;
    }

    .colOne{
        width: 49%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;
    }
    .colTwo{
        width: 49%;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    .colTwo .formComponent{
        width: 100%;
    }

    .registerOptions{
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: start;
        width: 100%;
    }

    .promoText{
        width: 80%;
        margin: 4% 0;
        padding: 0;
    }

    .textRow{
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin-bottom: 6%;
    }

    .promoText p{
        font-weight: 400;
        font-size: 1.1rem;
        padding: 0;
        margin: 0;
    }

    .registerOptions button{
        width: 40%;
        max-width: 200px;
        font-size: 1.6rem;
        font-weight: 500;
        background-color: transparent;
        border: 2px solid rgba(128, 128, 128, 0.466);
        border-radius: 5px;
        padding: 1% 0;
    }

    .registerOptions button:hover{
        background-color: beige;
    }

   

</style>