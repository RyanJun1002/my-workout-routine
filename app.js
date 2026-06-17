const days = [
  {
    id: "monday",
    short: "월",
    name: "월요일",
    type: "어깨 + 상체",
    color: "#5c9dff",
    warmup: ["팔 돌리기 30초", "제자리 뛰기 1분", "어깨 스트레칭"],
    items: [
      item("kneePushup", "무릎 대고 푸시업", "3세트 × 10~15회"),
      item("plank", "플랭크", "3세트 × 30초"),
      item("lateralRaise", "물병 사이드 레터럴 레이즈", "3세트 × 12회"),
      item("superman", "슈퍼맨 자세", "3세트 × 15회"),
    ],
  },
  {
    id: "tuesday",
    short: "화",
    name: "화요일",
    type: "허벅지 + 하체",
    color: "#35d98b",
    warmup: ["가볍게 걷기 1분", "다리 스트레칭", "무릎 돌리기"],
    items: [
      item("squat", "스쿼트", "3세트 × 15회"),
      item("lunge", "런지", "3세트 × 양쪽 10회"),
      item("wallSit", "벽에 기대 앉기", "3세트 × 30~45초"),
      item("calfRaise", "까치발 올리기", "3세트 × 20회"),
    ],
  },
  {
    id: "wednesday",
    short: "수",
    name: "수요일",
    type: "휴식 + 가벼운 활동",
    color: "#a66be3",
    rest: true,
    restItems: ["산책", "자전거", "농구 또는 축구", "스트레칭"],
  },
  {
    id: "thursday",
    short: "목",
    name: "목요일",
    type: "어깨 강화",
    color: "#ff922b",
    warmup: ["팔 돌리기 30초", "어깨 스트레칭", "목 가볍게 풀기"],
    items: [
      item("pushup", "푸시업", "3세트 × 10~15회"),
      item("shoulderPress", "물병 숄더 프레스", "3세트 × 12회"),
      item("ytPose", "Y-T 자세", "3세트 × 각각 10회"),
      item("plankLong", "플랭크", "3세트 × 40초"),
    ],
  },
  {
    id: "friday",
    short: "금",
    name: "금요일",
    type: "복근 + 전신",
    color: "#f45b55",
    warmup: ["제자리 뛰기 1분", "허리 스트레칭", "복부 스트레칭"],
    items: [
      item("crunch", "크런치", "3세트 × 15회"),
      item("legRaise", "레그레이즈", "3세트 × 10~15회"),
      item("mountainClimber", "마운틴 클라이머", "3세트 × 20회"),
      item("squatFriday", "스쿼트", "3세트 × 15회"),
    ],
  },
  {
    id: "saturday",
    short: "토",
    name: "토요일",
    type: "자유 운동 / 휴식",
    color: "#a160d6",
    rest: true,
    restItems: ["좋아하는 운동 하기", "친구들과 뛰기", "가벼운 산책", "충분히 쉬기"],
  },
  {
    id: "sunday",
    short: "일",
    name: "일요일",
    type: "완전 휴식",
    color: "#6d737d",
    rest: true,
    restItems: ["푹 자기", "가족과 시간 보내기", "가벼운 스트레칭"],
  },
];

const trackers = {
  kneePushup: { label: "회", mode: "pushup", kind: "rep" },
  pushup: { label: "회", mode: "pushup", kind: "rep" },
  squat: { label: "회", mode: "squat", kind: "rep" },
  squatFriday: { label: "회", mode: "squat", kind: "rep" },
  lunge: { label: "회", mode: "squat", kind: "rep" },
  plank: { label: "초", mode: "hold", kind: "time" },
  plankLong: { label: "초", mode: "hold", kind: "time" },
  wallSit: { label: "초", mode: "hold", kind: "time" },
  mountainClimber: { label: "회", mode: "knees", kind: "rep" },
  lateralRaise: { label: "회", mode: "arms", kind: "rep" },
  shoulderPress: { label: "회", mode: "arms", kind: "rep" },
  ytPose: { label: "회", mode: "arms", kind: "rep" },
  crunch: { label: "회", mode: "motion", kind: "rep" },
  legRaise: { label: "회", mode: "knees", kind: "rep" },
  superman: { label: "회", mode: "motion", kind: "rep" },
};

