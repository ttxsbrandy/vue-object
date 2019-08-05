import Vue from 'vue'


import { Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';


export default ()=>{
    Vue.use(Button);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
}