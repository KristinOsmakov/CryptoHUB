import { Provider } from 'react-redux'
import './App.css'
import { CryptoExchanges } from './shared/ui/CryptoExchanges'
import { store } from './store/store'
import { Modal } from './shared/ui/Modal'

function App() {

  return (
    <Provider store={store}>
      <CryptoExchanges/>
      <Modal/>
    </Provider>
  )
}

export default App
