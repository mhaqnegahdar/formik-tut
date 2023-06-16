"use client";

import CheckBox from "./CheckBox";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";

//https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/
interface FormControlProps extends React.ComponentPropsWithoutRef<"input"> {
  control: "input" | "textarea" | "select" | "checkbox" | "date" | "radio";
  name: string;
  label: string;
  options?: { key: string; value: string }[];
}

const FormControl = ({
  control,
  name,
  label,
  options,
  ...rest
}: FormControlProps) => {
  switch (control) {
    case "input":
      return <Input name={name} label={label} {...rest} />;
    case "textarea":
      return <Textarea name={name} label={label} {...rest} />;
    case "select":
      return (
        <Select name={name} label={label} {...rest} options={options || []} />
      );
    case "radio":
      return (
        <Radio name={name} label={label} {...rest} options={options || []} />
      );
    case "checkbox":
      return (
        <CheckBox name={name} label={label} {...rest} options={options || []} />
      );
    case "date":
      return "";

    default:
      return null;
  }
};

export default FormControl;
