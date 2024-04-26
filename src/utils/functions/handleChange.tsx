import { EventForm, SetDataFormType, SetErrorMessagesType } from '../types';

export const handleChange = (
    event: EventForm,
    setDataForm: SetDataFormType,
    setErrorMessages: SetErrorMessagesType
) => {
    event.preventDefault();

    const { name, value } = event.target;

    if (name === 'age' && isNaN(Number(value))) {
        setErrorMessages(prevMessages => {
            return { ...prevMessages, isNumber: 'Age must be a number' };
        });
    } else {
        setErrorMessages(prevMessages => {
            return { ...prevMessages, isNumber: '' };
        });
    }

    if (name === 'age' && Number(value) <= 0) {
        setErrorMessages(prevMessages => {
            return {
                ...prevMessages,
                isNotZero: 'Age must be a positive number',
            };
        });
    } else {
        setErrorMessages(prevMessages => {
            return { ...prevMessages, isNotZero: '' };
        });
    }

    setDataForm(prevData => {
        return { ...prevData, [name]: value };
    });
};
