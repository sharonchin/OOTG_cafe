import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  valueAsNumber?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  valueAsNumber = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="">
      <label htmlFor={name} className="block text-ct-blue-600 mb-3">
        {label}
      </label>
      <input
        type={type}
        placeholder=" "
        className="block w-full rounded-xl appearance-none focus:outline-none py-2 px-4 bg-[#F1F5F9]"
        {...register(name, { valueAsNumber })}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;