const guides = {
  kneePushup: guide("무릎을 바닥에 대고 몸을 일직선으로 만든 뒤 천천히 팔을 굽혔다 펴요.", ["손은 어깨보다 살짝 넓게 짚어요.", "배에 힘을 주고 허리가 꺾이지 않게 해요.", "내려갈 때 2초, 올라올 때 2초로 천천히 해요.", "목이 앞으로 빠지지 않게 시선은 바닥 앞쪽에 둬요."]),
  pushup: guide("상체와 코어를 함께 쓰는 기본 운동이에요.", ["손바닥을 어깨보다 살짝 넓게 둬요.", "머리부터 발끝까지 한 줄을 만들어요.", "팔꿈치를 45도 정도로 굽히며 내려가요.", "몸이 흔들리면 무릎 푸시업으로 바꿔도 좋아요."]),
  plank: guide("몸통을 단단하게 버티는 코어 운동이에요.", ["팔꿈치를 어깨 아래에 둬요.", "엉덩이가 너무 올라가거나 내려가지 않게 해요.", "배꼽을 등 쪽으로 당기는 느낌을 유지해요.", "숨을 참지 말고 천천히 쉬어요."]),
  plankLong: guide("40초 동안 좋은 자세를 유지하는 것이 목표예요.", ["팔꿈치와 어깨를 수직으로 맞춰요.", "발끝으로 바닥을 밀고 몸을 길게 만들어요.", "허리가 아프면 바로 쉬어요.", "마지막 10초는 호흡을 더 천천히 해요."]),
  lateralRaise: guide("물병을 옆으로 들어 어깨 옆 근육을 깨우는 운동이에요.", ["가벼운 물병을 양손에 들어요.", "팔꿈치를 살짝 굽힌 채 옆으로 올려요.", "어깨 높이까지만 올리고 천천히 내려요.", "목과 어깨가 으쓱 올라가지 않게 해요."]),
  shoulderPress: guide("물병을 머리 위로 밀어 올리는 어깨 강화 운동이에요.", ["물병을 어깨 높이에 둬요.", "배에 힘을 주고 허리를 꺾지 않아요.", "팔을 위로 밀어 올린 뒤 천천히 내려요.", "무거우면 물을 덜 채워도 됩니다."]),
  superman: guide("등과 엉덩이를 함께 쓰며 자세를 잡아주는 운동이에요.", ["엎드려 팔과 다리를 길게 뻗어요.", "팔과 다리를 동시에 살짝 들어요.", "1초 멈춘 뒤 천천히 내려요.", "허리가 찌릿하면 범위를 줄여요."]),
  squat: guide("허벅지와 엉덩이를 키우는 기본 하체 운동이에요.", ["발은 어깨너비로 벌리고 발끝은 살짝 바깥으로 둬요.", "엉덩이를 뒤로 빼며 앉아요.", "무릎이 발끝 방향과 같게 움직이게 해요.", "올라올 때 발바닥 전체로 바닥을 밀어요."]),
  squatFriday: guide("전신 루틴 마무리 스쿼트예요. 속도보다 안정감이 중요해요.", ["발바닥 전체를 바닥에 붙여요.", "가슴을 너무 숙이지 않아요.", "무릎이 안쪽으로 모이지 않게 해요.", "힘들면 5회씩 끊어서 해도 좋아요."]),
  lunge: guide("한쪽 다리씩 균형과 허벅지 힘을 키우는 운동이에요.", ["한 발을 앞으로 크게 내딛어요.", "앞무릎과 뒷무릎을 천천히 굽혀요.", "상체는 세우고 흔들리지 않게 해요.", "양쪽을 같은 횟수로 반복해요."]),
  wallSit: guide("벽에 기대 앉아 허벅지를 버티는 운동이에요.", ["등을 벽에 붙이고 발을 앞으로 내밀어요.", "무릎이 약 90도가 되게 앉아요.", "손으로 허벅지를 누르지 않아요.", "허벅지가 타는 느낌은 괜찮지만 통증이면 쉬어요."]),
  calfRaise: guide("종아리와 발목 안정성을 키우는 운동이에요.", ["발을 골반 너비로 두고 서요.", "까치발을 들며 위로 올라가요.", "잠깐 멈춘 뒤 천천히 내려요.", "흔들리면 벽을 가볍게 잡아요."]),
  ytPose: guide("Y와 T 모양으로 팔을 들어 어깨 뒤쪽을 안정화해요.", ["엎드리거나 상체를 살짝 숙여요.", "팔을 Y 모양으로 들어 10회 해요.", "팔을 T 모양으로 들어 10회 해요.", "목에 힘이 들어가면 잠깐 쉬어요."]),
  crunch: guide("복근 윗부분을 천천히 수축하는 운동이에요.", ["무릎을 세우고 누워요.", "손은 머리를 당기지 말고 가볍게 둬요.", "배에 힘을 주며 어깨만 살짝 들어요.", "내려올 때도 천천히 버텨요."]),
  legRaise: guide("아랫배와 코어를 쓰는 운동이에요.", ["누워서 다리를 모아요.", "허리가 뜨지 않게 배에 힘을 줘요.", "다리를 천천히 올리고 내려요.", "허리가 아프면 무릎을 굽혀서 해요."]),
  mountainClimber: guide("플랭크 자세에서 무릎을 번갈아 당기는 전신 운동이에요.", ["손을 어깨 아래에 두고 플랭크 자세를 만들어요.", "한쪽 무릎을 가슴 쪽으로 당겨요.", "다리를 바꾸며 리듬 있게 반복해요.", "엉덩이가 너무 올라가지 않게 해요."]),
};

const state = {
  data: loadState(),
  todayId: getTodayId(),
  expanded: getTodayId(),
  screen: "today",
  theme: loadTheme(),
  guideExercise: null,
  timer: { base: 30, remaining: 30, interval: null, running: false },
  camera: {
    stream: null,
    vision: null,
    landmarker: null,
    drawing: null,
    raf: null,
    lastVideoTime: -1,
    count: 0,
    phase: "up",
    pendingPhase: null,
    pendingSince: 0,
    lastCountAt: 0,
    peakSignal: 0,
    lowSignal: 1,
    smoothedSignal: null,
    holdStarted: null,
    lastMotion: null,
  },
};

