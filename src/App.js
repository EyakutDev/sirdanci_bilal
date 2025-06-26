import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// --- Bileşen: Sabit Arama Butonu ---
const FloatingCallButton = () => {
    const phoneNumber = "+902329997001";
    return (
        <a href={`tel:${phoneNumber}`} className="floating-call-btn" data-tooltip="Bizi Arayın!">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
    );
};

// --- Bileşen: Paket Servis Platformları ---
const DeliveryPlatforms = () => {
    return (
        <section id="paket-servis" className="section">
            <h2 className="section-title">Paket Servis</h2>
            <div className="delivery-platforms-container">
                <a href="#" target="_blank" rel="noopener noreferrer" className="platform-card">
                    <img src="/trendyol-logo.png" alt="Trendyol Go" />
                    <span>Trendyol Go'dan Sipariş Ver</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="platform-card">
                    <img src="/yemeksepeti-logo.png" alt="Yemeksepeti" />
                    <span>Yemeksepeti'nden Sipariş Ver</span>
                </a>
            </div>
        </section>
    );
};

// --- TÜM CSS STİLLERİ ---
const GlobalStyles = () => {
    const allCSS = `
    body { margin: 0; font-family: 'Roboto', sans-serif; background-color: #000000; color: #ffffff; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    :root { --primary-yellow: #FFD700; --dark-background: #000000; --light-text: #f5f5f5; --dark-card: #0D0D0D; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Oswald', sans-serif; color: var(--primary-yellow); text-transform: uppercase; letter-spacing: 1.5px; }
    a { color: var(--primary-yellow); text-decoration: none; transition: color 0.3s ease; }
    main { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .section { padding: 80px 20px; border-bottom: 1px solid #222; text-align: center; }
    .section:last-of-type { border-bottom: none; }
    .section-title { font-size: 3rem; margin-bottom: 40px; position: relative; }
    .section-title::after { content: ''; display: block; width: 80px; height: 4px; background-color: var(--primary-yellow); margin: 20px auto 0; }
    
    .cta-button {
        display: inline-block;
        margin-top: 30px;
        padding: 15px 35px;
        background-color: var(--primary-yellow);
        color: #000000;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 5px;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .cta-button:hover {
        background-color: #E0BD00;
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .app-header { background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px); padding: 15px 30px; position: sticky; top: 0; z-index: 1000; border-bottom: 2px solid var(--primary-yellow); width: 100%; box-sizing: border-box; }
    .header-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-family: 'Oswald', sans-serif; font-size: 2rem; font-weight: 700; color: var(--primary-yellow); cursor: pointer; z-index: 1100; }
    nav .sc-link { margin-left: 25px; font-weight: 700; font-size: 1.1rem; cursor: pointer; }
    nav a:hover, nav .sc-link:hover { color: #fff; }

    .carousel-container { position: relative; height: 80vh; color: white; }
    .carousel .slide img { height: 80vh; object-fit: cover; }
    .carousel .control-dots .dot { background: var(--primary-yellow) !important; box-shadow: none !important; }
    .hero-content { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); z-index: 10; }
    .hero-content h1 { font-size: 5rem; margin: 0; }
    .hero-content .subtitle { font-size: 1.8rem; margin-top: 10px; color: var(--light-text); font-family: 'Roboto', sans-serif; text-transform: none; letter-spacing: normal; }
    
    .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .menu-item { background-color: var(--dark-card); padding: 30px; border-radius: 10px; border: 1px solid #222; transition: all 0.3s ease; }
    .menu-item:hover { transform: translateY(-10px); border-color: var(--primary-yellow); box-shadow: 0 10px 20px rgba(255, 215, 0, 0.1); }
    .menu-item h3 { font-size: 1.8rem; margin-top: 0; }
    .menu-item p { color: var(--light-text); line-height: 1.6; }
    .price { display: block; margin-top: 20px; font-size: 1.5rem; font-weight: 700; color: var(--primary-yellow); }
    
    .delivery-platforms-container { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 20px; }
    .platform-card { background-color: var(--dark-card); border: 2px solid #222; border-radius: 15px; padding: 30px 40px; width: 280px; text-decoration: none; display: flex; flex-direction: column; align-items: center; gap: 20px; transition: all 0.3s ease; }
    .platform-card:hover { transform: translateY(-10px); border-color: var(--primary-yellow); box-shadow: 0 10px 20px rgba(255, 215, 0, 0.1); }
    .platform-card img { height: 50px; max-width: 180px; object-fit: contain; }
    .platform-card span { color: var(--light-text); font-weight: 700; font-size: 1.1rem; }
    
    .contact-info { max-width: 600px; margin: 0 auto; font-size: 1.2rem; }
    .info-item { margin: 20px 0; }
    .info-item strong { color: var(--primary-yellow); display: block; margin-bottom: 5px; }
    .app-footer { background-color: #000000; padding: 40px 20px; text-align: center; border-top: 2px solid var(--primary-yellow); }
    .social-links { margin-bottom: 20px; }
    .social-links a { margin: 0 15px; font-size: 1.2rem; font-weight: 700; }
    .copyright { font-size: 0.9rem; color: #888; }
    .floating-call-btn { position: fixed; bottom: 30px; right: 30px; z-index: 1010; width: 60px; height: 60px; background-color: var(--primary-yellow); color: #000000; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); transition: all 0.3s ease; transform-origin: center; }
    .floating-call-btn:hover { transform: scale(1.1); box-shadow: 0 6px 16px rgba(255, 215, 0, 0.3); color: #000000; }
    .floating-call-btn::before { content: attr(data-tooltip); position: absolute; right: 75px; top: 50%; transform: translateY(-50%); background-color: #333; color: #fff; padding: 6px 12px; border-radius: 5px; white-space: nowrap; font-size: 0.9rem; font-weight: 700; opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease; }
    .floating-call-btn:hover::before { opacity: 1; visibility: visible; }
    
    .hamburger-menu { display: none; }
    @media (max-width: 768px) { nav .sc-link { display: none; } .hamburger-menu { display: flex; flex-direction: column; justify-content: space-around; width: 2rem; height: 2rem; background: transparent; border: none; cursor: pointer; padding: 0; z-index: 1100; } .hamburger-menu span { width: 2rem; height: 0.25rem; background: var(--primary-yellow); border-radius: 10px; transition: all 0.3s linear; position: relative; transform-origin: 1px; } .nav-links { display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.95); position: fixed; top: 0; right: 0; height: 100vh; width: 100%; transition: transform 0.3s ease-in-out; transform: translateX(100%); z-index: 1050; } .nav-links.open { transform: translateX(0); } .nav-links .sc-link { display: block; font-size: 2rem; margin: 2rem 0; color: var(--primary-yellow); } }
  `;
    return <style>{allCSS}</style>
};

