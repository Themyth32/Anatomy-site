document.addEventListener('DOMContentLoaded', () => {
    const organData = {
      "Nose and Nasal Cavity": {
        location: "The nose sits in the center of your face, and the nasal cavity is the hollow space directly behind it, running from your nostrils to the back of your throat.",
        function: "Filters, warms, and moistens incoming air before it travels deeper into the airway.",
        description: "Your nose is the main entrance for air. As air passes through, tiny hairs called cilia and a layer of mucus trap dust, bacteria, and other particles before they can reach your lungs. The nasal cavity also warms and moistens the air so it's less harsh on the delicate tissues further down your airway.",
        funFact: "Your nose can detect over 1 trillion different smells — but it also has a 'rest cycle,' where one nostril does most of the work while the other rests, switching every few hours. You probably never noticed.",
        ailments: "Rhinitis — inflammation of the nasal lining, causing a runny or stuffy nose.\nSinusitis — infection of the sinuses causing facial pressure and congestion.\nNasal polyps — soft growths inside the nasal cavity that can block airflow."
      },
      "Pharynx": {
        location: "The pharynx is the muscular tube at the back of your mouth and nose, running from behind the nasal cavity down to the larynx and esophagus. It's roughly 5 inches long.",
        function: "Acts as a shared passageway for both air (heading to the lungs) and food/drink (heading to the stomach).",
        description: "The pharynx is divided into three sections — the nasopharynx, oropharynx, and laryngopharynx. Because both air and food pass through it, the body has to carefully route each one to the right destination. This is why choking happens when something accidentally enters the airway.",
        funFact: "The pharynx acts as a resonance chamber that shapes the quality of your voice — which is why your voice sounds different when you're congested and your throat is swollen.",
        ailments: "Pharyngitis (sore throat) — inflammation usually caused by viral or bacterial infection.\nStrep throat — bacterial infection causing severe throat pain and fever.\nSleep apnea — throat muscles relax too much during sleep, interrupting breathing."
      },
      "Larynx": {
        location: "The larynx sits at the top of the trachea, in the front of your neck. It's what you feel as your Adam's apple.",
        function: "Protects the airway from food and liquid entering, and produces sound (voice).",
        description: "The larynx has two main jobs. First, it acts as a gatekeeper — a small flap called the epiglottis folds down over the opening whenever you swallow, blocking food and liquid from entering your lungs. Second, it contains your vocal cords, two bands of tissue that vibrate as air passes over them to produce sound.",
        funFact: "During puberty, the larynx can grow up to 60% larger — especially in males — making the vocal cords longer and producing a lower pitch. This is why voices crack and deepen.",
        ailments: "Laryngitis — inflammation of the larynx causing a hoarse or lost voice.\nEpiglottitis — dangerous swelling of the epiglottis that can narrow the airway. A medical emergency.\nVocal cord nodules — callus-like growths from repeated strain, common in singers and teachers."
      },
      "Trachea": {
        location: "The trachea runs from the base of the larynx down through the neck and into the chest, where it splits into two bronchi. It sits in front of the esophagus.",
        function: "Carries air from the throat down to the lungs.",
        description: "The trachea is a tube about 4–5 inches long lined with cilia and mucus that trap particles. It's reinforced with C-shaped rings of cartilage — you can feel them on the front of your neck — which keep the tube open so it doesn't collapse when you inhale.",
        funFact: "The cilia lining your trachea beat up to 1,000 times per minute, sweeping mucus and debris upward toward your throat in a process called the 'mucociliary escalator.'",
        ailments: "Tracheitis — bacterial infection causing a severe barking cough and breathing difficulty.\nTracheomalacia — cartilage rings too soft, causing the trachea to partially collapse during breathing.\nTracheal stenosis — narrowing of the trachea restricting airflow, often from injury."
      },
      "Lungs": {
        location: "The two lungs sit inside the chest, one on each side of the heart. The right lung has three lobes; the left has two, leaving room for the heart.",
        function: "The primary organs of the respiratory system — they absorb oxygen from inhaled air and release carbon dioxide to be exhaled.",
        description: "Your lungs are large, spongy organs filled with hundreds of millions of tiny air sacs, branching tubes, and blood vessels. Inside, bronchi branch into bronchioles which end in clusters of alveoli — microscopic sacs where oxygen passes into the blood and carbon dioxide is removed. Each lung is surrounded by a membrane called the pleura which reduces friction as the lungs expand and contract.",
        funFact: "If you could unfold and flatten all the internal surfaces of both lungs, the total area would be roughly the size of a tennis court — around 70 square meters — all packed inside your chest.",
        ailments: "Pneumonia — infection that inflames the air sacs, which can fill with fluid.\nAsthma — bronchioles become inflamed and narrow, making breathing difficult.\nEmphysema — alveoli walls break down, drastically reducing surface area for gas exchange."
      },
      "Bronchi": {
        location: "The bronchi begin where the trachea splits in the chest — one entering each lung — then branch into smaller bronchioles throughout the lung.",
        function: "Transport air from the trachea deep into the lungs, distributing it to every region so gas exchange can occur.",
        description: "The two main bronchi are large tubes reinforced with cartilage. Once inside the lungs, they branch repeatedly into smaller bronchioles — like an upside-down tree — eventually ending in clusters of alveoli. The smallest bronchioles have no cartilage at all. The entire network is called the bronchial tree.",
        funFact: "If you stretched out all the airways in your lungs end to end — from the bronchi down to the tiniest bronchioles — they would span roughly 1,500 miles.",
        ailments: "Bronchitis — inflammation of the bronchi lining causing a persistent cough. Can be acute or chronic.\nBronchiectasis — permanent widening and scarring of the bronchi, leading to mucus buildup.\nAsthma — the bronchioles narrow and inflame, making breathing difficult."
      },
      "Diaphragm": {
        location: "The diaphragm is a large, dome-shaped muscle sitting directly beneath the lungs, separating the chest cavity from the abdominal cavity.",
        function: "The primary muscle of breathing — its contractions and relaxations drive the inhale and exhale cycle.",
        description: "When you inhale, the diaphragm contracts and flattens downward, expanding the chest cavity and pulling air into the lungs. When you exhale, it relaxes back into its dome shape, pushing air out. This happens automatically thousands of times per day, though you can also control it voluntarily.",
        funFact: "Hiccups are caused by sudden involuntary spasms of the diaphragm. The 'hic' sound is your vocal cords snapping shut in response. Despite being incredibly common, scientists still don't fully agree on why hiccups exist.",
        ailments: "Hiccups — involuntary spasms, usually harmless but persistent hiccups over 48 hours can signal a condition.\nDiaphragmatic hernia — a hole in the diaphragm allows abdominal organs to push into the chest.\nDiaphragm paralysis — caused by phrenic nerve damage, reducing breathing capacity."
      }
    };

    const hotspots = document.querySelectorAll('.hotspot');
    const sidebar = document.querySelector('.sidebar');
    const diagramWrapper = document.querySelector('.diagram-wrapper');
    const diagramPlaceholder = document.querySelector('.diagram-placeholder');
    const closeSidebarBtn = document.querySelector('.close-sidebar');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const organ = hotspot.getAttribute('data-organ');
            const top = hotspot.style.top;
            const left = hotspot.style.left;

            // 1. Update active state
            hotspots.forEach(h => h.classList.remove('active'));
            hotspot.classList.add('active');

            // 2. Animate Zoom
            diagramPlaceholder.style.transformOrigin = `${left} ${top}`;
            diagramPlaceholder.style.transform = 'scale(1.8)';

            // 3. Update Sidebar Content
            const data = organData[organ] || {};

            document.querySelector('.sidebar-content h2').textContent = organ;

            const sections = document.querySelectorAll('.info-section .content');
            const keys = ['location', 'function', 'description', 'ailments'];
            sections.forEach((el, i) => {
              el.textContent = data[keys[i]] || '—';
              el.style.whiteSpace = keys[i] === 'ailments' ? 'pre-line' : 'normal';
            });

            // 4. Update Did You Know
            const didYouKnowText = document.getElementById('did-you-know-text');
            if (didYouKnowText) {
                didYouKnowText.textContent = data.funFact || '—';
            }

            // 5. Open Sidebar
            sidebar.classList.add('open');
            diagramWrapper.style.width = 'calc(100% - 420px)';
        });
    });

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
            diagramPlaceholder.style.transform = 'scale(1)';
            diagramWrapper.style.width = '';
            hotspots.forEach(h => h.classList.remove('active'));
        });
    }
});