const els = {
  todayDate: document.querySelector("#todayDate"),
  themeToggle: document.querySelector("#themeToggle"),
  streakCount: document.querySelector("#streakCount"),
  weekDots: document.querySelector("#weekDots"),
  tabs: [...document.querySelectorAll(".tab-button")],
  screens: {
    today: document.querySelector("#screenToday"),
    camera: document.querySelector("#screenCamera"),
    stats: document.querySelector("#screenStats"),
  },
  dayList: document.querySelector("#dayList"),
  cameraExercise: document.querySelector("#cameraExercise"),
  cameraButton: document.querySelector("#cameraButton"),
  cameraVideo: document.querySelector("#cameraVideo"),
  poseCanvas: document.querySelector("#poseCanvas"),
  cameraEmpty: document.querySelector("#cameraEmpty"),
  repCount: document.querySelector("#repCount"),
  repLabel: document.querySelector("#repLabel"),
  motionMeter: document.querySelector("#motionMeter"),
  motionFeedback: document.querySelector("#motionFeedback"),
  cameraGuideTitle: document.querySelector("#cameraGuideTitle"),
  cameraGuideSteps: document.querySelector("#cameraGuideSteps"),
  resetCounterButton: document.querySelector("#resetCounterButton"),
  totalSets: document.querySelector("#totalSets"),
  weekComplete: document.querySelector("#weekComplete"),
  weekProgress: document.querySelector("#weekProgress"),
  todayProgress: document.querySelector("#todayProgress"),
  weekBars: document.querySelector("#weekBars"),
  guideBackdrop: document.querySelector("#guideBackdrop"),
  guideCloseButton: document.querySelector("#guideCloseButton"),
  guideTitle: document.querySelector("#guideTitle"),
  guideIntro: document.querySelector("#guideIntro"),
  guideSteps: document.querySelector("#guideSteps"),
  guideCameraButton: document.querySelector("#guideCameraButton"),
  timerDisplay: document.querySelector("#timerDisplay"),
  timerButton: document.querySelector("#timerButton"),
  minusTimeButton: document.querySelector("#minusTimeButton"),
  plusTimeButton: document.querySelector("#plusTimeButton"),
};

function item(id, name, target) {
  return { id, name, target };
}

function guide(intro, steps) {
  return { intro, steps };
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem("summerFitDarkState")) || { days: {} };
  } catch {
    return { days: {} };
  }
}

function saveState() {
  localStorage.setItem("summerFitDarkState", JSON.stringify(state.data));
}

function loadTheme() {
  return localStorage.getItem("summerFitTheme") || "dark";
}

function saveTheme() {
  localStorage.setItem("summerFitTheme", state.theme);
}

function getTodayId() {
  return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()];
}

function getDayState(dayId) {
  state.data.days[dayId] ||= { sets: {}, completedAt: null };
  state.data.days[dayId].sets ||= {};
  return state.data.days[dayId];
}

function formatToday() {
  const date = new Date();
  const dayText = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  return `${date.getMonth() + 1}월 ${date.getDate()}일 (${dayText})`;
}

function render() {
  applyTheme();
  els.todayDate.textContent = formatToday();
  renderTabs();
  renderWeekDots();
  renderDays();
  renderCameraOptions();
  renderStats();
  refreshIcons();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const nextMode = state.theme === "dark" ? "라이트" : "다크";
  els.themeToggle.setAttribute("aria-label", `${nextMode} 모드로 변경`);
  els.themeToggle.innerHTML = state.theme === "dark" ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveTheme();
  render();
}

function renderTabs() {
  els.tabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === state.screen);
  });
  Object.entries(els.screens).forEach(([screen, element]) => {
    element.classList.toggle("active", screen === state.screen);
  });
}

function renderWeekDots() {
  els.weekDots.innerHTML = days.map((day) => {
    const done = day.rest ? false : getDayProgress(day).percent === 100;
    return `<button class="week-dot ${day.id === state.todayId ? "today" : ""} ${done ? "done" : ""}" type="button" data-day="${day.id}" aria-label="${day.name} 보기">${day.short}</button>`;
  }).join("");
  els.streakCount.textContent = calculateStreak();
}

function renderDays() {
  els.dayList.innerHTML = days.map((day) => renderDayCard(day)).join("");
}

function renderDayCard(day) {
  const progress = getDayProgress(day);
  const expanded = state.expanded === day.id;
  const isToday = state.todayId === day.id;
  const circle = renderProgressRing(progress.percent, day.color);
  return `
    <article class="day-card ${expanded ? "expanded" : ""}">
      <button class="day-summary" type="button" data-toggle-day="${day.id}">
        <div>
          <div class="day-title-row">
            <span class="day-dot" style="background:${day.color}"></span>
            <h2 class="day-name">${day.name}${isToday ? '<span class="today-pill">오늘</span>' : ""}</h2>
          </div>
          <p class="day-type">${day.type}</p>
        </div>
        <div class="day-actions">
          ${day.rest ? "" : circle}
          <i class="chevron" data-lucide="chevron-down"></i>
        </div>
      </button>
      <div class="day-body">
        ${day.rest ? renderRest(day) : renderExerciseList(day)}
      </div>
    </article>
  `;
}

