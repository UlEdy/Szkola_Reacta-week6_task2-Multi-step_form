import { FC } from 'react';
import { ButtonProps } from '../../utils/types';

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};
