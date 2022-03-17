import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./Admin/Shared/Layout/Layout.vue"
import route from 'ziggy-js';
import { upperFirst, camelCase } from "lodash"



InertiaProgress.init();



createInertiaApp({
  resolve: async name => {
    // You can even go a step further and conditionally set the default page layout based on the page name, which is available to the resolve() method. For example, maybe you don't want the default layout applied to your public pages.
    let page;
    if (!name.startsWith('Public/')) {
      // load this direcotry for admin
      page = require(`./Admin/Pages/${name}`).default

    } else {
      // load this direcotry for websiste
      page = require(`./Web/Pages/${name}`).default

    }
    if (page.layout === undefined && !name.startsWith('Public/')) {
      page.layout = Layout
    }
    return page
  },
  title: (title) => title ? `${title} - Ping CRM` : 'Ping CRM',
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .component('Head', Head)
      .mixin({ methods: { route } });

    if (true) {// we need some condition to load this componets for admin only!!!
      // load this for admin
      // load components automaticaly
      // Vue 3 Forms lesson 4
      const requireComponent = require.context(
        './Admin/Shared/Form',
        false,
        /Base[A-Z]\w+\.(vue|js)$/
      )
      requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName)

        const componentName = upperFirst(
          camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
        )
        app.component(componentName, componentConfig.default || componentConfig)
      })

    } else {
      // load this for website


    }


    app.mount(el);

  },
})

// console.log(app);



