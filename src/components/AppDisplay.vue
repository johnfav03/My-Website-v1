<template>
    <div id="display">
        <Navbar link="/projects/0/2"/>
        <div class="grid-wrap">
            <div class="display-grid">
                <div class="tape top-left"></div>
                <div class="tape bot-right"></div>
                <div class="app-box">
                    <Weather class="sketchy" />
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import Weather from './Weather'
    import Navbar from './Navbar'

    export default {
        name: 'AppDisplay',
        components: {
            Weather,
            Navbar
        }
    }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:wght@200;400;700;900&display=swap');

    #display {
        width: 100%;
        height: 100%;
    }

    .grid-wrap {
        width: calc(70vw - 50px);
        position: absolute;
        left: 0;
        height: 100vh;
        top: 0;
        background-color: transparent;
    }
    .display-grid {
        width: clamp(340px, 90%, 1200px);;
        height: 90vh;
        display: flex;
        margin: 5vh auto;
        padding: 5vh 5vw;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        position: relative;
    }
    .app-box {
        width: 100%;
        margin: auto;
        height: 90%;
        justify-content: center;
        align-items: left;
    }
    .sketchy {
        padding: 10%;
        pointer-events: none;
        display: inline-block;
        border: 1px solid #333333;
        font-size: 2.5rem;
        border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
        text-transform: uppercase;
        letter-spacing: 0.3ch;
        background: #ffffff;
        position: relative;
        z-index: -1;
    }
    .sketchy::before {
        pointer-events: none;
        content: '';
        border: 1px solid #353535;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(2deg);
        border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
        z-index: -1;
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

    @media only screen and (max-width: 1000px) {
        .grid-wrap {
            width: 100%;
        }
    }

    @media only screen and (max-width: 600px) {
        .display-grid {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }
        .tape {
            display: none;
        }
        .sketchy {
            border: none;
            border-radius: 0;
        }
        .sketchy::before {
            border: none;
            border-radius: 0;
        }
        .app-box {
            margin: 0;
            height: 100%;
            border-radius: 0;
        }
    }
  </style>