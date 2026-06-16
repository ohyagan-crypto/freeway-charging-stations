const stations = [
  {
    name: "中壢服務區",
    ccs1: 5,
    ccs2: 5,
    lat: 24.9726,
    lng: 121.2496,
    price: "會員價格，充電前依平台顯示為準",
    liveNames: ["中壢服務區"],
  },
  {
    name: "湖口服務區",
    ccs1: 2,
    ccs2: 3,
    lat: 24.8619,
    lng: 121.0077,
    price: "Tesla 約 11 元/度；iCharging 國道優惠約 9.8 元/度",
    liveNames: ["新竹－湖口服務區北向", "新竹－湖口服務區南向", "湖口服務區北站", "湖口服務區南站"],
  },
  {
    name: "泰安服務區北上",
    ccs1: 5,
    ccs2: 5,
    lat: 24.3311,
    lng: 120.7169,
    price: "iCharging 公告 12 元/度；國道優惠約 10 元/度",
    liveNames: ["泰安服務區 北向"],
  },
  {
    name: "泰安服務區南下",
    ccs1: 5,
    ccs2: 5,
    lat: 24.3311,
    lng: 120.7169,
    price: "iCharging 公告 12 元/度；國道優惠約 10 元/度",
    liveNames: ["泰安服務區 南向"],
  },
  {
    name: "西螺服務區北上",
    ccs1: 4,
    ccs2: 4,
    lat: 23.7892,
    lng: 120.4764,
    price: "iCharging 國道優惠約 9.2 元/度；TAIL 約 9.9 元/度",
    liveNames: ["西螺服務區 北向(國1)", "TAIL 西螺超充站"],
  },
  {
    name: "西螺服務區南下",
    ccs1: 3,
    ccs2: 3,
    lat: 23.7892,
    lng: 120.4764,
    price: "iCharging 國道優惠約 9.2 元/度",
    liveNames: ["西螺服務區 南向(國1)"],
  },
  {
    name: "新營服務區北上",
    ccs1: 1,
    ccs2: 1,
    lat: 23.3036,
    lng: 120.3001,
    price: "iCharging 國道優惠約 9.2 元/度",
    liveNames: ["新營服務區 北向(國1)"],
  },
  {
    name: "新營服務區南下",
    ccs1: 1,
    ccs2: 1,
    lat: 23.3036,
    lng: 120.3001,
    price: "iCharging 國道優惠約 9.2 元/度",
    liveNames: ["新營服務區 南向(國1)"],
  },
  {
    name: "仁德服務區北上",
    ccs1: 2,
    ccs2: 2,
    lat: 22.9359,
    lng: 120.2501,
    price: "iCharging 公告 12 元/度；國道優惠約 10 元/度",
    liveNames: ["仁德服務區北向"],
  },
  {
    name: "仁德服務區南下",
    ccs1: 3,
    ccs2: 3,
    lat: 22.9359,
    lng: 120.2501,
    price: "iCharging 公告 12 元/度；國道優惠約 10 元/度",
    liveNames: ["仁德服務區南向"],
  },
];

