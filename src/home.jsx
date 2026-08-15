import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const experiences = [
    {
        company: "Deloitte Anjin",
        companyKr: "딜로이트 안진",
        role: "Forensic & eDiscovery",
        image: "./project/deloitteThumbnail.png",
        path: "/experience/deloitte"
    },
    {
        company: "PersolKelly",
        companyKr: "퍼솔켈리",
        role: "Full Stack Developer",
        image: "./project/persolkellythumbnail.webp",
        path: "/experience/persol"
    },
    {
        company: "HD Medi",
        companyKr: "에이치디메디",
        role: "Data Engineer",
        image: "./project/hdmedithumbnail.webp",
        path: "/experience/hdmid"
    }
];

const projects = [
    {
        title: "찬주런",
        subtitle: "Chanjurun",
        image: "./project/chanjurunthumbnail.webp",
        path: "/projects/chanjurun"
    },
    {
        title: "KND 사이트 개발",
        subtitle: "KND Site",
        image: "./project/newrodiversitythumbnail.webp",
        path: "/projects/neurodiversity"
    },
    {
        title: "자동 실셈 총기함",
        subtitle: "Smart Armory",
        image: "./project/smartguncabinet.png",
        path: "/projects/autoshot"
    }
];

const awards = [
    {
        title: "HECTO SW Academy",
        award: "은상",
        image: "./project/hecto.jpg",
        path: "/award/hecto"
    },
    {
        title: "Military SW Hackathon",
        award: "장려상",
        image: "./project/osamthumbnail.webp",
        path: "/award/military"
    }
];

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M4 7h16v10H4zM4 8l8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function RepositoryIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 4c-4.4 0-8 1.6-8 3.5S7.6 11 12 11s8-1.6 8-3.5S16.4 4 12 4Zm-8 8c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5M4 12v4.5C4 18.4 7.6 20 12 20s8-1.6 8-3.5V12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CardLink({ item, className, children }) {
    if (!item.path) {
        return <div className={className}>{children}</div>;
    }

    return (
        <Link to={item.path} className={className}>
            {children}
        </Link>
    );
}

function SectionCard({ title, items, type }) {
    return (
        <section className="content-section">
            <div className="section-heading">
                <h2>{title}</h2>
            </div>
            <div className="simple-list">
                {items.map((item) => (
                    <CardLink
                        key={`${title}-${item.title || item.company}`}
                        item={item}
                        className={`simple-card${item.path ? " simple-card-link" : ""}`}
                    >
                        {item.image ? (
                            <img src={item.image} alt={item.title || item.company} className="card-thumb" />
                        ) : (
                            <div className="card-thumb card-thumb-placeholder" aria-hidden="true">
                                <span>{item.company?.slice(0, 2).toUpperCase()}</span>
                            </div>
                        )}
                        <div className="card-copy">
                            {type === "experience" && (
                                <>
                                    <h3>{item.company}</h3>
                                    <p>{item.companyKr}</p>
                                    <strong>{item.role}</strong>
                                </>
                            )}
                            {type === "project" && (
                                <>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </>
                            )}
                            {type === "award" && (
                                <>
                                    <h3>{item.title}</h3>
                                    <p>{item.award}</p>
                                </>
                            )}
                        </div>
                    </CardLink>
                ))}
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <main className="home-shell">
            <section className="home-board">
                <section className="hero-panel">
                    <div className="hero-photo-block">
                        <img src="./cj_profileimg.jpg" alt="임채주 프로필" className="hero-photo" />
                    </div>

                    <div className="hero-copy">
                        <span className="hero-label">IT Specialist</span>
                        <h1>임채주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lim Chae-Ju</h1>
                        <p className="hero-title">Software Engineer</p>
                        {/* <p className="hero-summary">
                            디지털 자산 보호와 포렌식 분석, IT 감사 관점의 문제 해결에 집중하는 포트폴리오입니다.
                        </p> */}

                        <div className="hero-info">
                            <div className="info-line">
                                <span>Email</span>
                                <a href="mailto:cjlim0523@naver.com">cjlim0523@naver.com</a>
                            </div>
                            <div className="info-line">
                                <span>Repository</span>
                                <a href="https://github.com/cjlim05" target="_blank" rel="noreferrer">
                                    github.com/cjlim05
                                </a>
                            </div>
                            <div className="info-line">
                                <span>Archive</span>
                                <Link to="/resume">Resume/이력서 (자세히 보기)</Link>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <a href="mailto:cjlim0523@naver.com" className="hero-action">
                                <MailIcon />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://github.com/cjlim05"
                                className="hero-action hero-action-muted"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <RepositoryIcon />
                                <span>Repository</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="toolkit-panel">
                    <h2>Technical Stacks</h2>
                    <div className="toolkit-list">
                        {["EnCase", "Nuix", "Relativity", "Python", "AWS", "MySQL Audit", "Linux", "React", "Java", "Git"].map((tool) => (
                            <span key={tool} className="tool-chip">
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="content-grid">
                    <SectionCard title="Experience" items={experiences} type="experience" />
                    <SectionCard title="Projects" items={projects} type="project" />
                    <SectionCard title="Awards" items={awards} type="award" />
                </div>
            </section>
        </main>
    );
}
