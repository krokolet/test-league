import * as React from 'react';
import { useForm } from 'react-hook-form';

import './formComment.scss';

const FormComment = () => {
    const { handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <form className="formComment" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="formComment__input"
                // {...register('firstName', { required: true })}
                placeholder="Ваше имя"
            />

            <input
                className="formComment__input"
                // {...register('lastName', { required: true })}
                placeholder="Ваш комментарий"
            />

            <input className="formComment__input submitBtn" type="submit" />
        </form>
    );
};

export default FormComment;
