"use client";
import { useFormik } from "formik";
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

// Validation functionality
const validate = (values: formData) => {
  let errors = {} as formData;

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const validationSchema = object({
  name: string().required("Required!"),
  email: string().email("Invalid email format!").required("Required"),
  channel: string().required("Required!"),
});

const YoutubeForm = () => {
  // Use Formik
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    getFieldProps,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            {...getFieldProps("name")}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            {...getFieldProps("email")}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="channel"
          >
            Channel
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="channel"
            type="text"
            placeholder="Channel"
            {...getFieldProps("channel")}
          />
          {errors.channel && touched.channel && (
            <p className="text-red-500 text-xs italic">{errors.channel}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
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

export default YoutubeForm;
