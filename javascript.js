// Animasi scroll ringan menggunakan Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Ambil semua elemen dengan class 'product'
const products = document.querySelectorAll('.product');
products.forEach(product => {
    observer.observe(product);
});