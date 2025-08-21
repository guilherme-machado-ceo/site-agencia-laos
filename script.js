// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todas as funcionalidades
    initLoader();
    initScrollAnimations();
    initNavbarEffects();
    initParticleSystem();
    initTypingEffect();
    initFormValidation();
    initSmoothScrolling();
    initCounterAnimation();
    initFloatingElements();
});

// Sistema de Loading
function initLoader() {
    const loader = document.createElement('div');
    loader.className = 'loading';
    loader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loader);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Animações de Scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Adiciona classe fade-in aos elementos
    const animatedElements = document.querySelectorAll('.neon-card, .service-card, .team-card, .about-content, .hero-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Efeitos da Navbar
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Destaque do link ativo
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Sistema de Partículas
function initParticleSystem() {
    const heroSection = document.querySelector('.hero-section');
    const particlesContainer = document.querySelector('.floating-particles');
    
    // Cria partículas dinâmicas
    for (let i = 0; i < 20; i++) {
        createParticle(particlesContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = getRandomNeonColor();
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = `0 0 10px ${getRandomNeonColor()}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        
        container.appendChild(particle);
        
        animateParticle(particle);
    }
    
    function animateParticle(particle) {
        const duration = Math.random() * 10000 + 5000;
        const startX = parseFloat(particle.style.left);
        const startY = parseFloat(particle.style.top);
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        
        particle.animate([
            { transform: `translate(0, 0)`, opacity: particle.style.opacity },
            { transform: `translate(${endX - startX}vw, ${endY - startY}vh)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-in-out'
        }).onfinish = () => {
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.8 + 0.2;
            animateParticle(particle);
        };
    }
    
    function getRandomNeonColor() {
        const colors = ['#00ffff', '#8a2be2', '#ff1493', '#39ff14'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// Efeito de Digitação
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;
    
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Adiciona cursor piscante
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            heroSubtitle.appendChild(cursor);
        }
    };
    
    // Inicia o efeito após um delay
    setTimeout(typeWriter, 2000);
    
    // Adiciona animação de piscar para o cursor
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Validação do Formulário
function initFormValidation() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff1493';
                input.style.boxShadow = '0 0 10px rgba(255, 20, 147, 0.3)';
            } else {
                input.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                input.style.boxShadow = 'none';
            }
        });
        
        if (isValid) {
            showSuccessMessage();
            form.reset();
        } else {
            showErrorMessage();
        }
    });
    
    function showSuccessMessage() {
        const message = createMessage('Mensagem enviada com sucesso!', '#39ff14');
        form.appendChild(message);
    }
    
    function showErrorMessage() {
        const message = createMessage('Por favor, preencha todos os campos.', '#ff1493');
        form.appendChild(message);
    }
    
    function createMessage(text, color) {
        const message = document.createElement('div');
        message.textContent = text;
        message.style.cssText = `
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: ${color};
            padding: 10px 20px;
            border-radius: 5px;
            border: 1px solid ${color};
            box-shadow: 0 0 15px ${color};
            z-index: 1000;
            animation: slideDown 0.3s ease;
        `;
        
        setTimeout(() => {
            message.remove();
        }, 3000);
        
        return message;
    }
}

// Scroll Suave
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animação de Contador
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    }
}

// Elementos Flutuantes Interativos
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Efeitos de Hover nos Cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.neon-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 255, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.neon-grid');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Efeito de Glitch no Título
function initGlitchEffect() {
    const title = document.querySelector('.hero-title .brand-highlight');
    if (!title) return;
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            title.style.textShadow = `
                2px 0 #ff1493,
                -2px 0 #00ffff,
                0 0 20px #8a2be2
            `;
            
            setTimeout(() => {
                title.style.textShadow = '';
            }, 100);
        }
    }, 100);
}

// Inicializa efeito de glitch
setTimeout(initGlitchEffect, 3000);

// Responsividade para dispositivos móveis
function handleMobileInteractions() {
    if (window.innerWidth <= 768) {
        // Reduz animações em dispositivos móveis para melhor performance
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.5s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

window.addEventListener('resize', handleMobileInteractions);
handleMobileInteractions();

// Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    const body = document.body;
    body.style.animation = 'rainbow 2s infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        body.style.animation = '';
        style.remove();
    }, 5000);
    
    // Mostra mensagem especial
    const message = document.createElement('div');
    message.textContent = '🎉 Você encontrou o Easter Egg da Agência Laos! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #00ffff;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #00ffff;
        box-shadow: 0 0 30px #00ffff;
        z-index: 10000;
        text-align: center;
        font-size: 1.2rem;
        animation: pulse 1s infinite;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}