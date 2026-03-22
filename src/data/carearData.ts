export const careerData = [
  {
    id: 1,
    company: "노벨테크놀로지",
    period: "2020.04 - 2023.08",
    projects: [
       {
        title: "솔라리버 QR Scanner App (Hybrid APP)",
        period: "2022.12 - 2023.04",
        role: "QR 스캐너 기능 개발, WebView 렌더링 최적화 및 Android 하이브리드 앱 구축 전반 담당(100%)",
        result: [
            "QR 스캐너 라이브러리를 이용한 모뎀 등록 및 관리 가능한 하이브리드 앱 개발",
            "Android 앱 배포 경험 확보"
        ],
        tags: [ "PHP", "MySQL", "Android"],
        images: [
          { src: app_login, type: "app" },
          { src: app_create, type: "app" },
          { src: app_module, type: "app" },
        ],
      },
      {
        title: "솔라리버 태양광 모니터링 Web 리뉴얼",
        period: "2022.01 ~ 2022.03",
        role: "AmCharts 기반 발전량 대시보드 및 데이터 Export/Print 기능 개발 (100%)",
        result: [
        "발전량 데이터를 시각화하여 설비 상태를 직관적으로 파악 가능하도록 개선",
        "엑셀 다운로드 및 프린트 기능 제공으로 데이터 관리 및 운영 효율 향상"
        ],
        tags: [ "PHP", "MySQL","Ajax", "jQuery"],
        images: [
          { src: w_main, type: "web" },
          { src: w_pw_day_d, type: "web" },
          { src: w_pw_day_g, type: "web" },
          { src: w_re_inv, type: "web" },
        ],
      },
      
      {
        title: "REMP 태양광 모니터링 Web & App(Hybrid App) 리뉴얼",
        period: "2022.03 ~ 2022.06",
        role: "FCM 알림 시스템, 인증 API 구조, 로그인·WebView 통신 및 UI/성능 개선을 포함한 서비스 전반 리팩토링 수행",
        result: [
            "Firebase Cloud Messaging 기반 설비 이상 알림 Push 기능 개선",
            "인증 API 구조 개선을 통해 로그인 안정성 및 세션 처리 효율 향상",
            "로그인 및 WebView 리팩토링으로 불필요 요청 감소 및 성능 개선",
            "데이터 시각화 및 UI 개선으로 사용자 모니터링 가시성 향상"
        ],
        tags: [ "PHP", "MySQL", "Android", "Ajax", "jQuery"],
        images: [
          { src: nrems_login, type: "app" },
          { src: nrems_main, type: "app" },
          { src: nrems_g1, type: "app" },
          { src: nrems_g2, type: "app" },  
        ],
      },
    ],
  },
  {
    id: 2,
    company: "일오삼미디어",
    period: "2017.07 - 2018.07",
    projects: [
      {
        title: "기업·지자체 웹사이트 구축 및 운영",
        period: "2017.07 - 2018.07",
        role: 'UI 퍼블리싱, PHP 기능 개발, 유지보수를 포함한 웹 서비스 전반 구축 100%',
        result: [
          "메인·서브 페이지 UI 퍼블리싱 및 반응형 웹 구현",
          "게시판, 문의폼, 관리자 기능 등 PHP 기반 기능 개발",
        ],
        tags: ["PHP", "MySQL", "jQuery"],
        images: [apartment,apartment2,donga, palgongsan],
      },
    ],
  },
  {
    id: 3,
    company: "트론트",
    period: "2014.01 - 2015.03",
    projects: [
      {
        title: "스포츠 커뮤니티 사이트 기능 개발 및 DB 운영",
        period: "2014.01 ~ 2015.03",
        role: '실시간 메시징 기능 및 데이터 안정성 구조 설계 및 시스템 구축 100%',
        result: [
          "MS-SQL 프로시저 스케줄링을 활용한 실시간 메시지 알림 시스템 설계 및 구현",
          "AJAX 비동기 처리 기반 사용자 인터랙션 기능 개발 및 응답 속도 개선",
          "서버단 데이터 검증 및 쿼리 보안 로직 설계로 비정상 요청 및 SQL Injection 대응 구조 구축",
        ],
        tags: ["PHP", "ASP", "MySQL","MS-SQL", "jQuery", "AJAX"],
         images: [],
      },
    ],
  },
];



import nrems_login from "../assets/images/nrems/nrems_login.png";
import nrems_main from "../assets/images/nrems/nrems_main.png";
import nrems_g1 from "../assets/images/nrems/nrems_g1.png";
import nrems_g2 from "../assets/images/nrems/nrems_g2.png";

import w_main from "../assets/images/solariver/w_main.png";
import w_pw_day_d from "../assets/images/solariver/w_pw_day_d.png";
import w_pw_day_g from "../assets/images/solariver/w_pw_day_g.png";
import w_re_inv from "../assets/images/solariver/w_re_inv.png";

import app_login from "../assets/images/solariver/m_login.png";
import app_create from "../assets/images/solariver/m_create.png";
import app_module from "../assets/images/solariver/m_module.png";

import apartment from "../assets/images/project/153/apartment1.jpeg";
import apartment2 from "../assets/images/project/153/apartment2.jpeg";
import donga from "../assets/images/project/153/donga.jpeg";
import palgongsan from "../assets/images/project/153/palgongsan.jpeg";