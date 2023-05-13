import { useState } from "react";
import styles from "./checkoutForm.module.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div>
      <form onSubmit={handleConfirm} className={styles.form}>
        <label className={styles.label}>
          Nombre:
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className={styles.label}>
          Teléfono:
          <input
            className={styles.input}
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <button className={styles.button} type="submit">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
