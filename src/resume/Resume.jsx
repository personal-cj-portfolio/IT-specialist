import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = () => {
        const originalTitle = document.title;
        document.title = '임채주_이력서';
        window.print();
        document.title = originalTitle;
    };

    return (
        <div className="resume-page">
            <div className="resume-container">
                <header className="resume-header">
                    <Link to="/" className="back-link">← Home</Link>
                    <div className="header-top">
                        <div className="profile-img-container">
                            <img src="./profileimg.jpg" alt="임채주 프로필" className="resume-profile-img" />
                        </div>
                        <div className="header-content">
                            <h1>임채주</h1>
                            <p className="title">IT Specialist</p>
                            <div className="contact-info">
                                <span>📧 cjlim0523@naver.com</span>
                                <span>📱 010-8622-9529</span>
                                <span>🎂 2000.05.23</span>
                                <span>🚀 <a href="https://github.com/cjlim05" target="_blank" rel="noreferrer">github.com/cjlim05</a></span>
                                <span>🔗 <a href="https://www.linkedin.com/in/chaeju/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                            </div>
                        </div>
                    </div>
                    <button className="download-btn" onClick={handleDownload}>
                        <span className="icon">⬇️</span> PDF로 다운로드 하기
                    </button>
                </header>

                <main className="resume-body">
                    <section className="resume-section intro-section">
                        <div className="intro-card glass-card">
                            <p>👋 <strong>“IT 스페셜리스트 임채주입니다”</strong></p>
                            <p>꾸준한 성장에 가치를 두는 인재입니다. 새로운 기술과 업무를 접하면 스스로 실습하며 원리를 완전히 이해할 때까지 파고드는 자세로 성장해왔습니다. 신기술을 빠르게 배우고 실무에 적용하는 것에 힘쓰고 노려합니다.</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        {/* <h2>Stacks</h2>
                        <div className="skills-grid">
                            <div className="skill-cat">
                                <strong>Backend</strong>
                                <ul>
                                    <li>Java, Spring Boot, JPA, JWT, OAuth2, WebSocket(STOMP), REST API</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Frontend</strong>
                                <ul>
                                    <li>JavaScript, React, Vite</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Infra / DevOps</strong>
                                <ul>
                                    <li>AWS (EC2, S3, CloudFront, Lambda, EventBridge), Git/GitHub</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Database & Automation</strong>
                                <ul>
                                    <li>MySQL</li>
                                    <li>AWS Lambda, n8n</li>
                                </ul>
                            </div>
                        </div> */}
                    </section>

                    <section className="resume-section">
                        <h2>경력</h2>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>딜로이트 안진 회계법인 (Discovery & Analysis Lab)</h3>
                                    <span className="date">2026.07.01 - 재직중</span>
                                </div>
                                <p className="role">eDiscovery Specialist</p>
                                <ul>
                                    <li>Falcon을 활용한 디지털 증거 수집</li>
                                    <li>EnCase를 활용한 Pre-processing 및 conditioning 작업</li>
                                    <li>Relativity에서 데이터 processing 업무 수행</li>
                                    <li>Relativity에서 Reduction & Review 업무 수행</li>
                                </ul>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>퍼솔켈리코리아 IT부서</h3>
                                    <span className="date">2024.06 - 2024.08 (인턴)</span>
                                </div>
                                <p className="role">풀스택 개발자</p>
                                <ul>
                                    <li>CMS 요구사항 분석부터 설계, 개발, 배포까지 전체 개발 프로세스를 수행하며 서비스 구현 및 운영</li>
                                    <li>JSP 및 Apache Tomcat 기반 웹 서비스를 개발하고 안정적인 운영 환경을 구축</li>
                                    <li>사용자 요구사항과 운영 환경을 고려하여 기능을 개선하고 서비스 품질 향상에 기여</li>
                                    <li>비개발 직군과 협업하며 요구사항을 분석하고 실제 업무 프로세스를 반영한 기능을 구현</li>
                                    <li>Help Desk 업무를 수행하며 운영 이슈를 분석하고 장애 대응 및 유지보수를 지원</li>
                                </ul>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>에이치디메디 R&D</h3>
                                    <span className="date">2023.12 - 2024.02 (인턴)</span>
                                </div>
                                <p className="role">데이터 엔지니어</p>
                                <ul>
                                    <li>Python과 외부 API를 활용하여 약학정보원 의약품 데이터 10만 건 이상의 수집 및 데이터 파이프라인 구축</li>
                                    <li>데이터 정합성 검증과 QA 프로세스를 수행하여 데이터 정확성과 신뢰성을 향상</li>
                                    <li>플랫폼 간 데이터 불일치 문제를 분석하고 정제 로직을 적용하여 일관성 있는 데이터 관리 체계를 구축</li>
                                    <li>AWS Lambda 및 n8n을 활용한 업무 자동화를 구현하여 반복 작업을 최소화하고 데이터 수집 및 처리 효율을 개선</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>프로젝트</h2>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>찬주런 (ChanjuRun) : 위치 기반 러닝 커뮤니티 서비스</h3>
                                    <span className="date">2025.10 - 2025.12</span>
                                </div>
                                <ul>
                                    <li>Spring Boot 및 React 기반 서비스의 설계 및 개발에 참여하며 프론트엔드와 백엔드를 아우르는 전체 시스템 구현 수행</li>
                                    <li>WebSocket(STOMP)을 활용한 실시간 채팅 기능을 구현하여 이벤트 기반 통신 및 실시간 데이터 처리 경험 확보</li>
                                    <li>AWS EC2, S3, CloudFront를 활용한 서비스 배포 및 운영 환경을 구축하여 안정적인 서비스 제공 기반 마련</li>
                                    <li>AWS Lambda와 EventBridge를 활용해 서버리스 아키텍처 기반의 자동화 모니터링 환경을 구현하고 운영 프로세스를 효율화</li>
                                    <li>Telegram Bot을 활용하여 운영 자동화 시스템의 원격 제어 및 실시간 상태 확인 기능을 구현해 관리 편의성 향상</li>
                                    <li>VPC Flow Log 분석을 기반으로 네트워크 트래픽과 보안 취약점을 점검하고 운영 환경의 안정성과 보안성을 개선</li>
                                    <li>AI 활용을 통한 빌드 및 배포 자동화 구축</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>수상</h2>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>헥토 SW 아카데미 프로젝트 은상</h3>
                                    <span className="date">2025년 12월</span>
                                </div>
                            </div>                        
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>군장병 SW 온라인 해커톤 장려상</h3>
                                    <span className="date">2022년 12월</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>학력</h2>
                        <div className="edu-list">
                            <div className="edu-item">
                                <div className="exp-header">
                                    <h3>서경대학교</h3>
                                    <span className="date">2020.03 - 2026.02 (졸업)</span>
                                </div>
                                <p>소프트웨어학과 학사 (학점 3.95/4.5)</p>
                            </div>
                            <div className="edu-item">
                                <div className="exp-header">
                                    <h3>단국대학사범대학부속고등학교</h3>
                                    <span className="date">2016.02 - 2019.03</span>
                                </div>
                                <p>졸업</p>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section languages">
                        <h2>외국어 능력</h2>
                        <div className="lang-grid">
                            <div className="lang-item"><strong>한국어 🇰🇷</strong><span>원어민</span></div>
                            <div className="lang-item"><strong>영어 🇺🇸</strong><span>OPIc AL (2026년 02월)</span></div>
                            <div className="lang-item"><strong>중국어 🇨🇳</strong><span>초급 (중국 거주 경험)</span></div>
                        </div>
                    </section>

                    {/* <section className="resume-section essays">
                        <h2>자기소개서</h2>
                            <div className="essay-item">
                                <h3>지원 동기</h3>
                                <p>
                                    
                                </p>
                            </div>    
                    </section> */}
                </main>

                <footer className="resume-footer">
                    <p>© 2026 Chaeju Lim. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}