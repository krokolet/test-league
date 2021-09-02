import FormComment from '../FormComment/FormComment';
import Comment from '../Comment/Comment';
import './modal.scss';

const Modal = ({ changeModalVisible }) => {
    return (
        <div className="modal">
            <div className="modal__window">
                <div className="modal__columnLeft">
                    <img
                        className="modal__photo"
                        src="./r2.png"
                        alt="Фотография в полном размере"
                    />
                    <div className="modal__formComment">
                        <FormComment />
                    </div>
                </div>
                <div className="modal__comments">
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
                <button
                    className="modal__closeBtn"
                    onClick={() => changeModalVisible(false)}
                />
            </div>
        </div>
    );
};

export default Modal;
