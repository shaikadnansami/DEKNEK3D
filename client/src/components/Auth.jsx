import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const API = "http://localhost:5000/api/auth";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

 const handleSubmit = async () => {
  try {
    if (isLogin) {
      const res = await axios.post(`${API}/login`, {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      toast.success("Login Successful 🚀");
      navigate("/dashboard");
    } else {
      await axios.post(`${API}/signup`, form);
      toast.success("Signup Successful 🎉");
      setIsLogin(true);
    }
  } catch (err) {
    toast.error(err.response?.data?.msg || "Something went wrong ❌");
  }
};


  return (
    <section className="auth">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      {!isLogin && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Signup"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create account" : "Already have an account?"}
      </p>
    </section>
  );
}

export default Auth;