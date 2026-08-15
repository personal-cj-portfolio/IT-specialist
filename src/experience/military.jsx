import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './military.css';

export default function Military() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="military">
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

            {/* INTRO & LINKS ========================= */}
            <section className="section">
                <h2>대회 소개</h2>
                <div className="project-links">
                    <a href="https://www.swmaestro.org/sw/main/main.do" target="_blank" rel="noopener noreferrer" className="link-btn">
                        Homepage ↗
                    </a>
                    <a href="https://ko-kr.facebook.com/swmaestro/" target="_blank" rel="noopener noreferrer" className="link-btn">
                        Facebook ↗
                    </a>
                </div>

                <h3>프로젝트: 스마트 총기 보관함 (IoT)</h3>
                <p>
                    군대에서 총기는 총기보관함에 보관을 합니다. 이때 총기 현황판도 최신화를 해야 하는데요.<br />
                    훈련상황이나 오분대기조일 때 총기현황판을 최신화할 때면 시간이 많이 지체가 됩니다.
                </p>
                <p>
                    <strong>그래서 자동으로 총기를 실셈해주는 IoT 제품을 개발하였습니다.</strong>
                </p>

                <div className="notion-link-container">
                    <h3 className="notion-link-title">관련 문서</h3>
                    <a href="https://www.notion.so/3f90491ac5654d14ac79d9029d664417?pvs=21" target="_blank" rel="noopener noreferrer" className="link-btn">
                        프로젝트 기획서 (Notion) ↗
                    </a>
                </div>
            </section>

            {/* RETROSPECTIVE ========================= */}
            <section className="section">
                <h2>회고</h2>
                <p>
                    <strong>느낀 점:</strong><br />
                    병사 신분으로 서로 다른 부대에 소속된 팀원들과 비대면 환경에서 협업해야 했고,<br />
                    제한된 시간과 자원 속에서 프로젝트를 완수해야 하는 상황이었습니다.
                </p>
                <p>
                    이러한 제약을 극복하기 위해 Notion으로 일정과 역할을 정리하고,<br />
                    GitHub 기반 버전 관리와 Anaconda 환경 통일, Slack을 활용한 실시간 소통 체계를 구축했습니다.
                </p>
                <p>
                    결과적으로 장려상을 수상했으며, 열악한 환경에서도 역할 분담과 협업 도구를 적극 활용해<br />
                    프로젝트를 완성해냈다는 점에서 큰 의미가 있었습니다.
                </p>
                <p>
                    이 경험을 통해 제약이 많은 상황일수록 구조적인 문제 접근과 명확한 협업 체계가<br />
                    개발 성과를 좌우한다는 것을 체감했고,<br />
                    이는 이후 프로젝트에서도 우선적으로 고려하는 개발 원칙이 되었습니다.
                </p>
            </section>
        </div>
    );
}
