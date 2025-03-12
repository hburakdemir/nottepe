import React, { useState } from 'react';
import './profileleftbar.css';
import { FaCog, FaUser, FaBookmark } from 'react-icons/fa';

export default function ProfileLeftbar() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="profile-leftbar">
      <div className="profile-menu-section">
        <div className="profile-menu-header">
          <FaCog className="settings-icon" />
          <h3>Ayarlar</h3>
        </div>

        <div className="profile-menu-items">
          <div 
            className={`menu-item ${activeSection === 'user-info' ? 'active' : ''}`}
            onClick={() => handleSectionClick('user-info')}
          >
            <FaUser />
            <span>Kullanıcı Bilgileri</span>
          </div>

          {activeSection === 'user-info' && (
            <div className="submenu">
              <div className="user-info-section">
                <h4>Hesap Bilgileri</h4>
                <div className="user-info-content">
                  <div className="info-item">
                    <label>Ad Soyad:</label>
                    <span>John Doe</span>
                  </div>
                  <div className="info-item">
                    <label>E-posta:</label>
                    <span>john@example.com</span>
                  </div>
                  <div className="info-item">
                    <label>Bölüm:</label>
                    <span>Bilgisayar Mühendisliği</span>
                  </div>
                  <div className="info-item">
                    <label>Öğrenci No:</label>
                    <span>12345678</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div 
            className={`menu-item ${activeSection === 'saved' ? 'active' : ''}`}
            onClick={() => handleSectionClick('saved')}
          >
            <FaBookmark />
            <span>Kaydedilenler</span>
          </div>

          {activeSection === 'saved' && (
            <div className="submenu">
              <div className="saved-items-section">
                <div className="no-saved-items">
                  Henüz kaydedilen öğe bulunmuyor.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 