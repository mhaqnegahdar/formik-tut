"use client";

import { Formik, Form } from "formik";

interface FormikContainerProps {
  children: React.ReactNode;
  initialValues: {};
  validationSchema: {};
  onSubmit: (values: {}) => void;
}

const FormikContainer = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: FormikContainerProps) => {
  return (
    <div className="w-full max-w-xs">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {children}
        </Form>
      </Formik>
    </div>
  );
};

export default FormikContainer;
