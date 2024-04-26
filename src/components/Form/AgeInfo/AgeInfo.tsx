import { FC } from 'react';
import { AgeInfoProps } from '../../../utils/types';

export const AgeInfo: FC<AgeInfoProps> = ({
    age,
    handleChange,
    errorMessage,
}) => {
    const { isNumber, isNotZero } = errorMessage;
    return (
        <div>
            <label htmlFor='age'>Age: </label>
            <input
                type='text'
                id='age'
                name='age'
                value={age}
                onChange={handleChange}
            />
            {isNumber && <p>{isNumber}</p>}
            {isNotZero && <p>{isNotZero}</p>}
        </div>
    );
};
