import { MouseEventHandler, useState } from 'react';

import { handleChange } from '../../utils/functions/handleChange';

import FirstNameInfo from './FirstNameInfo';
import AgeInfo from './AgeInfo';
import HobbyInfo from './HobbyInfo';
import Button from '../Button';
import Summary from './Summary';

import { EventForm } from '../../utils/types';

export const Form = () => {
    const [dataForm, setDataForm] = useState({
        firstName: '',
        age: '',
        hobby: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        isNumber: '',
        isNotZero: '',
    });

    const [stepCounter, setStepCounter] = useState(0);

    const handleFormChange = (event: EventForm) => {
        handleChange(event, setDataForm, setErrorMessages);
    };

    const onClickNext: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault();
        if (stepCounter <= 2) {
            return setStepCounter(prevStep => {
                return prevStep + 1;
            });
        } else {
            setStepCounter(() => {
                return 0;
            });
        }
    };

    const onClickBack: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault();
        if (stepCounter <= 3 && stepCounter > 0) {
            return setStepCounter(prevStep => {
                return prevStep - 1;
            });
        } else if (stepCounter === 0) {
            setStepCounter(() => {
                return 3;
            });
        }
    };

    const onSubmit = () => {
        console.log('Data: ', dataForm);
        setDataForm({ firstName: '', age: '', hobby: '' });
        setStepCounter(0);
    };

    const { firstName, age, hobby } = dataForm;

    return (
        <>
            <form>
                {stepCounter === 0 && (
                    <FirstNameInfo
                        firstName={firstName}
                        handleChange={handleFormChange}
                    />
                )}
                {stepCounter === 1 && (
                    <AgeInfo
                        age={age}
                        handleChange={handleFormChange}
                        errorMessage={errorMessages}
                    />
                )}
                {stepCounter === 2 && (
                    <HobbyInfo
                        hobby={hobby}
                        handleChange={handleFormChange}
                    />
                )}
                {stepCounter === 3 && (
                    <Summary
                        name={firstName}
                        age={age}
                        hobby={hobby}
                    />
                )}
            </form>

            {stepCounter !== 0 && (
                <Button
                    label='Back'
                    onClick={onClickBack}
                />
            )}

            {stepCounter !== 3 && (
                <Button
                    label='Next'
                    onClick={onClickNext}
                />
            )}

            {stepCounter === 3 && (
                <Button
                    label='Submit'
                    onClick={onSubmit}
                />
            )}
        </>
    );
};
