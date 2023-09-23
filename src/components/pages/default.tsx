import logo from 'assets/logo.svg'
import Header from 'components/parts/Header'

const Root: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </div>
    )
}
export default Root
