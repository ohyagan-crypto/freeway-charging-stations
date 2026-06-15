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

const rows = document.getElementById("stationRows");
const bars = document.getElementById("bars");
const locateBtn = document.getElementById("locateBtn");
const nearestResult = document.getElementById("nearestResult");
const liveUpdated = document.getElementById("liveUpdated");
const maxTotal = Math.max(...stations.map((station) => station.ccs1 + station.ccs2));

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
        <span>距離約 ${nearest.distance.toFixed(1)} 公里</span>
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
