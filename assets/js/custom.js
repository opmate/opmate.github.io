// Put your custom JS code here

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('opmateLogo');
    const lightLogo = 'images/Logo_b_394x72.png';
    const darkLogo = 'images/Logo_w_394x72.png';

    function updateLogo() {
        if (document.body.classList.contains('dark')) {
            logo.src = darkLogo;
        } else {
            logo.src = lightLogo;
        }
    }

    // 초기 로고 설정
    updateLogo();

    // 테마 전환 버튼 클릭 이벤트 리스너
    const modeToggle = document.getElementById('mode');
    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            // 로고 업데이트는 body 클래스 변경 후 실행
            setTimeout(updateLogo, 0);
        });
    }

    // body 클래스 변경 감지
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                updateLogo();
            }
        });
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
});
