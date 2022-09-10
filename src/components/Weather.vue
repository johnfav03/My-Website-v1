<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 40 ? 'warm' : ''">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search.."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°F</div>
          <div class="weather"> {{ weather.weather[0].main }} </div>
        </div>
      </div>
   </main>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
      api_key: '5e98a5337362f538992edc1e7dae6bd6',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: 'Ann Arbor',
      weather: {}
    }
  },
  mounted() {
    fetch(`${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
  },
  methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", 
        "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
      
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();

      return `${day}, ${month}/${date}/${year}`;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  height: 100%;
}

#app {
  background-image: url('.././assets/cold-bg.jpg');
  height: 100%;
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  z-index: 1;
  pointer-events: auto;
  width: 100%;
}

#app.warm {
  background-image: url('.././assets/warm-bg.jpg');
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
}

main {
  height: 100%;
  width: 100%;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
}

.search-box {
  width: 100%;
  margin-bottom: 2vh;
  height: 50px;
}

.search-box .search-bar {
  display: block;
  max-width: 600px;
  width: 100%;
  padding: 15px;
  margin: auto;
  color: #313131;
  font-size: 2vh;
  height: 50px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;

  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #FFF;
  font-size: 2vh;
  letter-spacing: 0.2ch;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #FFF;
  font-size: 2vh;
  letter-spacing: 0.1ch;
  font-weight: 500;
  text-align: center;
  margin-top: 1vh;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.25);
}

.weather-wrap {
  height: calc(100% - 50px - 2vh);
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 6vh;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 2vh 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 3vh;
  letter-spacing: 0.1ch;
  font-weight: 700;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.25);
}
@media only screen and (max-width: 600px) {
  #app {
      border: none;
      border-radius: 0;
  }
  #app.warm {
      border: none;
      border-radius: 0;
  }
}
</style>