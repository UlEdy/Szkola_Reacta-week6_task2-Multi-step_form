import { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from 'react';

interface PropsDataForm {
    firstName: string;
    age: string;
    hobby: string;
}

export interface ErrorMessagesType {
    isNumber: string;
    isNotZero: string;
}

export type EventForm = ChangeEvent<HTMLInputElement | HTMLSelectElement>;
export type EventInput = ChangeEvent<HTMLInputElement>;
export type EventSelect = ChangeEvent<HTMLSelectElement>;

export type SetDataFormType = Dispatch<SetStateAction<PropsDataForm>>;

export type SetErrorMessagesType = Dispatch<SetStateAction<ErrorMessagesType>>;

export type FirstNameInfoProps = {
    firstName: string;
    handleChange: (event: EventInput) => void;
};
export type AgeInfoProps = {
    age: string;
    errorMessage: ErrorMessagesType;
    handleChange: (event: EventInput) => void;
};

export type HobbyInfoProps = {
    hobby: string;
    handleChange: (event: EventSelect) => void;
};

export type ButtonProps = {
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export interface SummaryProps {
    name: string;
    age: string;
    hobby: string;
}
