import { FieldProps, FieldRenderProps } from "react-final-form";

export interface IField<Value> extends FieldProps<Value, FieldRenderProps<Value>> {
    label?: string;
    placeholder?: string;
}