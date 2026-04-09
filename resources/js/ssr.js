import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { ZiggyVue } from 'ziggy-js'
import { route as ziggyRoute } from 'ziggy-js'

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      const page = pages[`./Pages/${name}.vue`]
      return page.default ? page.default : page
    },
    setup({ App, props, plugin }) {
      // Make Ziggy route function available globally
      globalThis.route = (name, params, absolute, config = page.props.ziggy) => {
        return ziggyRoute(name, params, absolute, config)
      }
      
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue, {
            ...page.props.ziggy,
            location: new URL(page.props.ziggy.location),
        })
    },
  }),
)
