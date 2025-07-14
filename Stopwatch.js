<title>Stopwatch</title>
Stopwatch
00:00:00
Start Pause Reset Lap
<script src="script.js"></script> /* style.css */ body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f0f0; display: flex; height: 100vh; justify-content: center; align-items: center; }
.container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); text-align: center; }

#display { font-size: 48px; margin-bottom: 20px; }

.buttons button { margin: 5px; padding: 10px 20px; font-size: 16px; cursor: pointer; }

#laps { margin-top: 20px; padding: 0; list-style: none; max-height: 150px; overflow-y: auto; } // script.js let startTime = 0; let elapsedTime = 0; let timerInterval; let running = false;

function timeToString(time) { let hrs = Math.floor(time / 3600000); let mins = Math.floor((time % 3600000) / 60000); let secs = Math.floor((time % 60000) / 1000); return ${pad(hrs)}:${pad(mins)}:${pad(secs)}; }

function pad(unit) { return unit < 10 ? '0' + unit : unit; }

function startStop() { if (!running) { startTime = Date.now() - elapsedTime; timerInterval = setInterval(() => { elapsedTime = Date.now() - startTime; document.getElementById("display").textContent = timeToString(elapsedTime); }, 1000); running = true; } }

function pause() { clearInterval(timerInterval); running = false; }

function reset() { clearInterval(timerInterval); document.getElementById("display").textContent = "00:00:00"; elapsedTime = 0; running = false; document.getElementById("laps").innerHTML = ""; }

function lap() { if (running) { const lapTime = timeToString(elapsedTime); const li = document.createElement("li"); li.textContent = Lap: ${lapTime}; document.getElementById("laps").appendChild(li); } 
