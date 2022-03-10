import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./Shared/Admin/Layout.vue"
import route from 'ziggy-js';
createInertiaApp({
    title: title => `${title} - Scc`,
    resolve: async name => {
        // You can even go a step further and conditionally set the default page layout based on the page name, which is available to the resolve() method. For example, maybe you don't want the default layout applied to your public pages.
        const page = require(`./Pages/${name}`).default
        if (page.layout === undefined && !name.startsWith('Public/')) {
            page.layout = Layout
        }
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)
            .component('Head', Head)
            .mixin({ methods: { route } })
            .mount(el)
    },
})
InertiaProgress.init()
