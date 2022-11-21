import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from './app/store'
import App from './App'
import './index.css'

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <Provider store={store}>
    {/* se pasan las variables de entorno de auth0 */}
    {/* <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      audience={process.env.REACT_APP_AUTH_AUDIENCE}
      redirectUri={window.location.origin}
      scope="openid profile email"
    > */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Auth0Provider> */}
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
