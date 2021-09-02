import './photo.scss';

const Photo = ({ openModal, src, setIdOpenedPhoto, id }) => {
    return (
        <img
            onClick={() => {
                setIdOpenedPhoto(id);
                openModal();
            }}
            className="photoPreview"
            src={src}
            alt="Фотография"
        />
    );
};
export default Photo;
