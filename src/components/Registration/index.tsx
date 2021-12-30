import React from "react";
import Form from "./RegistrationForm";
import Footer from "../common/Footer";
import Header from "../common/Header";
import style from "./Registration.module.scss";

const RegistrationComponent: React.FC = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.main}>
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationComponent;