function renderProgressRing(percent, color) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;
  return `
    <div class="progress-ring" aria-label="${percent}% 완료">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="${radius}" fill="none" stroke="#2a2b2f" stroke-width="4"></circle>
        <circle cx="24" cy="24" r="${radius}" fill="none" stroke="${percent === 100 ? "#37d187" : color}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <span>${percent}%</span>
    </div>
  `;
}

function renderExerciseList(day) {
  return `
    <div class="warmup"><strong>준비운동.</strong> ${day.warmup.join(" · ")}</div>
    ${day.items.map((exercise) => renderExercise(day, exercise)).join("")}
  `;
}

function renderExercise(day, exercise) {
  const dayState = getDayState(day.id);
  const done = isExerciseDone(day, exercise);
  const setCount = getSetCount(exercise);
  return `
    <div class="exercise-item">
      <button class="exercise-check ${done ? "done" : ""}" type="button" data-toggle-exercise="${day.id}:${exercise.id}" aria-label="${exercise.name} 전체 체크">
        <i data-lucide="check"></i>
      </button>
      <div>
        <h3 class="exercise-name">${exercise.name}</h3>
        <p class="exercise-target">${exercise.target}</p>
        <div class="set-row">
          ${Array.from({ length: setCount }, (_, index) => `
            <button class="set-pill ${isSetDone(dayState, exercise.id, index) ? "done" : ""}" type="button" data-toggle-set="${day.id}:${exercise.id}:${index}" aria-label="${exercise.name} ${index + 1}세트">${index + 1}</button>
          `).join("")}
        </div>
        <button class="guide-link" type="button" data-guide="${day.id}:${exercise.id}">
          <i data-lucide="book-open"></i>
          어떻게 하는 거야?
        </button>
      </div>
    </div>
  `;
}

function renderRest(day) {
  return `
    <div class="rest-body">
      <p>오늘은 쉬는 날이에요. 가볍게 움직이거나 충분히 쉬어도 좋아요.</p>
      <ul>${day.restItems.map((rest) => `<li>${rest}</li>`).join("")}</ul>
    </div>
  `;
}

function getSetCount(exercise) {
  const match = exercise.target.match(/(\d+)세트/);
  return match ? Number(match[1]) : 1;
}

function getDayProgress(day) {
  if (day.rest) {
    return { done: 0, total: 0, percent: 0 };
  }
  const total = day.items.length;
  const done = day.items.filter((exercise) => isExerciseDone(day, exercise)).length;
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

function isSetDone(dayState, exerciseId, setIndex) {
  return Boolean(dayState.sets?.[exerciseId]?.[setIndex]);
}

function isExerciseDone(day, exercise) {
  const dayState = getDayState(day.id);
  return Array.from({ length: getSetCount(exercise) }, (_, index) => isSetDone(dayState, exercise.id, index)).every(Boolean);
}

function toggleExercise(dayId, exerciseId) {
  const day = days.find((candidate) => candidate.id === dayId);
  const exercise = day.items.find((candidate) => candidate.id === exerciseId);
  const dayState = getDayState(dayId);
  const next = !isExerciseDone(day, exercise);
  dayState.sets[exerciseId] = {};
  Array.from({ length: getSetCount(exercise) }, (_, index) => {
    dayState.sets[exerciseId][index] = next;
  });
  syncCompleted(day);
  saveState();
  render();
}

function toggleSet(dayId, exerciseId, setIndex) {
  const day = days.find((candidate) => candidate.id === dayId);
  const dayState = getDayState(dayId);
  dayState.sets[exerciseId] ||= {};
  dayState.sets[exerciseId][setIndex] = !isSetDone(dayState, exerciseId, setIndex);
  syncCompleted(day);
  saveState();
  render();
}

function syncCompleted(day) {
  const dayState = getDayState(day.id);
  dayState.completedAt = !day.rest && getDayProgress(day).percent === 100 ? getDateKey() : null;
}

function getDateKey(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function calculateStreak() {
  let count = 0;
  for (let offset = 0; offset > -30; offset -= 1) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const id = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][date.getDay()];
    const day = days.find((candidate) => candidate.id === id);
    if (day?.rest) {
      continue;
    }
    if (getDayState(id).completedAt === date.toISOString().slice(0, 10)) {
      count += 1;
    } else {
      break;
    }
  }
  return count;
}

