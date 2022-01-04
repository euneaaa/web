let loginForm = document.getElementById('loginform');

if(loginForm) {
    let uid = document.getElementById('uid');
    let upw = document.getElementById('upw');
    let loginBtn = document.getElementById('login');

    loginBtn.addEventListener('click', (e) => {
        if(uid.value === '' || upw.value === '') {
            e.preventDefault();
            alert('로그인을 할 수 없습니다.');
        } else {
            location.href = 'main.html';
        }
    });
}

let joinForm = document.getElementById('joinFrm');

if(joinForm) {
    let prevBack = document.getElementById('goback');
    let uid = document.getElementById('uid');
    let upw1 = document.getElementById('upw1');
    let upw2 = document.getElementById('upw2');
    let joinBtn = document.getElementById('join');

    prevBack.addEventListener('click', () => {
        window.history.back();
    });

    joinBtn.addEventListener('click', (e) => {
        if(uid.value === '' || upw1.value === '' || upw2.value === '') {
            e.preventDefault();
            alert('회원가입을 할 수 없습니다.');
        } else if(upw1.value !== upw2.value) {
            e.preventDefault();
            alert('비밀번호를 확인해 주세요.');
        } else {
            location.href = 'main.html';
        }
    });
}
