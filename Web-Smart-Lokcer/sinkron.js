let isScanning = false;
        let scanTimeout;

        const rfidReader = document.getElementById('rfidReader');
        const statusText = document.getElementById('statusText');
        const cardInfo = document.getElementById('cardInfo');
        const scanBtn = document.getElementById('scanBtn');
        const resetBtn = document.getElementById('resetBtn');
        const logDiv = document.getElementById('log');

        // Simulasi deteksi kartu saat tekan Enter
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && isScanning) {
                simulateCardDetection();
            }
        });

        function startScanning() {
            isScanning = true;
            rfidReader.classList.add('active');
            statusText.textContent = '🔍 Menunggu kartu RFID...';
            scanBtn.disabled = true;
            scanBtn.textContent = 'Scanning...';
            
            addLog('INFO: RFID reader aktif');
            addLog('INFO: Menunggu kartu...');

            // Auto-detect setelah 2 detik untuk demo
            scanTimeout = setTimeout(() => {
                simulateCardDetection();
            }, 2000);
        }

        function simulateCardDetection() {
            if (!isScanning) return;

            // Generate random UID
            const uid = generateUID();
            const cardTypes = ['Member', 'Access', 'Visitor', 'Employee'];
            const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            
            rfidReader.classList.remove('active');
            rfidReader.classList.add('detected');
            statusText.textContent = '✓ Kartu Terdeteksi!';
            
            // Tampilkan info kartu
            document.getElementById('cardUid').textContent = uid;
            document.getElementById('cardType').textContent = randomType;
            document.getElementById('cardStatus').textContent = 'Aktif';
            document.getElementById('detectionTime').textContent = new Date().toLocaleString('id-ID');
            
            cardInfo.classList.add('show');
            logDiv.classList.add('show');
            
            addLog('SUCCESS: Kartu terdeteksi!');
            addLog(`DATA: UID = ${uid}`);
            addLog(`DATA: Type = ${randomType}`);
            addLog('INFO: Sinkronisasi berhasil');
            
            scanBtn.style.display = 'none';
            resetBtn.style.display = 'inline-block';
            
            isScanning = false;

            // Kirim data ke server (simulasi)
            sendToServer(uid, randomType);
        }

        function generateUID() {
            const hex = '0123456789ABCDEF';
            let uid = '';
            for (let i = 0; i < 8; i++) {
                uid += hex[Math.floor(Math.random() * 16)];
                if (i % 2 === 1 && i < 7) uid += ':';
            }
            return uid;
        }

        function sendToServer(uid, type) {
            addLog('INFO: Mengirim data ke server...');
            
            // Simulasi AJAX request
            setTimeout(() => {
                addLog('SUCCESS: Data tersimpan di server');
            }, 500);

            // Contoh: Uncomment untuk request asli
            /*
            fetch('api/sync-card.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uid: uid,
                    type: type,
                    timestamp: new Date().toISOString()
                })
            })
            .then(response => response.json())
            .then(data => {
                addLog('SUCCESS: ' + data.message);
            })
            .catch(error => {
                addLog('ERROR: ' + error.message);
            });
            */
        }

        function resetReader() {
            clearTimeout(scanTimeout);
            isScanning = false;
            
            rfidReader.classList.remove('active', 'detected');
            statusText.textContent = 'Tap kartu RFID Anda di sini';
            cardInfo.classList.remove('show');
            
            scanBtn.disabled = false;
            scanBtn.textContent = 'Mulai Scan';
            scanBtn.style.display = 'inline-block';
            resetBtn.style.display = 'none';
            
            logDiv.innerHTML = '';
            logDiv.classList.remove('show');
            
            addLog('INFO: Reader direset');
        }

        function addLog(message) {
            const timestamp = new Date().toLocaleTimeString('id-ID');
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            logEntry.textContent = `[${timestamp}] ${message}`;
            logDiv.appendChild(logEntry);
            logDiv.scrollTop = logDiv.scrollHeight;
            logDiv.classList.add('show');
        }