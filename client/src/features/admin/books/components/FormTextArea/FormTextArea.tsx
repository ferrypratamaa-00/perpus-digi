import { UseFormRegister, FieldValues } from "react-hook-form";
import { Book } from "../../book.schema";

type FormTextAreaProps = {
    label: string;
    name: keyof Book;
    register: UseFormRegister<Book>;
    errors: FieldValues;
};

const FormTextArea = ({ label, name, register, errors }: FormTextAreaProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <textarea
                {...register(name)}
                className={`textarea textarea-bordered w-full ${
                    errors[name] ? "textarea-error" : ""
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

export default FormTextArea;
