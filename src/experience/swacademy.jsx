import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './swacademy.css';

export default function SwAcademy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="swacademy">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/swcover.webp"
                    alt="SW Academy Cover"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">SW인재양성 교육</h1>
                    <p className="hero-subtitle">Intensive Software Training Program</p>
                </div>
            </div>

            {/* INTRO & LINK ========================= */}
            <section className="section">
                <h2>교육 과정 소개</h2><br></br>
                <a href="https://swacademy.skuniv.ac.kr/" target="_blank" rel="noopener noreferrer" className="link-btn">
                    교육 주관 홈페이지 바로가기 ↗
                </a>
                <p style={{ marginTop: '1rem' }}>
                    서경대학교 SW인재양성 교육 과정은 실무 중심의 소프트웨어 개발 역량을 강화하기 위한 집중 교육 프로그램입니다.
                </p>
            </section>

            {/* CURRICULUM ========================= */}
            <section className="section">
                <h2>수업 내용</h2>
                <p>
                    <strong>주요 커리큘럼:</strong><br />
                    실무 프로젝트 기반의 학습을 통해 웹 개발, 데이터 처리, 협업 툴 활용 등 다양한 기술 스택을 익혔습니다.
                </p>
                <img
                    src="./project/swcurriculum.png"
                    alt="SW Academy Curriculum"
                    className="curriculum-img"
                />
            </section>

            {/* COMPLETION ========================= */}
            <section className="section">
                <h2>수료</h2>
                <p>
                    성실하게 교육 과정을 이수하여 최종적으로 수료증을 획득하였습니다.
                </p>
                <img
                    src="./project/swcertificate.png"
                    alt="Completion Certificate"
                    style={{ maxWidth: '80%', margin: '2rem auto', display: 'block' }}
                />
            </section>
        </div>
    );
}
