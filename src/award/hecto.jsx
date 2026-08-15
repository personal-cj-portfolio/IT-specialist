import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hecto.css';

export default function Hecto() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hecto-award">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/hectoawardcover.webp"
                    alt="Hecto Award Cover"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">헥토 SW 아카데미 프로젝트</h1>
                    <p className="hero-subtitle">Hecto SW Academy Project Award</p>
                </div>
            </div>

            {/* AWARD DETAILS ========================= */}
            <section className="section">
                <h2>수상 내역</h2>

                <div className="award-info">
                    <div className="info-item">
                        <span className="info-label">Award</span>
                        <span className="info-value">🏆 은상 수상</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Date</span>
                        <span className="info-value">2025.12.23</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Organization</span>
                        <span className="info-value">헥토 (Hecto)</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">수상 프로젝트</span>
                        <Link to="/projects/chanjurun" className="project-link-text">
                            <span className="info-value">찬주런 ↗</span>
                        </Link>
                    </div>
                </div>

                <p>
                    서경 SW 아카데미에서 진행한 프로젝트 성과를 인정받아 <strong>은상</strong>을 수상했습니다.<br />
                    실무 프로젝트 기반의 학습과 팀 협업을 통해 우수한 결과를 도출하였습니다.
                </p>

                <div className="cert-container">
                    <img
                        src="./award/헥토1.png"
                        alt="Hecto Award 1"
                        className="award-img"
                    />
                    <img
                        src="./award/헥토2.jpeg"
                        alt="Hecto Award 2"
                        className="award-img"
                    />
                    <img
                        src="./award/헥토3.jpeg"
                        alt="Hecto Award 3"
                        className="award-img"
                    />
                </div>
            </section>
        </div>
    );
}
