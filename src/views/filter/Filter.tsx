import { Form } from 'react-final-form';
import React, { FC } from 'react';
import { IItem } from '../../interfaces';
import { RadioField, RangeField, SelectField } from '../../components/fields';

interface IFilterProps {
    colors: IItem[];
    kinds: IItem[];

    onSubmit(data: object): void;
}

// TODO: коневертить данные со строк в числа
export const Filter: FC<IFilterProps> = ({colors, kinds, onSubmit}) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, submitting, pristine, form}) => (
                <form onSubmit={handleSubmit}>
                    <RangeField
                        label={'Цена'}
                        name={'price'}
                        type={'number'}
                    />

                    <SelectField options={colors} name={'color'} label={'Цвет'} placeholder={'Выберите цвет'}/>
                    <SelectField options={kinds} name={'kind'} label={'Вид'} placeholder={'Выберите вид'}/>
                    <RadioField
                        values={[
                            {label: 'Да', value: '1'},
                            {label: 'Нет', value: '0'},
                        ]}
                        label={'Новинка'}
                        name={'isNew'}
                    />

                    <div>
                        <button type='submit' disabled={submitting || pristine}>
                            Найти
                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                form.reset();
                                handleSubmit();
                            }}
                            disabled={submitting || pristine}
                        >
                            Сбросить
                        </button>
                    </div>
                </form>
            )}
        />
    );
};