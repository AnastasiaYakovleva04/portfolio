function hint(selector, message, callback){
    const hintObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof callback === 'function')
                    callback()
                const hint = document.createElement('div');
                hint.className = 'system-hint smallest-text';
                hint.textContent = message;
                document.body.appendChild(hint);
                setTimeout(() => hint.remove(), 6000);
                hintObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const sectionForHint = document.querySelector(selector);
    if (sectionForHint) {
        hintObserver.observe(sectionForHint);
    }
}