//--- Header Bileşeni ---//
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    const closeMenu = () => { setIsMenuOpen(false); }

    return (
        <header className="app-header">
            <div className="header-container">
                <Link to="hero" smooth={true} duration={750} className="logo" onClick={closeMenu}>Şırdancı Bilal</Link>
                <button className="hamburger-menu" onClick={toggleMenu}><span /><span /><span /></button>
                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="about" smooth={true} duration={750} className="sc-link" onClick={closeMenu}>Şırdan Nedir?</Link>
                    <Link to="menu" smooth={true} duration={750} className="sc-link" onClick={closeMenu}>Ürünlerimiz</Link>
                    <Link to="paket-servis" smooth={true} duration={750} className="sc-link" onClick={closeMenu}>Paket Servis</Link>
                    <Link to="contact" smooth={true} duration={750} className="sc-link" onClick={closeMenu}>İletişim</Link>
                </nav>
            </div>
        </header>
    );
};

//--- Hero Bileşeni ---//
const Hero = () => {
    const imageFiles = [ 'hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg' ];
    return (
        <section id="hero" className="carousel-container">
            <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false} showStatus={false} showArrows={false} transitionTime={1000} >
                {imageFiles.map((fileName, index) => ( <div key={index}><img src={`/${fileName}`} alt={`Şırdancı Bilal Arkaplan ${index + 1}`} /></div> ))}
            </Carousel>
            <div className="hero-content">
                <h1>ŞIRDANCI BİLAL</h1>
                <p className="subtitle">Adana'dan Gelen Efsane Lezzetler Şimdi İzmir'de!</p>
                <Link to="menu" smooth={true} duration={750} className="cta-button">Menüyü Gör</Link>
            </div>
        </section>
    );
};

