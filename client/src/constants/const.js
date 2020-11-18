// landing images
import landing_1 from '../assets/landing_1.jpg';
import landing_2 from '../assets/landing_2.jpg';
import landing_3 from '../assets/landing_3.jpg';
import landing_4 from '../assets/landing_4.jpg';
import thumbnail1 from '../assets/thumbnail1.jpg';


// common
export const gnb = [
    { title: '진행중인 설문', to: 'progressList' },
    { title: '종료된 설문', to: 'endList' },
    { title: '공지사항', to: 'noticeList' },
    { title: '회원가입', to: 'register' },
    { title: '로그인', to: 'login' },
]

export const gnb2 = [
    { title: '진행중인 설문', to: 'progressList' },
    { title: '종료된 설문', to: 'endList' },
    { title: '공지사항', to: 'noticeList' },
    { title: '마이페이지', to: 'mypage' },
    { title: '로그아웃', to: '' },
]

export const search = [
    { valueTitle: '전체', value: 'all' },
    { valueTitle: '제목', value: 'subject' },
    { valueTitle: '내용', value: 'content' },
    { valueTitle: '태그', value: 'tag' },
]

export const topBtn = {
    title: 'TOP',
}

// landing
export const landing = [
    { imageSrc: landing_1 },
    { imageSrc: landing_2 },
    { imageSrc: landing_3 },
    { imageSrc: landing_4 },
]

// progressList
export const progressPreview = [
    {
        thumbnail: thumbnail1,
        subject: '진행중인 설문 제목',
        nickname: '닉네임',
        term: '2020.10.02 ~ 2020.10.30',
        tag: '#태그 #태그 #태그',
        to: 'progressDetail',
    }
]

// progressDetail
export const detailInfo = {
    thumbnail: thumbnail1,
    subject: '설문 상세보기 제목',
    content: '설문조사 참여에 참고할 설문의 목적, 내용 기술설문조사 참여에 참고할 설문의 목적, 내용 기술설문조사 참여에 참고할 설문의 목적, 내용 기술 설문조사 참여에 참고할 설문의 목적, 내용 기술 설문조사 참여에 참고할 설문의',
    nickname: '닉네임',
    term: '2020.10.05 ~ 2020.10.31',
    tag: '#태그 #태그태그 #태그태그태그 #태그',
};

export const progressQ = [
    { qst: '질문질문1'},
    { qst: '질문질문2'},
    { qst: '질문질문3'},
    { qst: '질문질문4'},
];

export const progressA = [
    {asw: '대답1'},
    {asw: '대답2'},
    {asw: '대답3'},
    {asw: '대답4'},
]

// endList
export const endPreview = [
    {
        thumbnail: thumbnail1,
        subject: '종료된 설문 제목',
        nickname: '닉네임',
        term: '2020.10.02 ~ 2020.10.30',
        total: '참여인원 101명',
    }
]

export const endQ = [
    { qst: '질문질문1'},
    { qst: '질문질문2'},
    { qst: '질문질문3'},
    { qst: '질문질문4'},
]

export const endA = [
    {asw: '10대'},
    {asw: '20대'},
    {asw: '30대'},
    {asw: '40대'},
    {asw: '기타'},
]


export const noticeListContent = [
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인1',
        regdate: '2020.10.08',
        hit: '101'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인2',
        regdate: '2020.10.08',
        hit: '98'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인3',
        regdate: '2020.10.08',
        hit: '123'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인4',
        regdate: '2020.10.08',
        hit: '50'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인5',
        regdate: '2020.10.08',
        hit: '78'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인6',
        regdate: '2020.10.08',
        hit: '45'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인7',
        regdate: '2020.10.08',
        hit: '34'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인8',
        regdate: '2020.10.08',
        hit: '66'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인9',
        regdate: '2020.10.08',
        hit: '81'
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인10',
        regdate: '2020.10.08',
        hit: '42'
    },
]

export const noticeDetail = {
    idx: 1,
    subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인1',
    regdate: '2020.10.08',
    hit: 100,
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
}


// mypage
export const mysurveyList = [
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인1',
        regdate: '2020.10.13',
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인2',
        regdate: '2020.10.13',
    },
]

export const takesurveyList = [
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인1',
        regdate: '2020.10.13',
    },
    {
        subject: '제목제목제목제목제목제목진행중인설문 종료된설문 공지사항마이페이지 로그아웃 로그인2',
        regdate: '2020.10.13',
    },
]