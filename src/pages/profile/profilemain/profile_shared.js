import React, { useState, useEffect } from 'react';
import './profileshared.css';
import { FaEdit } from 'react-icons/fa';
import RightSidebar from '../../../components/RightSidebar/RightSidebar';

export default function ProfileShared() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Burada API'den kullanıcının paylaşımlarını çekeceğiz
    // Şimdilik boş array ile gösterelim
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="profile-shared-container">
        <div className="loading">Yükleniyor...</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="profile-shared-container">
        <div className="no-posts">
          <div className="no-posts-icon">
            <FaEdit />
          </div>
          <h3>Henüz paylaşım yapmadınız</h3>
          <p>İlk notunuzu paylaşmaya hazır mısınız?</p>
          <button className="create-post-btn">
            Paylaşım Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-shared-container">
      <div className="posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <div className="post-header">
              <h4>{post.title}</h4>
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-content">
              {post.content}
            </div>
            <div className="post-footer">
              <div className="post-stats">
                <span>{post.likes} beğeni</span>
                <span>{post.comments} yorum</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
} 