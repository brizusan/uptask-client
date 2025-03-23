import { FormValues } from "@/schemas";
import { Control, Controller, FieldError } from "react-hook-form";

type InputFormProps = {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
};
export const InputForm = ({
  name,
  control,
  label,
  type,
  error,
}: InputFormProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <label htmlFor={name} className="text-lg font-bold text-slate-700">
          {label}
        </label>

        {type === "text-area" ? (
          <>
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <textarea
                  id={name}
                  className={`form-input resize-none ${
                    error ? "is-invalid" : ""
                  }`}
                  placeholder={label}
                  rows={4}
                  cols={50}
                  {...field}
                />
              )}
            />
            {error && (
              <p className="text-red-500 text-sm font-semibold">
                {error.message}
              </p>
            )}
          </>
        ) : (
          <>
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <input
                  type={type}
                  id={name}
                  placeholder={label}
                  className={`form-input ${error ? "is-invalid" : ""}`}
                  {...field}
                />
              )}
            />
            {error && (
              <p className="text-red-500 text-sm font-semibold">
                {error.message}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};
