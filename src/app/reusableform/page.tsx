"use client";

import FormikContainer from "@/components/FormikContainer";
import FormControl from "@/components/inputs/FormControl";
import { object, string, array } from "yup";

// Data
const selectOptions = [
  { key: "Select a value!", value: "" },
  { key: "Option 1", value: "Option1" },
  { key: "Option 2", value: "Option2" },
  { key: "Option 3", value: "Option3" },
  { key: "Option 4", value: "Option4" },
];
const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];
const checkboxOptions = [
  { key: "Option 1", value: "cOption1" },
  { key: "Option 2", value: "cOption2" },
  { key: "Option 3", value: "cOption3" },
];

// Formik
const initialValues = {
  email: "",
  description: "",
  selected: "",
  radioOption: "",
  checkboxOptions: [],
};

//Validation Schema
const validationSchema = object({
  email: string().email("Invalid email!").required("Required!"),
  description: string().required("Required!"),
  selected: string().required("Required!"),
  radioOption: string().required("Required!"),
  checkboxOptions: array().required("Required!"),
});

// OnSubmit Function
const onSubmit = (values: {}) => {
  console.log("Form Submitted", values);
};

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen py-4 bg-neutral-200 ">
      <FormikContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormControl control="input" name="email" label="Email" type="email" />
        <FormControl
          control="textarea"
          name="description"
          label="Description"
        />
        <FormControl
          control="select"
          name="selected"
          label="Selected Option"
          options={selectOptions}
        />
        <FormControl
          control="radio"
          name="radioOption"
          label="Radio Option"
          options={radioOptions}
        />
        <FormControl
          control="checkbox"
          name="checkboxOptions"
          label="Checkbox Options"
          options={checkboxOptions}
        />

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </FormikContainer>
    </main>
  );
};

export default page;
