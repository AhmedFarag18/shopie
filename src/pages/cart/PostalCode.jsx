import React from "react";
import { useForm } from "react-hook-form";

export default function PostalCode() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ZIP Submitted:", data.zip);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4"
    >
      <label className="block">
        <span className="text-gray-700">ZIP / Postal Code</span>
        <input
          type="text"
          {...register("zip", {
            required: "الرمز البريدي مطلوب",
            pattern: {
              value: /^[0-9]{4,10}$/,
              message: "الرمز يجب أن يحتوي على أرقام فقط (4-10 أرقام)",
            },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </label>

      {errors.zip && (
        <p className="text-red-600 text-sm">{errors.zip.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        إرسال
      </button>
    </form>
  );
}
