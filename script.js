document.addEventListener('DOMContentLoaded', function() {
    const packages = document.querySelectorAll('.package');
    const rating = document.querySelector('.rating');

    packages.forEach(packageElement => {
        packageElement.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                return; // 如果已经处于活动状态，则忽略点击
            }
            // 移除其他包的活动状态
            packages.forEach(pkg => pkg.classList.remove('active'));

            // 添加当前包的活动状态
            this.classList.add('active');

            // 显示评分组件
            setTimeout(() => {
                rating.classList.add('active');
            }, 1000); // 动画延迟以匹配移动动画
        });
    });

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 页面滚动时背景色渐变
    document.addEventListener('scroll', throttle(function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var height = window.innerHeight || document.documentElement.clientHeight;
        var fadePoint = height * 0.5;

        if (scrollTop > fadePoint) {
            var opacity = Math.min(1, (scrollTop - fadePoint) / (height * 0.5));
            document.body.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
        } else {
            document.body.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }
    }, 100));

    // 节流函数
    function throttle(fn, wait) {
        var time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        };
    }
});