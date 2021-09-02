import './App.scss';
import Photo from './components/Photo/Photo';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
    const [showModal, changeModalVisible] = useState(false);

    return (
        <div className="App">
            <div>
                <header className="title">Test app</header>
                <main className="photoContainer">
                    <Photo changeModalVisible={changeModalVisible} />
                    <Photo changeModalVisible={changeModalVisible} />
                    <Photo changeModalVisible={changeModalVisible} />
                    <Photo changeModalVisible={changeModalVisible} />
                    <Photo changeModalVisible={changeModalVisible} />
                    <Photo changeModalVisible={changeModalVisible} />
                </main>
            </div>
            {showModal ? (
                <Modal changeModalVisible={changeModalVisible} />
            ) : null}
            <footer className="footer">
                <span className="footer__text">© 2018-2019</span>
            </footer>
        </div>
    );
}

export default App;
