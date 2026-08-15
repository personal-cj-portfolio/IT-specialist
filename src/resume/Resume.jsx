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
                            <p className="title">Ediscovery Specialist</p>
                            <div className="contact-info">
                                <span>📧 cjlim0523@naver.com</span>
                                <span>📱 010-8622-9529</span>
                                <span>🎂 2000.05.23</span>
                                <span>🚀 <a href="https://github.com/cjlim05" target="_blank" rel="noreferrer">github.com/cjlim05</a></span>
                                <span>📝 <a href="https://cjlim0523.github.io/cjlim0523/" target="_blank" rel="noreferrer">Portfolio</a></span>
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
                            <p>👋 <strong>“eDiscovery 전문가를 꿈꾸는 임채주입니다”</strong></p>
                            <p>꾸준한 성장에 가치를 두는 인재입니다. 새로운 기술과 업무를 접하면 스스로 실습하며 원리를 완전히 이해할 때까지 파고드는 자세로 성장해왔습니다. 개발자로서 쌓아온 로그·데이터 분석 역량을 바탕으로, Deloitte Discovery Forensic Lab에서 eDiscovery 실무를 경험하며 데이터 수집, 처리, 분석 전반에 대한 전문성과 객관적인 사실관계를 규명하는 역량을 쌓아가고 있습니다.</p>
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
                                <ul>
                                    <li>Falcon을 활용한 디지털 증거 수집</li>
                                    <li>EnCase를 활용한 Pre-processing 및 conditioning 작업</li>
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
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>군장병 SW 온라인 해커톤 장려상</h3>
                                    <span className="date">2022년 12월</span>
                                </div>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>헥토 SW 아카데미 프로젝트 은상</h3>
                                    <span className="date">2025년 12월</span>
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

                    <section className="resume-section essays">
                        <h2>자기소개서</h2>
                            <div className="essay-item">
                                <h3>지원 동기</h3>
                                <p>
                                    개발자로 서비스를 설계하고 운영하며 다양한 데이터를 다루는 과정에서, 원천 데이터를 직접 분석하여 문제의 원인을 추적하고 해결하는 업무에 흥미를 느꼈습니다. 특히 AWS 환경에서 서비스를 운영하던 중 VPC Flow Logs를 분석하며 반복적인 포트 스캐닝과 비정상적인 접근 시도를 발견한 경험이 있습니다. 개별 로그를 확인하는 데 그치지 않고 시간대별 접근 기록을 재구성하며 원인을 추적했고, 이를 바탕으로 보안 그룹과 접근 정책을 개선하고 CloudWatch와 AWS Lambda를 활용한 모니터링 환경을 구축했습니다. 이 경험을 계기로 데이터가 단순한 기록을 넘어 문제의 원인을 규명하는 중요한 근거가 될 수 있다는 점에 흥미를 느꼈고, 자연스럽게 디지털 증거를 기반으로 기업의 분쟁과 조사 업무를 지원하는 eDiscovery 분야에 관심을 갖게 되어 딜로이트 안진회계법인 Discovery & Analysis Lab에서 실무를 경험하게 되었습니다.
                                </p>
                                <p>
                                    딜로이트 안진에서는 실제 기업 프로젝트에 참여하며 eDiscovery의 각 단계에서 필요한 업무를 경험했습니다. 조사 대상자의 업무용 노트북에서 SSD를 분리하고 Falcon을 활용하여 디지털 증거를 수집했으며, EnCase를 통한 Pre-processing과 Relativity 환경에서의 Reduction 및 Review 업무를 수행했습니다. 수집 단계에서는 원본 데이터의 무결성을 유지하며 증거를 확보하는 과정을 경험했고, 처리와 검토 단계에서는 프로젝트별 기준에 따라 관련성이 낮은 데이터를 분류하고 제외하며 검토 대상 데이터의 범위를 좁혀 나갔습니다.
                                </p>
                                <p>
                                    실제 프로젝트를 경험하면서 eDiscovery는 단순히 데이터를 수집하거나 특정 도구를 사용하는 업무가 아니라, 사건의 목적에 맞는 데이터를 정확하게 확보하고 정해진 절차와 기준에 따라 처리하고 검토하는 일련의 과정이라는 점을 배웠습니다. 또한 작은 오류나 누락도 이후 검토 과정에 영향을 미칠 수 있기 때문에 각 단계에서 정확성과 일관성을 유지하는 것이 중요하다는 점을 체감했습니다. 개발 경험을 통해 갖춘 기술적 이해를 기반으로 eDiscovery 실무를 경험하면서 이 분야를 장기적인 커리어로 발전시키고 싶다는 확신을 갖게 되었으며, 앞으로 다양한 분쟁과 조사 사건을 경험하며 eDiscovery 전반에 대한 이해와 전문성을 더욱 높이고자 합니다.
                                </p>    
                            </div>

                            <div className="essay-item">
                                <h3>입사 후 포부</h3>
                                <p>
                                    딜로이트에서 eDiscovery의 수집·Pre-processing·Reduction·Review 전 단계를 지원하며 기본적인 실무 절차와 도구 사용법을 익혔습니다. 입사 후에는 이러한 경험을 바탕으로 개별 작업을 정확하게 수행하는 것을 넘어, 사건의 목적과 전체적인 업무 흐름을 이해하고 필요한 업무를 주체적으로 판단·수행할 수 있는 전문가로 성장하고자 합니다.
                                </p>
                                <p>
                                    초기에는 다양한 디스커버리 프로젝트에 참여하며 각 단계의 실무 역량을 더욱 탄탄하게 쌓아 갈것입니다. 단순히 주어진 작업을 처리하는 데 그치지 않고 왜 해당 데이터를 수집해야 하는지, 어떤 기준으로 처리와 검토가 이루어지는지를 사건 쟁점과 연결해 이해하며 업무를 수행하겠습니다. 이를 통해 장기적으로는 사건의 특성과 쟁점을 파악하고 필요한 데이터의 수집·처리·검토 과정까지 능동적으로 대응할 수 있는 역량을 갖추도록 할 것입니다.
                                </p>
                                <p>
                                    특히 eDiscovery는 개인의 기술적 역량만으로 완결되는 업무가 아니라 변호사와 eDiscovery 실무자, 클라이언트 등 다양한 관계자와 지속적으로 협업하며 진행되는 업무라고 생각합니다. 데이터 처리와 분석 결과를 정확하게 전달하고, 사건의 요구사항을 실무에 반영하기 위해서는 기술적 전문성만큼 원활한 의사소통과 협업 역량도 중요하다고 생각합니다. 따라서 실무 전문성을 높이는 동시에 다양한 관계자의 요구사항을 정확하게 이해하고 적극적으로 소통하며, 프로젝트가 원활하게 진행될 수 있도록 신뢰받는 구성원으로 성장하겠습니다.
                                </p>
                                <p>
                                    장기적으로는 개발 경험과 eDiscovery 실무를 바탕으로, 기술의 가능성과 한계를 정확히 이해하고 이를 사건의 법률적 목적에 맞게 연결할 수 있는 전문가로 성장하고자 합니다. 주어진 작업을 정확히 수행하는 단계를 넘어, 사건의 쟁점과 리스크를 파악하고 이에 맞는 데이터 전략을 제안하고 실행할 수 있는 역량을 갖추겠습니다. 특히 디스커버리와 대규모 조사 사건이 요구하는 무결성과 신속함을 갖춘 기술 전문가로서 변호사, 클라이언트와 긴밀히 협업하며 팀의 의사결정과 결과에 실질적으로 기여하는 구성원이 되겠습니다.
                                </p>
                            </div>
                    </section>
                </main>

                <footer className="resume-footer">
                    <p>© 2026 Chaeju Lim. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}