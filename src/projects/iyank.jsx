import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './iyank.css';

export default function Iyak() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="iyank">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/iyakcover.webp"
                    alt="Iyak Context"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">아이약 (HD Medi)</h1>
                    <p className="hero-subtitle">의약품 정보 데이터 수집·가공 프로젝트</p>
                </div>
            </div>

            {/* PROJECT MOTIVATION ========================= */}
            <section className="section">
                <h2>🧩 프로젝트 소개</h2>
                <p>
                    <strong>의약품 부작용 정보의 접근성을 높이기 위해,</strong><br />
                    외부 공공데이터와 인터넷에서 의약품 관련 데이터를 수집·가공하여 서비스에 활용 가능한 형태로 정리한 데이터 수집 프로젝트입니다.
                </p>
                <p>
                    공공데이터 API와 웹 크롤링을 병행하여 <strong>정형·비정형 데이터를 통합 처리하는 경험</strong>을 목표로 진행되었습니다.
                </p>

                <div className="stack-container">
                    <div className="stack-group">
                        <span className="stack-label">Language</span>
                        <div className="stack-list">
                            <span className="stack-tag">Python</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">Data Processing</span>
                        <div className="stack-list">
                            <span className="stack-tag">Pandas</span>
                            <span className="stack-tag">NumPy</span>
                            <span className="stack-tag">Matplotlib</span>
                            <span className="stack-tag">Seaborn</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">Web Crawling</span>
                        <div className="stack-list">
                            <span className="stack-tag">Selenium</span>
                            <span className="stack-tag">BeautifulSoup</span>
                            <span className="stack-tag">Requests</span>
                            <span className="stack-tag">Scrapy</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">External Data</span>
                        <div className="stack-list">
                            <span className="stack-tag">공공데이터 포털 Open API</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">Tools</span>
                        <div className="stack-list">
                            <span className="stack-tag">Git</span>
                            <span className="stack-tag">Notion</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT OVERVIEW =========================== */}
            <section className="section">
                <h2>🔍 프로젝트 개요</h2>
                <ul>
                    <li>의약품 안전나라 및 공공데이터 포털을 기반으로 <strong>의약품 기본 정보 및 세부 정보 데이터 수집</strong></li>
                    <li>공공데이터 API를 통한 정형 데이터 확보</li>
                    <li>API로 제공되지 않는 항목은 Selenium 기반 크롤링으로 보완</li>
                    <li>동적 웹 페이지 구조 분석을 통해 의약품별 <strong>이상반응 정보 유무에 따른 수집 로직 분기</strong></li>
                    <li>수집된 데이터를 Pandas로 정제·변환하여 서비스 활용이 가능한 구조로 가공</li>
                    <li>
                        수집된 데이터에 대해 <strong>QA 작업 수행</strong><br />
                        - 필수 필드 누락 여부 검증<br />
                        - 의약품명·성분명 중복 데이터 식별<br />
                        - API 데이터와 크롤링 데이터 간 불일치 항목 점검<br />
                        - 이상치 및 예외 데이터 분리 관리
                    </li>
                </ul>
            </section>

            {/* KEY FEATURES =============================== */}
            <section className="section">
                <h2>✨ 핵심 구현 포인트</h2>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.5rem' }}>API + 크롤링 병행 전략</h3>
                <p>→ 안정적인 정형 데이터는 API로, 누락 정보는 크롤링으로 보완</p>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.5rem' }}>DOM 구조 기반 조건 분기 로직 설계</h3>
                <p>→ 이상반응 항목 존재 여부에 따라 데이터 수집 범위 동적 조절</p>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.5rem' }}>대용량 데이터 처리 경험</h3>
                <p>→ 약 15만 건 규모의 의약품 데이터 수집 및 가공 수행</p>
            </section>

            {/* RETROSPECTIVE ============================== */}
            <section className="section">
                <h2>🧠 회고 (후기)</h2>
                <p>
                    이 프로젝트를 통해 단순히 데이터를 수집하는 것보다, <strong>데이터의 구조와 신뢰성을 어떻게 확보할 것인가</strong>가<br />
                    서비스 품질에 직결된다는 점을 체감했습니다.
                </p>
                <p>
                    초기에는 빠른 구현을 우선시하며 코드 구조가 복잡해지는 문제를 겪었지만,<br />
                    대용량 데이터를 다루는 과정에서 설계와 모듈화의 중요성을 명확히 인식하게 되었습니다.
                </p>
                <p>
                    또한 공공데이터 API와 웹 크롤링을 병행하며 외부 시스템과의 연동, 예외 상황 처리, 데이터 정합성 확보 등<br />
                    <strong>백엔드 관점의 데이터 수집 파이프라인 경험</strong>을 쌓을 수 있었습니다.<br />
                    이 경험은 이후 서버 개발과 클라우드 환경에서의 데이터 처리 구조를 이해하는 데 중요한 기반이 되었습니다.
                </p>
            </section>
        </div>
    );
}
