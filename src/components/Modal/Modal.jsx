import FormComment from '../FormComment/FormComment';
import Comment from '../Comment/Comment';
import './modal.scss';

const Modal = ({ closeModal, src, comments, idPhoto }) => {
    return (
        <div className="modal">
            <div className="modal__window">
                <div className="modal__columnLeft">
                    <img
                        className="modal__photo"
                        src={src}
                        alt="Фотография в полном размере"
                    />
                    <div className="modal__formComment">
                        <FormComment idPhoto={idPhoto} />
                    </div>
                </div>
                <div className="modal__comments">
                    {comments.map((comment) => (
                        <Comment date={comment.date} text={comment.text} />
                    ))}
                </div>
                <button
                    className="modal__closeBtn"
                    onClick={() => closeModal()}
                />
            </div>
        </div>
    );
};

export default Modal;
