import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import { useGoogleMapSetUp } from "../config/map";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App
          }
    ]
})

router.beforeEach(async () => {
    const {googleMapApiLoader} = useGoogleMapSetUp();

    try {
        await googleMapApiLoader.importLibrary('maps')
    } catch (e) {
        console.error('マップの読み込みに失敗しました')
    }
})

export default router;