function renderStats() {
  const workoutDays = days.filter((day) => !day.rest);
  const totalSets = workoutDays.reduce((sum, day) => {
    const dayState = getDayState(day.id);
    return sum + day.items.reduce((setSum, exercise) => {
      return setSum + Array.from({ length: getSetCount(exercise) }, (_, index) => isSetDone(dayState, exercise.id, index)).filter(Boolean).length;
    }, 0);
  }, 0);
  const completedDays = workoutDays.filter((day) => getDayProgress(day).percent === 100).length;
  const average = Math.round(workoutDays.reduce((sum, day) => sum + getDayProgress(day).percent, 0) / workoutDays.length);
  const today = days.find((day) => day.id === state.todayId);

  els.totalSets.textContent = totalSets;
  els.weekComplete.textContent = completedDays;
  els.weekProgress.textContent = `${average}%`;
  els.todayProgress.textContent = `${getDayProgress(today).percent}%`;
  els.weekBars.innerHTML = days.map((day) => {
    const percent = day.rest ? 0 : getDayProgress(day).percent;
    return `
      <div class="bar-row">
        <span>${day.short}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${percent}%; background:${percent === 100 ? "#37d187" : day.color}"></div></div>
        <span>${day.rest ? "휴식" : `${percent}%`}</span>
      </div>
    `;
  }).join("");
}

function renderCameraOptions() {
  const selected = els.cameraExercise.value;
  const trackable = days.flatMap((day) => day.items || []).filter((exercise) => trackers[exercise.id]);
  const selectedExercise = trackable.find((exercise) => exercise.id === selected);
  const unique = [];
  const seenNames = new Set();
  trackable.forEach((exercise) => {
    if (!seenNames.has(exercise.name)) {
      seenNames.add(exercise.name);
      unique.push(exercise);
    }
  });
  els.cameraExercise.innerHTML = unique.map((exercise) => `<option value="${exercise.id}">${exercise.name}</option>`).join("");
  els.cameraExercise.value = unique.some((exercise) => exercise.id === selected)
    ? selected
    : unique.find((exercise) => exercise.name === selectedExercise?.name)?.id || unique[0]?.id;
  updateTrackerLabel();
  renderCameraGuide();
}

function renderCameraGuide() {
  const exerciseId = els.cameraExercise.value;
  const exercise = days.flatMap((day) => day.items || []).find((candidate) => candidate.id === exerciseId);
  const detail = guides[exerciseId] || guide("천천히 진행하고 통증이 있으면 바로 쉬세요.", ["준비 자세를 확인해요.", "목표 횟수나 시간을 진행해요."]);
  const tracker = trackers[exerciseId] || { kind: "rep" };
  const countTip = tracker.kind === "time" ? "카메라가 자세를 유지한 시간을 초 단위로 세요." : "내려가거나 들어 올린 뒤 다시 돌아오면 1회로 세요.";
  els.cameraGuideTitle.textContent = exercise?.name || "운동 선택";
  els.cameraGuideSteps.innerHTML = [countTip, ...detail.steps.slice(0, 3)].map((step) => `<li>${step}</li>`).join("");
}

function openGuide(dayId, exerciseId) {
  const day = days.find((candidate) => candidate.id === dayId);
  const exercise = day.items.find((candidate) => candidate.id === exerciseId);
  const detail = guides[exercise.id] || guide("천천히 진행하고 통증이 있으면 바로 쉬세요.", ["준비 자세를 확인해요.", "목표 횟수나 시간을 진행해요.", "세트 사이에 40~60초 쉬어요."]);
  state.guideExercise = exercise;
  els.guideTitle.textContent = exercise.name;
  els.guideIntro.textContent = `${exercise.target} · ${detail.intro}`;
  els.guideSteps.innerHTML = detail.steps.map((step) => `<li>${step}</li>`).join("");
  const seconds = getSuggestedSeconds(exercise);
  state.timer.base = seconds;
  state.timer.remaining = seconds;
  updateTimerDisplay();
  els.guideBackdrop.hidden = false;
  requestAnimationFrame(() => els.guideBackdrop.classList.add("open"));
  refreshIcons();
}

function closeGuide() {
  els.guideBackdrop.classList.remove("open");
  window.setTimeout(() => {
    if (!els.guideBackdrop.classList.contains("open")) {
      els.guideBackdrop.hidden = true;
    }
  }, 180);
}

function switchScreen(screen) {
  state.screen = screen;
  renderTabs();
  if (screen === "stats") {
    renderStats();
  }
  if (screen === "camera") {
    window.setTimeout(() => resizeCanvas(), 60);
  }
}

function guideToCamera() {
  if (state.guideExercise) {
    els.cameraExercise.value = state.guideExercise.id;
    resetCounter();
  }
  closeGuide();
  switchScreen("camera");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSuggestedSeconds(exercise) {
  const match = exercise.target.match(/(\d+)(?:~\d+)?초/);
  if (match) {
    return Number(match[1]);
  }
  return trackers[exercise.id]?.kind === "time" ? 30 : 25;
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.timer.remaining / 60).toString().padStart(2, "0");
  const seconds = (state.timer.remaining % 60).toString().padStart(2, "0");
  els.timerDisplay.textContent = `${minutes}:${seconds}`;
}

function toggleTimer() {
  if (state.timer.running) {
    clearInterval(state.timer.interval);
    state.timer.running = false;
    els.timerButton.innerHTML = '<i data-lucide="play"></i>계속';
    refreshIcons();
    return;
  }
  state.timer.running = true;
  els.timerButton.innerHTML = '<i data-lucide="pause"></i>일시정지';
  refreshIcons();
  state.timer.interval = setInterval(() => {
    state.timer.remaining -= 1;
    if (state.timer.remaining <= 0) {
      clearInterval(state.timer.interval);
      state.timer.running = false;
      state.timer.remaining = state.timer.base;
      els.timerButton.innerHTML = '<i data-lucide="play"></i>시작';
    }
    updateTimerDisplay();
    refreshIcons();
  }, 1000);
}

