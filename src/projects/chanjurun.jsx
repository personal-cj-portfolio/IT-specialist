import React from "react";
import { Link } from "react-router-dom";
import "./chanjurun.css";

export default function Chanjurun() {
    return (
        <div className="chanjurun">

            {/* ===== HERO COVER ===== */}
            <div className="hero">
                <img
                    src="./project/chanjuruncover2.png"
                    alt="ChanjuRun Cover"
                    className="hero-img"
                />
                <Link to="/" className="back-link">← Back to Home</Link>
                <div className="hero-overlay">
                    <h1 className="page-title">ChanjuRun</h1>
                    <p className="hero-subtitle">
                        러닝을 혼자가 아닌 함께. 실시간 위치 기반 러닝 파트너 매칭 & 기록 관리 플랫폼
                    </p>
                </div>
            </div>

            <div className="project-links project-links-top">
                <a
                    href="https://github.com/cjlim05/swacademy_chanju"
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                >
                    <img src="./project/github.svg" alt="" className="link-btn-icon" aria-hidden="true" />
                    <span>GitHub Repository</span>
                </a>
            </div>

            <section className="section">
                <h2>프로젝트 개요</h2>
                <p>
                    <strong>찬주런(ChanjuRun)</strong> 은 러닝을 혼자가 아닌 <strong>함께 달리기 위한 러닝 파트너 매칭 & 기록 관리 서비스</strong>입니다.
                </p>

                <p>많은 사용자들이 러닝을 꾸준히 하지 못하는 이유가</p>

                <ul>
                    <li>혼자 운동하면서 오는 <strong>동기 부족</strong>,</li>
                    <li>함께 뛰어줄 <strong>파트너를 구하기 어려운 점</strong>에 있다는 문제에 주목했습니다.</li>
                </ul>

                <p>이를 해결하기 위해 찬주런은</p>

                <ul>
                    <li><strong>실시간 위치 기반으로 주변 러너를 추천</strong>하고</li>
                    <li><strong>1:1 및 그룹 채팅</strong>으로 소통할 수 있게 하며</li>
                    <li><strong>러닝 기록 측정/저장/조회</strong>를 지원함으로써</li>
                </ul>

                <p>
                    사용자가 혼자 뛰는 러닝에서 함께 달리는 경험으로 자연스럽게 확장하도록 설계된 서비스입니다.
                </p>
            </section>

            {/* ===== 개발 기획 ===== */}
            <section className="section">
                <h2>개발 기획</h2>
                <div className="project-links">
                    <a
                        href="https://www.notion.so/WBS-2d475fa202e38021ae0cc46670dd811b?pvs=21"
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn"
                    >
                        <span>WBS (Notion) ↗</span>
                    </a>
                </div>
            </section>

            {/* ===== 프로젝트 기능 및 기술 ===== */}
            <section className="section">
                <h2>프로젝트 기능 및 기술</h2>

                <h3>로그인 기능</h3>
                <ul>
                    <li><strong>카카오 간편 로그인(OAuth 2.0)</strong> 기반 소셜 로그인</li>
                    <li>로그인 성공 시 백엔드에서 <strong>JWT 발급 → HttpOnly Secure Cookie 저장</strong>으로 보안 강화</li>
                    <li>앱 최초 진입 시 <code>/auth/me</code>를 호출해 토큰 유효성 검증 및 로그인 상태 유지</li>
                    <li>인증 상태에 따라 <strong>비로그인 사용자의 주요 화면 접근 제한 및 자동 리다이렉션</strong></li>
                    <li><strong>사용 기술:</strong> Spring Security, JWT, Kakao OAuth2.0, HttpOnly Cookie</li>
                </ul>

                <h3>파트너 추천 기능</h3>
                <ul>
                    <li>사용자 위치기반 추천: <strong>Kakao Map API</strong> + Geolocation API 활용</li>
                    <li>위도/경도 좌표를 받아 거리 기반 필터링 및 <strong>시/구 행정구역</strong> 기준 주변 러너 리스트 제공</li>
                    <li><strong>Infinite Scroll + Cursor Pagination</strong> 방식으로 성능 최적화</li>
                    <li><strong>사용 기술:</strong> Kakao Map API, GPS 기반 위치 정보, MySQL 조건 검색, Infinite Scroll</li>
                </ul>

                <h3>마라톤 대회 추천</h3>
                <ul>
                    <li>Selenium을 활용하여 마라톤 대회정보를 스크래핑</li>
                    <li>스크래핑을한 데이터를 기반으로 참여 가능한 마라톤 대회를 추전</li>
                    <li>aws lambda, eventbridge를 사용하여 하루에 한번씩 크롤링하여 마라톤 대회 최신화</li>
                </ul>

                <h3>러닝 기록 측정 기능</h3>
                <ul>
                    <li><strong>GPS 실시간 위치 수집</strong> 및 경로 추적</li>
                    <li><strong>Haversine 거리 계산 공식</strong> 적용하여 이동 거리, 평균 페이스, 속도 자동 계산</li>
                    <li>기록 데이터는 <strong>그래프 / 카드 UI 형태로 시각화</strong></li>
                    <li>추후 <strong>랭킹 / 배지 / 코스 추천 기능</strong> 확장을 고려한 구조 설계</li>
                    <li><strong>사용 기술:</strong> Geolocation API, Chart 라이브러리, Haversine 계산, MySQL 저장</li>
                </ul>

                <h3>채팅 기능</h3>
                <ul>
                    <li><strong>1:1 및 그룹 채팅 지원</strong></li>
                    <li><strong>WebSocket + STOMP</strong> 기반 실시간 양방향 통신</li>
                    <li>읽음 표시 기능</li>
                    <li><strong>메시지 무한 스크롤 + 최신 메시지 기준 목록 갱신</strong></li>
                    <li><strong>사용 기술:</strong> WebSocket(STOMP), JPA, MySQL, Message Pagination</li>
                </ul>

                <h3>프로필 관리</h3>
                <ul>
                    <li><strong>내 프로필 조회/수정</strong> (닉네임, 자기소개, 지역 등)</li>
                    <li><strong>프로필 공개 여부(openProfile)</strong> 토글 기능을 통해, 러닝 메이트 탐색 시 내 정보가 노출될지 선택 가능</li>
                    <li>AWS S3에 프로필 이미지를 저장하고, 프론트에서 URL 정규화하여 표시</li>
                    <li>러닝 기록 목록과 연계해 <strong>“프로필 + 기록”</strong> 기반 자기 브랜딩 가능</li>
                    <li><strong>사용 기술:</strong> S3 파일 업로드, MultipartFile 처리, React 상태관리, REST API</li>
                </ul>

                <h3>소셜 기능 (Social Interaction)</h3>
                <ul>
                    <li><strong>기록별 OOTD 업로드:</strong> 러닝 기록마다 사진(OOTD)을 첨부해 자신의 러닝 스타일·분위기를 공유</li>
                    <li><strong>좋아요 기능:</strong> 게시물에 대한 실시간 반응 제공, like_count 필드 기반 누적 관리</li>
                    <li><strong>댓글 기능:</strong> 사용자 간 소통 활성화를 위해 댓글 작성기능 제공</li>
                    <li><strong>게시물 데이터 관리:</strong> JSON 기반 이미지 배열 저장 및 사용자·기록·게시물 간 명확한 관계 매핑</li>
                </ul>

                <h3>관리자 페이지</h3>
                <ul>
                    <li><strong>사용자, 파티(러닝 모집글), 채팅방, 기록 데이터</strong>를 한눈에 관리할 수 있는 관리자용 화면 설계</li>
                    <li>REST API 기반으로 향후 <strong>유저 신고 관리 / 비정상 활동 모니터링 / 통계 조회</strong> 기능 확장 예정</li>
                    <li>운영 관점에서 <strong>서비스 상태 확인 및 데이터 관리 효율성</strong>을 높이기 위한 구조</li>
                    <li><strong>사용 기술:</strong> Spring MVC, Admin 전용 Endpoint 설계, 인증 기반 접근 제어</li>
                </ul>

                <h3>인프라 & 서버 아키텍처</h3>
                <ul>
                    <li><strong>AWS EC2</strong>에 Spring Boot 백엔드와 MySQL DB를 배포하여, 실제 서비스 환경과 유사한 구조로 운영</li>
                    <li>정적 리소스는 <strong>S3 + CloudFront</strong>로 분리 라우팅하여 성능과 안정성 확보</li>
                    <li>프론트엔드는 <strong>S3 정적 호스팅 + CloudFront CDN</strong>으로 배포하여, 전역 어디서든 빠르게 접근 가능하도록 구성</li>
                    <li><code>.env</code> 기반으로 <strong>개발/운영 환경 분리</strong> (API_BASE URL, OAuth Client ID, JWT 설정 등)</li>
                    <li>MySQL 8.x를 EC2에서 직접 운영하며, <strong>관계형 설계 + 인덱스 적용</strong>으로 조회 성능을 고려한 구조 설계</li>
                    <li>추후 <strong>AWS Lambda + CloudWatch</strong>를 활용해 서버 다운 됐는지 확인 후 서버 멈추면 텔레그램으로 알림 설정</li>
                    <li><strong>사용 기술:</strong> AWS EC2, S3, CloudFront, Nginx, Spring Boot, MySQL 8.x, 환경 변수(.env) 기반 설정</li>
                </ul>
            </section>

            {/* ===== 담당 업무 ===== */}
            <section className="section">
                <h2>담당 업무</h2>

                <h3>서비스 기획 & 설계</h3>
                <ul>
                    <li>“위치 기반 러닝 메이트 매칭”이라는 핵심 컨셉 도출</li>
                    <li>주요 기능 정의: 추천, 파티 모집, 기록, 채팅, 프로필, 관리자 페이지</li>
                    <li>화면 플로우, 데이터 흐름, 사용 시나리오 문서화(figma, notion)</li>
                    <li>ERD, 데이터베이스 스키마 설계</li>
                </ul>

                <h3>백엔드 개발 (Spring Boot)</h3>
                <ul>
                    <li>User, Party, Record, ChatRoom, Participant, Message, ChatReadState 등 <strong>주요 엔티티 설계</strong></li>
                    <li>JPA 기반 레포지토리/서비스/컨트롤러 계층 구현</li>
                    <li>카카오 OAuth2 연동 및 <strong>JWT + HttpOnly Cookie</strong> 인증 구조 구현</li>
                    <li>WebSocket + STOMP 기반 <strong>실시간 채팅 로직 및 읽음 처리 구조</strong> 설계/구현</li>
                    <li>거리 계산, 필터링, 정렬 로직 등 비즈니스 로직 구현</li>
                </ul>

                <h3>프론트엔드 개발 (React + Vite)</h3>
                <ul>
                    <li>Board(메인 컨테이너), Home(추천), MateSearch(파티), RunRecorder(기록), Chat, Profile 등 주요 화면 구현</li>
                    <li><strong>커스텀 훅</strong> 작성: 위치 추적(useGeolocation), 카카오맵(useKakaoMap), 러닝 지표 계산(useRunningMetrics)</li>
                    <li>Swipe 카드 UI, Infinite Scroll, 낙관적 UI 등 <strong>UX 중심 상호작용</strong> 구현</li>
                    <li>공통 API 클라이언트(<code>apiRequest</code>, <code>apiGet/post/patch/delete</code>) 작성 및 에러/인증 처리 일원화</li>
                </ul>

                <h3>DB 및 인프라</h3>
                <ul>
                    <li>MySQL 기반 <strong>관계형 스키마 설계 및 인덱싱 전략</strong> 수립</li>
                    <li>AWS EC2 + S3 + CloudFront + Nginx를 이용한 <strong>실서비스 수준 배포 환경 구축</strong></li>
                    <li>환경 변수 관리, JWT Secret 및 OAuth 키 보안 설정</li>
                </ul>
            </section>

            {/* ===== 이미지 ===== */}
            <section className="section">
                <h2>프로젝트 스트럭처</h2>

                <h3>아키텍처</h3>
                <img src="./project/chanjurunarchitecture.png" alt="System Architecture" />

                <h3 style={{ marginTop: '3rem' }}>ERD (Database Schema)</h3>
                <img src="./project/chanjurunerd.png" alt="ERD" />

                <h3 style={{ marginTop: '3rem' }}>서비스 팜플렛</h3>
                <img src="./project/chanjurunpamplate.png" alt="Pamphlet" />
            </section>

            <section className="section">
                <h2>시연영상</h2>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <iframe
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        src="https://www.youtube.com/embed/tP7auXNo6Qk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <a href="https://youtube.com/watch?v=tP7auXNo6Qk" target="_blank" rel="noreferrer">
                        영상보러 가기 ↗
                    </a>
                </div>
            </section>

        </div>
    );
}
