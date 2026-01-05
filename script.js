document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
            document.querySelector('.main-container').classList.add('loaded');
            
            // Initialize particle network after preloader
            initParticleNetwork();
            
            // Random comet animation
            setInterval(createComet, 10000);
        }, 1000);
    }, 3000);
    
    // Sample PDF data (replace with your actual data)
    const pdfMaterials = [
        {
            title: "Análise real (Em construção)",
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/LimitDefinition.png/250px-LimitDefinition.png", description: "Introdução aos conceitos fundamentais Análise Real",
            pages: 6,
            year: 2025,
            downloadUrl: "materiais/realanalysis.pdf"
        }, {
            title: "Calor sensível e Latente (Em construção)",
            thumbnail: "https://conhecimentocientifico.r7.com/wp-content/uploads/2020/10/calor-latente-o-que-e-definicao-principais-tipos-caracteristicas-e-formula.png",
            description: "Estudos sobre Calor sensível e Latente",
            pages: 6,
            year: 2025,
            downloadUrl: "materiais/Calor_sensível_e_calor_latente.pdf"
        },
        {
            title: "Termodinâmica ",
            thumbnail: "https://vestibulares.estrategia.com/portal/wp-content/uploads/2022/01/Termodina%CC%82mica-Estrate%CC%81gia.jpeg         ",
            description: "Leis da termodinâmica e suas aplicações ",
            pages: 30,
            year: 2025,
            downloadUrl: "materiais/Termodinâmica.pdf"
        },
        {
            title: "Eletromagnetismo Clássico",
            thumbnail: "https://via.placeholder.com/300x400/0a0a1a/00f0ff?text=Eletromagnetismo",
            description: "Teoria de Maxwell e aplicações em circuitos elétricos",
            pages: 56,
            year: 2022,
            downloadUrl: "#"
        },
        {
            title: "Física de Partículas",
            thumbnail: "https://via.placeholder.com/300x400/0a0a1a/00f0ff?text=Partículas",
            description: "Modelo padrão e partículas elementares",
            pages: 72,
            year: 2023,
            downloadUrl: "#"
        },
        {
            title: "Óptica Moderna",
            thumbnail: "https://via.placeholder.com/300x400/0a0a1a/00f0ff?text=Óptica",
            description: "Fenômenos ópticos e aplicações tecnológicas",
            pages: 41,
            year: 2022,
            downloadUrl: "#"
        }
    ];

    // Sample video data (replace with your actual YouTube videos)
    const videoContent = [
        {
            title: "Introdução à Mecânica Quântica",
            thumbnail: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg",
            videoId: "dQw4w9WgXcQ",
            duration: "15:30"
        },
        {
            title: "Teoria da Relatividade Explicada",
            thumbnail: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg",
            videoId: "dQw4w9WgXcQ",
            duration: "22:15"
        },
        {
            title: "Termodinâmica para Iniciantes",
            thumbnail: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg",
            videoId: "dQw4w9WgXcQ",
            duration: "18:45"
        },
        {
            title: "O que é Eletromagnetismo?",
            thumbnail: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg",
            videoId: "dQw4w9WgXcQ",
            duration: "12:20"
        },
        {
            title: "Física de Partículas - Básico",
            thumbnail: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg",
            videoId: "dQw4w9WgXcQ",
            duration: "25:10"
        },
        {
            title: "Experimentos de Óptica",
            thumbnail: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg",
            videoId: "dQw4w9WgXcQ",
            duration: "14:05"
        }
    ];

    // Load PDF materials
    const pdfGrid = document.querySelector('.pdf-grid');
    pdfMaterials.forEach(pdf => {
        const pdfItem = document.createElement('div');
        pdfItem.className = 'pdf-item';
        pdfItem.innerHTML = `
            <div class="pdf-thumbnail">
                <img src="${pdf.thumbnail}" alt="${pdf.title}">
            </div>
            <div class="pdf-info">
                <h3 class="pdf-title">${pdf.title}</h3>
                <p>${pdf.description}</p>
                <div class="pdf-meta">
                    <span>${pdf.pages} páginas</span>
                    <span>${pdf.year}</span>
                </div>
                <a href="${pdf.downloadUrl}" class="pdf-download">DOWNLOAD PDF</a>
            </div>
        `;
        pdfGrid.appendChild(pdfItem);
    });

    // Load videos
    const videoPlaylist = document.querySelector('.video-playlist');
    const mainVideo = document.getElementById('mainVideo');
    
    // Set first video as default
    mainVideo.src = `https://www.youtube.com/embed/TQ9z6ARI7R8?autoplay=1&rel=0`;
    
    videoContent.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <span class="video-duration">${video.duration}</span>
            </div>
        `;
        
        videoItem.addEventListener('click', () => {
            mainVideo.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;
            
            // Update active state
            document.querySelectorAll('.video-item').forEach(item => {
                item.classList.remove('active');
            });
            videoItem.classList.add('active');
        });
        
        videoPlaylist.appendChild(videoItem);
    });

    // Button effects
    const buttons = document.querySelectorAll('.btn-holographic');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const x = e.pageX - button.getBoundingClientRect().left;
            const y = e.pageY - button.getBoundingClientRect().top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });

    // Navigation
    document.getElementById('exploreBtn').addEventListener('click', () => {
        document.getElementById('materials').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('videosBtn').addEventListener('click', () => {
        document.getElementById('videos').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    scrollReveal.reveal('.content-section', { interval: 200 });
    scrollReveal.reveal('.pdf-item', { interval: 100 });
    scrollReveal.reveal('.video-item', { interval: 100 });
    scrollReveal.reveal('.hologram-card', { interval: 150 });

    // Particle Network
    function initParticleNetwork() {
        const canvas = document.getElementById('particleNetwork');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const particleCount = Math.floor(window.innerWidth / 10);
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.1})`
            });
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw connections
                particles.forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / 100})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Random comet animation
    function createComet() {
        const comet = document.querySelector('.comet');
        if (!comet) return;
        
        // Random position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight / 2;
        
        comet.style.left = `${startX}px`;
        comet.style.top = `${startY}px`;
        
        // Random size
        const size = Math.random() * 4 + 2;
        comet.style.width = `${size}px`;
        comet.style.height = `${size}px`;
        
        // Trigger animation
        comet.style.animation = 'none';
        void comet.offsetWidth; // Trigger reflow
        comet.style.animation = 'comet-fly 30s linear infinite';
    }

    // Audio effects (optional)
    const audioElements = {
        hover: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-positive-interface-beep-257.mp3'),
        click: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-quick-jump-arcade-game-239.mp3')
    };
    
    // Set volume
    Object.values(audioElements).forEach(audio => {
        audio.volume = 0.3;
    });
    
    // Add audio to buttons
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            audioElements.hover.currentTime = 0;
            audioElements.hover.play();
        });
        
        button.addEventListener('click', () => {
            audioElements.click.currentTime = 0;
            audioElements.click.play();
        });
    });

    // Easter egg - Konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Konami code activated!
                document.body.classList.add('konami-effect');
                setTimeout(() => {
                    document.body.classList.remove('konami-effect');
                }, 5000);
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});