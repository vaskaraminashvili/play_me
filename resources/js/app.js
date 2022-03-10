import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./Shared/Admin/Layout.vue"


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
            .mount(el)
    },
})
InertiaProgress.init()
