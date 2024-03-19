<script setup>

    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';

</script>

<template>
    <HeaderComponent />
    
    <main>

        <h1>Załóż konto</h1>
        <form>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            
            
        </form>
        

    </main>

    <FooterComponent /> 
</template>

<style scoped>

    main{
        width: 80%;
        margin: 0 auto;
        /* background-color: red; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    form{
        width: 50%;
        border: 1px solid rgba(128, 128, 128, 0.404);
        padding: 3%;
        border-radius: 20px 2px 20px 2px;
    }

</style>