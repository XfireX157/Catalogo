import { useState } from "react";
import styles from "./Login.module.scss";
import http from "../../../http/interceptors";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = async (e: any) => {
    e.preventDefault();

    if (!form.email.length || !form.password.length) {
      setError(true);
    } else {
        http.post('/login', {
            email: form.email,
            password: form.password
        }).then((response) => {
            sessionStorage.setItem('token', response.data.token)
            setForm({...form, email: '', password: ''})
            setTimeout(() => {
                navigate('/')
                window.location.reload()
            })
        }).catch((error) => {
            console.log(error)
            setError(true)
        })
    }
  };

  return (
    <form onSubmit={handleClick} className={styles.form}>
      <legend>Login</legend>
      <div className={styles.form__Inputs}>
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onChange}
          value={form.email}
        />
      </div>
      {error && <p>Esse valor não pode ser vazio</p>}
      <div className={styles.form__Inputs}>
        <label>password:</label>
        <input
          type="password"
          name="password"
          placeholder="senha"
          onChange={onChange}
          value={form.password}
        />
      </div>
      {error && <p>Esse valor não pode ser vazio</p>}
      <input type="submit" value="Entrar" />
    </form>
  );
}
