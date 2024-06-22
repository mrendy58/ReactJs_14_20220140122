import React from 'react';
import gambar from './assets/apple15.jpg';
import './App.css';  // Custom CSS file

function App() {
  return (
    <div className="container mt-5 brochure">
      <div className="text-center">
        <h1 className="display-3 mb-4">IPHONE 15 LAUNCHING ON DECEMBER!!!</h1>
        <img src={gambar} alt="iPhone 15" className="img-fluid rounded mb-4 brochure-img"/>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2 className="brochure-subtitle">Cutting-edge Technology</h2>
          <p className="lead brochure-text">
          Temukan fitur-fitur luar biasa dari iPhone 15 yang baru. Dengan teknologi mutakhir dan desain yang ramping, iPhone 15 menetapkan standar baru dalam industri ponsel pintar.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="brochure-subtitle">Advanced Features</h2>
          <p className="lead brochure-text">
          iPhone 15 menawarkan berbagai fitur baru termasuk prosesor yang lebih bertenaga, kemampuan kamera yang lebih baik, dan daya tahan baterai yang lebih lama. Tetap terhubung dan produktif dengan inovasi terbaru dari Apple.
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <h2 className="brochure-subtitle">Pre-order Now</h2>
        <p className="lead brochure-text">
        Jangan lewatkan kesempatan untuk memiliki iPhone tercanggih ini. Pesan Langsung sekarang dan jadilah salah satu yang pertama merasakan masa depan smartphone.
        </p>
      </div>
    </div>
  );
}

export default App;
