import Vue from 'vue'

import {
    Button,
    Step,
    Steps,
    Card,
    Stepper
} from 'vant';


export default () => {
    Vue.use(Button)
    Vue.use(Step).use(Steps)
    Vue.use(Card)
    Vue.use(Stepper)
}