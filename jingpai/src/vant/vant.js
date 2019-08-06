import Vue from 'vue'

import {
    Swipe,
    SwipeItem
} from 'vant';

import {
    Lazyload
} from 'vant';

import {
    Button,
    Divider
} from 'vant';

import {
    Step,
    Steps,
    Card,
    Stepper
} from 'vant';

// 分页
import {
    Pagination
} from 'vant';


export default () => {
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Button).use(Divider);
    Vue.use(Step).use(Steps)
    Vue.use(Card)
    Vue.use(Stepper)
    Vue.use(Pagination);
}