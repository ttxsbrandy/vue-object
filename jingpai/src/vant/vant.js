import Vue from 'vue'

import {
    Button,
    Step,
    Steps,
    Card,
    Stepper
} from 'vant';
import {
    Swipe,
    SwipeItem
} from 'vant';
import {
    Lazyload
} from 'vant';
import {
  
    Divider
} from 'vant';

export default () => {
    Vue.use(Button);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Button).use(Divider);
    Vue.use(Button)
    Vue.use(Step).use(Steps)
    Vue.use(Card)
    Vue.use(Stepper)
}