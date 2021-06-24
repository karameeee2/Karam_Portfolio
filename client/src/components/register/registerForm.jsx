import Axios from 'axios';
import React, { useState } from 'react';
import { API_LIST } from '../../constants/api';
import { emailRegex } from '../../constants/const';
import RegisterForm from '../../pages/register/registerForm';

const RegisterFormComponent = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');

    const [isOverlap, setIsOverlap] = useState(false); // 아이디 중복
    const [errorText, setErrorText] = useState('');

    const idCheck = (e) => {
        e.preventDefault();
        if (!id) {
            return alert('아이디를 입력해주세요.');
        }
        // email 정규식 검사
        if (!emailRegex.test(id)) {
            return alert('아이디는 이메일 형식으로 입력해주십시오.')
        }
        
        // 4. 중복체크
        let url = API_LIST.REGISTER_ID_CHECK;
        Axios.post(url, { 
            id: id 
        })
        .then(res => {
            if(res.status === 200) {
                setIsOverlap(false);
                setErrorText('사용 가능한 아이디입니다.');
            } 
        })
        .catch(err => {
            if(err.response.status === 409){
                setIsOverlap(true);
                setErrorText('중복된 이메일입니다.');
            }
        })
    }

    const registerSubmit = () => {
        // 1. null 체크
        if (!id) {
            return alert('아이디를 입력해주세요.');
        }
        if (!password) {
            return alert('비밀번호를 입력해주세요.');
        }
        if (!name) {
            return alert('이름을 입력해주세요.');
        }
        if (!nickName) {
            return alert('닉네임을 입력해주세요.');
        }
        if (!gender) {
            return alert('성별을 입력해주세요.');
        }
        if (!birth) {
            return alert('생년월일을 입력해주세요.');
        }

        // 2. 비밀번호 비밀번호 확인 일치
        if (password !== document.getElementById('passwordConfirm').value) {
            return alert('비밀번호가 일치하지 않습니다.');
        }

        // 3. 형식체크
        // email 정규식 검사
        if (!emailRegex.test(id)) {
            return alert('아이디는 이메일 형식으로 입력해주십시오.')
        }
        if (isOverlap) {
            return alert('중복된 아이디입니다.');
        }

        let url = API_LIST.REGISTER;
        Axios.post(url, {
            id: id,
            password: password,
            name: name,
            nickName: nickName,
            gender: gender,
            birth: birth
        })
        .then(res => {
            // console.log('register success', res);
            window.location.href='/login';
        })
        .catch(err => {
            console.log('register error', err, err.res);
        })
    }

    return (
        <section className="registerFormSection">
            <RegisterForm onSubmit={registerSubmit} idCheck={idCheck} isOverlap={isOverlap} errorText={errorText}
            setId={setId} setPassword={setPassword} setName={setName} setNickName={setNickName} setGender={setGender} setBirth={setBirth} />
        </section>
    );
}

export default RegisterFormComponent;