const vehicle = {
  name: "Hon Hai Bria",
  batteryKwh: 57.7,
  kmPerPercent: 3,
  maxHomeAmps: 22,
  offPeakStart: 0,
  offPeakEnd: 9 * 60,
};

const stations = [
  {
    id: "zhongli",
    road: "國道1號",
    name: "中壢服務區",
    brand: "EVOASIS",
    direction: "雙向",
    region: "桃園",
    parking: "小型車 C 區",
    spaces: 10,
    available: 6,
    status: "available",
    maxPower: 360,
    price: 9.8,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 24.977,
    lng: 121.257,
    mapX: 56,
    mapY: 22,
    amenities: ["廁所", "便利商店", "熟食", "親子休息"],
    nearby: ["中壢夜市", "青埔商圈", "大江購物中心"],
    note: "國道北部熱門補電點，適合台北往中南部出發前先補到 80%。",
  },
  {
    id: "hukou-s",
    road: "國道1號",
    name: "湖口服務區南站",
    brand: "EVALUE",
    direction: "南下",
    region: "新竹",
    parking: "餐廳與旅客休息室旁",
    spaces: 6,
    available: 2,
    status: "busy",
    maxPower: 200,
    price: 10.5,
    connectors: ["CCS1", "CCS2", "TPC"],
    roaming: true,
    parkingPay: false,
    coupon: false,
    lat: 24.881,
    lng: 121.045,
    mapX: 48,
    mapY: 28,
    amenities: ["廁所", "便利商店", "餐廳", "咖啡"],
    nearby: ["湖口老街", "新豐紅樹林", "竹北遠百"],
    note: "南下車流大，尖峰時段建議先確認空槍或改停下一站。",
  },
  {
    id: "hukou-n",
    road: "國道1號",
    name: "湖口服務區北站",
    brand: "EVALUE",
    direction: "北上",
    region: "新竹",
    parking: "小型車 E 區，加油站旁",
    spaces: 6,
    available: 4,
    status: "available",
    maxPower: 200,
    price: 10.5,
    connectors: ["CCS1", "CCS2", "TPC"],
    roaming: true,
    parkingPay: false,
    coupon: false,
    lat: 24.879,
    lng: 121.043,
    mapX: 50,
    mapY: 29,
    amenities: ["廁所", "便利商店", "餐廳"],
    nearby: ["湖口老街", "小叮噹科學園區", "新竹市區"],
    note: "北返台北前可補到足夠回家，TPC 車主也能納入備援站。",
  },
  {
    id: "taian-s",
    road: "國道1號",
    name: "泰安服務區南站",
    brand: "U-POWER",
    direction: "南下",
    region: "台中",
    parking: "大型車停車場，加油站旁",
    spaces: 10,
    available: 7,
    status: "available",
    maxPower: 360,
    price: 11.2,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 24.325,
    lng: 120.735,
    mapX: 44,
    mapY: 45,
    amenities: ["廁所", "便利商店", "餐廳", "伴手禮"],
    nearby: ["后里馬場", "麗寶樂園", "大甲鎮瀾宮"],
    note: "中部大型補電點，快充功率高，適合長途旅行中段補電。",
  },
  {
    id: "taian-n",
    road: "國道1號",
    name: "泰安服務區北站",
    brand: "U-POWER",
    direction: "北上",
    region: "台中",
    parking: "小型車停車場，公警隊旁",
    spaces: 10,
    available: 5,
    status: "available",
    maxPower: 360,
    price: 11.2,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 24.327,
    lng: 120.738,
    mapX: 45,
    mapY: 44,
    amenities: ["廁所", "餐廳", "便利商店"],
    nearby: ["后里馬場", "麗寶樂園", "台中市區"],
    note: "北上熱門站點，若空位低可先看西湖或清水備援。",
  },
  {
    id: "xiluo-s",
    road: "國道1號",
    name: "西螺服務區南站",
    brand: "EVOASIS",
    direction: "南下",
    region: "雲林",
    parking: "小型車 C 區",
    spaces: 6,
    available: 1,
    status: "busy",
    maxPower: 350,
    price: 9.9,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: false,
    lat: 23.784,
    lng: 120.469,
    mapX: 38,
    mapY: 58,
    amenities: ["廁所", "便利商店", "農產伴手禮"],
    nearby: ["西螺大橋", "延平老街", "虎尾糖廠"],
    note: "中南部交界補電點，停留時可順看雲林伴手禮。",
  },
  {
    id: "xiluo-n",
    road: "國道1號",
    name: "西螺服務區北站",
    brand: "EVOASIS",
    direction: "北上",
    region: "雲林",
    parking: "小型車 C 區",
    spaces: 8,
    available: 3,
    status: "available",
    maxPower: 350,
    price: 9.9,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: false,
    lat: 23.786,
    lng: 120.472,
    mapX: 39,
    mapY: 57,
    amenities: ["廁所", "餐廳", "便利商店"],
    nearby: ["西螺大橋", "西螺老街", "斗六市區"],
    note: "北返中部或北部前可補足安全電量。",
  },
  {
    id: "rende-s",
    road: "國道1號",
    name: "仁德服務區南站",
    brand: "U-POWER",
    direction: "南下",
    region: "台南",
    parking: "景觀區外側",
    spaces: 6,
    available: 0,
    status: "maintenance",
    maxPower: 360,
    price: 11.6,
    connectors: ["CCS1", "CCS2"],
    roaming: false,
    parkingPay: false,
    coupon: false,
    lat: 22.927,
    lng: 120.258,
    mapX: 35,
    mapY: 78,
    amenities: ["廁所", "餐廳", "便利商店"],
    nearby: ["奇美博物館", "十鼓仁糖文創園區", "台南市區"],
    note: "目前設為維修提醒，正式上線時應接即時站況避免誤導。",
  },
  {
    id: "guanxi",
    road: "國道3號",
    name: "關西服務區",
    brand: "TAIL",
    direction: "雙向",
    region: "新竹",
    parking: "小型車 I 區、大貨車 M 區",
    spaces: 10,
    available: 4,
    status: "available",
    maxPower: 350,
    price: 10.8,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 24.778,
    lng: 121.175,
    mapX: 55,
    mapY: 31,
    amenities: ["廁所", "餐廳", "伴手禮", "咖啡"],
    nearby: ["關西老街", "六福村", "小人國"],
    note: "國三北部重要補電點，親子旅遊路線可優先加入。",
  },
  {
    id: "xihu-s",
    road: "國道3號",
    name: "西湖服務區南站",
    brand: "EVOASIS",
    direction: "南下",
    region: "苗栗",
    parking: "小型車 B 區",
    spaces: 8,
    available: 5,
    status: "available",
    maxPower: 350,
    price: 9.8,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: false,
    lat: 24.563,
    lng: 120.748,
    mapX: 43,
    mapY: 38,
    amenities: ["廁所", "便利商店", "餐廳"],
    nearby: ["三義木雕街", "勝興車站", "苗栗市區"],
    note: "國三南下順路補電，空位通常比都會快充穩定。",
  },
  {
    id: "xihu-n",
    road: "國道3號",
    name: "西湖服務區北站",
    brand: "EVOASIS",
    direction: "北上",
    region: "苗栗",
    parking: "小型車 D 區",
    spaces: 8,
    available: 2,
    status: "busy",
    maxPower: 350,
    price: 9.8,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: true,
    coupon: false,
    lat: 24.565,
    lng: 120.751,
    mapX: 44,
    mapY: 37,
    amenities: ["廁所", "餐廳", "伴手禮"],
    nearby: ["三義木雕街", "龍騰斷橋", "苗栗市區"],
    note: "北上尖峰容易排隊，可與關西、清水交叉檢查。",
  },
  {
    id: "qingshui",
    road: "國道3號",
    name: "清水服務區",
    brand: "U-POWER",
    direction: "雙向",
    region: "台中",
    parking: "小型車 A 區",
    spaces: 10,
    available: 8,
    status: "available",
    maxPower: 360,
    price: 11.4,
    connectors: ["CCS1", "CCS2", "TPC"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 24.281,
    lng: 120.601,
    mapX: 40,
    mapY: 47,
    amenities: ["廁所", "咖啡", "餐廳", "觀景台"],
    nearby: ["高美濕地", "梧棲漁港", "台中港三井"],
    note: "站點大、周邊旅遊強，適合安排 20 到 40 分鐘休息。",
  },
  {
    id: "nantou",
    road: "國道3號",
    name: "南投服務區",
    brand: "EVALUE",
    direction: "雙向",
    region: "南投",
    parking: "小型車 A 區",
    spaces: 10,
    available: 6,
    status: "available",
    maxPower: 200,
    price: 10.2,
    connectors: ["CCS1", "CCS2"],
    roaming: true,
    parkingPay: false,
    coupon: true,
    lat: 23.877,
    lng: 120.679,
    mapX: 44,
    mapY: 61,
    amenities: ["廁所", "餐廳", "農產展售"],
    nearby: ["中興新村", "微熱山丘", "南投市區"],
    note: "往日月潭或南投山線前可先補電。",
  },
  {
    id: "gukeng",
    road: "國道3號",
    name: "古坑服務區",
    brand: "TAIL",
    direction: "雙向",
    region: "雲林",
    parking: "小型車 H 區",
    spaces: 4,
    available: 1,
    status: "busy",
    maxPower: 200,
    price: 10.6,
    connectors: ["CCS1", "CCS2"],
    roaming: false,
    parkingPay: false,
    coupon: false,
    lat: 23.618,
    lng: 120.541,
    mapX: 40,
    mapY: 67,
    amenities: ["廁所", "咖啡", "便利商店"],
    nearby: ["古坑綠色隧道", "劍湖山", "斗六市區"],
    note: "車位較少，適合當備援站而非唯一補電點。",
  },
  {
    id: "dongshan",
    road: "國道3號",
    name: "東山服務區",
    brand: "U-POWER",
    direction: "雙向",
    region: "台南",
    parking: "服務區停車場，鄰近加油站",
    spaces: 6,
    available: 3,
    status: "available",
    maxPower: 360,
    price: 11.6,
    connectors: ["CCS1", "CCS2", "TPC"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 23.285,
    lng: 120.409,
    mapX: 37,
    mapY: 73,
    amenities: ["廁所", "餐廳", "咖啡", "伴手禮"],
    nearby: ["關子嶺溫泉", "白河蓮花", "柳營商圈"],
    note: "南部國三長途補電關鍵站，支援多規格車款。",
  },
  {
    id: "taipei-city",
    road: "都會快充",
    name: "台北信義都會快充站",
    brand: "EVOASIS",
    direction: "市區",
    region: "台北",
    parking: "地下停車場 B2",
    spaces: 12,
    available: 9,
    status: "available",
    maxPower: 180,
    price: 8.8,
    connectors: ["CCS1", "CCS2", "J1772"],
    roaming: true,
    parkingPay: true,
    coupon: true,
    lat: 25.033,
    lng: 121.565,
    mapX: 67,
    mapY: 18,
    amenities: ["停車場", "百貨", "餐廳", "洗手間"],
    nearby: ["台北 101", "信義商圈", "象山"],
    note: "都會型快充與停車自動扣款示意站。",
  },
  {
    id: "kaohsiung-city",
    road: "都會快充",
    name: "高雄亞灣快充站",
    brand: "TAIL",
    direction: "市區",
    region: "高雄",
    parking: "商場停車場 1F",
    spaces: 8,
    available: 4,
    status: "available",
    maxPower: 250,
    price: 9.2,
    connectors: ["CCS1", "CCS2", "TPC"],
    roaming: true,
    parkingPay: true,
    coupon: false,
    lat: 22.604,
    lng: 120.303,
    mapX: 38,
    mapY: 88,
    amenities: ["停車場", "商場", "餐廳", "廁所"],
    nearby: ["高雄展覽館", "駁二藝術特區", "夢時代"],
    note: "南部市區補電示意站，適合展示城市找站與停車整合。",
  },
];

const paymentMethods = [
  { id: "card-8866", name: "玉山信用卡", detail: "**** 8866 | 預設付款", active: true },
  { id: "linepay", name: "LINE Pay", detail: "行動支付備援", active: false },
  { id: "applepay", name: "Apple Pay", detail: "手機快速授權", active: false },
];

const coupons = [
  { id: "highway10", title: "國道快充 9 折", detail: "適用 EVOASIS、TAIL 國道站點", active: true },
  { id: "upower50", title: "U-POWER 折抵 50 元", detail: "滿 20 度可用，每月一次", active: false },
  { id: "parking", title: "停車自動扣款 1 小時免費", detail: "都會快充站限定", active: false },
];

const state = {
  selectedStationId: stations[0].id,
  selectedBrands: new Set(),
  favorites: new Set(JSON.parse(localStorage.getItem("evFavorites") || "[]")),
  activities: JSON.parse(localStorage.getItem("evActivities") || "[]"),
  reports: JSON.parse(localStorage.getItem("evReports") || "[]"),
  activePaymentId: localStorage.getItem("evPayment") || "card-8866",
  activeCouponIds: new Set(JSON.parse(localStorage.getItem("evCoupons") || '["highway10"]')),
  currentSession: null,
};

const $ = (id) => document.getElementById(id);

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getStation(id) {
  return stations.find((station) => station.id === id) || stations[0];
}

function getStatusText(status) {
  if (status === "available") return "有空位";
  if (status === "busy") return "接近滿站";
  return "維修提醒";
}

function formatKwh(value) {
  return `${Number(value).toFixed(1)} 度`;
}

function formatMoney(value) {
  return `$${Math.round(value).toLocaleString("zh-TW")}`;
}

function getMapsUrl(station) {
  const query = `${station.name} 電動車充電站`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function saveLocalState() {
  localStorage.setItem("evFavorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("evActivities", JSON.stringify(state.activities.slice(0, 12)));
  localStorage.setItem("evReports", JSON.stringify(state.reports.slice(0, 12)));
  localStorage.setItem("evPayment", state.activePaymentId);
  localStorage.setItem("evCoupons", JSON.stringify([...state.activeCouponIds]));
}

function brandList() {
  return [...new Set(stations.map((station) => station.brand))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
}

function renderBrandFilters() {
  $("brandFilters").innerHTML = brandList()
    .map(
      (brand) => `
        <button class="brand-chip ${state.selectedBrands.has(brand) ? "active" : ""}" type="button" data-brand="${brand}">
          ${brand}
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-brand]").forEach((button) => {
    button.addEventListener("click", () => {
      const brand = button.dataset.brand;
      if (state.selectedBrands.has(brand)) state.selectedBrands.delete(brand);
      else state.selectedBrands.add(brand);
      renderBrandFilters();
      renderApp();
    });
  });
}

function getFilteredStations() {
  const search = $("stationSearch").value.trim().toLowerCase();
  const road = $("roadFilter").value;
  const connector = $("connectorFilter").value;
  const status = $("statusFilter").value;
  const roamingOnly = $("roamingOnly").checked;
  const parkingOnly = $("parkingOnly").checked;
  const favoriteOnly = $("favoriteOnly").checked;

  let filtered = stations.filter((station) => {
    const searchHaystack = [
      station.name,
      station.brand,
      station.road,
      station.direction,
      station.region,
      station.parking,
      station.connectors.join(" "),
      station.amenities.join(" "),
      station.nearby.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    if (search && !searchHaystack.includes(search)) return false;
    if (road !== "all" && station.road !== road) return false;
    if (connector !== "all" && !station.connectors.includes(connector)) return false;
    if (status !== "all" && station.status !== status) return false;
    if (roamingOnly && !station.roaming) return false;
    if (parkingOnly && !station.parkingPay) return false;
    if (favoriteOnly && !state.favorites.has(station.id)) return false;
    if (state.selectedBrands.size && !state.selectedBrands.has(station.brand)) return false;
    return true;
  });

  const sortBy = $("sortBy").value;
  filtered = filtered.slice().sort((a, b) => {
    if (sortBy === "power") return b.maxPower - a.maxPower;
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "name") return a.name.localeCompare(b.name, "zh-Hant");
    return b.available - a.available || b.maxPower - a.maxPower;
  });

  return filtered;
}

function ensureSelectedStation(filtered) {
  if (!filtered.length) return;
  if (!filtered.some((station) => station.id === state.selectedStationId)) {
    state.selectedStationId = filtered[0].id;
  }
}

function renderSummary(filtered) {
  const totalSpaces = filtered.reduce((sum, station) => sum + station.spaces, 0);
  const totalAvailable = filtered.reduce((sum, station) => sum + station.available, 0);
  const roamingCount = filtered.filter((station) => station.roaming).length;
  const bestPower = filtered.length ? Math.max(...filtered.map((station) => station.maxPower)) : 0;
  const avgPrice = filtered.length ? filtered.reduce((sum, station) => sum + station.price, 0) / filtered.length : 0;

  $("summaryStrip").innerHTML = `
    <article class="summary-card">
      <span>符合站點</span>
      <strong>${filtered.length} 站</strong>
    </article>
    <article class="summary-card">
      <span>目前空位</span>
      <strong>${totalAvailable}/${totalSpaces}</strong>
    </article>
    <article class="summary-card">
      <span>最高功率</span>
      <strong>${bestPower || "-"} kW</strong>
    </article>
    <article class="summary-card">
      <span>平均費率</span>
      <strong>${avgPrice ? avgPrice.toFixed(1) : "-"} 元/度</strong>
    </article>
  `;

  $("resultCount").textContent = `${roamingCount} 站支援漫遊`;
}

function renderPins(filtered) {
  const filteredIds = new Set(filtered.map((station) => station.id));
  $("mapPins").innerHTML = stations
    .map((station) => {
      const visible = filteredIds.has(station.id);
      return `
        <button
          class="map-pin ${station.status} ${state.selectedStationId === station.id ? "active" : ""}"
          type="button"
          data-pin="${station.id}"
          title="${station.name}"
          style="left:${station.mapX}%; top:${station.mapY}%; ${visible ? "" : "opacity:0.18;"}"
        >
          ${station.available}
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-pin]").forEach((pin) => {
    pin.addEventListener("click", () => selectStation(pin.dataset.pin));
  });
}

function renderStationList(filtered) {
  if (!filtered.length) {
    $("stationList").innerHTML = `
      <div class="result-card warn">
        <strong>沒有符合條件的站點</strong>
        <span>請放寬品牌、規格或站況篩選。</span>
      </div>
    `;
    return;
  }

  $("stationList").innerHTML = filtered
    .map((station) => {
      const isFavorite = state.favorites.has(station.id);
      return `
        <button class="station-item ${state.selectedStationId === station.id ? "active" : ""}" type="button" data-station="${station.id}">
          <span class="station-item-main">
            <span class="station-name-row">
              <span class="favorite-star ${isFavorite ? "active" : ""}">${isFavorite ? "★" : "☆"}</span>
              <strong>${station.name}</strong>
            </span>
            <span class="station-meta">
              <span class="tag">${station.brand}</span>
              <span class="tag">${station.road} ${station.direction}</span>
              <span class="tag ${station.status === "available" ? "green" : station.status === "busy" ? "amber" : "red"}">${getStatusText(station.status)}</span>
              ${station.roaming ? '<span class="tag green">可漫遊</span>' : '<span class="tag amber">需原廠 App</span>'}
              ${station.parkingPay ? '<span class="tag">停車扣款</span>' : ""}
            </span>
          </span>
          <span class="station-quick">
            <strong>${station.available}/${station.spaces}</strong>
            <span>${station.maxPower} kW | ${station.price.toFixed(1)} 元/度</span>
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-station]").forEach((button) => {
    button.addEventListener("click", () => selectStation(button.dataset.station));
  });
}

function renderStationDetail() {
  const station = getStation(state.selectedStationId);
  const isFavorite = state.favorites.has(station.id);
  const connectorCards = station.connectors
    .map(
      (connector) => `
        <article class="connector-card">
          <span>${connector}</span>
          <strong>${station.maxPower} kW</strong>
          <small>${station.available > 0 ? "可用槍數依現場為準" : "目前不建議前往"}</small>
        </article>
      `
    )
    .join("");

  $("stationDetail").innerHTML = `
    <div class="detail-hero">
      <div class="detail-top">
        <div class="detail-title">
          <p class="eyebrow">${station.brand} | ${station.region}</p>
          <h3>${station.name}</h3>
          <span class="status-pill ${station.status}">${getStatusText(station.status)}</span>
        </div>
        <button class="icon-button ${isFavorite ? "active" : ""}" type="button" id="favoriteButton" aria-label="收藏站點">
          ${isFavorite ? "★" : "☆"}
        </button>
      </div>

      <div class="detail-actions">
        <a class="primary-button" href="${getMapsUrl(station)}" target="_blank" rel="noreferrer">導航</a>
        <button class="secondary" type="button" id="startRoamingFromDetail">漫遊啟動</button>
        <button class="ghost-button" type="button" id="reportFromDetail">回報問題</button>
      </div>

      <div class="detail-metrics">
        <article class="metric">
          <span>即時空位</span>
          <strong>${station.available}/${station.spaces}</strong>
        </article>
        <article class="metric">
          <span>最高功率</span>
          <strong>${station.maxPower} kW</strong>
        </article>
        <article class="metric">
          <span>費率預估</span>
          <strong>${station.price.toFixed(1)} 元/度</strong>
        </article>
        <article class="metric">
          <span>停車扣款</span>
          <strong>${station.parkingPay ? "支援" : "未支援"}</strong>
        </article>
      </div>

      <div class="detail-section">
        <h4>充電規格</h4>
        <div class="connector-grid">${connectorCards}</div>
      </div>

      <div class="detail-section">
        <h4>站點資訊</h4>
        <ul class="feature-list">
          <li>${station.road} ${station.direction}，位置：${station.parking}</li>
          <li>${station.roaming ? "支援跨品牌漫遊啟動與付款示意" : "此站需使用原充電品牌 App 或現場方式啟動"}</li>
          <li>${station.coupon ? "可套用優惠券或訂閱折扣" : "目前沒有可用優惠券"}</li>
          <li>${station.note}</li>
        </ul>
      </div>
    </div>
  `;

  $("favoriteButton").addEventListener("click", () => toggleFavorite(station.id));
  $("startRoamingFromDetail").addEventListener("click", () => {
    $("roamingStation").value = station.id;
    updateRoamingConnectors();
    location.hash = "#roaming";
  });
  $("reportFromDetail").addEventListener("click", () => {
    $("supportStation").value = station.id;
    location.hash = "#support";
  });

  renderNearby();
}

function renderNearby() {
  const station = getStation(state.selectedStationId);
  $("nearbyList").innerHTML = [
    ...station.amenities.map((item) => ({ title: item, type: "站內服務" })),
    ...station.nearby.map((item) => ({ title: item, type: "附近景點" })),
  ]
    .map(
      (item) => `
        <article class="nearby-card">
          <strong>${item.title}</strong>
          <span>${item.type} | 以 ${station.name} 為中心規劃停留</span>
        </article>
      `
    )
    .join("");
}

function renderFavorites() {
  const favorites = stations.filter((station) => state.favorites.has(station.id));
  $("favoriteList").innerHTML = favorites.length
    ? favorites
        .map(
          (station) => `
            <article class="favorite-card">
              <strong>${station.name}</strong>
              <span>${station.brand} | ${station.available}/${station.spaces} 空位 | ${station.maxPower} kW</span>
              <button type="button" data-open-favorite="${station.id}">查看站點</button>
            </article>
          `
        )
        .join("")
    : `
      <article class="favorite-card">
        <strong>尚未收藏站點</strong>
        <span>在站點詳情按星號後，會集中顯示在這裡。</span>
      </article>
    `;

  document.querySelectorAll("[data-open-favorite]").forEach((button) => {
    button.addEventListener("click", () => {
      selectStation(button.dataset.openFavorite);
      location.hash = "#app";
    });
  });
}

function selectStation(id) {
  state.selectedStationId = id;
  renderApp();
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveLocalState();
  renderApp();
  renderFavorites();
}

function renderApp() {
  const filtered = getFilteredStations();
  ensureSelectedStation(filtered);
  renderSummary(filtered);
  renderPins(filtered);
  renderStationList(filtered);
  renderStationDetail();
  renderFavorites();
}

function estimateDistance(origin, destination) {
  const text = `${origin}${destination}`;
  if (/台北|基隆|新北/.test(origin) && /高雄|屏東/.test(destination)) return 360;
  if (/台北|新北/.test(origin) && /台中|清水/.test(destination)) return 170;
  if (/台中/.test(origin) && /高雄|台南/.test(destination)) return 210;
  if (/台北/.test(origin) && /台南/.test(destination)) return 315;
  if (/高雄/.test(origin) && /台北/.test(destination)) return 360;
  if (/花蓮|台東|宜蘭/.test(text)) return 250;
  return 220;
}

function renderRouteResult(event) {
  event?.preventDefault();
  const origin = $("routeOrigin").value.trim() || "出發地";
  const destination = $("routeDestination").value.trim() || "目的地";
  const soc = clamp(Number($("routeSoc").value), 1, 100);
  const reserve = clamp(Number($("routeReserve").value), 5, 40);
  const kmPerPercent = clamp(Number($("routeKmPerPercent").value), 1, 8);
  const connector = $("routeConnector").value;
  const mode = document.querySelector('input[name="routeMode"]:checked')?.value || "fast";
  const distance = estimateDistance(origin, destination);
  const usableKm = Math.max(0, (soc - reserve) * kmPerPercent);
  const needCharge = usableKm < distance;
  const shortKm = Math.max(0, distance - usableKm);
  const neededPercent = Math.ceil(shortKm / kmPerPercent + reserve);

  let candidates = stations.filter((station) => station.status !== "maintenance");
  if (connector !== "all") candidates = candidates.filter((station) => station.connectors.includes(connector));
  if (mode === "roaming") candidates = candidates.filter((station) => station.roaming);
  candidates = candidates.sort((a, b) => {
    if (mode === "cheap") return a.price - b.price || b.available - a.available;
    if (mode === "roaming") return Number(b.roaming) - Number(a.roaming) || b.available - a.available;
    return b.maxPower - a.maxPower || b.available - a.available;
  });

  const picks = candidates.slice(0, needCharge ? 3 : 2);
  const cards = picks
    .map(
      (station, index) => `
        <article class="result-card ${index === 0 ? "good" : ""}">
          <strong>${index === 0 ? "推薦" : "備援"}：${station.name}</strong>
          <span>${station.brand} | ${station.maxPower} kW | ${station.available}/${station.spaces} 空位 | ${station.price.toFixed(1)} 元/度</span>
          <span>${station.roaming ? "可用網站漫遊啟動示意" : "需改用品牌 App"}，附近：${station.nearby.slice(0, 2).join("、")}</span>
        </article>
      `
    )
    .join("");

  $("routeResult").innerHTML = `
    <article class="result-card strong">
      <span>${origin} → ${destination}</span>
      <strong>${distance} km 預估路線</strong>
      <span>目前可安心行駛約 ${Math.round(usableKm)} km，保留 ${reserve}% 到站安全電量。</span>
    </article>
    <article class="result-card ${needCharge ? "warn" : "good"}">
      <strong>${needCharge ? "建議中途補電" : "可直達，仍建議設備援站"}</strong>
      <span>${needCharge ? `差約 ${Math.round(shortKm)} km，建議至少補到 ${neededPercent}% 以上。` : "目前電量足夠，長途仍保留一個高功率站點。"} </span>
    </article>
    ${cards}
  `;
}

function renderRoamingOptions() {
  $("roamingStation").innerHTML = stations
    .map((station) => `<option value="${station.id}">${station.name} | ${station.brand}</option>`)
    .join("");
  $("supportStation").innerHTML = stations
    .map((station) => `<option value="${station.id}">${station.name} | ${station.brand}</option>`)
    .join("");
  $("roamingStation").value = state.selectedStationId;
  updateRoamingConnectors();
}

function updateRoamingConnectors() {
  const station = getStation($("roamingStation").value);
  $("roamingConnector").innerHTML = station.connectors
    .map((connector) => `<option value="${connector}">${connector}</option>`)
    .join("");
}

function renderChargingSession(event) {
  event?.preventDefault();
  const station = getStation($("roamingStation").value);
  const connector = $("roamingConnector").value;
  const qr = $("roamingQr").value.trim() || `${station.id.toUpperCase()}-01`;
  const kwh = clamp(Number($("roamingKwh").value), 1, 100);
  const couponDiscount = station.coupon && state.activeCouponIds.size ? 0.9 : 1;
  const fee = kwh * station.price * couponDiscount;
  const minutes = Math.max(8, Math.ceil((kwh / station.maxPower) * 60 * 1.25));

  state.currentSession = {
    stationId: station.id,
    connector,
    qr,
    kwh,
    fee,
    minutes,
    progress: station.roaming ? 38 : 0,
    createdAt: new Date().toLocaleString("zh-TW", { hour12: false }),
  };

  state.activities.unshift({
    title: station.roaming ? `已建立 ${station.name} 模擬充電` : `${station.name} 需改用品牌 App`,
    detail: `${connector} | ${formatKwh(kwh)} | ${formatMoney(fee)} | ${qr}`,
    time: state.currentSession.createdAt,
  });
  state.activities = state.activities.slice(0, 12);
  saveLocalState();
  renderCurrentSession();
  renderActivityList();
}

function renderCurrentSession() {
  const session = state.currentSession;
  if (!session) {
    const station = getStation(state.selectedStationId);
    $("chargingSession").innerHTML = `
      <div class="compact-head">
        <p class="eyebrow">Session</p>
        <h3>尚未建立充電</h3>
      </div>
      <div class="result-card">
        <strong>${station.name}</strong>
        <span>選擇站點、規格與補電度數後，可以模擬 AmpGO 類似的掃碼啟動、費用預估與紀錄流程。</span>
      </div>
    `;
    return;
  }

  const station = getStation(session.stationId);
  const canStart = station.roaming && station.available > 0 && station.status !== "maintenance";
  $("chargingSession").innerHTML = `
    <div class="compact-head">
      <p class="eyebrow">Session</p>
      <h3>${canStart ? "模擬充電中" : "無法直接啟動"}</h3>
    </div>
    <div class="session-meter">
      <div class="meter-track"><div class="meter-bar" style="width:${session.progress}%"></div></div>
      <div class="result-card ${canStart ? "good" : "warn"}">
        <strong>${station.name}</strong>
        <span>${session.connector} | 樁號 ${session.qr}</span>
        <span>預估 ${formatKwh(session.kwh)}，約 ${session.minutes} 分鐘，費用 ${formatMoney(session.fee)}。</span>
        <span>${canStart ? "靜態版已建立示意流程；正式版需後端 API 才能真正送出啟動指令。" : "此站目前不適合網站端啟動，請改用品牌 App 或現場方式。"}</span>
      </div>
    </div>
    <div class="session-actions">
      <button class="secondary" type="button" id="advanceSession">更新進度</button>
      <button class="ghost-button" type="button" id="stopSession">結束</button>
    </div>
  `;

  $("advanceSession").addEventListener("click", () => {
    state.currentSession.progress = Math.min(100, state.currentSession.progress + 18);
    renderCurrentSession();
  });
  $("stopSession").addEventListener("click", () => {
    state.currentSession = null;
    renderCurrentSession();
  });
}

function renderActivityList() {
  $("activityList").innerHTML = state.activities.length
    ? state.activities
        .map(
          (activity) => `
            <article class="list-card">
              <strong>${activity.title}</strong>
              <span>${activity.detail}</span>
              <span>${activity.time}</span>
            </article>
          `
        )
        .join("")
    : `
      <article class="list-card">
        <strong>尚無紀錄</strong>
        <span>建立模擬充電後，紀錄會顯示在這裡。</span>
      </article>
    `;
}

function renderWallet() {
  $("paymentOptions").innerHTML = paymentMethods
    .map(
      (method) => `
        <article class="payment-card ${state.activePaymentId === method.id ? "active" : ""}">
          <strong>${method.name}</strong>
          <span>${method.detail}</span>
          <button type="button" data-payment="${method.id}">${state.activePaymentId === method.id ? "使用中" : "設為預設"}</button>
        </article>
      `
    )
    .join("");

  $("couponList").innerHTML = coupons
    .map(
      (coupon) => `
        <article class="coupon-card">
          <strong>${coupon.title}</strong>
          <span>${coupon.detail}</span>
          <button type="button" data-coupon="${coupon.id}">
            ${state.activeCouponIds.has(coupon.id) ? "已套用" : "套用"}
          </button>
        </article>
      `
    )
    .join("");

  $("parkingPayment").innerHTML = paymentMethods
    .map((method) => `<option value="${method.id}">${method.name}</option>`)
    .join("");
  $("parkingPayment").value = state.activePaymentId;

  document.querySelectorAll("[data-payment]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activePaymentId = button.dataset.payment;
      saveLocalState();
      renderWallet();
    });
  });

  document.querySelectorAll("[data-coupon]").forEach((button) => {
    const id = button.dataset.coupon;
    button.addEventListener("click", () => {
      if (state.activeCouponIds.has(id)) state.activeCouponIds.delete(id);
      else state.activeCouponIds.add(id);
      saveLocalState();
      renderWallet();
    });
  });
}

function handleParkingSave(event) {
  event.preventDefault();
  const plate = $("licensePlate").value.trim().toUpperCase();
  const method = paymentMethods.find((item) => item.id === $("parkingPayment").value);
  if (!plate) {
    $("parkingStatus").textContent = "請先輸入車牌號碼。";
    return;
  }
  $("parkingStatus").textContent = `${plate} 已綁定 ${method?.name || "付款方式"}，支援站點可做停車自動扣款示意。`;
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
      if (offPeak) offPeakCharged += 1;
      else peakCharged += 1;
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

function renderHomeCalculator() {
  const currentSoc = Number($("homeSoc").value);
  const targetSoc = Number($("homeTarget").value);
  const amps = clamp(Number($("homeAmps").value), 0, vehicle.maxHomeAmps);
  const volts = Number($("homeVolts").value);
  const efficiency = Number($("homeEfficiency").value) / 100;
  const startMinute = parseTimeToMinute($("homeStart").value);
  const mode = document.querySelector('input[name="homeMode"]:checked')?.value || "offpeak";

  const wallPowerKw = (volts * amps) / 1000;
  const carPowerKw = wallPowerKw * efficiency;
  const offPeakMinutes = vehicle.offPeakEnd - vehicle.offPeakStart;
  const offPeakKwh = carPowerKw * (offPeakMinutes / 60);

  if (
    !Number.isFinite(currentSoc) ||
    !Number.isFinite(targetSoc) ||
    targetSoc <= currentSoc ||
    currentSoc < 0 ||
    targetSoc > 100 ||
    amps < 1 ||
    volts < 100 ||
    efficiency <= 0
  ) {
    $("homeResult").innerHTML = `
      <article class="result-card warn">
        <strong>請確認輸入</strong>
        <span>目標電量需高於目前電量，電流最高以 22A 計算。</span>
      </article>
    `;
    return;
  }

  const percentNeeded = targetSoc - currentSoc;
  const batteryKwhNeeded = (percentNeeded / 100) * vehicle.batteryKwh;
  const chargeMinutes = (batteryKwhNeeded / carPowerKw) * 60;
  const plan = addChargingMinutes(startMinute, chargeMinutes, mode === "offpeak");
  const offPeakPercent = (offPeakKwh / vehicle.batteryKwh) * 100;
  const oneNightSoc = Math.min(targetSoc, currentSoc + offPeakPercent);
  const finishDayOffset = Math.floor(plan.finishMinute / 1440);
  const finishDay = finishDayOffset === 0 ? "今天" : finishDayOffset === 1 ? "明天" : `第 ${finishDayOffset + 1} 天`;

  $("homeResult").innerHTML = `
    <article class="result-card strong">
      <span>${vehicle.name} | ${volts}V x ${amps}A x ${Math.round(efficiency * 100)}%</span>
      <strong>${finishDay} ${formatClock(plan.finishMinute)} 可到 ${targetSoc}%</strong>
      <span>入車功率約 ${carPowerKw.toFixed(2)} kW。</span>
    </article>
    <article class="result-card good">
      <strong>需要補 ${formatKwh(batteryKwhNeeded)}</strong>
      <span>純充電時間約 ${formatDuration(chargeMinutes)}，約增加 ${Math.round(percentNeeded * vehicle.kmPerPercent)} km。</span>
    </article>
    <article class="result-card ${oneNightSoc >= targetSoc ? "good" : "warn"}">
      <strong>離峰一晚最多 ${formatKwh(offPeakKwh)}</strong>
      <span>00:00-09:00 約可增加 ${offPeakPercent.toFixed(1)}%，今晚可到約 ${oneNightSoc.toFixed(1)}%。</span>
    </article>
    <article class="result-card">
      <strong>實際充電分布</strong>
      <span>離峰充電 ${formatDuration(plan.offPeakCharged)}，尖峰充電 ${formatDuration(plan.peakCharged)}，總等待 ${formatDuration(plan.elapsedMinutes)}。</span>
    </article>
  `;
}

function handleSupportSubmit(event) {
  event.preventDefault();
  const station = getStation($("supportStation").value);
  const type = $("supportType").value;
  const note = $("supportNote").value.trim() || "未填寫補充說明";
  const createdAt = new Date().toLocaleString("zh-TW", { hour12: false });
  const ticket = `EV-${Date.now().toString().slice(-6)}`;
  state.reports.unshift({ ticket, station: station.name, type, note, createdAt });
  state.reports = state.reports.slice(0, 12);
  saveLocalState();
  $("supportNote").value = "";
  renderSupportResult();
}

function renderSupportResult() {
  $("supportResult").innerHTML = state.reports.length
    ? state.reports
        .map(
          (report, index) => `
            <article class="result-card ${index === 0 ? "good" : ""}">
              <strong>${report.ticket} | ${report.type}</strong>
              <span>${report.station} | ${report.createdAt}</span>
              <span>${report.note}</span>
            </article>
          `
        )
        .join("")
    : `
      <article class="result-card">
        <strong>尚無回報紀錄</strong>
        <span>送出後會先保存在本機，正式版可改接客服後台或通知系統。</span>
      </article>
    `;
}

function bindEvents() {
  [
    "stationSearch",
    "roadFilter",
    "connectorFilter",
    "statusFilter",
    "sortBy",
    "roamingOnly",
    "parkingOnly",
    "favoriteOnly",
  ].forEach((id) => $(id).addEventListener("input", renderApp));

  $("resetFilters").addEventListener("click", () => {
    $("stationSearch").value = "";
    $("roadFilter").value = "all";
    $("connectorFilter").value = "all";
    $("statusFilter").value = "all";
    $("sortBy").value = "availability";
    $("roamingOnly").checked = false;
    $("parkingOnly").checked = false;
    $("favoriteOnly").checked = false;
    state.selectedBrands.clear();
    renderBrandFilters();
    renderApp();
  });

  $("routeForm").addEventListener("submit", renderRouteResult);
  ["routeOrigin", "routeDestination", "routeSoc", "routeReserve", "routeKmPerPercent", "routeConnector"].forEach((id) => {
    $(id).addEventListener("input", renderRouteResult);
  });
  document.querySelectorAll('input[name="routeMode"]').forEach((input) => input.addEventListener("change", renderRouteResult));

  $("roamingStation").addEventListener("change", updateRoamingConnectors);
  $("roamingForm").addEventListener("submit", renderChargingSession);

  $("parkingForm").addEventListener("submit", handleParkingSave);

  ["homeSoc", "homeTarget", "homeStart", "homeAmps", "homeVolts", "homeEfficiency"].forEach((id) => {
    $(id).addEventListener("input", renderHomeCalculator);
  });
  document.querySelectorAll('input[name="homeMode"]').forEach((input) => input.addEventListener("change", renderHomeCalculator));
  document.querySelectorAll("[data-home-soc]").forEach((button) => {
    button.addEventListener("click", () => {
      $("homeSoc").value = button.dataset.homeSoc;
      renderHomeCalculator();
    });
  });

  $("supportForm").addEventListener("submit", handleSupportSubmit);
}

renderBrandFilters();
renderRoamingOptions();
renderWallet();
bindEvents();
renderApp();
renderRouteResult();
renderCurrentSession();
renderActivityList();
renderHomeCalculator();
renderSupportResult();
