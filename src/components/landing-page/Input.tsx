import { ErrorMessage, useField } from "formik";
import React from "react";

export default function Input({ label = "none", ...props }) {

  // @ts-ignore
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col my-5">
        <label htmlFor={field.name} className="leading-7 text-sm text-rose-600">{label}</label>
        {field.name == "message" ? (
            <textarea
            className={`w-full bg-white rounded border border-rose-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-rose-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out md:w-3/4 ${
                meta.touched && meta.error && "is-invalid"
            }`}
            {...field}
            {...props}
            />
        ) : (
            <input
            className={`w-full bg-white rounded border border-rose-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-rose-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out md:w-1/2 ${
                meta.touched && meta.error && "is-invalid"
            }`}
            {...field}
            {...props}
            />
        )}
        <ErrorMessage
            component="div"
            name={field.name}
            className="pt-1 font-dmsans text-sm text-red-500"
        />
    </div>
  );
}