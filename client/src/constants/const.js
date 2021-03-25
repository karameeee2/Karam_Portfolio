// landing images
import landing_1 from '../assets/landing_1.jpg';
import landing_2 from '../assets/landing_2.jpg';
import landing_3 from '../assets/landing_3.jpg';
import landing_4 from '../assets/landing_4.jpg';

// common
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

// 이메일정규식
// eslint-disable-next-line
export const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/