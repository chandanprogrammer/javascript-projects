import data from './data.js';

let expiryDate = document.querySelector('#expiry-date');
let table = document.querySelector('#tableData');
let spotPrice = data.filtered.data[0].PE.underlyingValue;
let totalDataCount = data.filtered.data.length;
let strickPriceGap = 0;

function optionHeader() {
  // Create index expiry 
  for (let i = 0; i < data.records.expiryDates.length; i++) {
    let option = document.createElement('option');
    option.innerHTML = `${data.records.expiryDates[i]}`;
    expiryDate.appendChild(option);
  }
  // Set PCR (Volume )
  document.querySelector('.pcrVolume').innerHTML = `PCR(Volume) : 
${(Math.trunc((data.filtered.PE.totVol / data.filtered.CE.totVol) * 100)) / 100}
`;
  // Set PCR (OI) 
  document.querySelector('.pcrOI').innerHTML = `PCR(OI) : 
${(Math.trunc((data.filtered.PE.totOI / data.filtered.CE.totOI) * 100)) / 100}
`;
}
optionHeader();

document.querySelector('#current-price').innerHTML = `${spotPrice}`;

let maxOICE = 0;
let maxVolumeCE = 0;
let maxVolumePE = 0;
let maxOIPE = 0;
let maxOICE_2 = 0;
let maxVolumeCE_2 = 0;
let maxVolumePE_2 = 0;
let maxOIPE_2 = 0;

// Find First Highest Value (Calculation)
for (let i = 0; i < totalDataCount; i++) {

  if (maxOICE < data.filtered.data[i].CE.openInterest) {
    maxOICE = data.filtered.data[i].CE.openInterest;
  }
  if (maxVolumeCE < data.filtered.data[i].CE.totalTradedVolume) {
    maxVolumeCE = data.filtered.data[i].CE.totalTradedVolume;
  }
  if (maxVolumePE < data.filtered.data[i].PE.totalTradedVolume) {
    maxVolumePE = data.filtered.data[i].PE.totalTradedVolume;
  }
  if (maxOIPE < data.filtered.data[i].PE.openInterest) {
    maxOIPE = data.filtered.data[i].PE.openInterest;
  }
}

// Find Second Highest Value (Calculation)
for (let i = 0; i < totalDataCount; i++) {

  if (maxOICE_2 < data.filtered.data[i].CE.openInterest && maxOICE > data.filtered.data[i].CE.openInterest) {
    maxOICE_2 = data.filtered.data[i].CE.openInterest;
  }
  if (maxVolumeCE_2 < data.filtered.data[i].CE.totalTradedVolume && maxVolumeCE > data.filtered.data[i].CE.totalTradedVolume) {
    maxVolumeCE_2 = data.filtered.data[i].CE.totalTradedVolume;
  }
  if (maxVolumePE_2 < data.filtered.data[i].PE.totalTradedVolume && maxVolumePE > data.filtered.data[i].PE.totalTradedVolume) {
    maxVolumePE_2 = data.filtered.data[i].PE.totalTradedVolume;
  }
  if (maxOIPE_2 < data.filtered.data[i].PE.openInterest && maxOIPE > data.filtered.data[i].PE.openInterest) {
    maxOIPE_2 = data.filtered.data[i].PE.openInterest;
  }
}

// Find how many list display
if (data.filtered.data[0].PE.underlying == "NIFTY") {
  strickPriceGap = 550;
  createData(strickPriceGap);
}
else if (data.filtered.data[0].PE.underlying == "BANKNIFTY") {
  strickPriceGap = 1050;
  createData(strickPriceGap);
}
else {
  createData((data.filtered.data[1].strikePrice - data.filtered.data[0].strikePrice) * 10)
}

// Create imaginary Line
function imaginaryLine(i) {
  if (spotPrice > data.filtered.data[i].strikePrice && spotPrice <= data.filtered.data[i + 1].strikePrice) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td colspan="9" class="imaginary_Line"><hr><div><span>Spot: ${spotPrice}</span></div></td>
    `;
    table.appendChild(tr);
  }
}

// Create all data in table form
function createData(strickPriceGap) {
  for (let i = 0; i < totalDataCount; i++) {
    if (data.filtered.data[i].strikePrice >= spotPrice - strickPriceGap && data.filtered.data[i].strikePrice <= spotPrice + strickPriceGap) {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="OIChangePer"><div>${data.filtered.data[i].CE.changeinOpenInterest}</div><div class="percentage">(${Math.trunc((data.filtered.data[i].CE.changeinOpenInterest / data.filtered.data[i].CE.openInterest) * 1000) / 10}%)</div></td>
        <td>${data.filtered.data[i].CE.openInterest}</td>
        <td>${data.filtered.data[i].CE.totalTradedVolume}</td>
        <td>${data.filtered.data[i].CE.lastPrice}</td>
        <td class="strike-price">${data.filtered.data[i].strikePrice}</td>
        <td>${data.filtered.data[i].PE.lastPrice}</td>
        <td>${data.filtered.data[i].PE.totalTradedVolume}</td>
        <td>${data.filtered.data[i].PE.openInterest}</td>
        <td class="OIChangePer"><div>${data.filtered.data[i].PE.changeinOpenInterest} </div><div class="percentage">(${Math.trunc((data.filtered.data[i].PE.changeinOpenInterest / data.filtered.data[i].PE.openInterest) * 1000) / 10}%)</div></td>
      `;
      table.appendChild(tr);
      if (spotPrice > data.filtered.data[i].strikePrice) {
        tr.classList.add("inTheMoneyCE");
      }
      if (spotPrice < data.filtered.data[i].strikePrice) {
        tr.classList.add("inTheMoneyPE");
      }
      imaginaryLine(i);
      dataColorFill(tr, i);
    }
  }
}


// Logic to fill color 
function dataColorFill(tr, i) {
  if (maxOICE == data.filtered.data[i].CE.openInterest) {
    tr.classList.add("max_OI_CE");
  }
  if (maxVolumeCE == data.filtered.data[i].CE.totalTradedVolume) {
    tr.classList.add("max_volume_CE");
  }
  if (maxVolumePE == data.filtered.data[i].PE.totalTradedVolume) {
    tr.classList.add("max_volume_PE");
  }
  if (maxOIPE == data.filtered.data[i].PE.openInterest) {
    tr.classList.add("max_OI_PE");
  }
  if (maxOICE_2 == data.filtered.data[i].CE.openInterest) {
    tr.classList.add("max_OI_CE_2");
  }
  if (maxVolumeCE_2 == data.filtered.data[i].CE.totalTradedVolume) {
    tr.classList.add("max_volume_CE_2");
  }
  if (maxVolumePE_2 == data.filtered.data[i].PE.totalTradedVolume) {
    tr.classList.add("max_volume_PE_2");
  }
  if (maxOIPE_2 == data.filtered.data[i].PE.openInterest) {
    tr.classList.add("max_OI_PE_2");
  }
  finalColor(tr);
}

function finalColor(tr) {
  if (maxOICE < maxVolumeCE) {
    tr.classList.replace("max_OI_CE", "supportOI");
  }
  else {
    tr.classList.replace("max_volume_CE", "supportVolume");
  }
  if (maxOIPE < maxVolumePE) {
    tr.classList.replace("max_OI_PE", "resistanceOI");
  }
  else {
    tr.classList.replace("max_volume_PE", "resistanceVolume");
  }
}


