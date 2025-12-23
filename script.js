/* ===== LANGUAGE SYSTEM ===== */

let currentLang = "en"; // en ⟷ kr

const i18n = {
  en: {
    // Header / global
    title: "Production Dashboard",

    // Home sections
    work_forecast: "Work Forecast",
    ct: "CT",
    remaining_prod: "Remaining Production",
    est_complete: "Estimated Completion Time",

    prod_status: "Production Status",
    target: "Target",
    actual: "Actual",

    equipment_status: "Equipment Status",
    avail_rate: "Availability Rate",
    fault_count: "Fault Count",
    avg_fault: "Avg Fault Time",

    worker_status: "Worker Status",
    group1: "Shift 1",
    group2: "Shift 2",
    attendance: "Attendance",

    line_status: "Line Status",
    quality_status: "Quality Status",
    defect_rate: "Defect Rate",
    rework_rate: "Rework Rate",
    inspection_pass: "Inspection Pass Rate",

    details: "Details",

    // Line tiles + dynamic texts
    alerts: "Alerts",
    speed: "Speed",
    last: "Last",
    status_running: "Running",
    status_stopped: "Stopped",
    line_prefix: "Line ",

    // Line view header
    back: "← Back",
    company_name: "Daemyung Steel",
    elapse_time: "Elapse Time",
    metrics: "Metrics",
    charts: "Charts",

    // Process tabs
    uncoiling: "Uncoiling",
    accumulator: "Accumulator",
    forming: "Forming",
    welding: "Welding",
    cutting: "Cutting",
    pipeendcut: "Pipe-End Cut",
    packaging: "Packaging",

    // Section headers
    sec_uncoiling: "Uncoiling",
    sec_welding: "Welding",
    sec_accumulator: "Accumulator",
    sec_forming: "Forming",
    sec_sizing: "Sizing Straightening",
    sec_cutting: "Cutting",
    sec_packaging: "Packaging",

    // Metric labels - Uncoiling
    line_speed: "Line speed",
    tension: "Tension",
    coil_thickness: "Coil thickness",
    coil_width: "Coil width",
    brake: "Brake",
    motor: "Motor",

    // Metric labels - Welding
    weld_current: "Weld current",
    weld_voltage: "Weld voltage",
    weld_temp: "Weld temp",
    weld_freq: "Frequency kHz",
    weld_cool: "Cooling Water Temp",
    weld_def: "Defect Rate",

    // Metric labels - Accumulator
    acc_turns: "Stored turns",
    acc_current: "Motor current",
    acc_mode: "Mode",
    acc_estop: "Emergency Stop",

    // Metric labels - Forming
    form_flat: "Flatness",
    form_current: "Motor current",
    form_voltage: "Motor voltage",
    form_align: "Alignment dev",
    form_status: "Status",

    // Metric labels - Sizing
    sz_roll: "Roll speed",
    sz_power: "Motor power",
    sz_od: "Outer diameter",
    sz_round: "Roundness",

    // Metric labels - Cutting
    cut_rpm: "Blade rpm",
    cut_lset: "Length set",
    cut_lact: "Length actual",
    cut_lerr: "Length error",
    cut_press: "Hydraulic pressure",
    cut_mode: "Mode",

    // Metric labels - Packaging
    pack_bundle: "Bundle count",
    pack_shape: "Pipe shape",
    pack_fault: "Pump fault",

    // Alarm panel
    alarms: "Alarms",
    active_only: "Active only",
    all: "All",
    last_50: "(last 50)",

    // Metric overlay
    metric_detail: "Metric detail",
    close: "✕ Close",

    // Small states
    on: "ON",
    off: "OFF",
    ok: "OK",
    err: "ERR",
    auto: "AUTO"
  },

  kr: {
    // Header / global
    title: "생산 대시보드",

    // Home sections
    work_forecast: "작업 예측",
    ct: "사이클 타임",
    remaining_prod: "잔여 생산량",
    est_complete: "예상 완료 시간",

    prod_status: "생산 상태",
    target: "목표",
    actual: "실적",

    equipment_status: "설비 상태",
    avail_rate: "가동률",
    fault_count: "고장 횟수",
    avg_fault: "평균 고장 시간",

    worker_status: "근로자 현황",
    group1: "1조",
    group2: "2조",
    attendance: "출근율",

    line_status: "라인 상태",
    quality_status: "품질 상태",
    defect_rate: "불량률",
    rework_rate: "재작업률",
    inspection_pass: "검사 합격률",

    details: "자세히",

    // Line tiles + dynamic texts
    alerts: "알람 수",
    speed: "속도",
    last: "최근 수신",
    status_running: "가동",
    status_stopped: "정지",
    line_prefix: "라인 ",

    // Line view header
    back: "← 뒤로",
    company_name: "대명철강",
    elapse_time: "경과 시간",
    metrics: "메트릭",
    charts: "차트",

    // Process tabs
    uncoiling: "언코일링",
    accumulator: "어큐뮬레이터",
    forming: "성형",
    welding: "용접",
    cutting: "절단",
    pipeendcut: "파이프 끝 절단",
    packaging: "포장",

    // Section headers
    sec_uncoiling: "언코일링",
    sec_welding: "용접",
    sec_accumulator: "어큐뮬레이터",
    sec_forming: "성형",
    sec_sizing: "사이징/교정",
    sec_cutting: "절단",
    sec_packaging: "포장",

    // Metric labels - Uncoiling
    line_speed: "라인 속도",
    tension: "장력",
    coil_thickness: "코일 두께",
    coil_width: "코일 폭",
    brake: "브레이크",
    motor: "모터",

    // Metric labels - Welding
    weld_current: "용접 전류",
    weld_voltage: "용접 전압",
    weld_temp: "용접 온도",
    weld_freq: "주파수 (kHz)",
    weld_cool: "냉각수 온도",
    weld_def: "불량률",

    // Metric labels - Accumulator
    acc_turns: "저장 회전수",
    acc_current: "모터 전류",
    acc_mode: "모드",
    acc_estop: "비상 정지",

    // Metric labels - Forming
    form_flat: "평탄도",
    form_current: "모터 전류",
    form_voltage: "모터 전압",
    form_align: "정렬 편차",
    form_status: "상태",

    // Metric labels - Sizing
    sz_roll: "롤 속도",
    sz_power: "모터 출력",
    sz_od: "외경",
    sz_round: "원형도",

    // Metric labels - Cutting
    cut_rpm: "톱 회전수",
    cut_lset: "설정 길이",
    cut_lact: "실제 길이",
    cut_lerr: "길이 오차",
    cut_press: "유압 압력",
    cut_mode: "모드",

    // Metric labels - Packaging
    pack_bundle: "번들 수량",
    pack_shape: "파이프 형상",
    pack_fault: "펌프 고장",

    // Alarm panel
    alarms: "알람",
    active_only: "활성만",
    all: "전체",
    last_50: "(최근 50개)",

    // Metric overlay
    metric_detail: "메트릭 상세",
    close: "✕ 닫기",

    // Small states
    on: "ON",
    off: "OFF",
    ok: "OK",
    err: "ERR",
    auto: "AUTO"
  }
};

