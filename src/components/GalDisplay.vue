<template>
    <div id="gallery">
        <div class="grid-wrap">
            <div class="gallery-grid">
                <div class="tape top-left"></div>
                <div class="tape bot-right"></div>
                <div class="img-box" v-if="$route.params.elem=='egclub'">
                    <Navbar link="/projects/2/3" />
                    <img class="img-40 sketchy" :src="require('./../assets/egclub-code.png')" />
                    <img class="img-50 sketchy" :src="require('./../assets/egclub-robot-two.png')" />
                </div>
                <div class="img-box" v-if="$route.params.elem=='photobot'">
                    <Navbar link="/projects/2/3" />
                    <video class="img-60 sketchy" loop autoplay muted>
                        <source :src="require('./../assets/photobot-mp4.mp4')" type="video/mp4">
                    </video>
                </div>
                <div class="img-box" v-if="$route.params.elem=='operation'">
                    <Navbar link="/projects/4/5" />
                    <video class="img-60 sketchy" loop autoplay controls>
                        <source :src="require('./../assets/operation-mp4.mp4')" type="video/mp4">
                    </video>
                </div>
                <div class="img-box" v-if="$route.params.elem=='cbarm'">
                    <Navbar link="/projects/4/5" />
                    <video class="img-60 sketchy" loop autoplay muted>
                        <source :src="require('./../assets/cbarm-mp4.mp4')" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import Navbar from './Navbar'

    export default {
        name: 'GalDisplay',
        components: {
            Navbar
        }
    }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:wght@200;400;700;900&display=swap');

    #gallery {
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
    .gallery-grid {
        width: clamp(340px, calc(0.9 * 70vw -50px), 1200px);
        height: 90vh;
        display: flex;
        margin: 5vh auto;
        padding: 5vh 5vw;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        position: relative;
    }
    .img-box {
        width: 100%;
        margin: auto;
        height: 90%;
        justify-content: space-around;
        align-items: center;
        display: flex;
        position: relative;
    }

    .img-box img,
    .img-box video {
        margin: 0 2vw;
    }

    .img-40 {
        width: clamp(130px, calc(0.4 * 60vw -50px), 480px);
        height: clamp(130px, calc(0.4 * 60vw -50px), 480px);
    }

    .img-50 {
        width: clamp(170px, calc(0.5 * 60vw -50px), 600px);
        height: clamp(170px, calc(0.5 * 60vw -50px), 600px);
    }

    .img-60 {
        width: clamp(210px, calc(0.6 * 60vw -50px), 720px);
        height: clamp(210px, calc(0.6 * 60vw -50px), 720px);
    }

    .img-70 {
        width: clamp(250px, calc(0.7 * 60vw -50px), 840px);
        height: clamp(250px, calc(0.7 * 60vw -50px), 840px);
    }

    .sketchy {
        pointer-events: auto;
        display: block;
        border: 2px solid #333333;
        border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
        background: #ffffff;
        position: relative;
    }
    .sketchy::before {
        pointer-events: none;
        content: '';
        border: 2px solid #353535;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(2deg);
        border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
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
        .gallery-grid {
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