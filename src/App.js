import './App.scss';
import Photo from './components/Photo/Photo';
import Modal from './components/Modal/Modal';

function App() {
    return (
        <div className="App">
            <div>
                <header className="title">Test app</header>
                <main className="photoContainer">
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                </main>
            </div>
            <Modal />
            <footer className="footer">
                <span className="footer__text">© 2018-2019</span>
            </footer>
        </div>
    );
}

export default App;
