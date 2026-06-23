const vehicle = {
  name: "鴻華 Bria",
  batteryKwh: 57.7,
  kmPerPercent: 3,
  maxHomeAmps: 22,
  offPeakStart: 0,
  offPeakEnd: 9 * 60,
};

const stations = [
  {
    road: "國道1號",
    name: "中壢服務區",
    direction: "雙向",
    parking: "小型車 C 區",
    spaces: 10,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道一號 中壢服務區 充電站",
  },
  {
    road: "國道1號",
    name: "湖口服務區南站",
    direction: "南下",
    parking: "駕駛人休息室旁",
    spaces: 6,
    plugs: "CCS1、CCS2、TPC",
    mapsQuery: "國道一號 湖口服務區南站 充電站",
  },
  {
    road: "國道1號",
    name: "湖口服務區北站",
    direction: "北上",
    parking: "小型車 E 區，鄰加油站",
    spaces: 6,
    plugs: "CCS1、CCS2、TPC",
    mapsQuery: "國道一號 湖口服務區北站 充電站",
  },
  {
    road: "國道1號",
    name: "泰安服務區南站",
    direction: "南下",
    parking: "大型車停車場，鄰加油站",
    spaces: 10,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道一號 泰安服務區南站 充電站",
  },
  {
    road: "國道1號",
    name: "泰安服務區北站",
    direction: "北上",
    parking: "小型車停車場，鄰公警隊",
    spaces: 10,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道一號 泰安服務區北站 充電站",
  },
  {
    road: "國道1號",
    name: "西螺服務區南站",
    direction: "南下",
    parking: "小型車 C 區",
    spaces: 6,
    plugs: "DC-CCS1、CCS2",
    mapsQuery: "國道一號 西螺服務區南站 充電站",
  },
  {
    road: "國道1號",
    name: "西螺服務區北站",
    direction: "北上",
    parking: "小型車 C 區",
    spaces: 8,
    plugs: "DC-CCS1、CCS2",
    mapsQuery: "國道一號 西螺服務區北站 充電站",
  },
  {
    road: "國道1號",
    name: "西螺服務區北站加油站",
    direction: "北上",
    parking: "加油站內",
    spaces: 4,
    plugs: "DC-CCS1、CCS2",
    mapsQuery: "國道一號 西螺服務區北站 加油站 充電站",
  },
  {
    road: "國道1號",
    name: "新營服務區南站",
    direction: "南下",
    parking: "大型車停車場",
    spaces: 2,
    plugs: "DC-CCS1、CCS2",
    mapsQuery: "國道一號 新營服務區南站 充電站",
  },
  {
    road: "國道1號",
    name: "新營服務區北站",
    direction: "北上",
    parking: "大型車停車場",
    spaces: 2,
    plugs: "DC-CCS1、CCS2",
    mapsQuery: "國道一號 新營服務區北站 充電站",
  },
  {
    road: "國道1號",
    name: "仁德服務區南站",
    direction: "南下",
    parking: "星巴克景觀區外側",
    spaces: 6,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道一號 仁德服務區南站 充電站",
  },
  {
    road: "國道1號",
    name: "仁德服務區北站",
    direction: "北上",
    parking: "星巴克景觀區外側",
    spaces: 4,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道一號 仁德服務區北站 充電站",
  },
  {
    road: "國道3號",
    name: "關西服務區",
    direction: "雙向",
    parking: "小型車 I 區、大貨車 M 區",
    spaces: 10,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 關西服務區 充電站",
  },
  {
    road: "國道3號",
    name: "西湖服務區南站",
    direction: "南下",
    parking: "小型車 B 區",
    spaces: 8,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 西湖服務區南站 充電站",
  },
  {
    road: "國道3號",
    name: "西湖服務區北站",
    direction: "北上",
    parking: "小型車 D 區",
    spaces: 8,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 西湖服務區北站 充電站",
  },
  {
    road: "國道3號",
    name: "清水服務區",
    direction: "雙向",
    parking: "小型車 A 區",
    spaces: 6,
    plugs: "DC-CCS1、CCS2、TPC",
    mapsQuery: "國道三號 清水服務區 充電站",
  },
  {
    road: "國道3號",
    name: "南投服務區",
    direction: "雙向",
    parking: "小型車 A 區",
    spaces: 10,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 南投服務區 充電站",
  },
  {
    road: "國道3號",
    name: "古坑服務區",
    direction: "雙向",
    parking: "小型車 H 區",
    spaces: 4,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 古坑服務區 充電站",
  },
  {
    road: "國道3號",
    name: "東山服務區",
    direction: "雙向",
    parking: "服務區停車場，鄰加油站",
    spaces: 6,
    plugs: "DC-CCS1、CCS2、TPC",
    mapsQuery: "國道三號 東山服務區 充電站",
  },
  {
    road: "國道3號",
    name: "關廟服務區南站",
    direction: "南下",
    parking: "小型車 A 區",
    spaces: 6,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 關廟服務區南站 充電站",
  },
  {
    road: "國道3號",
    name: "關廟服務區北站",
    direction: "北上",
    parking: "小型車 A 區",
    spaces: 6,
    plugs: "CCS1、CCS2",
    mapsQuery: "國道三號 關廟服務區北站 充電站",
  },
];

