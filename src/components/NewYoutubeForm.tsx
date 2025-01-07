"use client";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
  FieldArray,
  FastField,
} from "formik";
import Link from "next/link";
import { object, string, array } from "yup";

// Types
interface formData {
  name?: string;
  email?: string;
  channel?: string;
  comments?: string;
  address?: string;
  socials?: {
    linkedin?: string;
    github?: string;
  };
  phoneNumbers?: string[];
}

// Initial form state
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socials: {
    linkedin: "",
    github: "",
  },
  phoneNumbers: [""],
};

// Submission Functionality
const onSubmit = (values: formData) => {
  console.log("Form Submitted with values:", values);
};

const phoneRegex = RegExp(/09(0[1-2]|1[\d]|3[\d]|2[0-1])[\d]{3}[\d]{4}/g);

const validationSchema = object({
  name: string().required("Required!"),
  email: string().email("Invalid email format!").required("Required"),
  channel: string().required("Required!"),
  comments: string().required("Required!"),
  address: string().required("Required!"),
  socials: object({
    linkedin: string().required("Required!"),
    github: string().required("Required!"),
  }),
  phoneNumbers: array().of(
    string()
      .required("Required!")
      .matches(phoneRegex, "Not a valid Iran phone number!")
      .max(11, "Too Long!")
  ),
});

const NewYoutubeForm = () => {
  return (
    <div className="w-full max-w-xs">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              className="text-red-500 text-xs italic"
              component={"p"}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              className="text-red-500 text-xs italic"
              component={"p"}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="channel"
            >
              Channel
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="channel"
              name="channel"
              type="text"
              placeholder="Channel"
            />
            <ErrorMessage
              name="channel"
              className="text-red-500 text-xs italic"
              component={"p"}
            />
          </div>

          {/* TEXTEREA && FastField */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="comments"
            >
              Comments
            </label>
            <FastField
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comments"
              name="comments"
              placeholder="Comments"
              as="textarea"
            />
            <ErrorMessage
              name="comments"
              className="text-red-500 text-xs italic"
              component={"p"}
            />
          </div>

          {/* RENDER METHOD */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <Field name="address">
              {({ field, meta, form }: FieldProps) => {
                return (
                  <>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Address"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <p className="text-red-500 text-xs italic">
                        {meta.error}
                      </p>
                    )}
                  </>
                );
              }}
            </Field>
          </div>

          {/* Nested Object */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="linkedin"
            >
              Linkedin
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedin"
              name="socials.linkedin"
              type="text"
              placeholder="Linkedin"
            />
            <ErrorMessage
              name="socials.linkedin"
              className="text-red-500 text-xs italic"
              component={"p"}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="github"
            >
              Github
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="github"
              name="socials.github"
              type="text"
              placeholder="Github"
            />
            <ErrorMessage
              name="socials.github"
              className="text-red-500 text-xs italic"
              component={"p"}
            />
          </div>

          {/* Array Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumbers"
            >
              Phone Numbers
            </label>
            <FieldArray name="phoneNumbers">
              {({
                push,
                remove,
                form: {
                  values: { phoneNumbers },
                },
              }) => {
                return phoneNumbers.map(
                  (phoneNumber: string, index: number) => (
                    <div className="mb-4" key={index}>
                      <label
                        className="block text-gray-400 text-xs font-bold mb-1"
                        htmlFor={`phoneNumber[${index}]`}
                      >
                        Phone Number {index + 1}
                      </label>
                      <div className="flex items-center justify-between shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline">
                        <Field
                          id={`phoneNumber[${index}]`}
                          type="text"
                          name={`phoneNumbers[${index}]`}
                          className="focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => push("")}
                          className="text-xl text-neutral-500 font-semibold"
                          title="Add phone"
                        >
                          +
                        </button>
                        {index != 0 && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-xl text-neutral-500 font-semibold ml-2"
                            title="Remove phone"
                          >
                            -
                          </button>
                        )}
                      </div>
                      <ErrorMessage
                        name={`phoneNumbers[${index}]`}
                        className="text-red-500 text-xs italic"
                        component={"p"}
                      />
                    </div>
                  )
                );
              }}
            </FieldArray>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NewYoutubeForm;
