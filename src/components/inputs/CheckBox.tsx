"use client";

import React from "react";

import { Field, ErrorMessage, FieldProps } from "formik";

interface CheckBoxProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;
  options: { key: string; value: string }[];
}

const CheckBox = ({ name, label, options, ...rest }: CheckBoxProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <Field id={name} name={name} placeholder={label} {...rest}>
        {({ field }: FieldProps) => {
          return (
            <div className=" flex flex-row gap-2 items-center justify-center shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {options.map(({ key, value }) => (
                <div
                  key={value}
                  className="flex gap-1 items-center justify-center"
                >
                  <input
                    type="checkbox"
                    {...field}
                    id={value}
                    value={value}
                    checked={field.value.includes(value)}
                  />
                  <label
                    htmlFor={value}
                    className="block text-gray-500 text-xs font-semibold "
                  >
                    {key}
                  </label>
                </div>
              ))}
            </div>
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        className="text-red-500 text-xs italic"
        component={"p"}
      />
    </div>
  );
};

export default CheckBox;
