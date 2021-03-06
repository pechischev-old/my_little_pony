import React, { FC } from 'react';
import { IFieldProps } from './IField';
import { Field } from 'react-final-form';

export const RangeField: FC<IFieldProps<number | string>> = ({name, label, type, ...rest}) => (
    <div className={'field range-field'}>
        <label>{label}</label>
        <Field
            name={`${name}.from`}
            type={type}
            component='input'
            placeholder={'от'}
            {...rest}
        />
        <Field
            name={`${name}.to`}
            type={type}
            component='input'
            placeholder={'до'}
            {...rest}
        />
    </div>
);