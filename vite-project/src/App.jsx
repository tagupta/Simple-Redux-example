import { CakeView } from '../src/features/cake/CakeView';
import { IcecreamView } from '../src/features/icecream/IcecreamView';
import { UserView } from '../src/features/user/UserView';
import './App.css';
function App() {
  return (
    <div className="App">
        <CakeView/>
        <IcecreamView/>
        <UserView/>
    </div>
  )
}

export default App
