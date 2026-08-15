import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hdmid.css';

const highlights = [
    {
        label: 'Role',
        value: 'Python Data Analyst Intern',
    },
    {
        label: 'Period',
        value: '2023.12 - 2024.02',
    },
    {
        label: 'Focus',
        value: 'Data collection, preprocessing, service data support',
    },
];

const overviewFacts = [
    ['기업', 'HD Medi'],
    ['직무', 'Python Data Analyst Intern'],
    ['근무 기간', '2023.12 ~ 2024.02'],
    ['서비스', '의약품 데이터 기반 복약 지원 서비스'],
];

const objectiveItems = [
    '공공데이터 기반 데이터 처리 실무 경험 확보',
    'Python을 활용한 데이터 수집 및 자동화 역량 강화',
    '실제 서비스에 적용되는 데이터 파이프라인 이해',
    '데이터 품질 관리 및 전처리 경험 습득',
];

const responsibilityGroups = [
    {
        title: 'Data Collection',
        items: [
            '의약품안전나라 데이터를 대상으로 Python 기반 크롤링 수행',
            '공공데이터포털 Open API 연동 및 데이터 수집',
            'Selenium을 활용한 동적 페이지 자동화 크롤링',
            '다양한 데이터 소스를 통합하여 서비스 데이터 구축',
        ],
    },
    {
        title: 'Data Processing',
        items: [
            'API 응답 데이터 파싱 및 구조화',
            'Pandas를 활용한 데이터 정제 및 전처리',
            '데이터 형식 표준화 및 품질 검증',
            '서비스 활용을 위한 데이터셋 가공',
        ],
    },
    {
        title: 'Service Support',
        items: [
            '수집 데이터를 활용한 서비스 기능 지원',
            "'아이약' 애플리케이션의 '쉬운 홈 화면' 기능 기획 참여",
            '서비스 요구사항에 맞는 데이터 제공',
        ],
    },
];

const techStacks = [
    ['Language', 'Python'],
    ['Library', 'Selenium, Pandas, Requests'],
    ['Data', 'Open API, JSON, CSV'],
    ['Tools', 'Git, VS Code'],
];

const contributionItems = [
    {
        title: 'Data Pipeline Construction',
        body: '공공데이터 API와 웹 크롤링을 결합한 데이터 수집 프로세스를 구축하고, 다양한 소스를 서비스에서 활용 가능한 형태로 통합했습니다.',
    },
    {
        title: 'Data Quality Management',
        body: '데이터 정제와 표준화를 통해 일관성 있는 데이터셋을 구축하고, 누락 데이터와 비정형 데이터의 품질을 개선했습니다.',
    },
    {
        title: 'Service-oriented Thinking',
        body: '단순 수집에 그치지 않고 실제 서비스 요구사항을 고려한 데이터 구조를 설계하며 데이터 활용 방안을 제안했습니다.',
    },
];

const outcomes = [
    '공공데이터 및 웹 데이터를 활용한 의약품 데이터셋 구축',
    'Python 기반 데이터 수집 및 자동화 프로세스 수행',
    '서비스 기능 기획 과정에 데이터 관점에서 참여',
    '실무 데이터 처리 및 품질 관리 경험 확보',
];

const insightPoints = [
    {
        title: 'Data-driven Thinking',
        body: '데이터를 수집하는 것보다 신뢰할 수 있는 형태로 가공하고 관리하는 과정이 서비스 품질에 직접적인 영향을 준다는 점을 배웠습니다.',
    },
    {
        title: 'Problem Solving',
        body: '초기에는 구현 속도에 집중했지만, 이후 데이터 처리 구조와 연산 효율을 함께 고려하며 설계 중심의 개발 방식을 익히게 되었습니다.',
    },
    {
        title: 'Practical Experience',
        body: '실제 서비스 데이터를 다루며 데이터의 정확성, 일관성, 유지보수성을 고려하는 실무 프로세스를 경험했고, 이를 통해 데이터 분석 및 처리 역량을 강화할 수 있었습니다.',
    },
];

