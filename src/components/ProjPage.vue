<template>
    <div id="proj-main">
        <Navbar/>
        <div class="card-box">
            <span class="card-flex">
                <ProjCard v-for="(x, i) in (this.$route.params.end - this.$route.params.beg + 1)" :display-num="x + Number($route.params.beg)" :key="i"/>
            </span>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import ProjCard from './ProjCard'

    export default {
        name: 'ProjPage',
        components: {
            Navbar,
            ProjCard
        }
    }
</script>
  
<style>
    @import url('https://fonts.googleapis.com/css?family=Prompt:wght@100;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    #proj-main {
        width: calc(70vw - 70px);
        margin-left: 5vw;
        margin-right: calc(25vw + 70px);
        height: 100vh;
        display: block;

        font-family: 'Prompt', sans-serif;
    }
    .card-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-flex {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh 0;
    }
    @media only screen and (max-width: 1000px) {
        #proj-main {
            width: 90%;
        }
        .card-flex {
            width: 100%;
        }
    }
</style>