const nonTeslaChargers = [
  { name: "中壢服務區", road: "國道一號", direction: "雙向", routeKm: 57, lat: 24.9726, lng: 121.2496, operator: "iCharging / 公共快充", price: "會員價格，充電前依平台顯示為準", plugs: 10 },
  { name: "湖口服務區北站", road: "國道一號", direction: "北上", routeKm: 86, lat: 24.8619, lng: 121.0077, operator: "iCharging", price: "公告 12 元/度；國道優惠約 9.8 元/度", plugs: 5 },
  { name: "湖口服務區南站", road: "國道一號", direction: "南下", routeKm: 86, lat: 24.8619, lng: 121.0077, operator: "iCharging", price: "公告 12 元/度；國道優惠約 9.8 元/度", plugs: 5 },
  { name: "泰安服務區北向", road: "國道一號", direction: "北上", routeKm: 158, lat: 24.3311, lng: 120.7169, operator: "iCharging", price: "公告 12 元/度；國道優惠約 10 元/度", plugs: 10 },
  { name: "泰安服務區南向", road: "國道一號", direction: "南下", routeKm: 158, lat: 24.3311, lng: 120.7169, operator: "iCharging", price: "公告 12 元/度；國道優惠約 10 元/度", plugs: 10 },
  { name: "西螺服務區北向", road: "國道一號", direction: "北上", routeKm: 230, lat: 23.7892, lng: 120.4764, operator: "iCharging / TAIL", price: "國道優惠約 9.2 元/度；TAIL 約 9.9 元/度", plugs: 8 },
  { name: "西螺服務區南向", road: "國道一號", direction: "南下", routeKm: 230, lat: 23.7892, lng: 120.4764, operator: "iCharging", price: "國道優惠約 9.2 元/度", plugs: 6 },
  { name: "新營服務區北向", road: "國道一號", direction: "北上", routeKm: 284, lat: 23.3036, lng: 120.3001, operator: "iCharging", price: "國道優惠約 9.2 元/度", plugs: 2 },
  { name: "新營服務區南向", road: "國道一號", direction: "南下", routeKm: 284, lat: 23.3036, lng: 120.3001, operator: "iCharging", price: "國道優惠約 9.2 元/度", plugs: 2 },
  { name: "仁德服務區北向", road: "國道一號", direction: "北上", routeKm: 326, lat: 22.9359, lng: 120.2501, operator: "iCharging", price: "公告 12 元/度；國道優惠約 10 元/度", plugs: 4 },
  { name: "仁德服務區南向", road: "國道一號", direction: "南下", routeKm: 326, lat: 22.9359, lng: 120.2501, operator: "iCharging", price: "公告 12 元/度；國道優惠約 10 元/度", plugs: 6 },
  { name: "關西服務區", road: "國道三號", direction: "雙向", routeKm: 76, lat: 24.7828, lng: 121.1757, operator: "iCharging", price: "公告 12 元/度；國道優惠約 10 元/度", plugs: 6 },
  { name: "清水服務區", road: "國道三號", direction: "雙向", routeKm: 172, lat: 24.2814, lng: 120.6017, operator: "iCharging", price: "公告 12 元/度；國道優惠約 9.8 元/度", plugs: 6 },
  { name: "南投服務區", road: "國道三號", direction: "雙向", routeKm: 231, lat: 23.8627, lng: 120.6889, operator: "公共快充", price: "會員價格，充電前依平台顯示為準", plugs: 10 },
  { name: "東草屯休息站", road: "國道六號", direction: "雙向", routeKm: 8, lat: 23.9821, lng: 120.7465, operator: "公共快充", price: "會員價格，充電前依平台顯示為準", plugs: 6 },
  { name: "東山服務區", road: "國道三號", direction: "雙向", routeKm: 319, lat: 23.2948, lng: 120.4216, operator: "iCharging", price: "公告 12 元/度；國道優惠約 9.8 元/度", plugs: 6 },
  { name: "關廟服務區北站", road: "國道三號", direction: "北上", routeKm: 363, lat: 22.9552, lng: 120.3397, operator: "公共快充", price: "會員價格，充電前依平台顯示為準", plugs: 6 },
  { name: "關廟服務區南站", road: "國道三號", direction: "南下", routeKm: 363, lat: 22.9552, lng: 120.3397, operator: "公共快充", price: "會員價格，充電前依平台顯示為準", plugs: 6 },
  { name: "石碇服務區", road: "國道五號", direction: "雙向", routeKm: 4, lat: 24.9918, lng: 121.6588, operator: "iCharging", price: "國道優惠約 9.2 元/度", plugs: 4 },
  { name: "蘇澳服務區", road: "國道五號", direction: "雙向", routeKm: 54, lat: 24.6175, lng: 121.8252, operator: "iCharging", price: "公告 12 元/度；國道優惠約 10 元/度", plugs: 4 },
];

const nonTeslaSlowChargers = [];

const rows = document.getElementById("stationRows");
const bars = document.getElementById("bars");
const locateBtn = document.getElementById("locateBtn");
const nearestResult = document.getElementById("nearestResult");
const liveUpdated = document.getElementById("liveUpdated");
const tripForm = document.getElementById("tripForm");
const plannerResult = document.getElementById("plannerResult");
const networkList = document.getElementById("networkList");
const slowList = document.getElementById("slowList");
const maxTotal = Math.max(...stations.map((station) => station.ccs1 + station.ccs2));
const briaBatteryKwh = 57.7;
const briaEfficiencyKmPerKwh = 5.3;

rows.innerHTML = stations
  .map((station, index) => {
    const total = station.ccs1 + station.ccs2;
    return `
      <tr>
        <td>${station.name}</td>
        <td class="num">${station.ccs1} 槍</td>
        <td class="num">${station.ccs2} 槍</td>
        <td class="num total">${total} 槍</td>
        <td class="price">${station.price}</td>
        <td class="live" id="live-${index}">讀取中</td>
      </tr>
    `;
  })
  .join("");

bars.innerHTML = stations
  .map((station) => {
    const total = station.ccs1 + station.ccs2;
    const width = Math.round((total / maxTotal) * 100);
    return `
      <div class="bar-row">
        <div class="bar-name">${station.name}</div>
        <div class="bar-track" aria-label="${station.name} 合計 ${total} 槍">
          <div class="bar-fill" style="width:${width}%"></div>
        </div>
        <div class="bar-total">${total} 槍</div>
      </div>
    `;
  })
  .join("");

