import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './persol.css';

const highlights = [
    {
        label: 'Role',
        value: 'IT Department Intern',
    },
    {
        label: 'Period',
        value: '2024.06 - 2024.08',
    },
    {
        label: 'Focus',
        value: 'JSP web development, internal support, operations',
    },
];

const overviewFacts = [
    ['기업', '퍼솔켈리코리아'],
    ['조직', '사내 IT 부서'],
    ['형태', '현장 실무형 인턴십'],
    ['핵심 경험', '개발, 배포, 운영, 사용자 대응 전 과정 수행'],
];

const contributionItems = [
    {
        title: 'Association Website Development',
        body: 'JSP와 MySQL을 기반으로 협회 사업 소개 웹페이지를 구축하고, 운영 관점에서 필요한 관리자 기능까지 함께 설계했습니다.',
    },
    {
        title: 'Admin Workflow Design',
        body: '운영진이 직접 콘텐츠를 갱신할 수 있도록 CRUD 중심의 관리 페이지를 구현해 유지보수 비용을 낮췄습니다.',
    },
    {
        title: 'IT Helpdesk & Troubleshooting',
        body: '사내 계정, 장비, 소프트웨어 이슈를 진단하고 해결하면서 사용자 관점의 문제 정의와 커뮤니케이션 방식을 체득했습니다.',
    },
];

const processSteps = [
    {
        index: '01',
        title: '요구사항 해석',
        body: '비개발 직군 담당자와의 커뮤니케이션을 통해 실제 업무 흐름과 필요한 화면 구조를 먼저 정리했습니다.',
    },
    {
        index: '02',
        title: '구현 및 구조 보정',
        body: '기획 변경이 잦은 환경에서 화면 구조와 데이터 모델을 반복적으로 수정하며 안정성과 유연성을 함께 확보했습니다.',
    },
    {
        index: '03',
        title: '운영 및 대응',
        body: '배포 이후에도 내부 사용자 문의와 운영 이슈를 직접 대응하며 개발 결과물이 실제 조직 안에서 작동하는 방식을 경험했습니다.',
    },
];

const insightPoints = [
    {
        title: '사용자 관점의 중요성',
        body: '기능이 정상 동작하더라도 사용자가 이해하기 어렵다면 좋은 결과로 이어지지 않는다는 점을 실무에서 분명히 체감했습니다.',
    },
    {
        title: '개발 외 역할까지 포함한 IT 실무',
        body: '작은 조직의 IT 부서는 개발뿐 아니라 운영, 문제 해결, 커뮤니케이션까지 함께 맡아야 하므로 상황 맥락을 읽는 힘이 중요했습니다.',
    },
    {
        title: '끝까지 책임지는 태도',
        body: '기획, 구현, 배포, 사용자 대응을 한 흐름으로 경험하면서 코드를 작성하는 사람을 넘어 결과를 책임지는 개발자의 태도를 배우게 되었습니다.',
    },
];

export default function Persol() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
            <div className="persol">
            <div className="persol-hero">
                <Link to="/" className="persol-back-link">← Back to Home</Link>
                <div className="persol-hero-media">
                    <img
                        src="./project/persolkellycover.webp"
                        alt="PERSOLKELLY Cover"
                        className="persol-hero-img"
                    />
                </div>
                <div className="persol-hero-copy">
                    <div className="persol-hero-headline">
                        <p className="persol-kicker">Internship Case Study</p>
                        <h1>퍼솔켈리코리아 IT 부서 인턴십</h1>
                        <p className="persol-summary">
                            일반 기업 내 IT 부서에서 웹 개발과 운영 지원을 함께 수행하며,
                            서비스 구현부터 내부 사용자 대응까지 실무의 전체 흐름을 경험한 프로젝트입니다.
                        </p>
                    </div>
                    <div className="persol-highlight-list">
                        {highlights.map((item) => (
                            <div key={item.label} className="persol-highlight-item">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="persol-section persol-intro-section">
                <div className="persol-section-layout">
                    <div className="persol-section-heading">
                        <p>Overview</p>
                        <h2>프로젝트 개요</h2>
                    </div>
                    <div className="persol-section-body">
                        <div className="persol-overview-grid">
                            <div className="persol-overview-copy">
                                <p>
                                    퍼솔켈리코리아 인턴십은 단순히 개발 업무만 수행하는 경험이 아니라,
                                    기업 내부 IT 조직이 실제로 어떤 방식으로 문제를 해결하고 서비스 운영을 지원하는지
                                    가까이서 체감할 수 있었던 자리였습니다.
                                </p>
                                <p>
                                    특히 JSP 기반 웹페이지 구축과 사내 Helpdesk 업무를 병행하면서,
                                    개발자의 역할이 코드 작성에만 머무르지 않고 사용자 이해와 조직 적응까지 포함한다는 점을 배웠습니다.
                                </p>
                            </div>
                            <div className="persol-fact-table">
                                {overviewFacts.map(([label, value]) => (
                                    <div key={label} className="persol-fact-row">
                                        <span>{label}</span>
                                        <strong>{value}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="persol-section">
                <div className="persol-section-layout">
                    <div className="persol-section-heading">
                        <p>Scope</p>
                        <h2>주요 업무와 기여</h2>
                    </div>
                    <div className="persol-section-body">
                        <div className="persol-contribution-list">
                            {contributionItems.map((item) => (
                                <article key={item.title} className="persol-contribution-item">
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="persol-section">
                <div className="persol-section-layout">
                    <div className="persol-section-heading">
                        <p>Process</p>
                        <h2>업무 진행 방식</h2>
                    </div>
                    <div className="persol-section-body">
                        <div className="persol-process-list">
                            {processSteps.map((step) => (
                                <article key={step.index} className="persol-process-item">
                                    <span className="persol-process-index">{step.index}</span>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.body}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="persol-section">
                <div className="persol-section-layout">
                    <div className="persol-section-heading">
                        <p>Reflection</p>
                        <h2>핵심 인사이트</h2>
                    </div>
                    <div className="persol-section-body">
                        <div className="persol-reflection-block">
                            <p className="persol-reflection-summary">
                                인턴십을 통해 개발은 단순히 기능을 구현하는 일이 아니라,
                                사용자와 조직의 맥락을 이해하고 결과물의 운영까지 함께 책임지는 일이라는 점을 배웠습니다.
                            </p>
                            <div className="persol-learning-list">
                                {insightPoints.map((item) => (
                                    <div key={item.title} className="persol-learning-item">
                                        <span />
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="persol-section persol-certificate-section">
                <div className="persol-section-layout">
                    <div className="persol-section-heading">
                        <p>Archive</p>
                        <h2>수료 자료</h2>
                    </div>
                    <div className="persol-section-body">
                        <div className="persol-certificate-frame">
                            <img
                                src="./project/persolinternship.png"
                                alt="Internship Certificate"
                                className="persol-certificate-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
