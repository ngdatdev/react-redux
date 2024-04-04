import logo from './logo.svg';
import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from './action/actions';
function App(props) {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.count)

  const handleIncrease = () => {
    dispatch(increaseCounter())
  }

  const handleDecrease = () => {
    dispatch(decreaseCounter())

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Count: {counter}</div>

      <button onClick={handleIncrease}>Increase Count</button>

      <button onClick={handleDecrease}>Decrease Count</button>
      </header>
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App