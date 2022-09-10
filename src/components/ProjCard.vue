<template>
    <div id="card-list" v-if="displayNum != 0">
        <router-link class="card sketchy" v-if="displayNum == 1" to="/currentrail" target="_blank">
            <img :src="require('./../assets/currentrail-img.jpg')"/>
            <h1>Currentrail</h1>
            <p>Currentrail is a project/startup that I started in June, 2022 with two co-founders. 
                The website is still under development, but the end goal is to create a tool to help college
                students navigate their way through student life, like clubs, courses, and internships to reach
                their goals using survey data from users. The project uses HTML, CSS, Javascript, PHP, and MySQL.
            </p>
        </router-link>
        <router-link class="card sketchy" v-if="displayNum == 2" to="/disp/app/weather">
            <img :src="require('./../assets/weather-img.jpg')"/>
            <h1>Locational Weather App</h1>
            <p>I first started this project to learn the VueJs framework, which I then also used to construct
                the site you're interacting with right now! The web app features geolocational searching services
                and live weather, temperature, and date updates through the use of the OpenWeather API, as well as
                background that changes from warm to cold depending on the temperature at the selected location.
            </p>
        </router-link>
        <router-link class="card sketchy" v-if="displayNum == 3" to="/disp/gal/egclub">
            <img :src="require('./../assets/egclub-robot-one.png')"/>
            <h1>Engineering Club</h1>
            <p>In high school I started a club with a close friend to teach Arduino microprocessors, 
                and two years later our club won 1K in a competition; Our submission was a fully autonomous
                table cleaning robot featuring an Arduino Micro, sensors, motors, drivers, a servo, and more. 
                I led the programming team, teaching a dozen members C++ and spearheading robot autonomy.
            </p>
        </router-link>
        <router-link class="card sketchy" v-if="displayNum == 4" to="/disp/gal/photobot">
            <img :src="require('./../assets/photobot-img.jpg')"/>
            <h1>Light-Tracking Robot</h1>
            <p>One of my favorite projects - with an Arduino Micro, I used a stepper motor and motor driver
                in combination with two photoresistors to make a robot that can rotate in order to
                "track" a moving light, which I coded in C++. A small breadboard is mounted to the
                stepper motor, which made for a challenge trying to wire across layers!
            </p>
        </router-link>
        <router-link class="card sketchy" v-if="displayNum == 5" to="/disp/gal/operation">
            <img :src="require('./../assets/operation-img.jpg')"/>
            <h1>Valentine's Day Operation</h1>
            <p>This was a project I made in middle school as a valentine's day gift, when I was first
                learning basic wiring. The circuit is a battery connected at one end to a buzzer and a loop
                of wire in the shape of a heart, a set of tweezers on the other. When the tweezers touch
                the loop, the buzzer goes off. The whole system was then mounted to a box of candy hearts!
            </p>
        </router-link>
        <router-link class="card sketchy" v-if="displayNum == 6" to="/disp/gal/cbarm">
            <img :src="require('./../assets/cbarm-img.jpg')"/>
            <h1>Cardboard Arm Extension</h1>
            <p>This was my "capstone" project for my 8th grade creation lab. I designed and made it over
                two months, a system that uses rubber bands and string pulleys run through straws to move 
                the fingers. It also featured an LED light on the back wired and soldered in parallel, attached
                to a switch and a mounted battery pack.
            </p>
        </router-link>
    </div>
</template>
  
<script>
    export default {
        name: 'ProjCard',
        props: [
            'displayNum'
        ]
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
    #card-list {
        width: 100%;
        height: clamp(100px, 30vh, 400px);
    }
    .card {
        width: clamp(200px, 100%, 1000px);
        height: 100%;
        margin: auto;
        border-radius: 1vmin;
        display: block;
        border: 1px solid black;
        pointer-events: auto;
    }
    .card:hover {
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
    }
    .card img {
        width: clamp(100px, 30vh, 400px);
        height: 100%;
        display: block;
        float: left;
        border-radius: 4% 0 0 16% / 1% 0 0 6%
    }
    .card h1 {
        width: calc(100% - clamp(100px, 30vh, 400px));
        height: 35%;
        display: block;
        float: left;
        padding: 0 1vw;
        font-size: min(2vw, 45px);
        line-height: calc(0.35 * clamp(100px, 30vh, 400px));
        color: #406040;

        font-family: 'Prompt', sans-serif;
    }
    .card p {
        width: calc(100% - clamp(100px, 30vh, 400px));
        height: 60%;
        display: block;
        float: left;
        padding: 0 3vw 0 1vw;
        line-height: clamp(0.65vw, 3vh, 25px);
        font-size: min(1.2vw, 25px);
        color: black;

        font-family: 'Rajdhani', sans-serif;
    }
    .sketchy {
        pointer-events: auto;
        display: block;
        border: 1px solid #333333;
        border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
        background: #ffffff;
        position: relative;
        z-index: 0;
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
        transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(1.5deg);
        border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
        z-index: 1;
    }
</style>