export const careerData = [
  {
    id: 1,
    company: "노벨테크놀로지",
    period: "2020.04 - 2023.08",
    projects: [
      {
        title: "솔라리버 태양광 모니터링 Web",
        period: "2022.08 ~ 2023.01",
        role: "화면설계, 퍼블리싱, 화면 개발 (80%)",
        result: [
        "AmChart를 이용한 태양광 발전량 데이터 시각화",
        "발전량 데이터를 엑셀 파일 다운로드 및 프린트 기능 구현"
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
        title: "솔라리버 QR Scanner App (Hybrid APP)",
        period: "2022.12 - 2023.04",
        role: "개발, 배포 (100%)",
        result: [
            "QR 스캐너 라이브러리를 이용한 모뎀 등록 및 관리 가능한 하이브리드 앱 개발",
            "Android App 배포 경험"
        ],
        tags: [ "PHP", "MySQL", "Android"],
        images: [
          { src: app_login, type: "app" },
          { src: app_create, type: "app" },
          { src: app_module, type: "app" },
        ],
      },
      {
        title: "REMP 태양광 모니터링 Web & App(Hybrid App) 리뉴얼",
        period: "2022.03 ~ 2022.06",
        role: "기본 기능 버그 수정 및 인터페이스 기능 개선 (50%)",
        result: [
            "태양광 패널 이상/발전량 데이터를 Firebase 클라우드 메시징 푸시 기능 개선",
            "로그인 시 저장되던 토큰을 새로운 인스턴스 API로 업데이트",
            "레거시 코드 리팩토링(login, webview)",
            "AmChart를 이용한 데이터 시각화"
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
        title: "Web Dashboard",
        period: "2023",
        result: "사용자 전환율 20% 증가",
        tags: ["React", "Tailwind", "Redux"],
        images: ["", ""],
      },
    ],
  },
  {
    id: 3,
    company: "트론트",
    period: "2014.01 - 2015.03",
    projects: [
      {
        title: "Web Dashboard",
        period: "2023",
        result: "사용자 전환율 20% 증가",
        tags: ["React", "Tailwind", "Redux"],
         images: ["", ""],
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

