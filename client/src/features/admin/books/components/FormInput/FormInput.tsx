import { UseFormRegister, FieldValues } from "react-hook-form";
import { Book } from "../../book.schema";

type FormInputProps = {
    label: string;
    name: keyof Book;
    type: string;
    register: UseFormRegister<Book>;
    errors: FieldValues;
};

const FormInput = ({ label, name, type, register, errors }: FormInputProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                {...register(name)}
                className={`input input-bordered w-full ${
                    errors[name] ? "input-error" : ""
                }`}
            />
            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">
                    {errors[name]?.message}
                </p>
            )}
        </div>
    );
};

export default FormInput;
