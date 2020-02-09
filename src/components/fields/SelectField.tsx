import React, { FC } from 'react';
import { IFieldProps } from './IField';
import { IItem } from '../../interfaces';
import { Field } from 'react-final-form';

interface ISelectFieldProps extends IFieldProps<number | string> {
    options: IItem[]
}

export const SelectField: FC<ISelectFieldProps> = ({options = [], name, label, placeholder, type, ...rest}) => (
    <div className={'field select-field'}>
        <label>{label}</label>
        <Field
            name={name}
            placeholder={placeholder}
            component='select'
            {...rest}
        >
            <option disabled>{placeholder}</option>
            {options.map(({id, title}) => <option value={id} key={id}>{title}</option>)}
        </Field>
    </div>
);