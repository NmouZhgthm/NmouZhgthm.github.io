document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const modal = document.getElementById('download-modal');
    const downloadButtons = document.querySelectorAll('.download-button');
    const confirmDownloadButton = document.getElementById('confirm-download');
    const versionSelect = document.getElementById('version-select');
    let downloadLink = '';

    // 检查本地存储以确定当前模式
    if (localStorage.getItem('mode') === 'light-mode') {
        body.classList.add('light-mode');
    }

    // 切换模式
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('mode', 'light-mode');
        } else {
            localStorage.removeItem('mode');
        }
    });

    // 显示模态框
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            downloadLink = button.getAttribute('data-download');
            modal.classList.add('show');
            versionSelect.value = downloadLink; // 默认选择当前版本
        });
    });

    // 关闭模态框
    document.querySelector('.close').addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // 确认下载
    confirmDownloadButton.addEventListener('click', () => {
        window.location.href = versionSelect.value;
        modal.classList.remove('show');
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    });
});