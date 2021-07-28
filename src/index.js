import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals'
import { compose, createStore, applyMiddleware } from 'redux'
import App from './App'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

const app = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)

render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
