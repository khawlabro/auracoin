// Enhanced JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize audio
    const ambientSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wind-in-the-trees-2401.mp3');
    ambientSound.loop = true;
    ambientSound.volume = 0.3;
    
    const audioControl = document.getElementById('audioControl');
    let audioPlaying = false;
    
    audioControl.addEventListener('click', function() {
        if (audioPlaying) {
            ambientSound.pause();
            this.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            ambientSound.play().catch(e => {
                console.log('Audio play failed:', e);
            });
            this.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        audioPlaying = !audioPlaying;
    });
    
    // Create magical particles
    function createParticles() {
        const particles = ['✨', '🔮', '🌟', '📜', '⚡', '🌙'];
        const colors = ['#ffcc00', '#ff9900', '#ffffff', '#c8a971', '#a52a2a'];
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            
            document.body.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                particle.remove();
            }, 20000);
        }, 800);
    }
    
    createParticles();
    
    // Page navigation
    const navDots = document.querySelectorAll('.nav-dot');
    const pageContent = document.querySelector('.page-content');
    
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            navDots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            dot.classList.add('active');
            
            // Simulate page turn
            const book = document.querySelector('.book');
            book.style.transform = 'rotateY(15deg)';
            
            // Change content after animation
            setTimeout(() => {
                pageContent.classList.remove('active');
                
                // Update content based on page
                switch(index) {
                    case 0:
                        pageContent.querySelector('h1').textContent = 'The Chronicle of Aura';
                        break;
                    case 1:
                        pageContent.querySelector('h1').textContent = 'The Prophecy';
                        break;
                    case 2:
                        pageContent.querySelector('h1').textContent = 'The Relics';
                        break;
                }
                
                // Reset animation
                setTimeout(() => {
                    book.style.transform = 'rotateY(0deg)';
                    pageContent.classList.add('active');
                }, 300);
            }, 500);
        });
    });
    
    // Wax seal button effect
    const enterBtn = document.getElementById('enterBtn');
    
    enterBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px rgba(165, 42, 42, 0.8)';
        
        // Create cracking effect
        const cracks = document.createElement('div');
        cracks.style.position = 'absolute';
        cracks.style.top = '0';
        cracks.style.left = '0';
        cracks.style.width = '100%';
        cracks.style.height = '100%';
        cracks.style.backgroundImage = 'radial-gradient(circle, transparent 20%, rgba(165, 42, 42, 0.8) 25%)';
        cracks.style.backgroundSize = '10px 10px';
        cracks.style.borderRadius = '50px';
        cracks.style.opacity = '0';
        cracks.style.transition = 'opacity 0.3s ease';
        
        this.appendChild(cracks);
        
        setTimeout(() => {
            cracks.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            cracks.remove();
        }, 1000);
    });
    
    enterBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 15px rgba(165, 42, 42, 0.5)';
    });
    
    // Scroll effect for page
    let lastScrollY = window.scrollY;
    const page = document.querySelector('.page');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = scrollY;
        
        // Add subtle transform on scroll to simulate page movement
        if (scrollDirection === 'down') {
            page.style.transform = 'perspective(1000px) rotateX(2deg) translateZ(10px)';
        } else {
            page.style.transform = 'perspective(1000px) rotateX(-2deg) translateZ(10px)';
        }
        
        // Reset after a short time
        setTimeout(() => {
            page.style.transform = 'perspective(1000px) rotateX(0deg) translateZ(0)';
        }, 200);
    });
    
    // Project hover effect
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateY(5deg)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });
    
    // Prophecy button effect
    const prophecyBtn = document.getElementById('prophecyBtn');
    
    prophecyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a modal with the full prophecy
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        modalContent.innerHTML = `
            <h2 style="color: #5c3e1d; margin-top: 0;">The Full Prophecy</h2>
            <p>In the age of convergence, when the old world's strength merges with the new world's conscience, 
            a fellowship shall emerge from the fires of transformation. They shall be artisans of destiny, 
            wielding technology as their instrument and belief as their currency.</p>
            <p>Their duty shall be to the earth, their vision to harmonize the realms of nature and innovation. 
            Through their relics, they shall protect the vulnerable, nurture the land, and empower the human spirit.</p>
            <p>Those who join this covenant shall shape reality itself, their voices echoing through the annals of time, 
            their actions forging a legacy that will illuminate the path for generations to come.</p>
            <button class="modal-close">×</button>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
        
        // Close modal
        const closeBtn = modalContent.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.9)';
            setTimeout(() => {
                modal.remove();
            }, 500);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0';
                modalContent.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        });
    });
    
    // Parallax effect for background
    window.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        const book = document.querySelector('.book');
        book.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});