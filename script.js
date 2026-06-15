const stations = [
  { name: "中壢服務區", ccs1: 5, ccs2: 5 },
  { name: "湖口服務區", ccs1: 2, ccs2: 3 },
  { name: "泰安服務區北上", ccs1: 5, ccs2: 5 },
  { name: "泰安服務區南下", ccs1: 5, ccs2: 5 },
  { name: "西螺服務區北上", ccs1: 4, ccs2: 4 },
  { name: "西螺服務區南下", ccs1: 3, ccs2: 3 },
  { name: "新營服務區北上", ccs1: 1, ccs2: 1 },
  { name: "新營服務區南下", ccs1: 1, ccs2: 1 },
  { name: "仁德服務區北上", ccs1: 2, ccs2: 2 },
  { name: "仁德服務區南下", ccs1: 3, ccs2: 3 },
];

const rows = document.getElementById("stationRows");
const bars = document.getElementById("bars");
const maxTotal = Math.max(...stations.map((station) => station.ccs1 + station.ccs2));

rows.innerHTML = stations
  .map((station) => {
    const total = station.ccs1 + station.ccs2;
    return `
      <tr>
        <td>${station.name}</td>
        <td class="num">${station.ccs1} 槍</td>
        <td class="num">${station.ccs2} 槍</td>
        <td class="num total">${total} 槍</td>
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
