import React from "react";
import TelegramLogo from "./../../assets/telegram.svg";
import { useStyles } from "./Footer.style";

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div>Boris Syrpin: Senior FullStack Developer</div>

          <div className={classes.social}>
            Contact me:
            <a href="https://t.me/lebedevmoscow">
              <img
                className={classes.telegram}
                src={TelegramLogo}
                alt="telegram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
