import './index.css'
import {render} from 'preact'
import {App} from './app.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient()


async function enableMocking() {
    if (import.meta.env.MODE !== 'development') {
        return
    }

    const {worker} = await import('./mocks/browser')

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}

enableMocking().then(() => {
    render(<QueryClientProvider
        client={queryClient}><App/></QueryClientProvider>, document.getElementById('app') as HTMLElement)
})