export default function HdMedi() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hdmid">
            <div className="hdmid-hero">
                <Link to="/" className="hdmid-back-link">← Back to Home</Link>
                <div className="hdmid-hero-media">
                    <img
                        src="./project/hdmedicover.webp"
                        alt="HD Medi Cover"
                        className="hdmid-hero-img"
                    />
                </div>
                <div className="hdmid-hero-copy">
                    <div className="hdmid-hero-headline">
                        <p className="hdmid-kicker">Internship Overview</p>
                        <h1>에이치디메디 데이터 인턴십</h1>
                        <p className="hdmid-summary">
                            Python을 활용해 의약품 데이터를 수집·가공하고, 공공데이터와 웹 데이터를 연계하여
                            실제 서비스에 활용 가능한 데이터셋을 구축한 실무형 인턴십입니다.
                        </p>
                    </div>
                    <div className="hdmid-highlight-list">
                        {highlights.map((item) => (
                            <div key={item.label} className="hdmid-highlight-item">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Overview</p>
                        <h2>인턴십 개요</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-overview-grid">
                            <div className="hdmid-overview-copy">
                                <p>
                                    HD Medi는 의약품 정보를 기반으로 사용자 맞춤형 복약 서비스를 제공하는 헬스케어 기업으로,
                                    공공 의료 데이터를 활용해 의료 정보 접근성을 높이는 서비스를 운영하고 있습니다.
                                </p>
                                <p>
                                    인턴십 기간 동안 Python을 활용해 의약품 데이터를 수집·가공하고,
                                    공공데이터와 웹 데이터를 연결해 서비스에 바로 활용할 수 있는 데이터셋을 구축하는 업무를 수행했습니다.
                                </p>
                            </div>
                            <div className="hdmid-fact-table">
                                {overviewFacts.map(([label, value]) => (
                                    <div key={label} className="hdmid-fact-row">
                                        <span>{label}</span>
                                        <strong>{value}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Objectives</p>
                        <h2>인턴십 목표</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-bullet-list">
                            {objectiveItems.map((item) => (
                                <div key={item} className="hdmid-bullet-item">
                                    <span />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Responsibilities</p>
                        <h2>주요 업무</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-responsibility-list">
                            {responsibilityGroups.map((group) => (
                                <article key={group.title} className="hdmid-responsibility-item">
                                    <h3>{group.title}</h3>
                                    <div className="hdmid-bullet-list">
                                        {group.items.map((item) => (
                                            <div key={item} className="hdmid-bullet-item">
                                                <span />
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Tech Stack</p>
                        <h2>기술 스택</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-tech-table">
                            {techStacks.map(([label, value]) => (
                                <div key={label} className="hdmid-tech-row">
                                    <span>{label}</span>
                                    <strong>{value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Key Contributions</p>
                        <h2>핵심 기여</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-contribution-list">
                            {contributionItems.map((item) => (
                                <article key={item.title} className="hdmid-contribution-item">
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Outcomes</p>
                        <h2>성과</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-bullet-list">
                            {outcomes.map((item) => (
                                <div key={item} className="hdmid-bullet-item">
                                    <span />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hdmid-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Lessons Learned</p>
                        <h2>배운 점</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-reflection-block">
                            <p className="hdmid-reflection-summary">
                                이번 인턴십을 통해 데이터 업무는 단순 수집이 아니라,
                                서비스에 활용할 수 있는 신뢰도 높은 형태로 정제하고 관리하는 과정까지 포함된다는 점을 실무적으로 배웠습니다.
                            </p>
                            <div className="hdmid-learning-list">
                                {insightPoints.map((item) => (
                                    <div key={item.title} className="hdmid-learning-item">
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

            <section className="hdmid-section hdmid-certificate-section">
                <div className="hdmid-section-layout">
                    <div className="hdmid-section-heading">
                        <p>Certificate</p>
                        <h2>수료증</h2>
                    </div>
                    <div className="hdmid-section-body">
                        <div className="hdmid-certificate-frame">
                            <img
                                src="./project/hdmediinternship.png"
                                alt="Internship Certificate"
                                className="hdmid-certificate-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
