import React, { useState } from 'react'
import './leftbar.css'
import { FaSort, FaUser, FaUsers, FaBook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Leftbar() {
  const navigate = useNavigate();
  const [expandedCampus, setExpandedCampus] = useState(null);
  const [expandedDepartment, setExpandedDepartment] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const campusData = {
    beytepe: {
      name: 'Beytepe',
      departments: [
        { name: 'Edebiyat', path: '/edebiyat' },
        { name: 'Eğitim', path: '/egitim' },
        { name: 'Fen', path: '/fen' },
        { name: 'Güzel Sanatlar', path: '/güzel-sanatlar' },
        { name: 'Hukuk', path: '/hukuk' },
        { name: 'İktisadi ve İdari Bilimler', path: '/iibf' },
        { name: 'İletişim', path: '/iletişim' },
        { name: 'Konservatuvar', path: '/konservatuvar' },
        { name: 'Mimarlık', path: '/mimarlik' },
        { name: 'Mühendislik', path: '/mühendislik' },
        { name: 'Spor Bilimleri', path: '/spor-bilimleri' },
        { name: 'Yabancı Diller', path: '/yabancı-diller' }
      ]
    },
    sihhiye: {
      name: 'Sıhhiye',
      departments: [
        { name: 'Diş Hekimliği', path: '/diş-hekimliği' },
        { name: 'Eczacılık', path: '/eczacılık' },
        { name: 'Fizik Tedavi', path: '/fizik-tedavi' },
        { name: 'Hemşirelik', path: '/hemşirelik' },
        { name: 'Sağlık Bilimleri', path: '/sağlık-bilimleri' },
        { name: 'Tıp', path: '/tıp' }
      ]
    },
    osb: {
      name: 'OSB',
      departments: [
        { name: 'Alternatif Enerji', path: '/alternatif-enerji' },
        { name: 'Elektrik', path: '/elektrik' },
        { name: 'Endüstri Ürünleri', path: '/endüstri-ürünleri' },
        { name: 'Makine', path: '/makine' }
      ]
    }
  };

  const handleCampusClick = (campus) => {
    setExpandedCampus(expandedCampus === campus ? null : campus);
  };

  const handleDepartmentClick = (department, path) => {
    if (department.subDepartments) {
      setExpandedDepartment(expandedDepartment === path ? null : path);
    } else {
      navigate(path);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="mobile-header">
        <button className="menu-button" onClick={toggleMobileMenu}>
        <FaBook className="book-icon" />
        </button>
      </div>
      <div className={`leftbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="menu-section">
          <div 
            className="menu-item"
            onClick={() => {
              navigate('/profil');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="menu-icon" />
            <span>Profil</span>
          </div>
          <div 
            className="menu-item"
            onClick={() => {
              navigate('/topluluklar');
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUsers className="menu-icon" />
            <span>Topluluklar</span>
          </div>
        </div>

        <div className="campus-section">
          <h3>Kampüsler</h3>
          {Object.entries(campusData).map(([key, campus]) => (
            <div key={key} className="campus-container">
              <div 
                className={`campus-header ${expandedCampus === key ? 'expanded' : ''}`}
                onClick={() => handleCampusClick(key)}
              >
                <span>{campus.name}</span>
                <FaSort className="expand-icon" />
              </div>
              {expandedCampus === key && (
                <div className="departments-list">
                  {campus.departments.map((department, index) => (
                    <div key={index}>
                      <div 
                        className="department-item"
                        onClick={() => handleDepartmentClick(department, department.path)}
                      >
                        <span>{department.name}</span>
                        {department.subDepartments && (
                          <FaSort className="expand-icon" />
                        )}
                      </div>
                      {department.subDepartments && expandedDepartment === department.path && (
                        <div className="sub-departments-list">
                          {department.subDepartments.map((subDept, subIndex) => (
                            <div 
                              key={subIndex}
                              className="sub-department-item"
                              onClick={() => {
                                navigate(subDept.path);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {subDept.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 