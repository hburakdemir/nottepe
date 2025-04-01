import React, { useState, useEffect, useRef } from 'react';
import { FaRegComment, FaRegHeart, FaRegShareSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CreatePostButton from '../../../../components/CreatePostButton/CreatePostButton';
import './Edebiyat.css';

export default function EdebiyatView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const bölümler = [
    { id: 1, name: "Alman Dili ve Edebiyatı", route: "/edebiyat/ade" },
    { id: 2, name: "Almanca Mütercim ve Tercümanlık", route: "/edebiyat/amt" },
    { id: 3, name: "Amerikan Kültürü ve Edebiyatı", route: "/edebiyat/ake" },
    { id: 4, name: "Antropoloji", route: "/edebiyat/antropoloji" },
    { id: 5, name: "Arkeoloji", route: "/edebiyat/arkeoloji" },
    { id: 6, name: "Bilgi ve Belge Yönetimi", route: "/edebiyat/bby" },
    { id: 7, name: "Çağdaş Türk Lehçeleri ve Edebiyatları", route: "/edebiyat/ctl" },
    { id: 8, name: "Felsefe", route: "/edebiyat/felsefe" },
    { id: 9, name: "Fransız Dili ve Edebiyatı", route: "/edebiyat/fde" },
    { id: 10, name: "Fransızca Mütercim ve Tercümanlık", route: "/edebiyat/fmt" },
    { id: 11, name: "İngiliz Dilbilimi", route: "/edebiyat/id" },
    { id: 12, name: "İngiliz Dili ve Edebiyatı", route: "/edebiyat/id" },
    { id: 13, name: "İngilizce Mütercim ve Tercümanlık", route: "/edebiyat/imt" },
    { id: 14, name: "Psikoloji", route: "/edebiyat/psy" },
    { id: 15, name: "Sanat Tarihi", route: "/edebiyat/st" },
    { id: 16, name: "Sosyoloji", route: "/edebiyat/ssy" },
    { id: 17, name: "Tarih", route: "/edebiyat/tarih" },
    { id: 18, name: "Türk Dili ve Edebiyatı", route: "/edebiyat/tde" }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts?department=Edebiyat');
        if (!response.ok) {
          throw new Error('Veri çekme hatası');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  return (
    <div className="edebiyat-container">
      <div className="posts-section">
        <h1 className="edebiyat-title">Edebiyat Fakültesi</h1>

        <div className="bölümler-dropdown" ref={menuRef}>
          <button className="bölümler-button" onClick={toggleMenu}>
            Edebiyat Fakültesi Bölümleri
          </button>
          <div className={`bölümler-menu ${isMenuOpen ? 'active' : ''}`}>
            {bölümler.map((bölüm) => (
              <div
                key={bölüm.id}
                className="bölüm-item"
                onClick={() => {
                  navigate(bölüm.route);
                  setIsMenuOpen(false);
                }}
              >
                {bölüm.name}
              </div>
            ))}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="no-posts">Henüz gönderi bulunmuyor.</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-info">
                  <img 
                    src={post.profile_image || 'https://via.placeholder.com/40'} 
                    alt={post.username} 
                    className="profile-image"
                  />
                  <span className="username">{post.username}</span>
                </div>
                <span className="topic-title">{post.topic_title}</span>
              </div>

              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-text">{post.content}</p>
              </div>

              <div className="post-footer">
                <div className="post-actions">
                  <button className="action-button">
                    <FaRegComment /> <span>Yorum Yap</span>
                  </button>
                  <button className="action-button">
                    <FaRegHeart /> <span>Beğen</span>
                  </button>
                  <button className="action-button">
                    <FaRegShareSquare /> <span>Paylaş</span>
                  </button>
                </div>
                <span className="post-date">{formatDate(post.created_at)}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <CreatePostButton />
    </div>
  );
} 