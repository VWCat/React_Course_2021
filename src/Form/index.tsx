import React, { useState } from "react";
import Input from "./Input";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handler = () => {
    if (repeatPassword === password) {
      console.log({ firstName, lastName, email, password, repeatPassword });
    } else {
      console.log("Пароли не совпадают!!!");
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  return (
    <div>
      <Input
        value={firstName}
        setValue={setFirstName}
        placeholder="Введите имя"
        type="text"
        title="User Name"
      />
      <Input
        value={lastName}
        setValue={setLastName}
        placeholder="Введите фамилию"
        type="text"
        title="User LastName"
      />
      <Input
        value={email}
        setValue={setEmail}
        placeholder="Введите e-mail"
        type="email"
        title="User E-mail"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль"
        type="password"
        title="User Password"
      />
      <Input
        value={repeatPassword}
        setValue={setRepeatPassword}
        placeholder="Повторите пароль"
        type="password"
        title="Repeat Password"
      />
      <button onClick={handler} type="button">
        Отправить
      </button>
      <button onClick={clearForm} type="button">
        Очистить форму
      </button>
    </div>
  );
};
export default Form;
