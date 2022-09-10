<template>
    <div id="home">
        <Navbar/>
        <div class="sect">
            <span class="sect-grid">
                <h1>Hello, I'm <span class="tx-green">John Favret</span>.</h1>
                <p>I've always been a builder at heart - I love planning and creating, 
                    anywhere from web projects to arduino robots to something as simple as
                    light-up birthday cards. At the moment, I'm a full time student working
                    on a project called <router-link class="tx-green" to="/currentrail" target="_blank">
                    Currentrail</router-link>. If you'd like to check out some of my favorite
                    projects, feel free to scroll through the menu on the right hand side!
                </p>
                <div class="img-wrap">
                    <img id="header-img" :src="require('./../assets/header-bg.jpg')" />
                    <div class="tape top-left"></div>
                    <div class="tape bot-right"></div>
                </div>
            </span>
        </div>
    </div>
  </template>
  
  <script>
    import Navbar from './Navbar'

    export default {
        name: 'HomePage',
        components: {
            Navbar
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
    #home {
        width: calc(70vw - 70px);
        margin-left: 5vw;
        margin-right: calc(25vw + 70px);
        z-index: 0;

        font-family: 'Prompt', sans-serif;
    }
    .sect {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sect-grid {
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-template-rows: 6vw 1fr;
        row-gap: 2rem;
        grid-auto-flow: column;
        justify-content: center;
        align-items: center;
    }
    .img-wrap {
        width: 90%;
        margin: auto;
        position: relative;
    }
    #header-img {
        width: 100%;
        object-fit: contain;
        position: relative;
    }
    .sect-grid h1 {
        font-size: 4vw;
        line-height: 6vw;
        height: 6vw;
        grid-column: span 2;
        padding-left: 2vw;
    }
    .tx-green {
        color: #406040;
    }
    .sect-grid p {
        font-size: 1.6vw;
        line-height: 2vw;
        height: 100%;
        padding: 3vh 2vw;

        font-family: 'Rajdhani', sans-serif;
    }

    @media only screen and (max-width: 1000px) {
        #home {
            width: 90%;
        }
    }

    @media only screen and (max-width: 700px) {
        .sect {
            justify-content: flex-start;
        }
        .sect-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 3vh 4vh 30vh;
            row-gap: 1rem;
            position: absolute;
            top: 5vh;
            width: 90vw;
        }
        .sect-grid h1 {
            grid-column: span 1;
        }
        .sect-grid p {
            margin-bottom: 2rem;
        }
    }

    .tape {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5vmax 5vmax 0 0;
        border-color: #eedd77 transparent transparent transparent;
        position: absolute;
        box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.25);
    }

    .top-left {
        top: -0.5vmax;
        left: -0.5vmax;
    }

    .bot-right {
        transform: rotate(180deg);
        bottom: -0.5vmax;
        right: -0.5vmax; 
    }
  </style>