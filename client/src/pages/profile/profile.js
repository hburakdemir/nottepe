import React from 'react';
import './Profile.css';
import Navbar from '../../components/navbars/navbar/navbar';
import ProfileLeftbar from './leftbar/profile_leftbar';
import ProfileShared from './profilemain/profile_shared';

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <ProfileLeftbar />
        <ProfileShared />
        
      </div>
    </>
  );
} 