import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './deloitte.css';

const highlights = [
    {
        label: 'Role',
        value: 'Forensic & Discovery Analyst',
    },
    {
        label: 'Period',
        value: '2026.07 - 재직중',
    },
    {
        label: 'Focus',
        value: 'Digital Forensics, eDiscovery, Data Processing & Review',
    },
];

const overviewFacts = [
    ['기업', '딜로이트 안진 회계법인'],
    ['조직', 'Discovery & Analysis Lab'],
    ['형태', '재직중'],
    ['핵심 경험', 'Forensic Collection, EnCase Processing, Relativity Conditioning & Review'],
];

const contributionItems = [
    {
        title: 'Data Collection (Forensic Imaging)',
        body: '판교 소재 IT 기업의 부정조사 프로젝트에서 조사 대상 임직원의 업무용 노트북 SSD와 모바일 디바이스에 대한 디지털 증거 수집을 수행했습니다. 노트북 SSD는 Falcon을 활용하여 증거 데이터를 수집하고, 모바일 디바이스는 MD-NEXT를 활용하여 데이터를 추출했습니다. 수집 과정에서는 Chain of Custody를 작성하여 증거의 연속성과 수집 절차를 문서화했으며, veracrypt를 사용하여 데이터의 보안성을 확보했습니다.',
    },
    {
        title: 'Pre-Processing (EnCase)',
        body: '수집된 포렌식 이미지를 EnCase를 통해 인덱싱하고, 파일시스템 구조 분석 및 메타데이터(생성/수정/접근 일시, 작성자, 경로 정보) 추출을 진행했습니다. 삭제된 파일 복구(Carving), 암호화/압축 파일 식별, 시스템 아티팩트(레지스트리, 이벤트 로그, 링크 파일 등) 분석을 통해 리뷰 대상 데이터의 범위를 정제했습니다. 이 과정에서 데이터 볼륨과 파일 유형에 따라 프로세싱 전략(필터 조건, 인덱싱 옵션)을 조정하며 처리 효율을 높였습니다.',
    },
    {
        title: 'Conditioning, Reduction & Review (Relaivity)',
        body: '국내 대형 조선/중공업 기업 관련 리뷰 프로젝트에서 Relativity 플랫폼을 활용해 프로세싱된 데이터를 로드 및 컨디셔닝했습니다. 중복 제거(Deduplication), 근접 중복 제거(Near-Duplicate), 키워드 서치 조건 설계를 통해 리뷰 대상 문서량(Data Reduction)을 실질적으로 줄이는 작업을 수행했습니다. 이후 리뷰어들의 문서 검토를 지원하며 리뷰 배치(Batch) 구성, 진행률 트래킹, QC(품질검증) 프로세스에도 참여했습니다.',
    },
];

const processSteps = [
    {
        index: '01',
        title: '수집 계획 및 현장 대응',
        body: '수집 대상 디바이스, 수집 범위, 일정을 확정하고, Falcon을 이용한 현장 이미징을 진행했습니다. 수집 전 과정은 Chain of Custody 문서로 기록하여 증거능력을 확보했습니다.',
    },
    {
        index: '02',
        title: '프로세싱 및 데이터 정제',
        body: 'EnCase로 수집 이미지를 인덱싱하고, 파일 유형 필터링·메타데이터 추출·삭제 파일 복구를 통해 분석 가능한 데이터셋으로 변환했습니다. 대용량 데이터의 경우 프로세싱 옵션을 반복적으로 조정하며 처리 안정성을 확보했습니다.',
    },
    {
        index: '03',
        title: 'Relativity 호스팅및 Reduction',
        body: '프로세싱된 데이터를 Relativity에 호스팅하고, 중복 제거·이메일 스레딩·키워드 검색을 통해 리뷰 대상 문서 규모를 축소했습니다. 이 단계에서의 정확도가 이후 리뷰 효율에 직접적인 영향을 미친다는 점을 실무를 통해 체감했습니다.',
    },
    {
        index: '04',
        title: '리뷰 지원 및 품질 검증',
        body: '리뷰팀의 문서 검토 작업을 배치 단위로 지원하고, 검토 진행률과 태깅 일관성을 점검하는 QC 프로세스에 참여했습니다. 사안의 맥락(조사 목적, 쟁점)을 이해한 상태에서 데이터를 다뤄야 리뷰 품질이 담보된다는 점을 배웠습니다.',
    },
];

const insightPoints = [
    {
        title: '증거 무결성에 대한 감각',
        body: '포렌식 수집·프로세싱 단계에서는 작은 절차상의 실수 하나가 증거능력 자체를 무력화시킬 수 있다는 것을 체감했습니다. 해시값 검증, Chain of Custody 기록 등 절차적 엄밀함이 곧 결과물의 신뢰도라는 점을 배웠습니다.',
    },
    {
        title: '대용량 데이터를 다루는 판단력',
        body: 'EnCase와 Relativity를 오가며 수십만 건 단위의 데이터를 다룰 때는 단순히 툴을 다루는 기술을 넘어, 어떤 조건으로 필터링하고 무엇을 reduction 대상으로 삼을지에 대한 조사 맥락 기반의 판단이 훨씬 중요하다는 것을 알게 되었습니다.',
    },
    {
        title: '수집부터 리뷰까지 이어지는 책임감',
        body: '현장 수집, 프로세싱, 컨디셔닝, 리뷰 지원까지 한 사안의 전체 흐름에 관여하면서, 각 단계의 결과물이 다음 단계의 신뢰도를 결정한다는 점을 이해하게 되었고, 단계마다 책임감 있게 기록하고 검증하는 태도를 갖추게 되었습니다.',
    },
];