networkList.innerHTML = nonTeslaChargers
  .map((charger) => `
    <article>
      <strong>${charger.name}</strong>
      <span>${charger.road}｜${charger.direction}｜${charger.operator}</span>
      <small>槍數 ${charger.plugs} 支｜${charger.price}</small>
    </article>
  `)
  .join("");

slowList.innerHTML = nonTeslaSlowChargers
  .map((charger) => `
    <article>
      <strong>${charger.name}</strong>
      <span>${charger.address}｜${charger.connector}｜${charger.power}</span>
      <small>${charger.operator}｜${charger.usage}｜${charger.price}</small>
    </article>
  `)
  .join("") || `
    <article>
      <strong>慢充站資料待補</strong>
      <span>目前沒有可確認地址的慢充清單。</span>
      <small>確認來源後才會加入，避免用推估地址誤導。</small>
    </article>
  `;

function distanceKm(aLat, aLng, bLat, bLng) {
  const radius = 6371;
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const lat1 = toRad(aLat);
  const lat2 = toRad(bLat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("這個瀏覽器不支援 GPS 定位"));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000,
    });
  });
}

locateBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    nearestResult.textContent = "這個瀏覽器不支援 GPS 定位";
    return;
  }

  nearestResult.textContent = "定位中，請允許瀏覽器取得位置";
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const ranked = stations
        .map((station) => ({
          ...station,
          distance: distanceKm(coords.latitude, coords.longitude, station.lat, station.lng),
        }))
        .sort((a, b) => a.distance - b.distance);
      const nearest = ranked[0];
      nearestResult.innerHTML = `
        <strong>${nearest.name}</strong>
        <span>最近國道快充｜距離約 ${nearest.distance.toFixed(1)} 公里</span>
        <small>${nearest.price}</small>
      `;
    },
    () => {
      nearestResult.textContent = "無法取得定位，請確認瀏覽器定位權限已開啟";
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
});

function extractLiveStatus(markdown, station) {
  let available = 0;
  let occupied = 0;
  let matched = false;

  for (const liveName of station.liveNames) {
    const start = markdown.indexOf(liveName);
    if (start === -1) continue;
    matched = true;
    const end = markdown.indexOf("查看地圖", start);
    const block = markdown.slice(start, end === -1 ? start + 1200 : end);
    available += (block.match(/!\[[^\]]*(?:Marker|可用)[^\]]*\]/g) || []).length;
    occupied += (block.match(/!\[[^\]]*使用中[^\]]*\]/g) || []).length;
  }

  if (!matched) return "即時來源未列此站";
  if (available + occupied === 0) return "即時來源有站點，未列槍狀態";
  return `可用 ${available} 槍，使用中 ${occupied} 槍`;
}

