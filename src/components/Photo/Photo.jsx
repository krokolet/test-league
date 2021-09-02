import Modal from '../Modal/Modal';
import './photo.scss';

const Photo = ({ changeModalVisible }) => {
    return (
        <img
            onClick={() => changeModalVisible(true)}
            className="photoPreview"
            src="r.png"
            alt="Фотография"
        />
    );
};
export default Photo;
