import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './swarmy.css';

export default function SwArmy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="swarmy-award">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/osamcover.webp"
                    alt="Military Hackathon Cover"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">2022 군장병 공개SW 온라인 해커톤</h1>
                    <p className="hero-subtitle">Open Source Army Software Hackathon</p>
                </div>
            </div>

            {/* AWARD DETAILS ========================= */}
            <section className="section">
                <h2>수상 내역</h2>

                <div className="award-info">
                    <div className="info-item">
                        <span className="info-label">Award</span>
                        <span className="info-value">🏆 장려상 수상</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Date</span>
                        <span className="info-value">2022.12.06</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Organization</span>
                        <span className="info-value" style={{ fontSize: '1rem' }}>국방부, 한국공개소프트웨어협회</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">수상 프로젝트</span>
                        <Link to="/projects/autoshot" className="project-link-text">
                            <span className="info-value">스마트 총기함 ↗</span>
                        </Link>
                    </div>
                </div>

                <p>
                    <strong>2022 군장병 공개SW 온라인 해커톤</strong>에서 우수한 성과를 거두어 장려상을 수상했습니다.<br />
                    본 대회는 국방부와 과기정통부가 주최하고 <br />정보통신산업진흥원과 한국공개소프트웨어협회가 주관하는 군 장병 대상의 최대 규모 해커톤입니다.
                </p>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <img
                        src="./project/swaward.jpg"
                        alt="SW Army Award Certificate"
                        style={{ maxWidth: '80%', borderRadius: '12px', border: '1px solid var(--glass-border)' }}
                    />
                </div>
            </section>
        </div>
    );
}
