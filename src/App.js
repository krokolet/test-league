import './App.scss';
import Photo from './components/Photo/Photo';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

import k from './img/k.png';
import r from './img/r.png';
import k2 from './img/full/k2.jpg';
import r2 from './img/full/r2.png';

function App() {
    const [showModal, changeModalVisible] = useState(false);
    const [idOpenedPhoto, setIdOpenedPhoto] = useState(null);

    const photos = {
        1: { preview: k, fullSize: k2 },
        2: { preview: r, fullSize: r2 },
    };

    const photosIds = ['1', '2'];
    return (
        <div className="App">
            {showModal && (
                <Modal
                    closeModal={() => changeModalVisible(false)}
                    src={photos[idOpenedPhoto].fullSize}
                />
            )}
            <div>
                <header className="title">Test app</header>
                <main className="photoContainer">
                    {photosIds.map((id) => (
                        <Photo
                            id={id}
                            openModal={() => changeModalVisible(true)}
                            setIdOpenedPhoto={setIdOpenedPhoto}
                            src={photos[id].preview}
                        />
                    ))}
                </main>
            </div>
            <footer className="footer">
                <span className="footer__text">© 2018-2019</span>
            </footer>
        </div>
    );
}

export default App;
