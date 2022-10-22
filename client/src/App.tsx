import React, { useCallback, useState } from "react";
import { useStyles } from "./App.style";
import { Button } from "./components/Button/Button";
import { Result } from "./components/Result/Result";
import { Layout } from "./hoc/Laoout/Layout";

function App() {
  const { classes, cx } = useStyles();
  const [showResult, setShowResult] = useState(false);

  const handleClick = useCallback(() => {}, []);

  return (
    <Layout>
      {showResult && <Result result="asd8asdjasd" />}
      <div
        className={cx(
          "container",
          classes.contentWrapper,
          classes.buttonWrapper
        )}
      >
        <Button label="Создать пароль!" isLoading={false} />
      </div>
    </Layout>
  );
}

export default App;
