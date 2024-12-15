import { Provider } from 'react-redux'
import './App.css'
import { CryptoExchanges } from './shared/ui/CryptoExchanges'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      <CryptoExchanges/>
    </Provider>
  )
}

export default App
