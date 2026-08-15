import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './newrodiversity.css';

export default function Neurodiversity() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="newrodiversity">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/newrodiversitycover.webp"
                    alt="Neurodiversity Cover"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">뉴로다이버시티</h1>
                    <p className="hero-subtitle">협회 홈페이지 리뉴얼 및 운영 시스템 구축</p>
                </div>
            </div>

            <div className="project-links project-links-top">
                <a
                    href="https://github.com/persolkelly-kr-it/knda-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                >
                    <img src="./project/github.svg" alt="" className="link-btn-icon" aria-hidden="true" />
                    <span>GitHub Repository</span>
                </a>
            </div>

            {/* PROJECT MOTIVATION ========================= */}
            <section className="section">
                <h2>프로젝트 개요</h2>
                <p>
                    기존 뉴로다이버시티협회 웹사이트는 WordPress 기반으로 제작되어 있어 구조가 복잡하고 유지보수 난이도가 높았습니다.<br />
                    콘텐츠 수정이나 신규 기능 추가 시 코드 접근이 제한적이었고, 협회가 원하는 방향으로 디자인·기능을 개선하기도 어려웠습니다.
                </p>
                <p>
                    이를 해결하기 위해 사이트를 완전히 리뉴얼하고, 향후 업데이트가 용이한 구조를 갖춘<br />
                    <strong>코드 기반의 신규 웹사이트를 처음부터 직접 개발하게 되었습니다.</strong>
                </p>
            </section>

            {/* PROJECT OVERVIEW =========================== */}
            <section className="section">
                <h2>프로젝트 소개</h2>
                <p>
                    뉴로다이버시티협회는 <strong>장애인 대상 취업·고용 지원을 돕는 기관</strong>으로,<br />
                    장기적으로는 장애인을 위한 <strong>전문 취업 플랫폼(장애인용 잡코리아)</strong> 구축이 목표인 곳입니다.
                </p>
                <p>
                    이에 따라 사이트 전체를 단순 홍보성이 아닌<br />
                    <strong>실제 가치를 제공하는 정보 플랫폼</strong>으로 기획하고 구성했습니다.
                </p>
                <p>
                    전체 사이트는 <strong>총 8개의 주요 페이지</strong>(협회 소개, 후원 안내, 뉴스 큐레이션 등)로 구성되어 있으며,<br />
                    운영자들이 콘텐츠를 효율적으로 관리할 수 있도록 별도의 <strong>관리자(Admin) 페이지</strong>를 추가 구현했습니다.
                </p>
                <p>
                    프론트엔드·백엔드·데이터 구조 설계까지 전체 흐름을 직접 구축하여<br />
                    기존 WordPress 환경에서 벗어나 <strong>유연하고 확장 가능한 웹 시스템</strong>을 완성했습니다.
                </p>

                <div className="stack-container">
                    <div className="stack-group">
                        <span className="stack-label">Language</span>
                        <div className="stack-list">
                            <span className="stack-tag">JSP</span>
                            <span className="stack-tag">Java</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">Database</span>
                        <div className="stack-list">
                            <span className="stack-tag">MySQL</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES =============================== */}
            <section className="section">
                <h2>프로젝트 구현</h2>
                <ul>
                    <li><strong>페이지네이션 (Pagination):</strong> 게시판 및 목록의 효율적인 탐색을 위한 페이징 기능 구현</li>
                    <li><strong>글 카테고리 분류:</strong> 뉴스, 공지사항, 칼럼 등 콘텐츠 성격에 따른 체계적인 분류 시스템</li>
                    <li><strong>관리자 페이지 (Admin):</strong> 운영진이 직접 글을 작성, 수정, 삭제할 수 있는 CMS 기능 구축, 회원 및 문의 관리 기능 포함</li>
                </ul>
            </section>

            {/* DEMO VIDEO ================================ */}
            <section className="section">
                <h2>프로젝트 데모</h2>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                    <iframe
                        src="https://www.youtube.com/embed/mzNtAcX8tyU"
                        title="Neurodiversity Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                </div>
            </section>

            {/* COLLABORATIONs ============================= */}
            <section className="section">
                <h2>협업툴</h2>
                <p>
                    <strong>Git을 통한 비동기 협업:</strong><br />
                    후반부에는 프리랜서 형태로 근무하며 사무실에 상주하지 않았기 때문에,<br />
                    Git을 활용한 원격 협업 및 버전 관리가 필수적이었습니다.<br />
                    이슈 트래킹과 커밋 히스토리 관리를 통해 개발 진행 상황을 투명하게 공유했습니다.
                </p>
                <img
                    src="./project/neurodiversitygit.png"
                    alt="Git Collaboration Workflow"
                />
            </section>

            {/* RETROSPECTIVE ============================== */}
            <section className="section">
                <h2>회고</h2>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem' }}>아쉬웠던 점: Git 협업의 시행착오</h3>
                <p>
                    프로젝트 초기에 Git 기반 협업 경험이 부족해 버전 관리에서 어려움을 겪었습니다.<br />
                    변경 사항을 병합하는 과정에서 동기화 실수가 발생해 작업 내용이 덮어씌워지거나 충돌이 반복되었고,<br />
                    이는 작업 일정에도 직접적인 영향을 미쳤습니다.
                </p>
                <p>
                    같은 실수가 반복되면서 단순한 기술 문제가 아니라 협업 전체의 흐름을 이해하지 못한 데서 비롯된 문제임을 깨닫게 되었고,<br />
                    이후에는 커밋 단위를 명확히 나누고 브랜치 전략을 적극적으로 활용하며<br />
                    버전 관리에 대한 체계적인 기준을 갖추게 되었습니다.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem' }}>느낀 점: 사용자 중심의 개발 철학</h3>
                <p>
                    이번 프로젝트를 통해 가장 크게 배운 점은 비개발자와의 시각 차이가 단순한 커뮤니케이션 문제가 아니라,<br />
                    개발 방향 자체를 결정하는 중요한 요소라는 사실이었습니다.
                </p>
                <p>
                    실무자는 기술적 구조보다 <strong>사용자 입장에서 무엇이 편하고 필요한지</strong>를 우선적으로 바라보는 반면,<br />
                    개발자는 종종 구현 가능성이나 기술적 효율에 더 초점을 맞추게 됩니다.
                </p>
                <p>
                    이 경험을 통해 개발에서 가장 중요한 기준은 결국 <strong>사용자가 어떻게 경험하느냐</strong>라는 점을<br />
                    다시 한 번 확신하게 되었습니다.
                </p>
                <p>
                    이후에는 요구사항을 기술 언어가 아닌 사용자 언어로 다시 정리해보는 습관을 들였고,<br />
                    디자인·흐름·데이터 구조를 설계할 때도 "사용자가 실제로 무엇을 느낄까"를 기준으로 사고하게 되었습니다.<br />
                    이러한 배움은 제 개발 철학을 완전히 사용자 중심으로 바꾸는 계기가 되었습니다.
                </p>
            </section>
        </div>
    );
}
