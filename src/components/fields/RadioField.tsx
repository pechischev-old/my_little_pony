import React, { FC } from 'react';
import { IFieldProps } from './IField';
import { Field } from 'react-final-form';

interface IRadioValue {
    label: string;
    value: number | string | undefined;
}

interface IRadioFieldProps extends IFieldProps<IRadioValue> {
    values: IRadioValue[];
}

export const RadioField: FC<IRadioFieldProps> = ({name, values = [], label}) => (
    <div className={'field radio-field'}>
        <label>{label}</label>
        <div>
            {
                values.map(({value, label}, index) => (
                    <label key={index}>
                        <Field
                            name={name}
                            component='input'
                            type='radio'
                            value={value}
                        />{' '}
                        {label}
                    </label>
                ))
            }
        </div>
    </div>
);