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
        <h5>Tworzenie konta lekarza</h5>
        <form>
            <!-- <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
            <label for="floatingInputInvalid">Invalid input</label> -->
            
            <select class="form-select form-select-lg mb-3 specialization" >
                <option selected>Wybierz kategorię specjalizacji</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <!-- email -->
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                <label for="floatingInputEmail">Adres E-mail</label>
            </div>
            <!-- haslo -->
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInputPassword" placeholder="name@example.com">
                <label for="floatingInputPassword">Hasło</label>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">Must be spoko.</span>
                </div>
            </div>
            <!-- repeat password -->
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInputPasswordRepeat" placeholder="name@example.com">
                <label for="floatingInputPasswordRepeat">Powtórz hasło</label>
            </div>
            <div class="row">
                <!-- name -->
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputName" placeholder="Imię">
                        <label for="floatingInputName">Imię</label>
                    </div>
                </div>
                <!-- surname -->
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputSurName" placeholder="Nazwisko">
                        <label for="floatingInputSurName">Nazwisko</label>
                    </div>
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInputNumber" placeholder="Numer telefonu">
                <label for="floatingInputNumber">Numer telefonu</label>
            </div>

            <button  @click="handleUserRegister">Zarejestruj</button>

            
            

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

</style>