import * as React from 'react';

import './comment.scss';

const Comment = ({ date, text }) => {
    return (
        <div className="comment">
            <div className="comment__date">
                {new Date(date).toLocaleDateString('ru-Ru')}
            </div>
            <div className="comment__text">{text}</div>
        </div>
    );
};

export default Comment;
