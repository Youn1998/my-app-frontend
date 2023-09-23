import 'styles/index.css'

import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import App from 'App'
import reportWebVitals from './reportWebVitals'
import { store } from 'store/configureStore'

window.onerror = (message, url, line, col, error) => {
    console.log(error.stack)
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(
        <>
            <Provider store={store}>
                <App />
            </Provider>
        </>
    )
}

reportWebVitals()
