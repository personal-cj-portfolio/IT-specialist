import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './chungiham.css';

export default function Chungiham() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="chungiham">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/smartguncabinet.png"
                    alt="Smart Gun Cabinet"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">스마트 총기 보관함 (IoT)</h1>
                    <p className="hero-subtitle">자동 실셈 및 현황 관리 시스템</p>
                </div>
            </div>

            <div className="project-links project-links-top">
                <a
                    href="https://github.com/osamhack2022/IOT_WEB_SmartGunCabinet_Musago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                >
                    <img src="./project/github.svg" alt="" className="link-btn-icon" aria-hidden="true" />
                    <span>GitHub Repository</span>
                </a>
            </div>

            {/* INTRO & LINKS ========================= */}
            <section className="section">
                <h2>Project Motivation</h2>

                <p>
                    군부대에서는 총기를 사용한 뒤 총기보관함과 총기현황판을 함께 관리해야 합니다.<br />
                    특히 훈련이나 비상 대기 상황에서는 여러 명이 동시에 총기를 불출·반납하기 때문에
                    현황판을 수기로 갱신하는 과정에서 시간이 지연되고 관리 부담이 발생했습니다.
                </p>

                <p>
                    <strong>
                        이를 해결하기 위해 센서를 활용하여 총기 보관 상태를 자동으로 인식하고,
                        실시간으로 현황판을 갱신하는 IoT 기반 총기 관리 시스템을 개발했습니다.
                    </strong>
                </p>

                <div className="stack-container">
                    <div className="stack-group">
                        <span className="stack-label">Frontend</span>
                        <div className="stack-list">
                            <span className="stack-tag">JavaScript</span>
                        </div>
                    </div>

                    <div className="stack-group">
                        <span className="stack-label">Hardware</span>
                        <div className="stack-list">
                            <span className="stack-tag">Raspberry Pi</span>
                            <span className="stack-tag">Arduino</span>
                        </div>
                    </div>

                    <div className="stack-group">
                        <span className="stack-label">Collab</span>
                        <div className="stack-list">
                            <span className="stack-tag">GitHub</span>
                            <span className="stack-tag">Slack</span>
                            <span className="stack-tag">Notion</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES =============================== */}
            <section className="section">
                <h2>How it Works</h2>

                <ul>
                    <li>
                        <strong>레이저 센서 기반 자동 감지</strong><br />
                        아두이노와 레이저 센서를 활용하여 일정 거리 이내에 물체가 감지되면
                        총기가 보관된 것으로 판단하고, 불출 및 반납 상태를 자동으로 갱신하도록 구현했습니다.
                    </li>

                    <li>
                        <strong>간편한 불출 사유 입력</strong><br />
                        근무, 훈련, 정비 등 자주 사용하는 불출 사유를 버튼 형태로 제공하여
                        최소한의 입력만으로 기록을 남길 수 있도록 UI를 구성했습니다.
                    </li>

                    <li>
                        <strong>실시간 현황판 제공</strong><br />
                        라즈베리파이와 모니터를 연동하여 총기 보관 현황과 불출 정보를
                        실시간으로 확인할 수 있는 대시보드를 구현했습니다.
                    </li>
                </ul>

                <div className="notion-link-container">
                    <h3 className="notion-link-title">프로젝트 자세히 보기</h3>

                    <a
                        href="https://www.notion.so/2c4b85e2669e4c588de0142283f704b0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-btn"
                    >
                        <span>프로젝트 내용 (Notion) ↗</span>
                    </a>
                </div>
            </section>

            {/* RETROSPECTIVE ============================== */}
            <section className="section">
                <h2>Retrospective</h2>

               
                <p>
                    <strong>느낀 점:</strong><br />
                    병사 신분으로 서로 다른 부대에 소속된 팀원들과 대부분의 개발을 비대면으로 진행해야 했고,<br />
                    제한된 시간과 개발 환경 속에서 프로젝트를 완성해야 했습니다.
                </p>

                <p>
                    이러한 제약을 극복하기 위해 Notion으로 일정과 역할을 관리하고,<br />
                    GitHub 기반 버전 관리, Anaconda 환경 통일, Slack을 활용한 실시간 협업 체계를 구축했습니다.
                </p>

                <p>
                    그 결과 국방 오픈소스 아카데미 해커톤에서 장려상을 수상했으며,<br />
                    제한된 환경에서도 체계적인 협업 프로세스를 통해 프로젝트를 완성할 수 있다는 자신감을 얻었습니다.
                </p>

                <p>
                    이번 프로젝트를 통해 기술적인 구현만큼 협업 방식과 개발 프로세스가 중요하다는 것을 배웠습니다.<br />
                    이후 프로젝트에서도 역할 분담, 일정 관리, 개발 환경 표준화를 먼저 설계하는 것을
                    중요한 개발 원칙으로 삼고 있습니다.
                </p>
            </section>
        </div>
    );
}
