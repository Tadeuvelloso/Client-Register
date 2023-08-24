import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormFieldProps } from "../interfaces/FormFieldProps";

export default function PrimaryInput({ name, label, helperText, type, InputLabelProps }: FormFieldProps) {
  const { control } = useFormContext();
  return (
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error} }) => (
          <TextField
          {...field}
          type={type}
          label={label}
          margin="dense"
          variant="outlined"
          InputLabelProps={InputLabelProps}
          fullWidth
          helperText={error ? error.message: helperText}
          error={!!error}
          />
        )}
      />
  );
}
