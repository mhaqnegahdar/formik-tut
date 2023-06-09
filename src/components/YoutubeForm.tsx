"use client";
import { useFormik } from "formik";
import Link from "next/link";

interface YoutubeFormValues {
  name: string;
  email: string;
  channel: string;
}

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const YoutubeForm = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit: () => {
      console.log("Form Submitted with values:", values);
    },
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
            onChange={handleChange}
            value={values.name}
          />
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
            onChange={handleChange}
            value={values.email}
          />
          {/* <p className="text-red-500 text-xs italic">
            Please fill out the field.
          </p> */}
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
            onChange={handleChange}
            value={values.channel}
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
