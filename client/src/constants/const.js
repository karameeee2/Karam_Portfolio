// landing images
import landing1 from '../assets/landing1.png';
import landing2 from '../assets/landing2.png';
import landing3 from '../assets/landing3.png';
import landing4 from '../assets/landing4.png';

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
    { imageSrc: landing1 },
    { imageSrc: landing2 },
    { imageSrc: landing3 },
    { imageSrc: landing4 },
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