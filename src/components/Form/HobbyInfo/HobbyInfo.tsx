import { FC } from 'react';
import { HobbyInfoProps } from '../../../utils/types';

export const HobbyInfo: FC<HobbyInfoProps> = ({ hobby, handleChange }) => {
    return (
        <div>
            <label htmlFor='hobby'>Hobby: </label>
            <select
                name='hobby'
                id='hobby'
                value={hobby}
                onChange={handleChange}
            >
                <option value='running'>Running</option>
                <option value='genealogy'>Genealogy</option>
                <option value='programming '>Programming</option>
                <option value='reading '>Reading</option>
            </select>
        </div>
    );
};
