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
const homeChargeForm = document.getElementById("homeChargeForm");
const homeChargeResult = document.getElementById("homeChargeResult");
const estimateDistanceBtn = document.getElementById("estimateDistanceBtn");
const refreshMapPreviewBtn = document.getElementById("refreshMapPreviewBtn");
const mapPreview = document.getElementById("mapPreview");
const mapPreviewStatus = document.getElementById("mapPreviewStatus");
const networkList = document.getElementById("networkList");
const slowList = document.getElementById("slowList");
const maxTotal = Math.max(...stations.map((station) => station.ccs1 + station.ccs2));
const briaBatteryKwh = 57.7;
const briaEfficiencyKmPerKwh = 5.3;
const briaKmPerPercent = 3;
const offPeakStartMinute = 0;
const offPeakEndMinute = 9 * 60;
const selectedPlaces = {
  startPlace: null,
  endPlace: null,
};
let distanceEstimateMode = "";
let planRendered = false;
let directionAutoDetected = false;
const fallbackPlaces = [
  {
    display_name: "高雄市鼓山區南屏路599號",
    lat: "22.6634",
    lon: "120.2986",
    aliases: ["高雄市鼓山區南屏路599號", "南屏路599", "南屏路599號", "龍子里南屏路599"],
  },
  {
    display_name: "台中新都心，台中市西屯區",
    lat: "24.1683",
    lon: "120.6439",
    aliases: ["台中新都心", "新都心", "台中 新都心"],
  },
];

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

function cleanPlaceInput(value) {
  return value.trim().replace(/\s+/g, " ");
}

function getPlaceLabel(place) {
  return place?.display_name || "";
}

function setPlannerNotice(title, body) {
  planRendered = false;
  plannerResult.innerHTML = `
    <strong>${title}</strong>
    <span>${body}</span>
  `;
}

function resetSelectedPlace(inputId) {
  selectedPlaces[inputId] = null;
  const results = document.getElementById(`${inputId}Results`);
  if (results) results.hidden = true;
  distanceEstimateMode = "";
  directionAutoDetected = false;
  planRendered = false;
}

async function searchPlaces(inputId, options = {}) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(`${inputId}Results`);
  const query = cleanPlaceInput(input.value);
  selectedPlaces[inputId] = null;

  if (!query) {
    results.hidden = true;
    setPlannerNotice("請先輸入要搜尋的位置", "可以輸入完整地址、地標或店名；搜尋結果會直接顯示在頁面內，不會跳出 Google 地圖。");
    return;
  }

  results.hidden = false;
  results.innerHTML = `<span class="field-hint">搜尋中...</span>`;

  try {
    const fallbackMatches = findFallbackPlaces(query);
    const remotePlaces = await fetchPlaces(query);
    const places = dedupePlaces([...fallbackMatches, ...remotePlaces]);

    if (!places.length) {
      results.innerHTML = `<span class="field-hint">找不到位置，請改用更完整的地址或地標名稱。</span>`;
      setPlannerNotice("查不到位置", "請把地址補完整，例如城市、行政區、路名與門牌；目的地若是簡稱，也建議加上縣市。");
      return;
    }

    results.innerHTML = places
      .map((place, index) => `
        <button class="place-option" type="button" data-place-index="${index}">
          <strong>${getPlaceLabel(place)}</strong>
          <span>座標 ${Number(place.lat).toFixed(5)}, ${Number(place.lon).toFixed(5)}</span>
        </button>
      `)
      .join("");

    const placeOptions = results.querySelectorAll(".place-option");
    placeOptions.forEach((option) => {
      option.addEventListener("click", async () => {
        const place = places[Number(option.dataset.placeIndex)];
        await selectPlace(inputId, place, option);
      });
    });

    if (options.autoSelect && places[0]) {
      await selectPlace(inputId, places[0], placeOptions[0]);
    }
  } catch {
    results.innerHTML = `<span class="field-hint">位置搜尋暫時失敗，請稍後再試。</span>`;
    setPlannerNotice("位置搜尋失敗", "目前無法取得頁內搜尋結果，請稍後重試；已輸入的公里數仍可手動安排充電路線。");
  }
}

async function fetchPlaces(query) {
  const endpoints = [
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=tw&q=${encodeURIComponent(query)}`,
    `https://r.jina.ai/http://https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=tw&q=${encodeURIComponent(query)}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
      if (!response.ok) continue;
      const text = await response.text();
      const jsonStart = text.indexOf("[");
      const payload = jsonStart > 0 ? text.slice(jsonStart) : text;
      const places = JSON.parse(payload);
      if (Array.isArray(places)) return places;
    } catch {
      continue;
    }
  }

  return [];
}

