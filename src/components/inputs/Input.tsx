"use client";

import { Field, ErrorMessage } from "formik";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;
}

const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        placeholder={label}
        {...rest}
      />
      <ErrorMessage
        name={name}
        className="text-red-500 text-xs italic"
        component={"p"}
      />
    </div>
  );
};

export default Input;
