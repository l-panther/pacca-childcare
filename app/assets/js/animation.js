  document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll("#statistics dt");

    function animateValue(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1000;

        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;

            const progress = Math.min((timestamp - start) / duration, 1);
            const value = Math.floor(progress * target);

            el.textContent = value.toLocaleString() + suffix;
            el.setAttribute("aria-valuenow", value);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target.toLocaleString() + suffix;
                el.setAttribute("aria-valuenow", target);
            }
        }

        requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    stats.forEach(stat => {
        stat.setAttribute("role", "meter");
        stat.setAttribute("aria-valuemin", "0");
        stat.setAttribute("aria-valuemax", stat.dataset.target);
        stat.setAttribute("aria-valuenow", "0");

        observer.observe(stat);
    });
});