function applyLanguage() {
  const dict = i18n[currentLang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLang === "en" ? "한국어" : "EN";
  }
}

/* ===== CONFIG ===== */
const WS_URL = "ws://localhost:8080/ws";     // backend WebSocket
const ICONS = { // place your images in /assets/icons/
  Uncoiling: "ICONS/UNCOILER.png",
  Accumulator: "ICONS/Accumulator.png",
  Forming: "ICONS/FORMING.png",
  Welding: "ICONS/Welding.png",
  Cutting: "ICONS/Sizing.png",
  PipeEndCut: "ICONS/Cutting.png",
  Packaging: "ICONS/Packaging.png",
};

const LINES = ["Line-01","Line-02","Line-03","Line-04"];


/* ===== Utilities ===== */
function fmt(v, d = 1) {
  if (v == null || Number.isNaN(v)) return '—';
  return Number(v).toFixed(d);
}

const UNITS = {
  'uncoiler-speed':'m/min','uncoiler-tension':'N','uncoiler-thick':'mm','uncoiler-width':'mm',
  'weld-speed':'m/min','weld-current':'A','weld-voltage':'V','weld-temp':'°C',
  'weld-freq':'kHz','weld-cool':'°C','weld-def':'%',

  'acc-turns':'turns','acc-speed':'m/min','acc-current':'A',
  'form-flat':'%','form-current':'A','form-voltage':'V','form-align':'mm',
  'sz-roll':'rpm','sz-power':'kW','sz-od':'mm','sz-round':'%',
  'cut-rpm':'rpm','cut-lset':'m','cut-lact':'m','cut-lerr':'mm','cut-press':'bar',
  'pack-bundle':'pcs','pack-shape':''
};

function setBadge(idKey, value, d=1){
  const el = document.getElementById('val-'+idKey);
  if(!el) return;
  el.textContent = `${fmt(value,d)} ${UNITS[idKey]||''}`;
}

const g = (o,p) => p.split('.').reduce((x,k)=>x?.[k],o);

