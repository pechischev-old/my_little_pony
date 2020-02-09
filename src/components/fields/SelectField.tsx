import React, { FC } from "react";
import { IField } from "./IField";
import { IItem } from "../../entities";
import { Field } from "react-final-form";

interface ISelectField extends IField<number | string> {
    options: IItem[]
}

export const SelectField: FC<ISelectField> = ({options = [], name, label, placeholder, type, ...rest}) => (
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