function adjustTimer(delta) {
  state.timer.base = Math.min(180, Math.max(10, state.timer.base + delta));
  if (!state.timer.running) {
    state.timer.remaining = state.timer.base;
    updateTimerDisplay();
  }
}

async function toggleCamera() {
  if (state.camera.stream) {
    stopCamera();
    return;
  }
  els.cameraButton.disabled = true;
  els.cameraButton.innerHTML = '<i data-lucide="loader-circle"></i>준비 중';
  refreshIcons();
  try {
    await initPose();
    state.camera.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    els.cameraVideo.srcObject = state.camera.stream;
    await els.cameraVideo.play();
    resizeCanvas();
    enterCameraFullscreen();
    resetCounter();
    els.cameraEmpty.classList.add("hidden");
    els.cameraButton.innerHTML = '<i data-lucide="square"></i>카메라 끄기';
    state.camera.raf = requestAnimationFrame(detectPose);
  } catch {
    els.motionFeedback.textContent = "카메라를 사용할 수 없어요. 브라우저 권한을 확인해 주세요.";
    stopCamera();
  } finally {
    els.cameraButton.disabled = false;
    refreshIcons();
  }
}

async function initPose() {
  if (state.camera.landmarker) {
    return;
  }
  state.camera.vision ||= await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35");
  const { DrawingUtils, FilesetResolver, PoseLandmarker } = state.camera.vision;
  const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm");
  state.camera.landmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task",
      delegate: "GPU",
    },
    runningMode: "VIDEO",
    numPoses: 1,
  });
  state.camera.drawing = new DrawingUtils(els.poseCanvas.getContext("2d"));
}

function stopCamera() {
  if (state.camera.raf) {
    cancelAnimationFrame(state.camera.raf);
  }
  state.camera.raf = null;
  state.camera.stream?.getTracks().forEach((track) => track.stop());
  state.camera.stream = null;
  els.cameraVideo.srcObject = null;
  els.poseCanvas.getContext("2d").clearRect(0, 0, els.poseCanvas.width, els.poseCanvas.height);
  els.cameraEmpty.classList.remove("hidden");
  els.cameraButton.innerHTML = '<i data-lucide="camera"></i>카메라 켜기';
  exitCameraFullscreen();
  refreshIcons();
}

function enterCameraFullscreen() {
  document.body.classList.add("camera-fullscreen");
  const fullscreenRequest = document.documentElement.requestFullscreen?.({ navigationUI: "hide" });
  fullscreenRequest?.catch(() => {});
  resizeCanvas();
}

function exitCameraFullscreen() {
  document.body.classList.remove("camera-fullscreen");
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  }
}

function resizeCanvas() {
  const rect = els.poseCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  els.poseCanvas.width = Math.round(rect.width * ratio);
  els.poseCanvas.height = Math.round(rect.height * ratio);
}

function detectPose() {
  if (!state.camera.stream || !state.camera.landmarker) {
    return;
  }
  const video = els.cameraVideo;
  if (video.currentTime !== state.camera.lastVideoTime) {
    state.camera.lastVideoTime = video.currentTime;
    const result = state.camera.landmarker.detectForVideo(video, performance.now());
    drawPose(result);
    analyzePose(result.landmarks?.[0]);
  }
  state.camera.raf = requestAnimationFrame(detectPose);
}

function drawPose(result) {
  const canvas = els.poseCanvas;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (result.landmarks?.[0]) {
    state.camera.drawing.drawConnectors(result.landmarks[0], state.camera.vision.PoseLandmarker.POSE_CONNECTIONS, {
      color: "#3f8cff",
      lineWidth: 4,
    });
    state.camera.drawing.drawLandmarks(result.landmarks[0], {
      color: "#ffffff",
      lineWidth: 2,
      radius: 3,
    });
  }
}

