import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Direkt anasayfaya yönlendir
    navigate('/anasayfa');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input
              type="text"
              name="username"
              placeholder="Kullanıcı Adı"
              value={formData.username}
              onChange={handleChange}
            />
            <FaUser className="login-icon" />
          </div>

          <div className="login-form-group">
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              value={formData.password}
              onChange={handleChange}
            />
            <FaLock className="login-icon" />
          </div>

          <div className="login-button-container">
            <button
              type="submit"
              className="login-submit-btn"
            >
              Giriş Yap
            </button>
          </div>

          <div className="login-register-text">
            Henüz hesabın yok mu?
            <Link to="/kayıt-ol" className="login-register-link">
              Kayıt Ol
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
