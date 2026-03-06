document.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.hotspot');
    const sidebar = document.querySelector('.sidebar');
    const diagramWrapper = document.querySelector('.diagram-wrapper');
    const diagramPlaceholder = document.querySelector('.diagram-placeholder');
    const closeSidebarBtn = document.querySelector('.close-sidebar');
    
    const organNameHeading = document.querySelector('.sidebar-content h2');
    const placeholderContents = document.querySelectorAll('.info-section .content');

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
            organNameHeading.textContent = organ;
            placeholderContents.forEach(content => {
                const originalText = content.getAttribute('data-original') || content.textContent;
                if (!content.getAttribute('data-original')) {
                    content.setAttribute('data-original', originalText);
                }
                content.textContent = originalText.replace(/\[Organ Name\]/g, organ);
            });

            // 4. Open Sidebar
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