function analyzePose(landmarks) {
  if (!landmarks) {
    resetMotionState();
    els.motionFeedback.textContent = "전신이 화면 안에 들어오게 한 걸음 뒤로 가보세요.";
    return;
  }
  const tracker = trackers[els.cameraExercise.value] || { mode: "motion", kind: "rep", label: "회" };
  const metrics = getMetrics(landmarks);
  if (metrics.visibility < 0.48) {
    resetMotionState();
    els.motionMeter.style.width = "0%";
    els.motionFeedback.textContent = "몸 전체가 더 잘 보이게 카메라에서 조금 멀어져 보세요.";
    return;
  }

  let signal = 0;
  if (tracker.mode === "squat") {
    signal = normalize(170 - Math.min(metrics.leftKnee, metrics.rightKnee), 10, 70);
    signal = smoothSignal(signal);
    countByThreshold(signal, 0.42, 0.34, { minHold: 60, minRange: 0.13, minReturn: 0.1, cooldown: 520 });
    els.motionFeedback.textContent = signal > 0.7 ? "좋아요. 올라올 때도 천천히 버텨요." : "무릎과 발끝 방향을 맞춰요.";
  } else if (tracker.mode === "pushup") {
    signal = normalize(170 - Math.min(metrics.leftElbow, metrics.rightElbow), 20, 85);
    signal = smoothSignal(signal);
    countByThreshold(signal, 0.48, 0.34, { minHold: 60, minRange: 0.14, minReturn: 0.11, cooldown: 540 });
    els.motionFeedback.textContent = signal > 0.65 ? "몸을 일직선으로 유지해요." : "팔꿈치를 천천히 굽혀요.";
  } else if (tracker.mode === "arms") {
    signal = normalize(metrics.wristLift, 0.05, 0.35);
    signal = smoothSignal(signal);
    countByThreshold(signal, 0.5, 0.35, { minHold: 50, minRange: 0.14, minReturn: 0.1, cooldown: 500 });
    els.motionFeedback.textContent = "어깨가 으쓱 올라가지 않게 목을 길게 둬요.";
  } else if (tracker.mode === "knees") {
    signal = normalize(metrics.kneeDrive, 0.06, 0.28);
    signal = smoothSignal(signal);
    countByThreshold(signal, 0.5, 0.34, { minHold: 50, minRange: 0.14, minReturn: 0.1, cooldown: 480 });
    els.motionFeedback.textContent = "복부에 힘을 주고 허리가 꺾이지 않게 해요.";
  } else if (tracker.mode === "hold") {
    signal = getHoldSignal(metrics, els.cameraExercise.value);
    signal = smoothSignal(signal);
    countHold(signal);
    els.motionFeedback.textContent = signal > 0.55 ? "자세 유지 중. 숨을 멈추지 마세요." : "몸이 화면 안에 잘 보이게 맞춰요.";
  } else {
    signal = countGeneralMotion(metrics.motion);
    els.motionFeedback.textContent = "반복 움직임을 보고 있어요. 같은 속도로 이어가요.";
  }
  updateCounter(tracker.kind, signal);
}

function getMetrics(lm) {
  const p = (index) => lm[index];
  const leftElbow = angle(p(11), p(13), p(15));
  const rightElbow = angle(p(12), p(14), p(16));
  const leftKnee = angle(p(23), p(25), p(27));
  const rightKnee = angle(p(24), p(26), p(28));
  const wristLift = Math.max(p(11).y - p(15).y, p(12).y - p(16).y);
  const kneeDrive = Math.max(Math.abs(p(25).y - p(23).y), Math.abs(p(26).y - p(24).y));
  const holdQuality = Math.max(0, Math.min(1, (1 - Math.abs(p(11).y - p(12).y) * 8 + 1 - Math.abs(p(23).y - p(24).y) * 8) / 2));
  const shoulderY = (p(11).y + p(12).y) / 2;
  const hipY = (p(23).y + p(24).y) / 2;
  const visibility = [11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28]
    .map((index) => lm[index]?.visibility ?? lm[index]?.presence ?? 1)
    .reduce((sum, value) => sum + value, 0) / 12;
  const center = {
    x: (p(11).x + p(12).x + p(23).x + p(24).x) / 4,
    y: (p(11).y + p(12).y + p(23).y + p(24).y) / 4,
  };
  const previous = state.camera.lastMotion;
  state.camera.lastMotion = center;
  const motion = previous ? Math.hypot(center.x - previous.x, center.y - previous.y) : 0;
  return { leftElbow, rightElbow, leftKnee, rightKnee, wristLift, kneeDrive, holdQuality, shoulderY, hipY, visibility, motion };
}

function getHoldSignal(metrics, exerciseId) {
  if (exerciseId === "wallSit") {
    return normalize(165 - Math.min(metrics.leftKnee, metrics.rightKnee), 35, 85);
  }
  const torsoYDistance = Math.abs(metrics.shoulderY - metrics.hipY);
  const horizontalBody = normalize(0.32 - torsoYDistance, 0.02, 0.2);
  return Math.min(horizontalBody, metrics.holdQuality);
}

function smoothSignal(signal) {
  if (state.camera.smoothedSignal === null) {
    state.camera.smoothedSignal = signal;
  } else {
    state.camera.smoothedSignal = state.camera.smoothedSignal * 0.58 + signal * 0.42;
  }
  return state.camera.smoothedSignal;
}

function resetMotionState() {
  state.camera.phase = "up";
  state.camera.pendingPhase = null;
  state.camera.pendingSince = 0;
  state.camera.peakSignal = 0;
  state.camera.lowSignal = 1;
  state.camera.smoothedSignal = null;
  state.camera.holdStarted = null;
  state.camera.lastMotion = null;
}

function angle(a, b, c) {
  const ab = { x: a.x - b.x, y: a.y - b.y };
  const cb = { x: c.x - b.x, y: c.y - b.y };
  const dot = ab.x * cb.x + ab.y * cb.y;
  const mag = Math.hypot(ab.x, ab.y) * Math.hypot(cb.x, cb.y);
  return Math.acos(Math.min(Math.max(dot / mag, -1), 1)) * (180 / Math.PI);
}

