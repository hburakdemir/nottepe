import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import './register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'İsim gereklidir';
    if (!formData.lastName) newErrors.lastName = 'Soyisim gereklidir';
    if (!formData.username) newErrors.username = 'Kullanıcı adı gereklidir';
    if (!formData.password) newErrors.password = 'Şifre gereklidir';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
    }
    if (!formData.email) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!formData.email.endsWith('@hacettepe.edu.tr')) {
      newErrors.email = 'Hacettepe mail adresi kullanmalısınız';
    }
    if (!formData.phone) {
      newErrors.phone = 'Telefon numarası gereklidir';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form gönderme işlemi burada yapılacak
      console.log('Form gönderiliyor:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="register-container">
      <Link to="/" className="register-back-button">
        <IoChevronBack className="register-back-icon" />
        Geri
      </Link>
      <div className="register-form-container">
        <h1 className="register-title">Notlara Erişmek ve Not Paylaşmak İçin</h1>
        <h2 className="register-subtitle">Kayıt Ol</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="register-form-group">
            <input
              type="text"
              name="firstName"
              placeholder="İsim"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="register-error-message">{errors.firstName}</div>}
          </div>

          <div className="register-form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Soyisim"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="register-error-message">{errors.lastName}</div>}
          </div>

          <div className="register-form-group">
            <input
              type="text"
              name="username"
              placeholder="Kullanıcı Adı"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="register-error-message">{errors.username}</div>}
          </div>

          <div className="register-form-group">
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="register-error-message">{errors.password}</div>}
          </div>

          <div className="register-form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Şifreyi Tekrar Girin"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="register-error-message">{errors.confirmPassword}</div>}
          </div>

          <div className="register-form-group">
            <input
              type="email"
              name="email"
              placeholder="Hacettepe Mail (@hacettepe.edu.tr)"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="register-error-message">{errors.email}</div>}
          </div>

          <div className="register-form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Telefon Numarası"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="register-error-message">{errors.phone}</div>}
          </div>

          <button type="submit" className="register-submit-btn">
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}