async function updateLiveStatus() {
  try {
    const response = await fetch("https://r.jina.ai/http://https://www.opendata.vip/tdx/evFreeway", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("讀取失敗");
    const markdown = await response.text();
    stations.forEach((station, index) => {
      document.getElementById(`live-${index}`).textContent = extractLiveStatus(markdown, station);
    });
    liveUpdated.textContent = new Date().toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    stations.forEach((_, index) => {
      document.getElementById(`live-${index}`).textContent = "即時讀取失敗，請點資料來源確認";
    });
    liveUpdated.textContent = "讀取失敗";
  }
}

updateLiveStatus();

function estimateSocAfterDistance(currentSoc, distanceKmValue) {
  const usableKwh = (currentSoc / 100) * briaBatteryKwh;
  const usedKwh = distanceKmValue / briaEfficiencyKmPerKwh;
  return ((usableKwh - usedKwh) / briaBatteryKwh) * 100;
}

function routeChargers(direction, tripKm) {
  const candidates = nonTeslaChargers
    .filter((charger) => charger.road === "國道一號")
    .filter((charger) => charger.direction === "雙向" || (direction === "south" ? charger.direction !== "北上" : charger.direction !== "南下"));
  const ordered = direction === "south"
    ? candidates.sort((a, b) => a.routeKm - b.routeKm)
    : candidates.sort((a, b) => b.routeKm - a.routeKm);
  const min = Math.min(...ordered.map((charger) => charger.routeKm));
  const max = Math.max(...ordered.map((charger) => charger.routeKm));
  return ordered
    .map((charger) => ({
      ...charger,
      estimatedAlongRouteKm: direction === "south"
        ? ((charger.routeKm - min) / (max - min)) * tripKm
        : ((max - charger.routeKm) / (max - min)) * tripKm,
    }))
    .filter((charger) => charger.estimatedAlongRouteKm > 0 && charger.estimatedAlongRouteKm < tripKm);
}

function buildChargingPlan(tripKm, currentSoc, reserveSoc, direction) {
  const fullRange = briaBatteryKwh * briaEfficiencyKmPerKwh;
  const preferredBufferKm = (reserveSoc / 100) * fullRange;
  const chargers = routeChargers(direction, tripKm);
  const stops = [];
  let currentPosition = 0;
  let soc = currentSoc;

  for (let guard = 0; guard < 4; guard += 1) {
    const remainingKm = tripKm - currentPosition;
    const arrivalSoc = estimateSocAfterDistance(soc, remainingKm);
    if (arrivalSoc >= reserveSoc) break;

    const reachableKm = ((soc - reserveSoc) / 100) * fullRange;
    const reachableChargers = chargers.filter(
      (charger) =>
        charger.estimatedAlongRouteKm > currentPosition + 5 &&
        charger.estimatedAlongRouteKm <= currentPosition + Math.max(20, reachableKm)
    );
    const nextStop = reachableChargers
      .sort((a, b) => b.estimatedAlongRouteKm - a.estimatedAlongRouteKm || b.plugs - a.plugs)[0];

    if (!nextStop) {
      return { stops, impossible: true, currentPosition, soc };
    }

    const distanceToStop = nextStop.estimatedAlongRouteKm - currentPosition;
    const arriveStopSoc = estimateSocAfterDistance(soc, distanceToStop);
    const kmAfterStop = tripKm - nextStop.estimatedAlongRouteKm;
    const neededSocAfterStop = Math.min(90, Math.max(65, ((kmAfterStop + preferredBufferKm) / fullRange) * 100));
    stops.push({ ...nextStop, arriveStopSoc, chargeToSoc: neededSocAfterStop });
    currentPosition = nextStop.estimatedAlongRouteKm;
    soc = neededSocAfterStop;
  }

  return { stops, impossible: false, finalSoc: estimateSocAfterDistance(soc, tripKm - currentPosition) };
}

tripForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const tripKmInput = document.getElementById("tripKm");
  if (!tripKmInput.value) {
    plannerResult.innerHTML = `
      <strong>還不能安排路線</strong>
      <span>請先填入導航顯示的全程公里數；地址不做自動推估。</span>
    `;
    return;
  }

  const tripKm = Number(tripKmInput.value);
  const currentSoc = Number(document.getElementById("currentSoc").value);
  const reserveSoc = Number(document.getElementById("reserveSoc").value);
  const direction = document.getElementById("routeDirection").value;
  const startPlace = document.getElementById("startPlace").value.trim() || "出發地";
  const endPlace = document.getElementById("endPlace").value.trim() || "目的地";

  if (!tripKm || tripKm <= 0 || currentSoc <= 0) {
    plannerResult.innerHTML = `<strong>請先輸入有效的行程距離與目前電量。</strong>`;
    return;
  }

  const fullRange = briaBatteryKwh * briaEfficiencyKmPerKwh;
  const currentRange = (currentSoc / 100) * fullRange;
  const reserveKm = (reserveSoc / 100) * fullRange;
  const arrivalSoc = estimateSocAfterDistance(currentSoc, tripKm);
  const needCharge = arrivalSoc < reserveSoc;
  const plan = buildChargingPlan(tripKm, currentSoc, reserveSoc, direction);
  const stopText = plan.stops.length
    ? plan.stops
        .map((stop, index) => `${index + 1}. ${stop.name}｜約第 ${stop.estimatedAlongRouteKm.toFixed(0)} 公里｜抵達約剩 ${stop.arriveStopSoc.toFixed(1)}%｜建議充到 ${stop.chargeToSoc.toFixed(0)}%｜${stop.price}`)
        .join("<br>")
    : "依目前設定可不安排中途補電；仍建議出發前確認目的地附近至少 1 到 2 個備用慢充或快充站。";

  plannerResult.innerHTML = `
    <strong>${startPlace} → ${endPlace}</strong>
    <span>Bria 滿電估算續航約 ${fullRange.toFixed(0)} 公里；目前 ${currentSoc}% 約可跑 ${currentRange.toFixed(0)} 公里。</span>
    <span>不充電直達預估剩 ${arrivalSoc.toFixed(1)}%。${needCharge ? "建議提早規劃充電。" : "若路況正常，可達目的地並保留設定電量。"}</span>
    <span>${plan.impossible ? "目前電量不足以安全抵達下一個內建非特斯拉候選站，建議出發前先補電。" : `預估抵達目的地約剩 ${(plan.finalSoc ?? arrivalSoc).toFixed(1)}%。`}</span>
    <span><b>建議充電安排：</b><br>${stopText}</span>
    <small>提醒：這是依平均電耗估算，實際會受車速、冷氣、載重、天氣、上坡與塞車影響；長途建議保留 10% 到 20% 緩衝。</small>
  `;
});
