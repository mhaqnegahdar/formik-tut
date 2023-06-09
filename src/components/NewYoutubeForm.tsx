"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { object, string } from "yup";

// Types
interface formData {
  name?: string;
  email?: string;
  channel?: string;
}

// Initial form state
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

// Submission Functionality
const onSubmit = (values: formData) => {
  console.log("Form Submitted with values:", values);
};

const validationSchema = object({
  name: string().required("Required!"),
  email: string().email("Invalid email format!").required("Required"),
  channel: string().required("Required!"),
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
            <ErrorMessage name="name" className="text-red-500 text-xs italic" />
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
            />
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
      <p className="text-center text-gray-500 text-xs">
        &copy;{new Date().getFullYear()}{" "}
        <Link
          className="hover:text-blue-600 transition"
          href={`https://github.com/maxjn`}
        >
          Mohamad Haqnegahdar (Maxjn)
        </Link>
      </p>
    </div>
  );
};

export default NewYoutubeForm;
