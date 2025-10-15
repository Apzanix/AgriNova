 // Hamburger mobile menu
        const hamburger = document.getElementById('hamburger');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const mobileLinks = document.getElementById('mobileLinks');
        const closeMobile = document.getElementById('closeMobile');

        hamburger.addEventListener('click', () => {
            mobileOverlay.classList.add('open');
            mobileLinks.classList.add('open');
            hamburger.setAttribute('aria-expanded', 'true');
        });
        closeMobile.addEventListener('click', () => {
            mobileOverlay.classList.remove('open');
            mobileLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
        // Close mobile menu when clicking any link
        const mobileNavLinks = mobileLinks.querySelectorAll('a');

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileOverlay.classList.remove('open');
                mobileLinks.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Tab functionality
        const tabs = document.querySelectorAll('.services-tabs button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false') });
                tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
                const target = tab.dataset.tab;
                tabContents.forEach(c => {
                    if (c.id === target) { c.classList.add('active') } else { c.classList.remove('active') }
                });
            });
        });

        // Hero slides auto fade
        const slides = document.querySelectorAll('.slide');
        let cur = 0;
        setInterval(() => {
            slides[cur].dataset.active = "false";
            slides[cur].setAttribute('aria-hidden', 'true');
            cur = (cur + 1) % slides.length;
            slides[cur].dataset.active = "true";
            slides[cur].setAttribute('aria-hidden', 'false');
        }, 5000);

        // Floating chat toggle
        const chatBtn = document.getElementById('chatBtn');
        const chatWidget = document.getElementById('chatWidget');
        chatBtn.addEventListener('click', () => chatWidget.classList.toggle('open'));

        // Back to top
        const backTop = document.getElementById('backTop');
        backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // Chat send
        const chatInput = document.getElementById('chatInput');
        const chatBody = document.getElementById('chatBody');
        const sendBtn = document.getElementById('sendBtn');
        sendBtn.addEventListener('click', () => {
            const val = chatInput.value.trim();
            if (val) {
                const userMsg = document.createElement('div'); userMsg.className = 'msg user'; userMsg.textContent = val;
                chatBody.appendChild(userMsg);
                chatInput.value = '';
                chatBody.scrollTop = chatBody.scrollHeight;
                setTimeout(() => {
                    const botMsg = document.createElement('div'); botMsg.className = 'msg bot';
                    botMsg.textContent = "Thanks for your message! We'll get back to you shortly.";
                    chatBody.appendChild(botMsg);
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 800);
            }
        });
        const closeChat = document.getElementById('closeChat');

        closeChat.addEventListener('click', () => {
            chatWidget.classList.remove('open');
        });