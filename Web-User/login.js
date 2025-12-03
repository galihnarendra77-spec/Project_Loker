function updateStats() {
            const lockers = document.querySelectorAll('.locker-box');
            const occupied = document.querySelectorAll('.locker-box.occupied').length;
            const available = lockers.length - occupied;
            
            document.getElementById('availableCount').textContent = available;
            document.getElementById('occupiedCount').textContent = occupied;
        }

        function toggleLocker(element) {
            element.classList.toggle('occupied');
            const statusText = element.querySelector('.locker-status');
            
            if (element.classList.contains('occupied')) {
                statusText.textContent = 'Terisi';
            } else {
                statusText.textContent = 'Tersedia';
            }
            
            updateStats();
        }

        const threeDotsMenu = document.getElementById('threeDotsMenu');
        const sidebarPopup = document.getElementById('sidebarPopup');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const sidebarClose = document.getElementById('sidebarClose');

        threeDotsMenu.addEventListener('click', () => {
            sidebarPopup.classList.add('active');
            sidebarOverlay.classList.add('active');
        });

        sidebarClose.addEventListener('click', () => {
            sidebarPopup.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebarPopup.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });

        document.querySelectorAll('.sidebar-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                sidebarPopup.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });
        });

        const menuOpenButton = document.getElementById('menu-open-button');
        const menuCloseButton = document.getElementById('menu-close-button');
        
        if (menuOpenButton) {
            menuOpenButton.addEventListener('click', () => {
                document.body.classList.add('show-mobile-menu');
            });
        }
        
        if (menuCloseButton) {
            menuCloseButton.addEventListener('click', () => {
                document.body.classList.remove('show-mobile-menu');
            });
        }

        document.querySelectorAll('.ul-navbar a').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('show-mobile-menu');
            });
        });

        updateStats();