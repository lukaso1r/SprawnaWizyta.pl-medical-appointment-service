<script setup>

    import { ref } from 'vue';

    const email = ref('')
    const password = ref('')
    const repeatPassword = ref('')
    const name = ref('')
    const surname = ref('')
    const phoneNumber = ref()
    const userObject = ref({})

    const handleUserRegister = () =>{
        console.log("Added user info: " + email )
    }

</script>

<template>
    <div>
        <h5>Tworzenie konta pacjenta</h5>
        <form class="form-floating" >
            <!-- <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
            <label for="floatingInputInvalid">Invalid input</label> -->

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
            
            <button  @click="handleUserRegister">Zarejestruj</button>

        </form>
            

        
    </div>
</template>

<style scoped>

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

</style>