function dedupePlaces(places) {
  const seen = new Set();
  return places.filter((place) => {
    const key = `${Number(place.lat).toFixed(4)},${Number(place.lon).toFixed(4)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function findFallbackPlaces(query) {
  const normalizedQuery = query.toLowerCase();
  return fallbackPlaces.filter((place) =>
    place.aliases.some((alias) => normalizedQuery.includes(alias.toLowerCase()) || alias.toLowerCase().includes(normalizedQuery))
  );
}

async function selectPlace(inputId, place, option) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(`${inputId}Results`);
  selectedPlaces[inputId] = place;
  input.value = getPlaceLabel(place);
  results.querySelectorAll(".place-option").forEach((item) => item.classList.remove("selected"));
  option?.classList.add("selected");
  updateMapPreview();
  autoDetectRouteDirection();
  await autoEstimateDistanceIfReady();
}

function getAutoRouteDirection() {
  const start = selectedPlaces.startPlace;
  const end = selectedPlaces.endPlace;
  if (!start || !end) return null;
  const startLat = Number(start.lat);
  const endLat = Number(end.lat);
  if (!Number.isFinite(startLat) || !Number.isFinite(endLat)) return null;
  return endLat >= startLat ? "north" : "south";
}

function getDirectionLabel(direction) {
  return direction === "north" ? "南往北" : "北往南";
}

function autoDetectRouteDirection() {
  const direction = getAutoRouteDirection();
  if (!direction) return false;
  document.getElementById("routeDirection").value = direction;
  directionAutoDetected = true;
  return true;
}

function updateMapPreview() {
  const start = selectedPlaces.startPlace;
  const end = selectedPlaces.endPlace;
  const startText = cleanPlaceInput(document.getElementById("startPlace").value);
  const endText = cleanPlaceInput(document.getElementById("endPlace").value);

  if (start && end) {
    const origin = `${start.lat},${start.lon}`;
    const destination = `${end.lat},${end.lon}`;
    mapPreview.src = `https://www.google.com/maps?output=embed&saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}`;
    mapPreviewStatus.textContent = "已顯示頁內路線預覽，公里數已自動估算。";
    return;
  }

  const query = startText || endText || "台灣";
  mapPreview.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  mapPreviewStatus.textContent = query === "台灣" ? "尚未搜尋位置" : "已顯示單一位置預覽，請再選另一個位置估算公里數。";
}

function estimateSelectedPlacesStraightDistance() {
  const start = selectedPlaces.startPlace;
  const end = selectedPlaces.endPlace;
  if (!start || !end) return null;
  const straightKm = distanceKm(Number(start.lat), Number(start.lon), Number(end.lat), Number(end.lon));
  distanceEstimateMode = "座標估算";
  return Math.round(straightKm * 1.25);
}

async function estimateSelectedPlacesRouteDistance() {
  const start = selectedPlaces.startPlace;
  const end = selectedPlaces.endPlace;
  if (!start || !end) return null;

  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=false`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("路線估算失敗");
    const data = await response.json();
    const meters = data?.routes?.[0]?.distance;
    if (!meters) throw new Error("缺少距離");
    distanceEstimateMode = "道路路線估算";
    return Math.round(meters / 1000);
  } catch {
    return estimateSelectedPlacesStraightDistance();
  }
}

async function autoEstimateDistanceIfReady() {
  const estimatedKm = await estimateSelectedPlacesRouteDistance();
  if (!estimatedKm) return false;
  autoDetectRouteDirection();
  document.getElementById("tripKm").value = estimatedKm;
  if (!planRendered) {
    const direction = document.getElementById("routeDirection").value;
    setPlannerNotice(
      "公里數已自動估算",
      `已依頁內搜尋到的兩個位置以${distanceEstimateMode}約 ${estimatedKm} 公里，並填入全程預估距離；方向已自動判斷為${getDirectionLabel(direction)}。實際導航可能因路線與路況略有不同。`
    );
  }
  return true;
}

document.querySelectorAll("[data-place-search]").forEach((button) => {
  button.addEventListener("click", () => {
    searchPlaces(button.dataset.placeSearch);
  });
});

estimateDistanceBtn.addEventListener("click", async () => {
  if (!selectedPlaces.startPlace) await searchPlaces("startPlace", { autoSelect: true });
  if (!selectedPlaces.endPlace) await searchPlaces("endPlace", { autoSelect: true });
  if (!(await autoEstimateDistanceIfReady())) {
    setPlannerNotice("請先選定出發地與目的地", "搜尋結果出現後，請各點選一個正確位置；選好後系統會在頁面內顯示路線並自動填公里數。");
  }
});

refreshMapPreviewBtn.addEventListener("click", updateMapPreview);

document.getElementById("startPlace").addEventListener("input", () => resetSelectedPlace("startPlace"));
document.getElementById("endPlace").addEventListener("input", () => resetSelectedPlace("endPlace"));

function estimateSocAfterDistance(currentSoc, distanceKmValue) {
  const usableKwh = (currentSoc / 100) * briaBatteryKwh;
  const usedKwh = distanceKmValue / briaEfficiencyKmPerKwh;
  return ((usableKwh - usedKwh) / briaBatteryKwh) * 100;
}

function parseTimeToMinute(value) {
  const [hours, minutes] = String(value || "00:00").split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return 0;
  return Math.min(1439, Math.max(0, hours * 60 + minutes));
}

function formatClock(totalMinutes) {
  const normalized = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function formatDuration(minutes) {
  const rounded = Math.ceil(minutes);
  const hours = Math.floor(rounded / 60);
  const mins = rounded % 60;
  if (!hours) return `${mins} 分鐘`;
  if (!mins) return `${hours} 小時`;
  return `${hours} 小時 ${mins} 分鐘`;
}

function isOffPeakMinute(totalMinutes) {
  const minuteOfDay = ((Math.floor(totalMinutes) % 1440) + 1440) % 1440;
  return minuteOfDay >= offPeakStartMinute && minuteOfDay < offPeakEndMinute;
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

function renderHomeChargeCalculator() {
  const currentSoc = Number(document.getElementById("homeSoc").value);
  const targetSoc = Number(document.getElementById("targetSoc").value);
  const amps = Number(document.getElementById("homeChargeAmps").value);
  const volts = Number(document.getElementById("homeChargeVolts").value);
  const efficiency = Number(document.getElementById("chargeEfficiency").value) / 100;
  const startMinute = parseTimeToMinute(document.getElementById("chargeStartTime").value);
  const mode = document.querySelector('input[name="chargeMode"]:checked')?.value || "offpeak";

  if (targetSoc <= currentSoc) {
    homeChargeResult.className = "home-charge-result";
    homeChargeResult.innerHTML = `<div class="charge-error">想充到的電量要高於到家剩餘電量。</div>`;
    return;
  }

  if (
    currentSoc < 0 ||
    currentSoc > 100 ||
    targetSoc < 1 ||
    targetSoc > 100 ||
    amps <= 0 ||
    amps > 22 ||
    volts <= 0 ||
    efficiency <= 0
  ) {
    homeChargeResult.className = "home-charge-result";
    homeChargeResult.innerHTML = `<div class="charge-error">請輸入有效的電量、電流、電壓與效率；家充電流最高以 22A 計算。</div>`;
    return;
  }

  const percentNeeded = targetSoc - currentSoc;
  const batteryKwhNeeded = (percentNeeded / 100) * briaBatteryKwh;
  const wallPowerKw = (volts * amps) / 1000;
  const carPowerKw = wallPowerKw * efficiency;
  const chargeMinutes = (batteryKwhNeeded / carPowerKw) * 60;
  const continuous = addChargingMinutes(startMinute, chargeMinutes, false);
  const offPeakOnly = addChargingMinutes(startMinute, chargeMinutes, true);
  const selectedPlan = mode === "continuous" ? continuous : offPeakOnly;
  const nightsNeeded = Math.ceil(selectedPlan.elapsedMinutes / 1440);
  const rangeAddedKm = percentNeeded * briaKmPerPercent;
  const dailyOffPeakMinutes = offPeakEndMinute - offPeakStartMinute;
  const offPeakFullWindowKwh = carPowerKw * (dailyOffPeakMinutes / 60);
  const remainingKwhAfterOneOffPeak = Math.max(0, batteryKwhNeeded - offPeakFullWindowKwh);
  const selectedModeText = mode === "continuous" ? "連續充滿" : "只用離峰優先";
  const finishDayOffset = Math.floor(selectedPlan.finishMinute / 1440);
  const finishDayText =
    finishDayOffset === 0
      ? "今天"
      : finishDayOffset === 1
        ? "明天"
        : `第 ${finishDayOffset + 1} 天`;
  const advice =
    mode === "continuous"
      ? `若從 ${formatClock(startMinute)} 連續充，約 ${formatClock(selectedPlan.finishMinute)} 充到 ${targetSoc}%。其中尖峰充電約 ${formatDuration(selectedPlan.peakCharged)}。`
      : remainingKwhAfterOneOffPeak > 0
        ? `只跑 00:00-09:00 離峰，第一晚最多約可補 ${offPeakFullWindowKwh.toFixed(1)} 度，還差約 ${remainingKwhAfterOneOffPeak.toFixed(1)} 度，要拆成約 ${nightsNeeded} 晚。`
        : `建議預約 ${formatClock(startMinute)} 開始，這次可完全落在 00:00-09:00 離峰內充到 ${targetSoc}%。`;

  homeChargeResult.className = "home-charge-result";
  homeChargeResult.innerHTML = `
    <div class="charge-result-head">
      <span>${selectedModeText}｜${volts}V × ${amps}A × ${(efficiency * 100).toFixed(0)}% ≈ ${carPowerKw.toFixed(2)} kW 入車</span>
      <strong>${finishDayText} ${formatClock(selectedPlan.finishMinute)} 充到 ${targetSoc}%</strong>
    </div>
    <div class="charge-metrics">
      <article>
        <span>需要補電</span>
        <b>${batteryKwhNeeded.toFixed(1)} 度</b>
      </article>
      <article>
        <span>純充電時間</span>
        <b>${formatDuration(chargeMinutes)}</b>
      </article>
      <article>
        <span>約增加里程</span>
        <b>${rangeAddedKm.toFixed(0)} km</b>
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
        <span>總等待</span>
        <b>${formatDuration(selectedPlan.elapsedMinutes)}</b>
      </article>
    </div>
    <div class="charge-advice">
      <strong>建議</strong>
      <span>${advice}</span>
    </div>
    <p class="charge-footnote">這是依 57.7 度電池、1% 約 3 km、固定 00:00-09:00 離峰估算；實際時間會受車機限流、電壓波動、電池溫度與高電量末段降速影響。</p>
  `;
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

function renderChargingPlan() {
  planRendered = true;
  const tripKmInput = document.getElementById("tripKm");
  if (!tripKmInput.value) {
    plannerResult.innerHTML = `
      <strong>還不能安排路線</strong>
      <span>請先搜尋出發地與目的地，讓系統自動估算公里數；也可以手動填入公里數。</span>
    `;
    return;
  }

  const tripKm = Number(tripKmInput.value);
  const currentSoc = Number(document.getElementById("currentSoc").value);
  const reserveSoc = Number(document.getElementById("reserveSoc").value);
  const direction = document.getElementById("routeDirection").value;
  const startPlace = cleanPlaceInput(document.getElementById("startPlace").value) || "出發地";
  const endPlace = cleanPlaceInput(document.getElementById("endPlace").value) || "目的地";

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
    <span>行駛方向：${getDirectionLabel(direction)}${directionAutoDetected ? "（系統依出發地與目的地自動判斷）" : ""}</span>
    <span>Bria 滿電估算續航約 ${fullRange.toFixed(0)} 公里；目前 ${currentSoc}% 約可跑 ${currentRange.toFixed(0)} 公里。</span>
    <span>不充電直達預估剩 ${arrivalSoc.toFixed(1)}%。${needCharge ? "建議提早規劃充電。" : "若路況正常，可達目的地並保留設定電量。"}</span>
    <span>${plan.impossible ? "目前電量不足以安全抵達下一個內建非特斯拉候選站，建議出發前先補電。" : `預估抵達目的地約剩 ${(plan.finalSoc ?? arrivalSoc).toFixed(1)}%。`}</span>
    <span><b>建議充電安排：</b><br>${stopText}</span>
    <small>提醒：這是依平均電耗估算，實際會受車速、冷氣、載重、天氣、上坡與塞車影響；長途建議保留 10% 到 20% 緩衝。</small>
  `;
}

tripForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderChargingPlan();
});

homeChargeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderHomeChargeCalculator();
});

homeChargeForm.addEventListener("input", renderHomeChargeCalculator);
homeChargeForm.addEventListener("change", renderHomeChargeCalculator);
renderHomeChargeCalculator();