//--- Diğer Bileşenler ---//
const About = () => { return ( <section id="about" className="section"><h2 className="section-title">Efsane Lezzet: Şırdan</h2><div className="about-content"><p>Şırdan, Adana yöresine özgü, eşsiz bir sakatat yemeğidir. Geviş getiren hayvanların midelerinin dördüncü bölümü olan şırdanın, baharatlı pirinçle doldurulup haşlanmasıyla hazırlanır. Şırdancı Bilal olarak biz, bu geleneksel lezzeti aslına uygun tariflerle hazırlıyor ve Adana'nın o meşhur lezzetini İzmir'e taşıyoruz. Hijyen ve kaliteden ödün vermeden, her zaman en taze malzemelerle size unutulmaz bir deneyim sunuyoruz.</p></div></section> );};
const Menu = () => { const menuItems = [ { name: 'Şırdan', description: 'Adana usulü, bol baharatlı pirinç dolgulu, efsane lezzet.', price: '' }, { name: 'Mumbar', description: 'Kuzu bağırsağının iç pilav ile doldurulmasıyla hazırlanan, yöresel bir tat.', price: '' }, { name: 'Kelle Söğüş', description: 'İzmir klasiği. Bol yeşillik, domates, soğan ve beyin ile servis edilir.', price: '' }, { name: 'Midye Dolma', description: 'Tane tane, lezzetli iç pilavı ve taptaze midyeler.', price: '' }, ]; return ( <section id="menu" className="section"><h2 className="section-title">Ürünlerimiz</h2><div className="menu-grid">{menuItems.map((item, index) => ( <div className="menu-item" key={index}><h3>{item.name}</h3><p>{item.description}</p><span className="price">{item.price}</span></div> ))}</div></section> );};
const Contact = () => { const address = "Zafer Caddesi no: 19/A Bornova, İzmir, Turkey 35100."; const phone = "0232 999 7 001"; const phoneDisplay = "0232 999 7 001"; const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`; return ( <section id="contact" className="section"><h2 className="section-title">Bize Ulaşın</h2><div className="contact-info"><p>Lezzete bir telefon kadar yakınsınız!</p><div className="info-item"><strong>Telefon:</strong><a href={`tel:+902329997001`}>{phoneDisplay}</a></div><div className="info-item"><strong>Adres:</strong><span>{address}</span></div><a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="cta-button">Yol Tarifi Al</a></div></section> );};
const Footer = () => {const instagramUrl = "https://instagram.com/sirdancibilal"; const tiktokUrl = "https://tiktok.com/@sirdancibilal"; return ( <footer className="app-footer"><div className="social-links"><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a><a href={tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok</a></div><div className="copyright">© 2025 Şırdancı Bilal. Tüm Hakları Saklıdır.</div></footer> );};

//--- ANA UYGULAMA BİLEŞENİ ---//
function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <Hero />
                <About />
                <Menu />
                <DeliveryPlatforms />
                <Contact />
            </main>
            <Footer />
            <FloatingCallButton />
        </>
    );
}

export default App;