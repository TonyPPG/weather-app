/*
Routes for maintain internal route in App
*/
import Home from './components/Home.vue'
import WeatherCards from './components/weathers/WeatherCards.vue'

export const routes = [
    // Not using Home component
    // { path: '/', component: Home },
    { path: '/', component: WeatherCards },
    { path: '/weathercards', component: WeatherCards },
]