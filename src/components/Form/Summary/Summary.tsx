import { FC } from 'react';
import { SummaryProps } from '../../../utils/types';

export const Summary: FC<SummaryProps> = ({ name, age, hobby }) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
        </>
    );
};
