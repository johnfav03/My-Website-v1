<template>
    <div id="navbar">
        <div class="rel-wrap">
            <router-link style="text-decoration: none;" class="nav-btn top-16" v-if="link != ''" :to="link">
                <div class="icon-wrap">&#8592</div>
            </router-link>
            <div class="nav-btn top-35"
                @click="toggleMenu"
                :style="{ height: this.height + 'vh', transition: this.trans }"
            >
                <ul id="menu-icon"
                    :style="{ height: this.menuHeight + 'px' }"
                >
                    <div class="icon-bar"></div>
                    <div class="icon-bar"></div>
                    <div class="icon-bar"></div>
                </ul>
                <ul id="nav-list" :style="{ display: this.elemDisp, left: this.elemLeft, transition: this.trans }">
                    <li><router-link to="/">About Me</router-link></li>
                    <li><router-link to="/projects/0/2">Web Projects</router-link></li>
                    <li><router-link to="/projects/3/4">Arduino Projects</router-link></li>
                    <li><router-link to="/projects/5/6">Older Projects</router-link></li>
                </ul>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: 'Navbar',
        props: [
            'link'
        ],
        data() {
            return {
                height: 15,
                menuHeight: 30,
                trans: 'none',
                elemDisp: 'none',
                elemLeft: '40vw'
            }
        },
        methods: {
            toggleMenu () {
                this.trans = '0.7s';
                this.elemDisp = (this.elemDisp == 'none' ? 'flex' : 'none');
                this.height = (this.height == 15 ? 50 : 15);
                this.menuHeight = (this.menuHeight == 30 ? 40 : 30);
                setTimeout(() => this.elemLeft = (this.elemLeft == '40vw' ? '135px' : '40vw'), 50);
                setTimeout(() => this.trans = 'none', 700);
            }
        },
    }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css?family=Oswald:wght@300;400;700;900&display=swap');

    #navbar {
        position: fixed;
        display: block;
        right: 0;
        top: 0;
        width: 20vw;
        min-width: 300px;
        height: 100vh;
        background-color: #406040;

        font-family: 'Oswald', sans-serif;
    }

    #menu-icon:hover {
        cursor: pointer;
    }
    .rel-wrap {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .nav-btn {
        position: absolute;
        display: block;
        top: 22vh;
        left: -50px;
        width: 100px;
        height: 15vh;
        background-color: #dd7722;
    }
    .top-16 {
        top: 16vh;
    }
    .top-35 {
        top: 35vh;
    }
    #menu-icon {
        width: 40px;
        height: 30px;
        margin: auto;
        margin-top: calc(0.5 * calc(15vh - 30px));
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.7s;
        pointer-events: auto;
    }
    #menu-icon .icon-bar {
        pointer-events: none;
        width: 100%;
        height: 6px;
        background-color: white;
        display: block;
    }
    #nav-list {
        height: 30vh;
        width: 230px;
        text-align: left;
        position: absolute;
        top: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 2;
    }
    #nav-list li {
        list-style-type: none;
    }
    #nav-list li a {
        list-style-type: none;
        font-size: 30px;
        z-index: -1;
        color: #f5f5ea !important;
        text-decoration: none;
    }
    #nav-list li a:hover {
        color: #b8b8b2;
    }
    @media only screen and (max-width: 1000px) {
        #navbar {
            display: none !important;
        }
    }
    .icon-wrap {
        width: 100%;
        height: 15vh;
        position: relative;
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 40px;
        line-height: 12.5vh;
        font-weight: 900;
    }
  </style>