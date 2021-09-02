import * as React from 'react';
import { useForm } from 'react-hook-form';

import sendComment from './../../apiFunctions/sendComment';
import './formComment.scss';

const FormComment = (idPhoto) => {
    const { handleSubmit, register, reset } = useForm();
    const onSubmit = (values) =>
        sendComment(idPhoto, {
            name: values.name,
            comment: values.comment,
        }).then(() => {
            reset({});
            alert('Комментарий отправлен.');
        });

    return (
        <form className="formComment" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="formComment__input"
                {...register('name', { required: true })}
                placeholder="Ваше имя"
            />

            <input
                className="formComment__input"
                {...register('comment', { required: true })}
                placeholder="Ваш комментарий"
            />

            <input className="formComment__input submitBtn" type="submit" />
        </form>
    );
};

export default FormComment;
