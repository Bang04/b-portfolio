export const toyProjects = [
  {
    id: 1,
    title: "PersonalFinance App",
    type: "team",
    period: "2025-01-23 ~ 2025-02-10",
    desc: "종합 자산 관리 및 예산 편성 기능을 제공하는 개인 금융 관리 웹 서비스",
    features: "예산/자산 CRUD, 실시간 데이터 동기화, 무한 스크롤, 반응형 디자인",
    role: [
      "Redux 기반의 중앙 집중식 상태 관리 및 CRUD 로직 설계",
      "Firebase 연동을 통한 실시간 데이터 퍼시스턴스(Persistence) 구현",
      "사용자 경험(UX) 향상을 위한 인터랙티브 요소 개발"
    ],
    result: [
      "Redux Toolkit의 구조적 활용: Pot(자산) 데이터의 상태를 전역화하여 복잡한 Props Drilling을 방지하고 데이터 일관성 유지",
      "Intersection Observer API 기반 무한 스크롤: 대량의 청구서 리스트 렌더링 시 초기 로딩 속도를 최적화하고 브라우저 부하 절감",
      "Firebase Firestore 연동: 팀 리팩토링 과정에서 비동기 데이터 통신을 공통 모듈로 추상화하여 유지보수성 향상",
      "Custom Hook을 통한 알림 시스템: Toast UI에 CRUD 피드백을 결합하여 사용자에게 명확한 작업 상태 제공"
    ],
    tags: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    images: [
      { src: potWeb, type: "web" },
      { src: RecurringTablet, type: "cartTablet" },
      { src: RecurringApp, type: "mobile" }
    ],
    links: {
      demo: "https://toy-personal-finance.web.app/",
      github: "https://github.com/Bang04/frontend-mentor-challenges/tree/b6b7812cf3b339931a81d192c73b989b73ff100a/personal-finance-app"
    }
  },
  {
    id: 2,
    title: "Product list with cart",
    type: "personal",
    period: "2025-02-27 ~ 2025-03-12",
    desc: "실시간 장바구니 연동 및 주문 프로세스를 경험할 수 있는 커머스 웹 앱",
    features: "상태 기반 장바구니, 실시간 수량 계산, 주문 확인 시스템",
    role: [
      "TypeScript를 활용한 데이터 모델링 및 안정적인 상태 관리",
      "반응형 웹 디자인 및 UI 컴포넌트 개발"
    ],
    result: [
      "Redux 상태 동기화: 장바구니의 추가/삭제/수량 변경 시 전체 합계 금액이 실시간으로 반영되는 반응형 데이터 흐름 구현",
      "유효성 검증 로직: 재고 수량 제한 및 장바구니 비우기 등 실제 커머스 플로우를 고려한 예외 처리 적용",
      "Bulma CSS를 활용한 모듈형 스타일링: 클래스 기반 스타일 정의로 가독성 높은 UI 코드 작성"
    ],
    tags: ["React", "TypeScript", "Redux", "Bulma"],
    images: [
      { src: cartWeb, type: "web" },
       { src: cartTablet, type: "cartTablet" },
      { src: cartApp, type: "mobile" }
    ],
    links: {
      demo: "https://b-dessert.vercel.app/",
      github: "https://github.com/Bang04/frontend-mentor-solo/tree/a8f24fc04ac8e7788a8ec5fb985f1f430d8d54ac/product-list-with-cart-main"
    }
  },
  {
    id: 3,
    title: "Entertainment Web App",
    type: "team",
    period: "2025-01-23 ~ 2025-02-10",
    desc: "영화 및 TV 시리즈 탐색과 개인화된 북마크 기능을 제공하는 플랫폼",
    features: "커스텀 슬라이더, 북마크 시스템, 복합 검색 기능",
    role: [
      "외부 라이브러리 의존성을 최소화한 핵심 UI 컴포넌트 개발",
      "전역 상태를 활용한 사용자 맞춤형 북마크 기능 구현"
    ],
    result: [
      "순수 React 기반 커스텀 슬라이더: 외부 라이브러리 없이 useRef와 State만을 활용하여 성능 최적화 및 패키지 경량화",
      "Redux 기반 북마크 동기화: 여러 페이지에서 동일한 콘텐츠의 북마크 상태가 즉각적으로 연동되도록 상태 구조 설계",
      "반응형 그리드 레이아웃: CSS Grid를 활용하여 다양한 해상도에서 콘텐츠 가독성 확보"
    ],
    tags: ["React", "TypeScript", "Redux", "Styled Components"],
     images: [
      { src: enterWeb, type: "web" },
      { src: enterApp, type: "mobile" }
    ],
    links: {
      demo: null,
      github: "https://github.com/Bang04/frontend-mentor-challenges/tree/b6b7812cf3b339931a81d192c73b989b73ff100a/entertainment-webapp"
    }
  },
  {
    id: 4,
    title: "Crowdfunding Product Page",
    type: "team",
    period: "2025-02-10 ~ 2025-02-19",
    desc: "실시간 펀딩 현황 업데이트 기능을 갖춘 제품 크라우드 펀딩 페이지",
    features: "동적 진행률 바, 실시간 모금액 업데이트, 후원 모달",
    role: [
      "비즈니스 로직에 따른 상태 변화 시각화",
      "모바일 최적화 및 인터랙티브 UI 구현"
    ],
    result: [
      "실시간 지표 업데이트: 후원 성공 시 모금액 및 진행률 바(Progress Bar)가 애니메이션과 함께 즉각 업데이트되도록 로직 구성",
      "접근성 고려 햄버거 메뉴: 모바일 환경에서 사용성을 높이기 위한 직관적인 네비게이션 및 모달 인터랙션 구현",
      "컴포넌트 재사용성: 다양한 후원 플랜(Pledge)을 단일 공통 컴포넌트로 구조화하여 코드 중복 최소화"
    ],
    tags: ["React", "Redux", "Bulma"],
      images: [
      { src: crowdWeb, type: "web" },
      { src: crowdApp, type: "mobile" }
    ],
    links: {
      demo: null,
      github: "https://github.com/Bang04/frontend-mentor-challenges/tree/b6b7812cf3b339931a81d192c73b989b73ff100a/crowdfunding-product-page"
    }
  },
  {
    id: 5,
    title: "Agency Landing Page",
    type: "personal",
    period: "2025-06-17 ~ 2025-06-23",
    desc: "심미적 디자인과 퍼포먼스를 고려한 기업 홍보용 반응형 랜딩 페이지",
    features: "모던 UI 퍼블리싱, 시맨틱 마크업, 완전 반응형 대응",
    role: [
      "디자인 시스템에 맞춘 고도화된 UI 퍼블리싱",
      "Tailwind CSS를 활용한 효율적인 반응형 코드 작성"
    ],
    result: [
      "Tailwind CSS 최적화: 유틸리티 클래스 방식을 활용해 스타일 코드량을 줄이고 디자인 일관성 유지",
      "시맨틱 마크업 준수: 검색 엔진 최적화(SEO) 및 웹 접근성을 고려한 HTML 구조 설계",
      "멀티 디바이스 대응: 데스크탑, 태블릿, 모바일에 최적화된 레이아웃 전환 구현"
    ],
    tags: ["React", "Tailwind CSS", "JavaScript"],
     images: [
      { src: sunnysWeb, type: "web" },
    ],
    links: {
      demo: "https://b-sunnyside.vercel.app",
      github: "https://github.com/Bang04/frontend-mentor-solo/tree/a8f24fc04ac8e7788a8ec5fb985f1f430d8d54ac/sunnyside-agency-landing-page"
    }
  }
];
import enterWeb from "../assets/images/project/Enterainment-web.png";
import enterApp from "../assets/images/project/Enterainment-app.png";
import cartWeb from "../assets/images/project/LlistWithCart-app.png";
import cartApp from "../assets/images/project/LlistWithCart-web.png";
import cartTablet from "../assets/images/project/LlistWithCart-tablet.png";
import crowdWeb from "../assets/images/project/Crowdfunding-web.png";
import crowdApp from "../assets/images/project/Crowdfunding-app.png";
import sunnysWeb from "../assets/images/project/Sunnyside-web.png";
// import persnerApp from "../assets/images/project/PersonalFinance-app.png";
// import persnerTablet from "../assets/images/project/PersonalFinance-tablet.png";
import persnerWeb from "../assets/images/project/PersonalFinance-web.png";

import potWeb from "../assets/images/project/personal/pot-web.png";
import potTablet from "../assets/images/project/personal/pot-web.png";
import add from "../assets/images/project/personal/pot-add.png";
import del from "../assets/images/project/personal/pot-del.png";
import edit from "../assets/images/project/personal/pot-edit.png";

import RecurringWeb from "../assets/images/project/personal/recurring-web.png";
import RecurringTablet from "../assets/images/project/personal/recurring-tablet.png";
import RecurringApp from "../assets/images/project/personal/recurring-app.png";