const chargeForm = document.getElementById("chargeForm");
const chargeResult = document.getElementById("chargeResult");
const stationGrid = document.getElementById("stationGrid");
const stationSummary = document.getElementById("stationSummary");
const mapList = document.getElementById("mapList");
const powerText = document.getElementById("powerText");
const oneNightText = document.getElementById("oneNightText");
const roadButtons = document.querySelectorAll("[data-road-filter]");

let activeRoadFilter = "all";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseTimeToMinute(value) {
  const [hours, minutes] = String(value || "00:00").split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return 0;
  return clamp(hours, 0, 23) * 60 + clamp(minutes, 0, 59);
}

function formatClock(totalMinutes) {
  const minuteOfDay = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
  const hours = Math.floor(minuteOfDay / 60);
  const minutes = minuteOfDay % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function formatDuration(minutes) {
  const rounded = Math.max(0, Math.ceil(minutes));
  const hours = Math.floor(rounded / 60);
  const mins = rounded % 60;
  if (!hours) return `${mins} 分鐘`;
  if (!mins) return `${hours} 小時`;
  return `${hours} 小時 ${mins} 分鐘`;
}

function formatKwh(value) {
  return `${value.toFixed(1)} 度`;
}

function isOffPeakMinute(totalMinutes) {
  const minuteOfDay = ((Math.floor(totalMinutes) % 1440) + 1440) % 1440;
  return minuteOfDay >= vehicle.offPeakStart && minuteOfDay < vehicle.offPeakEnd;
}

function addChargingMinutes(startMinute, requiredMinutes, offPeakOnly) {
  let clock = startMinute;
  let charged = 0;
  let offPeakCharged = 0;
  let peakCharged = 0;
  let guard = 0;

  while (charged < requiredMinutes && guard < 60 * 24 * 45) {
    const offPeak = isOffPeakMinute(clock);
    if (!offPeakOnly || offPeak) {
      charged += 1;
      if (offPeak) {
        offPeakCharged += 1;
      } else {
        peakCharged += 1;
      }
    }
    clock += 1;
    guard += 1;
  }

  return {
    finishMinute: clock,
    elapsedMinutes: clock - startMinute,
    offPeakCharged,
    peakCharged,
  };
}

function getInputs() {
  return {
    currentSoc: Number(document.getElementById("currentSoc").value),
    targetSoc: Number(document.getElementById("targetSoc").value),
    amps: Number(document.getElementById("amps").value),
    volts: Number(document.getElementById("volts").value),
    efficiency: Number(document.getElementById("efficiency").value) / 100,
    startMinute: parseTimeToMinute(document.getElementById("startTime").value),
    mode: document.querySelector('input[name="chargeMode"]:checked')?.value || "offpeak",
  };
}

function renderChargeCalculator() {
  const values = getInputs();
  const amps = clamp(values.amps, 0, vehicle.maxHomeAmps);
  const wallPowerKw = (values.volts * amps) / 1000;
  const carPowerKw = wallPowerKw * values.efficiency;
  const offPeakMinutes = vehicle.offPeakEnd - vehicle.offPeakStart;
  const offPeakKwh = carPowerKw * (offPeakMinutes / 60);
  const offPeakPercent = (offPeakKwh / vehicle.batteryKwh) * 100;

  powerText.textContent = `${carPowerKw.toFixed(2)} kW`;
  oneNightText.textContent = formatKwh(offPeakKwh);

  if (
    !Number.isFinite(values.currentSoc) ||
    !Number.isFinite(values.targetSoc) ||
    values.currentSoc < 0 ||
    values.currentSoc > 100 ||
    values.targetSoc < 1 ||
    values.targetSoc > 100 ||
    values.targetSoc <= values.currentSoc ||
    values.amps < 1 ||
    values.amps > vehicle.maxHomeAmps ||
    values.volts < 100 ||
    values.efficiency <= 0
  ) {
    chargeResult.innerHTML = `
      <div class="result-error">
        請輸入有效數字；目標電量要高於到家剩餘電量，家充電流最高以 22A 計算。
      </div>
    `;
    return;
  }

  const percentNeeded = values.targetSoc - values.currentSoc;
  const batteryKwhNeeded = (percentNeeded / 100) * vehicle.batteryKwh;
  const chargeMinutes = (batteryKwhNeeded / carPowerKw) * 60;
  const continuousPlan = addChargingMinutes(values.startMinute, chargeMinutes, false);
  const offPeakPlan = addChargingMinutes(values.startMinute, chargeMinutes, true);
  const selectedPlan = values.mode === "continuous" ? continuousPlan : offPeakPlan;
  const selectedModeText = values.mode === "continuous" ? "插上就連續充" : "盡量只用離峰";
  const rangeAdded = percentNeeded * vehicle.kmPerPercent;
  const oneNightAddedPercent = Math.min(percentNeeded, offPeakPercent);
  const oneNightSoc = Math.min(values.targetSoc, values.currentSoc + oneNightAddedPercent);
  const remainingKwhAfterOneNight = Math.max(0, batteryKwhNeeded - offPeakKwh);
  const nightsNeeded = Math.max(1, Math.ceil(batteryKwhNeeded / offPeakKwh));
  const enoughTonight = remainingKwhAfterOneNight <= 0;
  const finishDayOffset = Math.floor(selectedPlan.finishMinute / 1440);
  const finishDay =
    finishDayOffset === 0 ? "今天" : finishDayOffset === 1 ? "明天" : `第 ${finishDayOffset + 1} 天`;
  const statusClass = enoughTonight ? "good" : "warn";
  const statusTitle = enoughTonight ? "今晚離峰可以充到目標" : "今晚離峰不夠充到目標";

  const advice =
    values.mode === "continuous"
      ? `如果 ${formatClock(values.startMinute)} 插上就連續充，約 ${finishDay} ${formatClock(selectedPlan.finishMinute)} 到 ${values.targetSoc}%。其中尖峰用電約 ${formatDuration(selectedPlan.peakCharged)}。`
      : enoughTonight
        ? `建議排程在 00:00 開始充，約 ${finishDay} ${formatClock(selectedPlan.finishMinute)} 到 ${values.targetSoc}%，可完全落在離峰時段。`
        : `今晚 00:00-09:00 約可補 ${formatKwh(offPeakKwh)}，電量會從 ${values.currentSoc.toFixed(0)}% 到約 ${oneNightSoc.toFixed(1)}%。若一定要到 ${values.targetSoc}%，還差約 ${formatKwh(remainingKwhAfterOneNight)}，要分約 ${nightsNeeded} 晚或提前連續充。`;

  chargeResult.innerHTML = `
    <div class="result-head">
      <span>${selectedModeText} | ${values.volts}V x ${amps}A x ${(values.efficiency * 100).toFixed(0)}%</span>
      <strong>${finishDay} ${formatClock(selectedPlan.finishMinute)} 到 ${values.targetSoc}%</strong>
    </div>

    <div class="offpeak-card ${statusClass}">
      <strong>${values.mode === "continuous" ? "離峰對照" : statusTitle}</strong>
      <span>一晚離峰最多約補 ${formatKwh(offPeakKwh)}，等於 ${offPeakPercent.toFixed(1)}%，約 ${Math.round(offPeakPercent * vehicle.kmPerPercent)} 公里。</span>
    </div>

    <div class="metric-grid">
      <article>
        <span>需要補電</span>
        <b>${formatKwh(batteryKwhNeeded)}</b>
      </article>
      <article>
        <span>純充電時間</span>
        <b>${formatDuration(chargeMinutes)}</b>
      </article>
      <article>
        <span>約增加里程</span>
        <b>${Math.round(rangeAdded)} km</b>
      </article>
      <article>
        <span>離峰實充</span>
        <b>${formatDuration(selectedPlan.offPeakCharged)}</b>
      </article>
      <article>
        <span>尖峰實充</span>
        <b>${formatDuration(selectedPlan.peakCharged)}</b>
      </article>
      <article>
        <span>等待總時長</span>
        <b>${formatDuration(selectedPlan.elapsedMinutes)}</b>
      </article>
    </div>

    <div class="advice-card">
      <strong>建議</strong>
      <span>${advice}</span>
    </div>
  `;
}

function getMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function getFilteredStations() {
  if (activeRoadFilter === "all") return stations;
  return stations.filter((station) => station.road === activeRoadFilter);
}

function renderStations() {
  const filtered = getFilteredStations();
  const totalSpaces = filtered.reduce((sum, station) => sum + station.spaces, 0);
  const road1Spaces = stations.filter((station) => station.road === "國道1號").reduce((sum, station) => sum + station.spaces, 0);
  const road3Spaces = stations.filter((station) => station.road === "國道3號").reduce((sum, station) => sum + station.spaces, 0);

  stationSummary.innerHTML = `
    <article>
      <span>目前顯示</span>
      <strong>${filtered.length} 站</strong>
    </article>
    <article>
      <span>快充車位</span>
      <strong>${totalSpaces} 格</strong>
    </article>
    <article>
      <span>國一車位</span>
      <strong>${road1Spaces} 格</strong>
    </article>
    <article>
      <span>國三車位</span>
      <strong>${road3Spaces} 格</strong>
    </article>
  `;

  stationGrid.innerHTML = filtered
    .map(
      (station) => `
        <article class="station-card">
          <div class="station-card-head">
            <span>${station.road} | ${station.direction}</span>
            <strong>${station.name}</strong>
          </div>
          <dl>
            <div>
              <dt>位置</dt>
              <dd>${station.parking}</dd>
            </div>
            <div>
              <dt>車位</dt>
              <dd>${station.spaces} 格</dd>
            </div>
            <div>
              <dt>規格</dt>
              <dd>${station.plugs}</dd>
            </div>
          </dl>
          <a class="map-link" href="${getMapsUrl(station.mapsQuery)}" target="_blank" rel="noreferrer">開啟 Google Maps</a>
        </article>
      `
    )
    .join("");

  renderMapList(filtered);
}

function renderMapList(list = stations) {
  mapList.innerHTML = list
    .map(
      (station) => `
        <a href="${getMapsUrl(station.mapsQuery)}" target="_blank" rel="noreferrer">
          <span>${station.road} ${station.direction}</span>
          <strong>${station.name}</strong>
          <small>${station.parking} | ${station.spaces} 格 | ${station.plugs}</small>
        </a>
      `
    )
    .join("");
}

document.querySelectorAll("[data-soc]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("currentSoc").value = button.dataset.soc;
    renderChargeCalculator();
  });
});

roadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeRoadFilter = button.dataset.roadFilter;
    roadButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderStations();
  });
});

chargeForm.addEventListener("input", renderChargeCalculator);
chargeForm.addEventListener("change", renderChargeCalculator);

renderChargeCalculator();
renderStations();
