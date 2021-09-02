import './App.scss';
import Modal from './components/Modal/Modal';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

const mapStateToProps = ({
    photoCollection,
    photoInfoCollection,
    photoIds,
}) => ({
    photoCollection,
    photoIds,
    photoInfoCollection,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: () => {
            dispatch(actions.getPhotos());
        },
        getPhotoInfo: (id) => {
            dispatch(actions.getPhotoInfo(id));
        },
    };
};

const App = ({
    getPhotos,
    photoCollection,
    photoIds,
    getPhotoInfo,
    photoInfoCollection,
}) => {
    const [showModal, changeModalVisible] = useState(false);
    const [idOpenedPhoto, setIdOpenedPhoto] = useState(null);

    useEffect(() => {
        getPhotos();
    }, [getPhotos]);

    useEffect(() => {
        idOpenedPhoto &&
            !photoInfoCollection[idOpenedPhoto] &&
            getPhotoInfo(idOpenedPhoto);
    }, [getPhotoInfo, idOpenedPhoto, photoInfoCollection]);

    return (
        <div className="App">
            {showModal && photoInfoCollection[idOpenedPhoto] && (
                <Modal
                    closeModal={() => changeModalVisible(false)}
                    src={photoInfoCollection[idOpenedPhoto].url}
                    comments={photoInfoCollection[idOpenedPhoto].comments}
                    idPhoto={idOpenedPhoto}
                />
            )}
            <div>
                <header className="title">Test app</header>
                <main className="photoContainer">
                    {photoIds.map((id) => (
                        <img
                            onClick={() => {
                                setIdOpenedPhoto(id);
                                changeModalVisible(true);
                            }}
                            className="photoPreview"
                            src={photoCollection[id].url}
                            alt="Фотография"
                        />
                    ))}
                </main>
            </div>
            <footer className="footer">
                <span className="footer__text">© 2018-2019</span>
            </footer>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
