document.addEventListener("DOMContentLoaded", function () {
  // URL에서 해시 값 읽기
  const hash = window.location.hash.substring(1); // e.g., "Windows"

  if (hash) {
    // 해시 값과 일치하는 탭 버튼 찾기
    const tabButton = document.querySelector(`button[data-toggle-tab="${hash.toLowerCase()}"]`);
    const tabPane = document.querySelector(`div[data-pane="${hash.toLowerCase()}"]`);

    if (tabButton && tabPane) {
      // 모든 활성 상태 초기화
      document.querySelectorAll('.nav-link.active').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-pane.show').forEach(el => el.classList.remove('show', 'active'));

      // 선택된 탭 활성화
      tabButton.classList.add('active');
      tabPane.classList.add('show', 'active');
    }
  }

  // 탭 클릭 시 URL 해시 값 업데이트
  document.querySelectorAll('button[data-toggle-tab]').forEach(button => {
    button.addEventListener('click', function () {
      const tabName = this.getAttribute('data-toggle-tab');
      window.history.replaceState(null, null, `#${tabName}`);
    });
  });
});
