import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { FormFieldProps } from "../interfaces/FormFieldProps";

export default function PrimaryInput({ name, control, defaultValue ,label, margin, variant, fullWidth, helperText, error }: FormFieldProps) {
  
  return (
    <Grid item xs={12} sm={12}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            id={name}
            label={label}
            margin={margin}
            variant={variant}
            fullWidth={fullWidth}
            helperText={helperText}
            error={error}
            {...field}
          />
        )}
      />
    </Grid>
  );
}
