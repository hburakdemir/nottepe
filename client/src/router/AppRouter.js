import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Ana Sayfa
import Login from '../pages/login/login.js';
import Home from '../pages/homepage/homepage'
import Register from '../pages/register/register';
import Profile from '../pages/profile/profile.js';

// beytepe
import Edebiyat from '../pages/bölümler/beytepe/Edebiyat/Edebiyat.jsx'
import Egitim from '../pages/bölümler/beytepe/Egitim/Egitim.js'
import Fen from '../pages/bölümler/beytepe/Fen/Fen.js'
import GuzelSanatlar from '../pages/bölümler/beytepe/GuzelSanatlar/GuzelSanatlar.js'
import Hukuk from '../pages/bölümler/beytepe/Hukuk/Hukuk.js'
import Iibf from '../pages/bölümler/beytepe/IktisadiIdari/IktisadiIdari.js'
import Iletisim from '../pages/bölümler/beytepe/Iletisim/Iletisim.js';
import Konservatur from '../pages/bölümler/beytepe/Konservatuvar/Konservatuvar.js'
import Mimarlik from '../pages/bölümler/beytepe/Mimarlik/Mimarlik.js'
import Mühendislik from '../pages/bölümler/beytepe/Muhendislik/Muhendislik.js'
import SporBilimleri from '../pages/bölümler/beytepe/SporBilimleri/SporBilimleri.js'
import YabanciDiller from '../pages/bölümler/beytepe/YabanciDiller/YabanciDiller.js'

// sihhiye
import Diş from '../pages/bölümler/sıhhiye/DisHekimligi/DisHekimligi.js'
import Eczacılık from '../pages/bölümler/sıhhiye/Eczacilik/Eczacilik.js'
import FizikTedavi from '../pages/bölümler/sıhhiye/FizikTedavi/FizikTedavi.js'
import Hemşirelik from '../pages/bölümler/sıhhiye/Hemsirelik/Hemsirelik.js'
import SaglıkBlm from '../pages/bölümler/sıhhiye/SaglikBilimleri/SaglikBilimleri.js'
import Tıp from '../pages/bölümler/sıhhiye/Tip/Tip.js'

// osb
import AlternatifEnerji from '../pages/bölümler/osb/AlternatifEnerji/AlternatifEnerji.js'
import ElektrikElektronik from '../pages/bölümler/osb/ElektrikElektronik/ElektrikElektronik.js'
import EndustriUrunleri from '../pages/bölümler/osb/EndustriUrunleri/EndustriUrunleri.js'
import Makine from '../pages/bölümler/osb/Makine/Makine.js'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Ana Sayfa Route'ları */}
        <Route path="/" element={<Login />} />
        <Route path='/anasayfa' element={<Home />} />
        <Route path='/kayıt-ol' element={<Register/>} />
        <Route path='/profil' element={<Profile/>} />

        {/* Beytepe Kampüsü */}
        <Route path='/edebiyat' element={<Edebiyat/>} />
        <Route path='/egitim' element={<Egitim/>} />
        <Route path='/fen' element={<Fen/>} />
        <Route path='/güzel-sanatlar' element={<GuzelSanatlar/>} />
        <Route path='/hukuk' element={<Hukuk/>} />
        <Route path='/iibf' element={<Iibf/>} />
        <Route path='/iletişim' element={<Iletisim/>} />
        <Route path='/konservatuvar' element={<Konservatur/>} />
        <Route path='/mimarlik' element={<Mimarlik/>} />
        <Route path='/mühendislik' element={<Mühendislik/>} />
        <Route path='/spor-bilimleri' element={<SporBilimleri/>} />
        <Route path='/yabancı-diller' element={<YabanciDiller/>} />
        {/* Sıhhiye Kampüsü */}
        <Route path='/diş-hekimliği' element={<Diş/>} />
        <Route path='/eczacılık' element={<Eczacılık/>} />
        <Route path='/fizik-tedavi' element={<FizikTedavi/>} />
        <Route path='/hemşirelik' element={<Hemşirelik/>} />
        <Route path='/sağlık-bilimleri' element={<SaglıkBlm/>} />
        <Route path='/tıp' element={<Tıp/>} />

        {/* OSB */}
        <Route path='/alternatif-enerji' element={<AlternatifEnerji/>} />
        <Route path='/elektrik' element={<ElektrikElektronik/>} />
        <Route path='/endüstri-ürünleri' element={<EndustriUrunleri/>} />
        <Route path='/makine' element={<Makine/>} />
      </Routes>
    </Router>
  );
} 