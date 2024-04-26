import { FC } from 'react';
import { FirstNameInfoProps } from '../../../utils/types';

export const FirstNameInfo: FC<FirstNameInfoProps> = ({
    firstName,
    handleChange,
}) => {
    return (
        <div>
            <label htmlFor='firstName'>Name: </label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={handleChange}
            />
        </div>
    );
};