function normalize(value, min, max) {
  return Math.max(0, Math.min(1, (value - min) / (max - min)));
}

function countByThreshold(signal, down, up, options = {}) {
  const now = performance.now();
  const minHold = options.minHold ?? 60;
  const cooldown = options.cooldown ?? 520;
  const minRange = options.minRange ?? 0.13;
  const minReturn = options.minReturn ?? Math.max(0.08, minRange * 0.75);

  if (state.camera.phase === "up") {
    state.camera.lowSignal = Math.min(state.camera.lowSignal, signal);
    const movedEnough = signal > down || signal - state.camera.lowSignal >= minRange;
    if (movedEnough) {
      if (state.camera.pendingPhase !== "down") {
        state.camera.pendingPhase = "down";
        state.camera.pendingSince = now;
      }
      if (now - state.camera.pendingSince >= minHold) {
        state.camera.phase = "down";
        state.camera.peakSignal = signal;
        state.camera.pendingPhase = null;
      }
    } else {
      state.camera.pendingPhase = null;
    }
    return;
  }

  state.camera.peakSignal = Math.max(state.camera.peakSignal, signal);
  const returnedEnough = signal < up || state.camera.peakSignal - signal >= minReturn;
  const completedRange = state.camera.peakSignal - state.camera.lowSignal >= minRange;
  if (returnedEnough && completedRange) {
    if (state.camera.pendingPhase !== "up") {
      state.camera.pendingPhase = "up";
      state.camera.pendingSince = now;
    }
    if (now - state.camera.pendingSince >= minHold && now - state.camera.lastCountAt >= cooldown) {
      state.camera.phase = "up";
      state.camera.lastCountAt = now;
      state.camera.peakSignal = 0;
      state.camera.lowSignal = signal;
      state.camera.pendingPhase = null;
      state.camera.count += 1;
    }
  } else {
    state.camera.pendingPhase = null;
  }
}

function countHold(signal) {
  if (signal > 0.48) {
    state.camera.holdStarted ??= performance.now();
    state.camera.count = Math.floor((performance.now() - state.camera.holdStarted) / 1000);
  } else {
    state.camera.holdStarted = null;
  }
}

function countGeneralMotion(motion) {
  const signal = smoothSignal(normalize(motion, 0.008, 0.035));
  countByThreshold(signal, 0.55, 0.3, { minHold: 90, minRange: 0.16, minReturn: 0.1, cooldown: 620 });
  return signal;
}

function updateCounter(kind, signal) {
  els.repCount.textContent = state.camera.count;
  els.motionMeter.style.width = `${Math.round(signal * 100)}%`;
  els.repLabel.textContent = kind === "time" ? "초" : "회";
}

function resetCounter() {
  state.camera.count = 0;
  resetMotionState();
  state.camera.lastCountAt = 0;
  els.repCount.textContent = "0";
  els.motionMeter.style.width = "0%";
  updateTrackerLabel();
  renderCameraGuide();
}

function updateTrackerLabel() {
  const tracker = trackers[els.cameraExercise.value] || { label: "회" };
  els.repLabel.textContent = tracker.label;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener("click", (event) => {
  const dayButton = event.target.closest("[data-toggle-day]");
  const exerciseButton = event.target.closest("[data-toggle-exercise]");
  const setButton = event.target.closest("[data-toggle-set]");
  const guideButton = event.target.closest("[data-guide]");
  const weekDot = event.target.closest("[data-day]");

  if (dayButton) {
    state.expanded = state.expanded === dayButton.dataset.toggleDay ? "" : dayButton.dataset.toggleDay;
    render();
  } else if (exerciseButton) {
    const [dayId, exerciseId] = exerciseButton.dataset.toggleExercise.split(":");
    toggleExercise(dayId, exerciseId);
  } else if (setButton) {
    const [dayId, exerciseId, index] = setButton.dataset.toggleSet.split(":");
    toggleSet(dayId, exerciseId, Number(index));
  } else if (guideButton) {
    const [dayId, exerciseId] = guideButton.dataset.guide.split(":");
    openGuide(dayId, exerciseId);
  } else if (weekDot) {
    state.expanded = weekDot.dataset.day;
    switchScreen("today");
    render();
  }
});

els.tabs.forEach((button) => button.addEventListener("click", () => switchScreen(button.dataset.screen)));
els.themeToggle.addEventListener("click", toggleTheme);
els.guideCloseButton.addEventListener("click", closeGuide);
els.guideBackdrop.addEventListener("click", (event) => {
  if (event.target === els.guideBackdrop) {
    closeGuide();
  }
});
els.guideCameraButton.addEventListener("click", guideToCamera);
els.timerButton.addEventListener("click", toggleTimer);
els.minusTimeButton.addEventListener("click", () => adjustTimer(-10));
els.plusTimeButton.addEventListener("click", () => adjustTimer(10));
els.cameraButton.addEventListener("click", toggleCamera);
els.cameraExercise.addEventListener("change", resetCounter);
els.resetCounterButton.addEventListener("click", resetCounter);
window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.guideBackdrop.hidden) {
    closeGuide();
  }
});

render();
updateTimerDisplay();
