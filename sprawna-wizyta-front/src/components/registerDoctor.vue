<script setup>

    import { ref } from 'vue';

    //tymczasowy axios tutaj, zostanie potem przeniesiony do odrębnego serwisu 
    import axios from 'axios'

    const specialization = ref('Wybierz kategorię specjalizacji')
    const email = ref('')
    const password = ref('')
    const repeatPassword = ref('')
    const name = ref('')
    const surname = ref('')
    const phoneNumber = ref()
    let userObject = ref({})

    const handleUserRegister = () =>{
        userObject = {
            email: email.value,
            password: password.value,
            name: name.value,
            surname: surname.value,
            phoneNr: phoneNumber.value,
            specialization: specialization.value,
        }
        console.log(userObject)
        registerDoctor()
    }

    //axios -> przejdzie do serwisu
    const registerDoctor = async () => {
        console.log(`"Próba rejestracji" ${userObject}`)
        console.log("https://swpl-backend.onrender.com/api/v1/auth/registerDoctor")
        try {
            const response = await axios.post("https://swpl-backend.onrender.com/api/v1/auth/registerDoctor", userObject)
            const registerStatus = response.data
            console.log("leci rejestracja brrrrt")
            console.log(registerStatus.value)
        } catch (error) {
            console.log(error)
        }
    }
    
    

</script>

<template>
    <div>
        <h5>Tworzenie konta lekarza</h5>
        <form @submit.prevent="handleUserRegister">
            <!-- <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
            <label for="floatingInputInvalid">Invalid input</label> -->
            
            <select class="form-select form-select-lg mb-3 specialization" v-model="specialization">
                <option selected>Wybierz kategorię specjalizacji</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>

            <!-- email -->
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" v-model="email">
                <label for="floatingInputEmail">Adres E-mail</label>
            </div>
            <!-- haslo -->
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInputPassword" placeholder="name@example.com" v-model="password">
                <label for="floatingInputPassword">Hasło</label>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">Must be spoko.</span>
                </div>
            </div>
            <!-- repeat password -->
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInputPasswordRepeat" placeholder="name@example.com" v-model="repeatPassword">
                <label for="floatingInputPasswordRepeat">Powtórz hasło</label>
                <div class="col-auto" v-if="password!=repeatPassword && repeatPassword!=''">
                    <span id="passwordHelpInline" class="form-text">Hasła muszą być takie same</span>
                </div>
            </div>
            <div class="row">
                <!-- name -->
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputName" placeholder="Imię" v-model="name">
                        <label for="floatingInputName">Imię</label>
                    </div>
                </div>
                <!-- surname -->
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputSurName" placeholder="Nazwisko" v-model="surname">
                        <label for="floatingInputSurName">Nazwisko</label>
                    </div>
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInputNumber" placeholder="Numer telefonu" v-model="phoneNumber">
                <label for="floatingInputNumber">Numer telefonu</label>
            </div>

            <button>Zarejestruj</button>

        </form>
            

        
    </div>
</template>

<style scoped>

    .specialization{
        margin-bottom: 1rem;
    }

    .form-select-lg{
        font-size: 1rem;
    }

     /* Chrome, Safari, Edge, Opera */
     input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none!important;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;

    }

    form button{
        background-color: #23A6F0;
        border: none;
        color: white;
        border-radius: 5px;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1% 0;
        margin: 0 auto;
    }

</style>