/* ===== Alarm generation from message ===== */
function computeAlarmsFromMsg(msg){
  const d = (msg && msg.data) || {};
  const out = [];

  // Accumulator
  if (d.Accumulator?.emergency_stop === 1) {
    out.push({
      alarm_id: `ACC_ESTOP_${msg.timestamp}`,
      type: 'EmergencyStop',
      severity: 'High',
      description: 'Accumulator emergency stop is active',
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Uncoiling tension
  if (typeof d.Uncoiling?.tension_N === 'number' && d.Uncoiling.tension_N > 3500) {
    out.push({
      alarm_id: `UNC_TENSION_${msg.timestamp}`,
      type: 'OverTension',
      severity: 'Medium',
      description: `Tension high: ${d.Uncoiling.tension_N.toFixed(0)} N`,
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Welding temp
  if (typeof d.Welding?.weld_temp_C === 'number' && d.Welding.weld_temp_C > 230) {
    out.push({
      alarm_id: `WELD_TEMP_${msg.timestamp}`,
      type: 'Overheat',
      severity: 'High',
      description: `Weld temp ${d.Welding.weld_temp_C.toFixed(1)} °C`,
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Welding defect
  if (typeof d.Welding?.defect_rate_pct === 'number' && d.Welding.defect_rate_pct > 2.5) {
    out.push({
      alarm_id: `WELD_DEFECT_${msg.timestamp}`,
      type: 'Quality',
      severity: 'Medium',
      description: `Defect rate ${d.Welding.defect_rate_pct.toFixed(2)} %`,
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Cutting length error
  if (typeof d.Cutting?.length_error_mm === 'number' && d.Cutting.length_error_mm > 20) {
    out.push({
      alarm_id: `CUT_LENERR_${msg.timestamp}`,
      type: 'LengthError',
      severity: 'Medium',
      description: `Length error ${d.Cutting.length_error_mm.toFixed(1)} mm`,
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Cutting low pressure
  if (typeof d.Cutting?.hydraulic_pressure_bar === 'number' && d.Cutting.hydraulic_pressure_bar < 70) {
    out.push({
      alarm_id: `CUT_PRESS_${msg.timestamp}`,
      type: 'HydraulicsLow',
      severity: 'Low',
      description: `Hydraulic pressure low: ${d.Cutting.hydraulic_pressure_bar.toFixed(0)} bar`,
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Sizing roundness low
  if (typeof d.SizingStraightening?.roundness_pct === 'number' && d.SizingStraightening.roundness_pct < 92) {
    out.push({
      alarm_id: `SIZE_ROUND_${msg.timestamp}`,
      type: 'RoundnessLow',
      severity: 'Low',
      description: `Roundness ${d.SizingStraightening.roundness_pct.toFixed(1)} %`,
      active: true,
      timestamp: msg.timestamp
    });
  }

  // Labels from anomaly generator
  if (Array.isArray(msg.labels)) {
    for (const l of msg.labels) {
      const t = (l && (l.type || l.name)) || 'anomaly';
      out.push({
        alarm_id: `LBL_${t}_${msg.timestamp}`,
        type: `Anomaly:${t}`,
        severity: 'Medium',
        description: 'Detected by anomaly label',
        active: true,
        timestamp: msg.timestamp
      });
    }
  }

  return out;
}

/* ===== Layout state ===== */
let currentView = 'home';
let currentLine = 'Line-01';

const elHome  = document.getElementById('view-home');
const elLine  = document.getElementById('view-line');
const lineGrid = document.getElementById('line-grid');
const lineTitle = document.getElementById('line-title');

function switchView(v){
  currentView = v;
  elHome.classList.toggle('active', v === 'home');
  elLine.classList.toggle('active', v === 'line');
}

const btnBack = document.getElementById('btn-back');
if (btnBack) {
  btnBack.onclick = () => switchView('home');
}

// header timers
let globalSec = 0;
let lineSec = 0;

function fmtHMS(s){
  const h  = String(Math.floor(s/3600)).padStart(2,'0');
  const m  = String(Math.floor((s%3600)/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  return `${h} : ${m} : ${ss}`;
}

setInterval(()=>{
  globalSec++;
  const el = document.getElementById('elapsed');
  if (el) el.textContent = fmtHMS(globalSec);

  if(currentView === 'line'){
    lineSec++;
    const le = document.getElementById('line-elapsed');
    if (le) le.textContent = fmtHMS(lineSec);
  }
},1000);

/* ===== Home tiles state ===== */
const state = new Map(LINES.map(id => [id,{speed:0,alarms:0,status:'IDLE',last:null}]));

function statusFromSpeed(v){
  return (v ?? 0) > 0.5 ? 'RUN' : 'IDLE';
}

function renderHome(){
  lineGrid.innerHTML = LINES.map(id=>{
    const d = state.get(id);
    const pill = d.status==='RUN' ? 'pill-run'
              : d.status==='IDLE' ? 'pill-idle'
              : 'pill-stop';
    const nice = id.replace('Line-0','Line ');

    return `
      <button class="tile p-1 text-center hover:brightness-110 transition w-full"
              onclick="openLine('${id}')">
        <div class="text-sm font-semibold mb-0">${nice}</div>

        <div class="mb-2">
          <span class="pill ${pill}">${d.status==='RUN' ? 'Running' : 'Stopped'}</span>
        </div>

        <div class="flex flex-col gap-2 text-xs">
          <div>
            <div class="muted">Alerts</div>
            <div>${d.alarms}</div>
          </div>
          <div>
            <div class="muted">Speed</div>
            <div>${d.speed ? d.speed.toFixed(1) : '—'} m/min</div>
          </div>
          <div>
            <div class="muted">Last</div>
            <div>${d.last ? new Date(d.last.timestamp).toLocaleTimeString() : '—'}</div>
          </div>
        </div>
      </button>
    `;
  }).join('');
}

window.openLine = (lineId)=>{
  currentLine = lineId;
  lineTitle.textContent = lineId.replace('Line-0','Line ');
  lineSec = 0;
  setActiveTab('Uncoiling');
  switchView('line');
};

const processes = [
  { id: 'Uncoiling', label: 'Uncoiler' },
  { id: 'Accumulator', label: 'Accumulator' },
  { id: 'Forming', label: 'Forming' },
  { id: 'Welding', label: 'Welding' },
  { id: 'Cutting', label: 'Cutting' },  
  { id: 'PipeEndCut', label: 'Pipe-End Cut' }, 
  { id: 'Packaging', label: 'Packaging' },
];


const tabsWrap = document.getElementById('proc-tabs');

if (tabsWrap) {
  tabsWrap.innerHTML = processes.map(p=>`
    <button class="btn-tab" data-proc="${p.id}">
      <img class="tab-icon" src="${ICONS[p.id]}" alt="">
      <span data-i18n="${p.id.toLowerCase()}">${p.label}</span>
    </button>
  `).join('');

  tabsWrap.addEventListener('click',e=>{
    const btn = e.target.closest('button[data-proc]');
    if(!btn) return;
    setActiveTab(btn.dataset.proc);
  });
}

function setActiveTab(proc){
  [...tabsWrap.children].forEach(b =>
    b.classList.toggle('active', b.dataset.proc === proc)
  );
  processes.forEach(p=>{
    const el = document.getElementById('sec-'+p.id);
    if(!el) return;
    el.classList.toggle('hidden', p.id !== proc);
  });
}

/* ---- Alarm buffer per line ---- */
const MAX_ALARMS = 10;
const alarmBuf = new Map(LINES.map(id => [id, []])); // lineId -> array
let alarmFilter = 'active'; // 'active' | 'all'

function upsertAlarms(lineId, arr, ts){
  if(!Array.isArray(arr)) return;
  const buf = alarmBuf.get(lineId);
  if(!buf) return;

  for(const a of arr){
    const id = a.alarm_id || a.id || `${a.type}-${a.description}`;
    const item = {
      id,
      type: a.type || 'Alarm',
      severity: a.severity || '',
      description: a.description || '',
      active: !!a.active,
      ts: a.timestamp || ts || new Date().toISOString()
    };
    const idx = buf.findIndex(x=>x.id===id);
    if(idx>=0) buf[idx] = {...buf[idx], ...item};
    else buf.push(item);
  }

  while(buf.length > MAX_ALARMS) buf.shift();
}

function renderAlarmPanel(){
  const list = document.getElementById('alarm-list');
  if(!list) return;

  const buf = alarmBuf.get(currentLine) || [];
  const items = buf
    .filter(a => alarmFilter==='active' ? a.active : true)
    .slice()
    .sort((a,b)=> (b.active - a.active) || (new Date(b.ts) - new Date(a.ts)));

  list.innerHTML = items.length ? items.map(a=>`
    <div class="alarm-item ${a.active?'active':''} sev-${(a.severity||'').toLowerCase()}">
      <div class="pill ${a.active?'pill-stop':'pill-idle'}">${a.active?'ACTIVE':'Cleared'}</div>
      <div>
        <div class="ai-title">${a.type} <span class="muted">#${a.id}</span></div>
        <div class="ai-desc">${a.description}</div>
      </div>
      <div class="ai-right">
        <div><strong>${a.severity||''}</strong></div>
        <div class="muted">${new Date(a.ts).toLocaleTimeString()}</div>
      </div>
    </div>
  `).join('') : `<div class="muted text-sm">No alarms</div>`;
}

/* Filter buttons */
document.addEventListener('click', (e)=>{
  if(e.target.id === 'btn-alarm-active'){
    alarmFilter = 'active';
    e.target.classList.add('active');
    const other = document.getElementById('btn-alarm-all');
    if (other) other.classList.remove('active');
    renderAlarmPanel();
  }
  if(e.target.id === 'btn-alarm-all'){
    alarmFilter = 'all';
    e.target.classList.add('active');
    const other = document.getElementById('btn-alarm-active');
    if (other) other.classList.remove('active');
    renderAlarmPanel();
  }
});

/* ===== Charts helpers ===== */
const charts = {};

// some charts as bar, others as line
const CHART_TYPES = {
  'ch-uncoiler-tension': 'bar',
  'ch-uncoiler-thick':   'bar',
  'ch-uncoiler-width':   'bar',

  'ch-weld-current':     'bar',
  'ch-weld-voltage':     'bar',

  'ch-acc-turns':        'bar',
  'ch-acc-current':      'bar',

  'ch-form-flat':        'bar',
  'ch-form-current':     'bar',

  'ch-sz-power':         'bar',
  'ch-sz-od':            'bar',

  'ch-cut-lerr':         'bar',
  'ch-cut-press':        'bar',
};

// Tile view mode: 'metrics' | 'charts'
let tileViewMode = 'metrics';

function applyTileViewMode() {
  const showCharts = (tileViewMode === 'charts');

  document.querySelectorAll('.metric').forEach(tile => {
    const canvas = tile.querySelector('canvas.spark');
    const badge  = tile.querySelector('.value-badge');

    if (canvas) {
      // skip if canvas currently in overlay
      const inOverlay = canvas.parentElement && canvas.parentElement.id === 'metric-chart-holder';
      if (!inOverlay) {
        canvas.classList.toggle('hidden', !showCharts);
      }
    }

    if (badge) {
      if (showCharts) {
        tile.classList.remove('metric-big');  // small numbers + chart
      } else {
        tile.classList.add('metric-big');     // big numbers, no chart
      }
    }
  });
}

function ensureChart(id, label, max = 120) {
  if (charts[id]) return charts[id];

  const type = CHART_TYPES[id] || 'line';

  charts[id] = new Chart(document.getElementById(id), {
    type,
    data: {
      labels: [],
      datasets: [{
        label,
        data: [],
        tension: .35,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: '#27a9ff'
      }]
    },
    options: {
      responsive: true,
      animation: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
  charts[id].$$max = max;
  return charts[id];
}

function pushPoint(ch, y) {
  ch.data.labels.push('');
  ch.data.datasets[0].data.push(y);
  if (ch.data.labels.length > ch.$$max) {
    ch.data.labels.shift();
    ch.data.datasets[0].data.shift();
  }
  ch.update();
}

// Doughnut for Defect Rate
function ensureDefectDoughnut(id) {
  if (charts[id]) return charts[id];

  charts[id] = new Chart(document.getElementById(id), {
    type: 'doughnut',
    data: {
      labels: ['Defect', 'OK'],
      datasets: [{
        data: [0, 100],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      animation: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      cutout: '65%'
    }
  });

  return charts[id];
}

function updateDefectDoughnut(id, pct) {
  const v = (pct == null || Number.isNaN(pct)) ? 0 : Math.max(0, Math.min(100, pct));
  const ch = ensureDefectDoughnut(id);
  ch.data.datasets[0].data[0] = v;        // Defect
  ch.data.datasets[0].data[1] = 100 - v;  // OK
  ch.update();
}

/* ===== WebSocket ===== */
function connectWS() {
  const ws = new WebSocket(WS_URL);

  ws.onopen = () => console.log('[ws] open');
  ws.onclose = () => {
    console.log('[ws] closed → retry');
    setTimeout(connectWS, 1500);  // Retry connection after 1.5 seconds
  };

  ws.onmessage = ev => {
    let msg;
    try {
      msg = JSON.parse(ev.data);  // Parse the incoming WebSocket message
    } catch {
      console.error("Error parsing WebSocket message");
      return;
    }

    console.log(msg); 

    window.__lastMsg = msg;  // Store the last message received

    const lineId = msg.line_id || msg.metadata?.line_id || "Line-01";  // Extract the line ID from the message

    const st = state.get(lineId);  // Fetch the state for the corresponding line
    if (!st) return;  // If no state found for this line, exit

    // Update the line state (e.g., speed, status, etc.)
    const sp = g(msg, 'data.Uncoiling.line_speed_mpm') || g(msg, 'data.Uncoiler.speed_mpm');
    if (typeof sp === 'number') {
      st.speed = sp;  // Update the speed for this line
    }

    st.status = statusFromSpeed(st.speed);  // Determine the status (RUN or IDLE) based on speed

    const alarms = computeAlarmsFromMsg(msg);  // Compute any active alarms based on the message
    st.alarms = alarms.filter(a => a.active).length;  // Count active alarms
    upsertAlarms(lineId, alarms, msg.timestamp);  // Update the alarm buffer

    // Update the UI (home view or line-specific view)
    if (currentView === 'line' && lineId === currentLine) {
      renderAlarmPanel();  // Update the alarm panel if we're on the line view
    }
    if (currentView === 'home') {
      renderHome();  // Update the home view with the latest line info
    }

    // Update the metrics, badges, and charts for the current line if we're on the line view
    if (currentView === 'line' && lineId === currentLine) {

      // ===== Uncoiling =====
      const speed = sp;
      pushPoint(ensureChart('ch-uncoiler-speed', 'speed'), speed ?? null);
      setBadge('uncoiler-speed', speed, 1);

      const tension = g(msg, 'data.Uncoiling.tension_N') || g(msg, 'data.Uncoiler.tension_kg');
      pushPoint(ensureChart('ch-uncoiler-tension', 'tension'), tension ?? null);
      setBadge('uncoiler-tension', tension, 0);

      const thick = g(msg, 'data.Uncoiling.coil_thickness_mm');
      pushPoint(ensureChart('ch-uncoiler-thick', 'thickness'), thick ?? null);
      setBadge('uncoiler-thick', thick, 2);

      const width = g(msg, 'data.Uncoiling.coil_width_mm');
      pushPoint(ensureChart('ch-uncoiler-width', 'width'), width ?? null);
      setBadge('uncoiler-width', width, 1);

      const brake = g(msg, 'data.Uncoiling.brake_on');
      const motor = g(msg, 'data.Uncoiling.motor_on');
      const pillBrake = document.getElementById('pill-brake');
      const pillMotor = document.getElementById('pill-motor');
      if (pillBrake) {
        pillBrake.textContent = brake ? 'ON' : 'OFF';
        pillBrake.className = `pill ${brake ? 'pill-stop' : 'pill-idle'}`;
      }
      if (pillMotor) {
        pillMotor.textContent = motor ? 'ON' : 'OFF';
        pillMotor.className = `pill ${motor ? 'pill-run' : 'pill-idle'}`;
      }

      // ===== Welding =====
      const wSp = g(msg, 'data.Welding.line_speed_mpm');
      const wCur = g(msg, 'data.Welding.weld_current_A');
      const wVolt = g(msg, 'data.Welding.weld_voltage_V');
      const wTemp = g(msg, 'data.Welding.weld_temp_C');
      const wFreq = g(msg, 'data.Welding.frequency_kHz');
      const wCool = g(msg, 'data.Welding.cooling_water_temp_C');
      const wDef = g(msg, 'data.Welding.defect_rate_pct');

      pushPoint(ensureChart('ch-weld-speed', 'speed'), wSp ?? null);
      setBadge('weld-speed', wSp, 1);

      pushPoint(ensureChart('ch-weld-current', 'current'), wCur ?? null);
      setBadge('weld-current', wCur, 0);

      pushPoint(ensureChart('ch-weld-voltage', 'voltage'), wVolt ?? null);
      setBadge('weld-voltage', wVolt, 1);

      pushPoint(ensureChart('ch-weld-temp', 'temp'), wTemp ?? null);
      setBadge('weld-temp', wTemp, 1);

      pushPoint(ensureChart('ch-weld-freq', 'freq'), wFreq ?? null);
      setBadge('weld-freq', wFreq, 2);

      pushPoint(ensureChart('ch-weld-cool', 'cool'), wCool ?? null);
      setBadge('weld-cool', wCool, 1);

      updateDefectDoughnut('ch-weld-def', wDef);
      setBadge('weld-def', wDef, 2);

      // ===== Accumulator =====
      const aTurns = g(msg, 'data.Accumulator.stored_turns');
      const aSpd = g(msg, 'data.Accumulator.line_speed_mpm');
      const aCur = g(msg, 'data.Accumulator.motor_current_A');

      pushPoint(ensureChart('ch-acc-turns', 'turns'), aTurns ?? null);
      setBadge('acc-turns', aTurns, 0);

      pushPoint(ensureChart('ch-acc-speed', 'speed'), aSpd ?? null);
      setBadge('acc-speed', aSpd, 1);

      pushPoint(ensureChart('ch-acc-current', 'current'), aCur ?? null);
      setBadge('acc-current', aCur, 0);

      const aMode = g(msg, 'data.Accumulator.mode');  // "AUTO"/"MANUAL"/...
      const aEStop = g(msg, 'data.Accumulator.emergency_stop');  // 0/1
      const pillAccMode = document.getElementById('pill-acc-mode');
      const pillAccEstop = document.getElementById('pill-acc-estop');

      if (pillAccMode) {
        pillAccMode.textContent = aMode ?? 'AUTO';
        pillAccMode.className = `pill ${aMode === 'AUTO' ? 'pill-run' : 'pill-idle'}`;
      }
      if (pillAccEstop) {
        pillAccEstop.textContent = aEStop ? '1' : '0';
        pillAccEstop.className = `pill ${aEStop ? 'pill-stop' : 'pill-idle'}`;
      }

      // ===== Forming =====
      const fFlat = g(msg, 'data.Forming.flatness_pct');
      const fCur = g(msg, 'data.Forming.motor_current_A');
      const fVolt = g(msg, 'data.Forming.motor_voltage_V');
      const fAl = g(msg, 'data.Forming.alignment_dev_mm');

      pushPoint(ensureChart('ch-form-flat', 'flatness'), fFlat ?? null);
      setBadge('form-flat', fFlat, 1);

      pushPoint(ensureChart('ch-form-current', 'current'), fCur ?? null);
      setBadge('form-current', fCur, 0);

      pushPoint(ensureChart('ch-form-voltage', 'voltage'), fVolt ?? null);
      setBadge('form-voltage', fVolt, 1);

      pushPoint(ensureChart('ch-form-align', 'align'), fAl ?? null);
      setBadge('form-align', fAl, 2);

      const pillForm = document.getElementById('pill-form-ok');
      if (pillForm) {
        const ok = fFlat == null || fFlat >= 95;
        pillForm.textContent = ok ? 'OK' : 'ERR';
        pillForm.className = `pill ${ok ? 'pill-run' : 'pill-stop'}`;
      }

      // ===== Cutting Section Update =====
      const cRpm = g(msg, 'data.Cutting.blade_rpm');
      setBadge('cut-rpm', cRpm);

      const cLSet = g(msg, 'data.Cutting.length_set_m');
      setBadge('cut-lset', cLSet);

      const cLAct = g(msg, 'data.Cutting.length_actual_m');
      setBadge('cut-lact', cLAct);

      const cLErr = g(msg, 'data.Cutting.length_error_mm');
      setBadge('cut-lerr', cLErr);

      const cPress = g(msg, 'data.Cutting.hydraulic_pressure_bar');
      setBadge('cut-press', cPress);

      // ===== Packaging =====
      const pBundle = g(msg, 'data.Packaging.bundle_count');
      const pShape = g(msg, 'data.Packaging.pipe_shape');
      const pFault = g(msg, 'data.Packaging.pump_fault');

      pushPoint(ensureChart('ch-pack-bundle', 'bundle'), pBundle ?? null);
      setBadge('pack-bundle', pBundle, 0);

      pushPoint(ensureChart('ch-pack-shape', 'shape idx'), pShape ?? null);
      setBadge('pack-shape', pShape, 0);

      const pillPack = document.getElementById('pill-pack-fault');
      if (pillPack) {
        pillPack.textContent = pFault ? '1' : '0';
        pillPack.className = `pill ${pFault ? 'pill-stop' : 'pill-idle'}`;
      }
    }
  };
}

/* ===== Metric Overlay ===== */
const chartOriginalParent = {};   // canvasId -> DOM node

function setupMetricOverlay() {
  const tiles = document.querySelectorAll('.metric[data-chart]');
  tiles.forEach(tile => {
    tile.classList.add('cursor-pointer');
    tile.addEventListener('click', () => {
      const canvasId = tile.dataset.chart;
      const title = tile.dataset.title || tile.querySelector('.label')?.textContent || 'Metric';
      openMetricOverlay(canvasId, title);
    });
  });

  const overlay = document.getElementById('metric-overlay');
  const btnClose = document.getElementById('ovr-close');

  if (btnClose) btnClose.onclick = closeMetricOverlay;

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target.id === 'metric-overlay') {
        closeMetricOverlay();
      }
    });
  }
}

function openMetricOverlay(canvasId, title) {
  const overlay = document.getElementById('metric-overlay');
  const holder  = document.getElementById('metric-chart-holder');
  const titleEl = document.getElementById('ovr-metric-title');

  const canvas = document.getElementById(canvasId);
  if (!canvas || !overlay || !holder) return;

  if (titleEl) titleEl.textContent = title;

  if (!chartOriginalParent[canvasId]) {
    chartOriginalParent[canvasId] = canvas.parentElement;
  }

  holder.innerHTML = '';
  holder.appendChild(canvas);
  canvas.classList.remove('hidden');

  overlay.classList.remove('hidden');

  const ch = charts[canvasId];
  if (ch && ch.options && ch.options.scales) {
    // X-axis
    if (ch.options.scales.x) {
      ch.options.scales.x.display = true;
      ch.options.scales.x.ticks = { color: '#ffffff' };
      ch.options.scales.x.title = {
        display: true,
        color: '#ffffff'
      };
      ch.options.scales.x.grid = {
        color: 'rgba(255,255,255,0.08)'
      };
    }

    // Y-axis
    if (ch.options.scales.y) {
      ch.options.scales.y.display = true;
      ch.options.scales.y.ticks = { color: '#ffffff' };
      ch.options.scales.y.title = {
        display: true,
        color: '#ffffff'
      };
      ch.options.scales.y.grid = {
        color: 'rgba(255,255,255,0.08)'
      };
    }
  }

  ch && ch.resize();
  ch && ch.update();
}

function closeMetricOverlay() {
  const overlay = document.getElementById('metric-overlay');
  const holder  = document.getElementById('metric-chart-holder');
  if (!overlay || !holder) return;

  const canvas = holder.querySelector('canvas');
  if (canvas) {
    const canvasId = canvas.id;
    const parent   = chartOriginalParent[canvasId];
    const ch       = charts[canvasId];

    if (ch && ch.options && ch.options.scales) {
      if (ch.options.scales.x) {
        ch.options.scales.x.display = false;
        if (ch.options.scales.x.title) ch.options.scales.x.title.display = false;
      }
      if (ch.options.scales.y) {
        ch.options.scales.y.display = false;
        if (ch.options.scales.y.title) ch.options.scales.y.title.display = false;
      }
      if (ch.options.plugins && ch.options.plugins.legend) {
        ch.options.plugins.legend.display = false;
      }
      ch.resize();
      ch.update();
    }

    if (parent) {
      parent.appendChild(canvas);

      // respect current view mode
      if (tileViewMode === 'charts') {
        canvas.classList.remove('hidden');
      } else {
        canvas.classList.add('hidden');
      }
    }
  }

  overlay.classList.add('hidden');
}

/* ===== Language toggle button ===== */
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  langToggle.onclick = () => {
    currentLang = currentLang === "en" ? "kr" : "en";
    applyLanguage();
  };
}

/* ===== Metrics / Charts toggle buttons ===== */
const btnViewMetrics = document.getElementById('btn-view-metrics');
const btnViewCharts  = document.getElementById('btn-view-charts');

if (btnViewMetrics && btnViewCharts) {
  btnViewMetrics.addEventListener('click', () => {
    tileViewMode = 'metrics';
    btnViewMetrics.classList.add('is-active');
    btnViewCharts.classList.remove('is-active');
    applyTileViewMode();
  });

  btnViewCharts.addEventListener('click', () => {
    tileViewMode = 'charts';
    btnViewCharts.classList.add('is-active');
    btnViewMetrics.classList.remove('is-active');
    applyTileViewMode();
  });
}

function updateUncoilerDetails(msg) {
  const power = g(msg, 'data.Uncoiling.power_status'); 
  setBadge('uncoiler-power', power === 1 ? 'ON' : 'OFF'); 

  const hydraulicStatus = g(msg, 'data.Uncoiling.hydraulic_motor_status');
  setBadge('uncoiler-hydraulic', hydraulicStatus === 1 ? 'Normal' : 'Fault'); 

  const brakeStatus = g(msg, 'data.Uncoiling.brake_status');
  setBadge('uncoiler-brake', brakeStatus === 1 ? 'Open' : 'Close'); s

  const drumRotation = g(msg, 'data.Uncoiling.drum_rotation');
  setBadge('uncoiler-rotation', drumRotation === 1 ? 'Forward' : 'Reverse'); 

  const drumStatus = g(msg, 'data.Uncoiling.drum_status');
  setBadge('uncoiler-drum', drumStatus === 1 ? 'Expansion' : 'Contraction'); 

  const lineStop = g(msg, 'data.Uncoiling.line_stop_indicator');
  setBadge('uncoiler-line-stop', lineStop === 1 ? 'Locked' : 'Unlocked'); 
}

function updateAccumulatorDetails(msg) {
  const mode = g(msg, 'data.Accumulator.operation_mode');
  setBadge('acc-mode', mode === 1 ? 'Forward' : 'Reverse');

  const solValve = g(msg, 'data.Accumulator.sol_valve');
  setBadge('acc-sol-valve', solValve === 1 ? 'ON' : 'OFF');

  const lineSpeed = g(msg, 'data.Accumulator.line_speed');
  setBadge('acc-line-speed', lineSpeed);

  const storageQty = g(msg, 'data.Accumulator.storage_quantity');
  setBadge('acc-storage', storageQty);

  const motorStatus = g(msg, 'data.Accumulator.motor_status');
  setBadge('acc-motor-status', motorStatus === 1 ? 'Normal' : 'Fault');

  const sensorStatus = g(msg, 'data.Accumulator.sensor_status');
  setBadge('acc-sensor-status', sensorStatus === 1 ? 'Zero-point' : 'Signal');
}

function updateFormingDetails(msg) {
  const rpm = g(msg, 'data.Forming.rpm');
  setBadge('form-rpm', rpm);
  if (rpm === 0) {
    // Trigger alarm for RPM = 0
    triggerAlarm('Forming RPM is 0!');
  }

  const current = g(msg, 'data.Forming.current');
  setBadge('form-current', current);
}


function updateWelderDetails(msg) {
  const power = g(msg, 'data.Welding.power');
  setBadge('weld-power', power === 1 ? 'On' : 'Off');

  const voltage = g(msg, 'data.Welding.voltage');
  setBadge('weld-voltage', voltage);
  if (voltage > 350) triggerAlarm('Welding Voltage > 350V');

  const current = g(msg, 'data.Welding.current');
  setBadge('weld-current', current);
  if (current > 400) triggerAlarm('Welding Current > 400A');

  const coolingTemp = g(msg, 'data.Welding.cooling_temp');
  setBadge('weld-cool', coolingTemp);
  if (coolingTemp > 40) triggerAlarm('Cooling Water Temperature > 40°C');
}


function updateCuttingDetails(msg) {
  const power = g(msg, 'data.Cutting.power');  
  setBadge('cut-power', power === 1 ? 'ON' : 'OFF');  

  const operationMode = g(msg, 'data.Cutting.operation_mode'); 
  setBadge('cut-operation-mode', operationMode);

  const sawBladeSpec = g(msg, 'data.Cutting.saw_blade_spec');  
  setBadge('cut-saw-blade-spec', sawBladeSpec || '—');

  const lengthDeviation = g(msg, 'data.Cutting.length_deviation');  
  setBadge('cut-length-deviation', lengthDeviation || '—');

  const spindleMotor = g(msg, 'data.Cutting.spindle_motor');  
  setBadge('cut-spindle-motor', spindleMotor === 1 ? 'Normal' : 'Abnormal');
}


function updatePipeEndCutDetails(msg) {
  const autoOp = g(msg, 'data.PipeEndCut.auto_operation');  
  setBadge('pipeendcut-auto-op', autoOp === 1 ? 'ON' : 'OFF');

  const emergencyStop = g(msg, 'data.PipeEndCut.emergency_stop');  
  setBadge('pipeendcut-emergency-stop', emergencyStop === 1 ? 'Activated' : 'Not Activated');

  const counterSensor = g(msg, 'data.PipeEndCut.counter_sensor'); 
  setBadge('pipeendcut-counter-sensor', counterSensor === 1 ? 'Detected' : 'Not Detected');
}


function updatePackagingDetails(msg) {
  const bundleCount = g(msg, 'data.Packaging.bundle_count');  
  setBadge('pack-bundle', bundleCount);

  const pipeShape = g(msg, 'data.Packaging.pipe_shape'); 
  setBadge('pack-shape', pipeShape);

  const pumpFault = g(msg, 'data.Packaging.pump_fault'); 
  setBadge('pack-fault', pumpFault === 1 ? 'Fault' : 'Normal');
}


/* ===== INIT ===== */
connectWS();
renderHome();
setupMetricOverlay();
applyTileViewMode(); 
applyLanguage();     


// ===== Fake data generator for testing =====
function getRandomInRange(min, max, decimalPlaces = 2) {
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
}


function generateFakeData() {
  const timestamp = new Date().toISOString();  

  return {
    timestamp: timestamp,
    data: {
      Uncoiling: {
        power: Math.random() > 0.5 ? 'ON' : 'OFF',
        hydraulic_motor: Math.random() > 0.98 ? 'Fault' : 'Normal',
        brake_status: Math.random() > 0.5 ? 'Closed' : 'Open',
        drum_rotation: Math.random() > 0.5 ? 'Forward' : 'Reverse',
        drum_status: Math.random() > 0.5 ? 'Expanded' : 'Contracted',
        line_stop: Math.random() > 0.5 ? 'Locked' : 'Unlocked',
        coil_thickness: getRandomInRange(1.5, 2.0, 3), 
        coil_width: getRandomInRange(100, 150, 2),  
      },
      Welding: {
        power: Math.random() > 0.5 ? 'ON' : 'OFF',
        voltage: getRandomInRange(8, 12),  
        current: getRandomInRange(200, 500), 
        weld_temp: getRandomInRange(120, 160),  
        cooling_water_temp: getRandomInRange(20, 30),  
        defect_rate_pct: getRandomInRange(0, 5),  
      },
      PipeEndCut: {
        auto_op: Math.random() > 0.5 ? 'ON' : 'OFF',
        emergency_stop: Math.random() > 0.5 ? 'Activated' : 'Not Activated',
        counter_sensor: Math.random() > 0.5 ? 'Detected' : 'Not Detected',
        hydraulic_motor: Math.random() > 0.5 ? 'Normal' : 'Fault',
        clamp_status: Math.random() > 0.5 ? 'Up' : 'Down',
        head_position: Math.random() > 0.5 ? 'Forward' : 'Backward',
        spindle_motor: Math.random() > 0.5 ? 'Normal' : 'Fault',
        walking_motor_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        walking_motor_overload: Math.random() > 0.5 ? 'Normal' : 'Overloaded',
        square_pipe: Math.random() > 0.5 ? 'Square' : 'Round',
        auto_stop_message: Math.random() > 0.5 ? 'OK' : 'Error',
      },
      Accumulator: {
        operation_mode: Math.random() > 0.5 ? 'Forward' : 'Reverse',
        sol_valve: Math.random() > 0.5 ? 'ON' : 'OFF',
        line_speed: getRandomInRange(60, 120),  
        storage_quantity: getRandomInRange(100, 300),  
        motor_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        sensor_status: Math.random() > 0.5 ? 'Zero Point' : 'Signal',
      },
      Cutting: {
        power: Math.random() > 0.5 ? 'ON' : 'OFF',
        operation_mode: Math.random() > 0.5 ? 'Manual' : 'Automatic',
        saw_blade_spec: '400×2.5T×50',
        length_deviation: getRandomInRange(0, 10),  
        spindle_motor: Math.random() > 0.5 ? 'Normal' : 'Fault',
        saw_blade_alarm: Math.random() > 0.5 ? 'Active' : 'Inactive',
        product_spec: '—',
        production_quantity: '—',
        planned_production: '—',
        specification_quantity: '—',
      },
      Packaging: {
        power: Math.random() > 0.5 ? 'ON' : 'OFF',
        operation_mode: Math.random() > 0.5 ? 'Auto' : 'Manual',
        hydraulic_motor_status: Math.random() > 0.5 ? 'Operational' : 'Fault',
        emergency_stop_status: Math.random() > 0.5 ? 'Activated' : 'Deactivated',
        adachi_transfer_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        adachi_lift_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        adachi_walking_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        adachi_layer_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        bending_machine_transfer_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        output_connection_transfer_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        fork_transfer_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
        output_transfer_inverter_status: Math.random() > 0.5 ? 'Normal' : 'Fault',
      },
      Forming: {
        rpm: getRandomInRange(10, 100), 
        motor_current: getRandomInRange(150, 250),  
      },
    }
  };
}

function updateDashboardWithFakeData() {
  const fakeData = generateFakeData(); 
  console.log("Fake Data:", fakeData);


  document.getElementById('val-uncoiler-power').textContent = fakeData.data.Uncoiling.power;
  document.getElementById('val-uncoiler-hydraulic').textContent = fakeData.data.Uncoiling.hydraulic_motor;
  document.getElementById('val-uncoiler-brake').textContent = fakeData.data.Uncoiling.brake_status;
  document.getElementById('val-uncoiler-rotation').textContent = fakeData.data.Uncoiling.drum_rotation;
  document.getElementById('val-uncoiler-drum').textContent = fakeData.data.Uncoiling.drum_status;
  document.getElementById('val-uncoiler-line-stop').textContent = fakeData.data.Uncoiling.line_stop;

  document.getElementById('val-weld-power').textContent = fakeData.data.Welding.power;
  document.getElementById('val-weld-voltage').textContent = fakeData.data.Welding.voltage;
  document.getElementById('val-weld-current').textContent = fakeData.data.Welding.current;
  document.getElementById('val-weld-cool').textContent = fakeData.data.Welding.cooling_temp;

  document.getElementById('val-pipeendcut-auto-op').textContent = fakeData.data.PipeEndCut.auto_op;
  document.getElementById('val-pipeendcut-emergency-stop').textContent = fakeData.data.PipeEndCut.emergency_stop;
  document.getElementById('val-pipeendcut-counter-sensor').textContent = fakeData.data.PipeEndCut.counter_sensor;
  document.getElementById('val-pipeendcut-hydraulic-motor').textContent = fakeData.data.PipeEndCut.hydraulic_motor;
  document.getElementById('val-pipeendcut-clamp-status').textContent = fakeData.data.PipeEndCut.clamp_status;
  document.getElementById('val-pipeendcut-head-position').textContent = fakeData.data.PipeEndCut.head_position;
  document.getElementById('val-pipeendcut-spindle-motor').textContent = fakeData.data.PipeEndCut.spindle_motor;
  document.getElementById('val-pipeendcut-walking-motor-status').textContent = fakeData.data.PipeEndCut.walking_motor_status;
  document.getElementById('val-pipeendcut-walking-motor-overload').textContent = fakeData.data.PipeEndCut.walking_motor_overload;
  document.getElementById('val-pipeendcut-square-pipe').textContent = fakeData.data.PipeEndCut.square_pipe;
  document.getElementById('val-pipeendcut-auto-stop-message').textContent = fakeData.data.PipeEndCut.auto_stop_message;

  document.getElementById('val-acc-mode').textContent = fakeData.data.Accumulator.operation_mode;
  document.getElementById('val-acc-sol-valve').textContent = fakeData.data.Accumulator.sol_valve;
  document.getElementById('val-acc-line-speed').textContent = fakeData.data.Accumulator.line_speed;
  document.getElementById('val-acc-storage').textContent = fakeData.data.Accumulator.storage_quantity;

  document.getElementById('val-cut-power').textContent = fakeData.data.Cutting.power;
  document.getElementById('val-cut-operation-mode').textContent = fakeData.data.Cutting.operation_mode;
  document.getElementById('val-cut-saw-blade-spec').textContent = fakeData.data.Cutting.saw_blade_spec;
  document.getElementById('val-cut-length-deviation').textContent = fakeData.data.Cutting.length_deviation;
  document.getElementById('val-cut-spindle-motor').textContent = fakeData.data.Cutting.spindle_motor;
  document.getElementById('val-cut-saw-blade-alarm').textContent = fakeData.data.Cutting.saw_blade_alarm;
  document.getElementById('val-cut-product-spec').textContent = fakeData.data.Cutting.product_spec;
  document.getElementById('val-cut-production-quantity').textContent = fakeData.data.Cutting.production_quantity;
  document.getElementById('val-cut-planned-production').textContent = fakeData.data.Cutting.planned_production;
  document.getElementById('val-cut-spec-quantity').textContent = fakeData.data.Cutting.specification_quantity;

  document.getElementById('val-packaging-power').textContent = fakeData.data.Packaging.power;
  document.getElementById('val-packaging-operation-mode').textContent = fakeData.data.Packaging.operation_mode;
  document.getElementById('val-packaging-hydraulic-motor-status').textContent = fakeData.data.Packaging.hydraulic_motor_status;
  document.getElementById('val-packaging-emergency-stop-status').textContent = fakeData.data.Packaging.emergency_stop_status;
  document.getElementById('val-packaging-adachi-transfer-inverter-status').textContent = fakeData.data.Packaging.adachi_transfer_inverter_status;
  document.getElementById('val-packaging-adachi-lift-inverter-status').textContent = fakeData.data.Packaging.adachi_lift_inverter_status;
  document.getElementById('val-packaging-adachi-walking-inverter-status').textContent = fakeData.data.Packaging.adachi_walking_inverter_status;
  document.getElementById('val-packaging-adachi-layer-inverter-status').textContent = fakeData.data.Packaging.adachi_layer_inverter_status;
  document.getElementById('val-packaging-bending-machine-transfer-inverter-status').textContent = fakeData.data.Packaging.bending_machine_transfer_inverter_status;
  document.getElementById('val-packaging-output-connection-transfer-inverter-status').textContent = fakeData.data.Packaging.output_connection_transfer_inverter_status;
  document.getElementById('val-packaging-fork-transfer-inverter-status').textContent = fakeData.data.Packaging.fork_transfer_inverter_status;
  document.getElementById('val-packaging-output-transfer-inverter-status').textContent = fakeData.data.Packaging.output_transfer_inverter_status;

  document.getElementById('val-form-rpm').textContent = fakeData.data.Forming.rpm;
  document.getElementById('val-form-current').textContent = fakeData.data.Forming.motor_current;
}

setInterval(updateDashboardWithFakeData, 2000);


//background light and dark theme//

function toggleTheme() {
  const body = document.body;

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme'); 
    localStorage.setItem('theme', 'dark');  
  } else {
    body.classList.add('light-theme');  
    localStorage.setItem('theme', 'light'); 
  }


  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.textContent = body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
} else {
  document.body.classList.remove('light-theme');
}

const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}
