import kitchen from "../../assets/pot-kitchen.svg";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";

const Login = () => {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    window.location.href = "/home";
    localStorage.setItem("isAuth", true);
  };

  return (
    <div className={styles.loginMain}>
      <img src={kitchen} alt="kitchen-pot" className={styles.kitchenlogo} />
      <h1 className={styles.logo}>Zeynep's Kitchen</h1>
      <Form className={styles.form} onSubmit={handleSubmitLogin}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" required />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
