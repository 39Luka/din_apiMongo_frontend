import { InputField, SelectField, TextareaField } from '../../components/forms/Field';

export default {
    title: 'Components/Fields',
    tags: ['autodocs'],
};

export const Input = {
    render: (args) => <InputField {...args} />,
    args: {
        label: 'Nombre del Producto',
        id: 'nombre',
        placeholder: 'Escribe algo...',
        helpText: 'Dato obligatorio.',
    },
};

export const InputWithError = {
    render: (args) => <InputField {...args} />,
    args: {
        ...Input.args,
        error: 'Este campo no puede estar vacío.',
    },
};

export const Textarea = {
    render: (args) => <TextareaField {...args} />,
    args: {
        label: 'Descripción',
        id: 'desc',
        placeholder: 'Detalles del producto...',
    },
};

export const Select = {
    render: (args) => <SelectField {...args} />,
    args: {
        label: 'Categoría',
        id: 'cat',
        options: [
            { value: '1', label: 'Pan' },
            { value: '2', label: 'Bollería' },
        ],
        helpText: 'Elige un tipo.',
    },
};
