import React, { useCallback, useEffect, useState } from "react";
import { useStyles } from "./App.style";
import { Button } from "./components/Button/Button";
import { Info } from "./components/Info/Info";
import { Result } from "./components/Result/Result";
import { Layout } from "./hoc/Laoout/Layout";
import { useForm, FormProvider } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type Response = {
  status: "ok" | "error";
  response: string;
};

function App() {
  const { classes, cx } = useStyles();
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      minLength: 8,
      maxLength: 16,
    },
    mode: "all",
  });

  const {
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
    getValues,
  } = form;

  const minLength = watch("minLength");
  const maxLength = watch("maxLength");

  useEffect(() => {
    if (minLength > maxLength) {
      setError("minLength", {
        type: "value",
        message: "Минимальное значение не может быть больше максимального",
      });

      setError("maxLength", {
        type: "value",
        message: "Максимальное значение не может быть больше минимального",
      });
    } else {
      clearErrors("minLength");
      clearErrors("maxLength");
    }
  }, [minLength, maxLength, setError, clearErrors]);

  const handleShowToast = useCallback(() => {
    toast.error("На сервере произошла ошибка, пожалуйста, повторите позже", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);

  const handleClick = useCallback(() => {
    setLoading(true);

    fetch("http://localhost:4001/gen", {
      method: "POST",
      body: JSON.stringify({
        minLength: getValues().minLength,
        maxLength: getValues().maxLength,
      }),
    })
      .then((response) => response.json())
      .then((data: Response) => {
        setShowResult(true);
        setResult(data.response);
        setLoading(false);
      })
      .catch((e) => {
        console.error("POST http://localhost:4001/gen NETWORK ERROR", e);
        setLoading(false);
        handleShowToast();
      });
  }, [handleShowToast, getValues, isValid]);

  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <FormProvider {...form}>
        {showResult && <Result result={result} />}
        <div className={cx("container", classes.contentWrapper)}>
          <Info />

          <div className={classes.buttonWrapper}>
            <Button
              isDisabled={!isValid || Object.keys(errors).length > 0}
              onClick={handleClick}
              label="Создать пароль!"
              isLoading={loading}
            />
          </div>
        </div>
      </FormProvider>
    </Layout>
  );
}

export default App;
