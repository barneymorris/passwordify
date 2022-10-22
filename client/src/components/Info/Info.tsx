import { TextField } from "@mui/material";
import React from "react";
import { useStyles } from "./Info.styles";
import { useFormContext, Controller } from "react-hook-form";

export const Info = () => {
  const { classes } = useStyles();

  const form = useFormContext();

  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <Controller
          rules={{ min: 1, max: 32, required: true }}
          name="minLength"
          control={form.control}
          render={({ field, fieldState }) => {
            const isError = Boolean(fieldState.error);

            let helperText;

            if (isError) {
              switch (fieldState.error?.type) {
                case "max": {
                  helperText = "Максимальное значение - 32";
                  break;
                }

                case "min": {
                  helperText = "Минимальное значение - 1";
                  break;
                }

                case "value": {
                  helperText = fieldState.error.message;
                  break;
                }
              }
            }

            return (
              <TextField
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                type="number"
                label="Минимальная длина"
                error={isError}
                helperText={helperText}
              />
            );
          }}
        />
      </div>

      <div className={classes.item}>
        <Controller
          rules={{ min: 1, max: 32, required: true }}
          name="maxLength"
          control={form.control}
          render={({ field, fieldState }) => {
            const isError = Boolean(fieldState.error);

            let helperText;

            if (isError) {
              switch (fieldState.error?.type) {
                case "max": {
                  helperText = "Максимальное значение - 32";
                  break;
                }

                case "min": {
                  helperText = "Минимальное значение - 1";
                  break;
                }

                case "value": {
                  helperText = fieldState.error.message;
                  break;
                }
              }
            }

            return (
              <TextField
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                type="number"
                label="Максимальная длина"
                error={isError}
                helperText={helperText}
              />
            );
          }}
        />
      </div>
    </div>
  );
};
