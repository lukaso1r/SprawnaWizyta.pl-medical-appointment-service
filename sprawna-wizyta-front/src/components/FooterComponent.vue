<script setup>



</script>

<template>

    <footer>
        <div class="Footer-nav">
            <div class="link-col">
                <h5>SprawnaWizyta</h5>
                <ul>
                    <li>Działalność</li>
                    <li>Kariera</li>
                    <li>Oferty Pracy</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="link-col">
                <h5>O nas</h5>
                <ul>
                    <li>Poznaj nas</li>
                    <li>Współpraca</li>
                    <li>Historia</li>
                    <li>RODO</li>
                </ul>
            </div>
            <div class="link-col">
                <h5>Kontakt</h5>
                <ul>
                    <li>+48 516 860 879</li>
                    <li>Białystok Lipowa 99</li>
                    <li>kontakt@sprawnawizyta.pl</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom-bar">
            <div class="colOne">
                Wszystkie prawa zastrzeżone - SprawnaWizyta.pl 2023
            </div>
            <div class="colTwo">
                <img src="../assets/social-icons/facebook.png" alt="">
                <img src="../assets/social-icons/instagram.png" alt="">
                <img src="../assets/social-icons/twitter.png" alt="">
            </div>
        </div>
    </footer>

</template>

<style scoped>

footer{
    width: 70%;
    margin: 3% auto 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Footer-nav{
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-decoration: none;
    
    
}

.Footer-nav .link-col h5{
    font-size: 1.4vw;
    font-weight: 700;
    padding-bottom: 6%;
}

.Footer-nav ul{
    list-style-type:none;
    list-style: none;
    margin: 0;
    padding: 0;
}

.Footer-nav ul li{
    font-size: 1.2vw;
    font-weight: 600;
    color: gray;
}

.footer-bottom-bar{
    width: 100%;
    margin: 2% auto 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top: solid 1px;

    
}

.colOne{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.colTwo{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: end;
}
.colTwo img{
    
    width: 40px;
    height: 40px;
    margin: 2%;
}
</style>