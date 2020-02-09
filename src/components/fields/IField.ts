import { FieldProps, FieldRenderProps } from 'react-final-form';

export interface IFieldProps<Value> extends FieldProps<Value, FieldRenderProps<Value>> {
    label?: string;
    placeholder?: string;
}