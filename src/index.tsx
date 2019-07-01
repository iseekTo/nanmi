import * as React from 'react'
import * as ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import '../components/styles/reset.less'
import App from './pages/App'

declare const module: any;
const app = document.getElementById('app') as HTMLElement

const render = (Component: React.ComponentClass) => {
    const renderMethods = module.hot ? ReactDom.render : ReactDom.hydrate;
    renderMethods(
        <AppContainer>
            <Component />
        </AppContainer>,
        app
    )
}

render(App)

if (module.hot) {
    module.hot.accept(() => {
        const nextApp = (App as any).default
        nextApp(App)
    })
}