export default function deloitte() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="deloitte">
            <div className="deloitte-hero">
                <Link to="/" className="deloitte-back-link">← Back to Home</Link>
                <div className="deloitte-hero-media">
                    <img
                        src="./project/deloittecover.jpg"
                        alt="DELOITTE Cover"
                        className="deloitte-hero-img"
                    />
                </div>
                <div className="deloitte-hero-copy">
                    <div className="deloitte-hero-headline">
                        <p className="deloitte-kicker">Career</p>
                        <h1>DELOITTE Discovery & Analysis Lab</h1>
                        <p className="deloitte-summary">
                            딜로이트 안진 Discovery & Analysis Lab에서 디지털 포렌식 수집부터 eDiscovery 프로세싱,
                            Relativity 기반 컨디셔닝·reduction·리뷰까지 부정조사 데이터의 전 과정을 직접 수행하고 있습니다.
                        </p>
                    </div>
                    <div className="deloitte-highlight-list">
                        {highlights.map((item) => (
                            <div key={item.label} className="deloitte-highlight-item">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="deloitte-section deloitte-intro-section">
                <div className="deloitte-section-layout">
                    <div className="deloitte-section-heading">
                        <p>Overview</p>
                        <h2>프로젝트 개요</h2>
                    </div>
                    <div className="deloitte-section-body">
                        <div className="deloitte-overview-grid">
                            <div className="deloitte-overview-copy">
                                <p>
                                    딜로이트 안진 Discovery & Analysis Lab에서,
                                    부정조사 및 eDiscovery 프로젝트에 실제로 참여하여
                                    데이터 수집, 프로세싱, 컨디셔닝, 리뷰 지원의 업무를 진행했습니다. 
                                </p>
                                <p>
                                    Falcon을 통한 포렌식 이미징, EnCase를 통한 프리 프로세싱, Nuix에서 프로세싱, Relativity를 통한
                                    hosting·reduction·리뷰 지원까지 한 사안의 ediscovery 라이프사이클 전반에 관여하며,
                                    각 단계가 요구하는 절차적 정확성과 조사 맥락에 대한 이해의 중요성을 배웠습니다.
                                </p>
                            </div>
                            <div className="deloitte-fact-table">
                                {overviewFacts.map(([label, value]) => (
                                    <div key={label} className="deloitte-fact-row">
                                        <span>{label}</span>
                                        <strong>{value}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="deloitte-section">
                <div className="deloitte-section-layout">
                    <div className="deloitte-section-heading">
                        <p>Scope</p>
                        <h2>주요 업무와 기여</h2>
                    </div>
                    <div className="deloitte-section-body">
                        <div className="deloitte-contribution-list">
                            {contributionItems.map((item) => (
                                <article key={item.title} className="deloitte-contribution-item">
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="deloitte-section">
                <div className="deloitte-section-layout">
                    <div className="deloitte-section-heading">
                        <p>Process</p>
                        <h2>업무 진행 방식</h2>
                    </div>
                    <div className="deloitte-section-body">
                        <div className="deloitte-process-list">
                            {processSteps.map((step) => (
                                <article key={step.index} className="deloitte-process-item">
                                    <span className="deloitte-process-index">{step.index}</span>
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

            <section className="deloitte-section">
                <div className="deloitte-section-layout">
                    <div className="deloitte-section-heading">
                        <p>Reflection</p>
                        <h2>핵심 인사이트</h2>
                    </div>
                    <div className="deloitte-section-body">
                        <div className="deloitte-reflection-block">
                            <p className="deloitte-reflection-summary">
                                수집부터 리뷰까지 전 과정을 경험하며, 디지털 포렌식·eDiscovery 업무는
                                절차적 엄밀함과 조사 맥락에 대한 이해가 결과물의 신뢰도를 결정한다는 점을 배웠습니다.
                            </p>
                            <div className="deloitte-learning-list">
                                {insightPoints.map((item) => (
                                    <div key={item.title} className="deloitte-learning-item">
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

            <section className="deloitte-section deloitte-certificate-section">
                <div className="deloitte-section-layout">
                    <div className="deloitte-section-heading">
                        <p>Archive</p>
                        <h2>수료 자료</h2>
                    </div>
                    <div className="deloitte-section-body">
                        <div className="deloitte-certificate-frame">
                            <img
                                src="./project/deloitteinternship.png"
                                alt="Internship Certificate"
                                className="deloitte-certificate-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
