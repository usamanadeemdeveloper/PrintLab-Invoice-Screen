var sizeValue;
const errorText = "Error!";
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
var margin = 0.5;
var setupFee = 5000;
var updatedRate = document.getElementById("updatedRate");
var impositionValue;
var sideOptionValue;
var impositionElement;
var impressionsCell2;
var impressionsValue;
var jobColorsFront;
var jobColorsBack;
var sizesValue2;
var paperMarketRates;
var selectedPaper;
var selectedGsm;
var qty1 = document.getElementById("qty1");
var moqQty1InBooks = document.getElementById("moqQty1InBooks");
var sheetsRate1 = document.getElementById("sheetsRate1");
var paperMarketRate1 = document.getElementById("paperMart1");
var slicingCost1 = document.getElementById("slicingCost1");
var ctp1 = document.getElementById("ctp1");
var press1 = document.getElementById("press1");
var fixedCost1 = document.getElementById("fixedCost1");
var pricePerQty1 = document.getElementById("pricePerQty1");
var pricePerUnit1 = document.getElementById("pricePerUnit1");
var totalProfit = document.getElementById("totalProfit");
var config = [
  {
    spec: "PRESS SPECIFICATION",
    machine: "ROTA (SPOT COLOR)",
    impression: "IMPRESSION RATE: 250.00",
    base: "BASE RATE(COST): 500.00",
    ctp: "CTP RATE: 220.00",
    sheet: "SHEET PIECES: 1/2",
  },
];
var lamination = [
  {
    lamination: "LAMINATION",
    option: "OPTIONS",
    dimension: 'DIMENSIONS: <br> 18.00" x 12.00"',
    printArea: "PRINT AREA: <br> 1.50 (SQ/FT)",
  },
];
var press = [
  {
    press: "PRESS SPECIFICATION",
    selectedPart: "SELECTED PART",
    enterCount: "ENTER COUNT OF SERIAL NUMBERS",
    enter: "100",
  },
];
var uping = [
  {
    product: "LETTER",
    s17x24: "4",
    s23x36: "8",
    s25x36: "8",
    s18x23: "4",
    s85x12: "1",
    s20x30: "1",
    id: 1,
  },
  {
    product: "DL",
    s17x24: "12",
    s23x36: "24",
    s25x36: "24",
    s18x23: "12",
    s85x12: "0",
    s20x30: "1",
    id: 2,
  },
  {
    product: "A5",
    s17x24: "8",
    s23x36: "16",
    s25x36: "16",
    s18x23: "8",
    s85x12: "0",
    s20x30: "-",
    id: 3,
  },
  {
    product: "A4",
    s17x24: "4",
    s23x36: "8",
    s25x36: "8",
    s18x23: "4",
    s85x12: "1",
    s20x30: "-",
    id: 4,
  },
  {
    product: "A3",
    s17x24: "2",
    s23x36: "4",
    s25x36: "4",
    s18x23: "2",
    s85x12: "0",
    s20x30: "-",
    id: 5,
  },
  {
    product: "BUISNESS CARD",
    s17x24: "-",
    s23x36: "-",
    s25x36: "96",
    s18x23: "-",
    s85x12: "-",
    s20x30: "-",
    id: 6,
  },
  {
    product: "PRESENTATION FOLDER",
    s17x24: "-",
    s23x36: "-",
    s25x36: "4",
    s18x23: "-",
    s85x12: "-",
    s20x30: "-",
    id: 7,
  },
];
var pressMachines = [
  {
    header: [
      "PRESS",
      "CTP RATE",
      "1000 IMPRESSIONS PRESS",
      '17" x 24"',
      '23" x 36"',
      '25" x 36"',
      '18" x 23"',
      '8.5" x 12"',
      '20" x 30"',
      "DELETE",
      "EDIT",
    ],
  },
  {
    press: "HEIDELBERG GTO-46",
    ctp: "220.00",
    impressions: "400.00",
    s17x24: "-",
    s23x36: "4",
    s25x36: "4",
    s18x23: "2",
    s85x12: "1",
    s20x30: "1",
    id: 1,
  },
  {
    press: "HEIDELBERG GTO-52",
    ctp: "220.00",
    impressions: "400.00",
    s17x24: "-",
    s23x36: "4",
    s25x36: "4",
    s18x23: "2",
    s85x12: "1",
    s20x30: "-",
    id: 2,
  },
  {
    press: "SOLNA",
    ctp: "400.00",
    impressions: "400.00",
    s17x24: "-",
    s23x36: "2",

    s25x36: "2",
    s18x23: "1",
    s85x12: "1",
    s20x30: "-",
    id: 3,
  },
  {
    press: "SORK",
    ctp: "400.00",
    impressions: "-",
    s17x24: "-",
    s23x36: "0",
    s25x36: "0",
    s18x23: "1",
    s85x12: "1",
    s20x30: "-",
    id: 4,
  },
  {
    press: "SORM",
    ctp: "520.00",
    impressions: "750.00",
    s17x24: "-",
    s23x36: "0",
    s25x36: "0",
    s18x23: "1",
    s85x12: "1",
    s20x30: "-",
    id: 5,
  },
  {
    press: "ROTA (SPOT COLOR)",
    ctp: "220.00",
    impressions: "250.00",
    s17x24: "-",
    s23x36: "4",
    s25x36: "4",
    s18x23: "2",
    s85x12: "1",
    s20x30: "-",
    id: 6,
  },
];
const perPrinting = 1000;
const parts = 3;
const serialNumbers = 100; //ye fixed hai
var paperMarket = [
  {
    header: [
      "DATE",
      "PAPER STOCK",
      "GSM(GRAMS)",
      "L",
      "W",
      "DIMENSIONS",
      "QTY",
      "RATE (PKR)",
      "VERIFIED?",
      "NOTES",
      "DELETE",
      "EDIT",
    ],
  },
  {
    date: "06/Aug/22",
    paperStock: "Art card",
    gsm: "250",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "100",
    rate: "6,400.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 1,
  },
  {
    date: "06/Aug/22",
    paperStock: "Art card",
    gsm: "300",
    length: "25.00",
    width: "36.00",
    dimension: '25" X 36"',
    qty: "100",
    rate: "7,800.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 2,
  },
  {
    date: "06/Aug/22",
    paperStock: "Art card",
    gsm: "350",
    length: "25.00",
    width: "36.00",
    dimension: '25" X 36"',
    qty: "100",
    rate: "9,000.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 3,
  },
  {
    date: "06/Aug/22",
    paperStock: "Art card",
    gsm: "250",
    length: "23.00",
    width: "36.00",
    dimension: '23" X 36"',
    qty: "100",
    rate: "5,900.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 4,
  },
  {
    date: "06/Aug/22",
    paperStock: "Art card",
    gsm: "300",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "100",
    rate: "7,100.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 5,
  },
  {
    date: "06/Aug/22",
    paperStock: "Art card",
    gsm: "350",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "500",
    rate: "8,250.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 6,
  },
  {
    date: "08/Sep/22",
    paperStock: "Art Paper / Matte",
    gsm: "90",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "10,000.00",
    verified: "VERIFIED",
    notes: "Junaid on whatsapp",
    id: 7,
  },
  {
    date: "06/Aug/22",
    paperStock: "Bleach card",
    gsm: "250",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "100",
    rate: "5,700.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 8,
  },
  {
    date: "06/Aug/22",
    paperStock: "Bleach card",
    gsm: "300",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "100",
    rate: "6,800.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 9,
  },
  {
    date: "06/Aug/22",
    paperStock: "Bleach card",
    gsm: "350",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "100",
    rate: "7,950.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 10,
  },
  {
    date: "06/Aug/22",
    paperStock: "Bleach card",
    gsm: "250",
    length: "23.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "100",
    rate: "5,210.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 11,
  },
  {
    date: "06/Aug/22",
    paperStock: "Bleach card",
    gsm: "300",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "100",
    rate: "6,250.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 12,
  },
  {
    date: "06/Aug/22",
    paperStock: "Bleach card",
    gsm: "350",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "100",
    rate: "7,300.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 13,
  },
  {
    date: "27/May/22",
    paperStock: "Carbonless",
    gsm: "48",
    length: "18.00",
    width: "23.00",
    dimension: '18" x 23"',
    qty: "500",
    rate: "2,800.00",
    verified: "-",
    notes: "Purchased from Abdullah paper mart",
    id: 14,
  },
  {
    date: "27/May/22",
    paperStock: "Carbonless",
    gsm: "48",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "5,400.00",
    verified: "",
    notes: "",
    id: 15,
  },
  {
    date: "26/May/22",
    paperStock: "Carbonless",
    gsm: "48",
    length: "18.00",
    width: "23.00",
    dimension: '18" x 23"',
    qty: "500",
    rate: "2,750.00",
    verified: "-",
    notes: "Purchased from Abdullah paper mart",
    id: 16,
  },
  {
    date: "14/Jun/22",
    paperStock: "Glossy / Art Paper",
    gsm: "113",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "12,000.00",
    verified: "-",
    notes: "Abdullah paper mart via call",
    id: 17,
  },
  {
    date: "14/Jun/22",
    paperStock: "Glossy / Art Paper",
    gsm: "128",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "13,600.00",
    verified: "-",
    notes: "Abdullah paper mart via call",
    id: 18,
  },
  {
    date: "14/Jun/22",
    paperStock: "Glossy / Art Paper",
    gsm: "150",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "16,120.00",
    verified: "-",
    notes: "Abdullah paper mart via call",
    id: 19,
  },
  {
    date: "24/Aug/22",
    paperStock: "Matte Paper",
    gsm: "128",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "500",
    rate: "13,150.00",
    verified: "UN-VERIFIED",
    notes: "Wasi called paper mart.",
    id: 20,
  },
  {
    date: "24/Aug/22",
    paperStock: "Matte Paper",
    gsm: "128",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "14,150.00",
    verified: "UN-VERIFIED",
    notes: "Wasi called paper mart.",
    id: 21,
  },
  {
    date: "16/Jun/22",
    paperStock: "Matte Paper",
    gsm: "113",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "12,500.00",
    verified: "-",
    notes: "Abdullah paper mart via call",
    id: 22,
  },
  {
    date: "16/Jun/22",
    paperStock: "Matte Paper",
    gsm: "128",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "13,150.00",
    verified: "-",
    notes: "Abdullah paper mart via call",
    id: 23,
  },
  {
    date: "16/Jun/22",
    paperStock: "Matte Paper",
    gsm: "150",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "16,620.00",
    verified: "-",
    notes: "Abdullah paper mart via call",
    id: 24,
  },
  {
    date: "24/Aug/22",
    paperStock: "News Paper",
    gsm: "48",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "2,200.00",
    verified: "UN-VERIFIED",
    notes: "Junaid asked from rafiue",
    id: 25,
  },
  {
    date: "08/Sep/22",
    paperStock: "Uncoated / Offset",
    gsm: "120",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "12,300.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 26,
  },
  {
    date: "25/Jun/22",
    paperStock: "Uncoated / Offset",
    gsm: "70",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "8,650.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 27,
  },
  {
    date: "25/Jun/22",
    paperStock: "Uncoated / Offset",
    gsm: "80",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "9,900.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 28,
  },
  {
    date: "25/Jun/22",
    paperStock: "Uncoated / Offset",
    gsm: "100",
    length: "25.00",
    width: "36.00",
    dimension: '25" x 36"',
    qty: "500",
    rate: "12,300.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 29,
  },
  {
    date: "25/Jun/22",
    paperStock: "Uncoated / Offset",
    gsm: "70",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "500",
    rate: "8,050.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 30,
  },
  {
    date: "25/Jun/22",
    paperStock: "Uncoated / Offset",
    gsm: "80",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "500",
    rate: "9,200.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 31,
  },
  {
    date: "25/Jun/22",
    paperStock: "Uncoated / Offset",
    gsm: "100",
    length: "23.00",
    width: "36.00",
    dimension: '23" x 36"',
    qty: "500",
    rate: "11,500.00",
    verified: "VERIFIED",
    notes: "Junaid went there to get the rates.",
    id: 32,
  },
  {
    date: "27/May/22",
    paperStock: "Uncoated / Offset",
    gsm: "70",
    length: "25.00",
    width: "35.50",
    dimension: '25" x 35.5"',
    qty: "500",
    rate: "7,820.00",
    verified: "-",
    notes: "Purchased from Abdullah paper mart",
    id: 33,
  },
  {
    date: "08/Sep/22",
    paperStock: "White Linen",
    gsm: "100",
    length: "8.50",
    width: "12.00",
    dimension: '8.5" x 12"',
    qty: "500",
    rate: "3,400.00",
    verified: "VERIFIED",
    notes: "",
    id: 34,
  },
  {
    date: "08/Sep/22",
    paperStock: "Yellow Laid",
    gsm: "100",
    length: "17.00",
    width: "24.00",
    dimension: '17" x 24"',
    qty: "500",
    rate: "8,400.00",
    verified: "VERIFIED",
    notes: "",
    id: 35,
  },
];
const fields = [
  {
    id: "selectProduct",
    values: ["Flyer"],
  },
  {
    id: "colors",
    values: [1, 2, 3, 4, 5, 6],
  },
  {
    id: "paperStock",
    values: [
      "Glossy / Art Paper",
      "Art Paper / Matte",
      "Carbonless",
      "Matte Paper",
      "Newspaper",
      "Uncoated / Offset",
      "White Linen",
      "Yellow Laid",
      "Bleach card",
    ],
  },
  {
    id: "grams",
    values: [113, 90, 300, 250, 48, 128, 150, 70, 80, 350, 120, 100],
  },
  {
    id: "sheetSize",
    values: [
      { label: "s17x24", value: '17" x 24"' },
      { label: "s23x36", value: '23" x 36"' },
      { label: "s25x36", value: '25" x 36"' },
      { label: "s18x23", value: '18" x 23"' },
      { label: "s85x12", value: '8.5" x 12"' },
      { label: "s20x30", value: '20" x 30"' },
    ],
  },
  {
    id: "sideOption",
    values: ["Double Sided", "Single Sided"],
  },
  {
    id: "imposition",
    values: ["Applied", "NOT APPLIED"],
  },
  {
    id: "jobColors",
    values: [1, 2, 3, 4, 5, 6],
  },
];

fields.forEach((field) => {
  const selectElement = document.getElementById(field.id);

  if (field.values && Array.isArray(field.values)) {
    // Check if the field values are an array
    if (
      field.values.every(
        (item) => item.hasOwnProperty("label") && item.hasOwnProperty("value")
      )
    ) {
      // If the field values are an array of objects with both 'label' and 'value'
      field.values.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.value;
        selectElement.appendChild(optionElement);
      });
    } else {
      // If the field values are an array of strings
      field.values.forEach((value) => {
        const optionElement = document.createElement("option");
        optionElement.value = value;
        optionElement.textContent = value;
        selectElement.appendChild(optionElement);
      });
    }
  }
});

const paperStockSelect = document.getElementById("paperStock");
const selectedPaperElement = document.getElementById("selectedPaper");
selectedPaper = paperStockSelect.value;
selectedPaperElement.innerText = selectedPaper;
paperStockSelect.addEventListener("change", (selectedPaper) => {
  selectedPaper = paperStockSelect.value;
  selectedPaperElement.innerText = selectedPaper;
  getLastUpdatedFields(selectedPaper);
  // selectedFields(selectedPaper);
});
const gsmSelect = document.getElementById("grams");
const selectedGsmElement = document.getElementById("selectedGsm");
selectedGsm = gsmSelect.value;
selectedGsmElement.innerText = selectedGsm;
gsmSelect.addEventListener("change", (selectedGsm) => {
  selectedGsm = gsmSelect.value;
  selectedGsmElement.innerText = selectedGsm;
  getLastUpdatedFields(selectedGsm);
  // selectedFields(selectedGsm);
});

getLastUpdatedFields(selectedPaper, selectedGsm);

function getLastUpdatedFields(selectedPaper, selectedGsm) {
  const lastUpdated = document.getElementById("lastUpdated");
  const selectedPaperQty = document.getElementById("selectedPaperQty");
  const costPerSheet = document.getElementById("costPerSheet");
  const paperStockFieldData = paperMarket
    .slice(1)
    .map((item) => item.paperStock);
  const gsmFieldData = paperMarket.slice(1).map((item) => item.gsm);

  // Use a Set to remove duplicate records and then convert it back to an array
  const uniquePaperStocks = [...new Set(paperStockFieldData)];
  const uniqueGsm = [...new Set(gsmFieldData)];

  // Update the HTML element with the ID "paperStock" with the unique paperStockFieldData
  const paperStockElement = document.getElementById("paperStock");
  const gsmSelect = document.getElementById("grams");
  if (paperStockElement.innerText === "" && gsmSelect.innerText === "") {
    paperStockElement.innerHTML = ""; // Clear existing content
    gsmSelect.innerHTML = ""; // Clear existing content

    // Create and add options to the paperStockElement using the unique data
    uniquePaperStocks.forEach((stock) => {
      const option = document.createElement("option");
      option.value = stock;
      option.textContent = stock;
      paperStockElement.appendChild(option);
    });

    // Create and add options to the gsmSelect using the unique data
    uniqueGsm.forEach((gsm) => {
      const option = document.createElement("option");
      option.value = gsm;
      option.textContent = gsm;
      gsmSelect.appendChild(option);
    });
  }
  selectedPaper = paperStockElement.value;
  selectedGsm = gsmSelect.value;

  // Find the selected paper data and update the "lastUpdated" element
  const selectedPaperData = paperMarket.find(
    (item) => item.paperStock === selectedPaper && item.gsm === selectedGsm
  );
  if (selectedPaperData) {
    const lastUpdatedDate = selectedPaperData.date;
    const lastUpdatedPrice = selectedPaperData.rate;
    const lastUpdatedQty = selectedPaperData.qty;
    const priceWithoutComma = parseFloat(lastUpdatedPrice.replace(",", ""));
    const qtyWithoutComma = parseFloat(lastUpdatedQty.replace(",", ""));
    lastUpdated.textContent = lastUpdatedDate;
    updatedRate.textContent = priceWithoutComma;
    selectedPaperQty.textContent = qtyWithoutComma;
    paperMarketRates = priceWithoutComma / qtyWithoutComma;
    costPerSheet.innerText = paperMarketRates;
    lastUpdated.removeAttribute("style");
    updatedRate.removeAttribute("style");
    selectedPaperQty.removeAttribute("style");
    costPerSheet.removeAttribute("style");
  } else {
    lastUpdated.innerText = "Not found";
    lastUpdated.style.backgroundColor = "#cc0000";
    lastUpdated.style.color = "white";
    updatedRate.innerText = "Not found"; // Clear the last updated price if the selected paper is not found
    updatedRate.style.backgroundColor = "#cc0000";
    updatedRate.style.color = "white";
    selectedPaperQty.innerText = "Not found";
    selectedPaperQty.style.backgroundColor = "#cc0000";
    selectedPaperQty.style.color = "white";
    costPerSheet.innerText = "Can't Calculate!";
    costPerSheet.style.fontSize = "12px";
    costPerSheet.style.backgroundColor = "#cc0000";
    costPerSheet.style.color = "white";
  }
}
const sizeSelect = document.getElementById("size");
function populateSizeSelect() {
  sizeSelect.innerHTML = "";
  if (uping && uping.length > 0) {
    const productSet = new Set(
      uping.map((item) => item.product && item.product.trim()).filter(Boolean)
    );

    if (productSet.size > 0) {
      productSet.forEach((product) => {
        const option = document.createElement("option");
        option.value = product;
        option.textContent = product;
        sizeSelect.appendChild(option);
      });
    }
    updateSheetPiecesValue();
    sizeSelect.addEventListener("change", () => {
      updateSheetPiecesValue();
      sizeValue = sizeSelect.value;
      // selectedFields(sizeValue);
    });
    const selectedSheetSizeElement = document.getElementById("sheetSize");
    selectedSheetSizeElement.addEventListener("change", () => {
      updateSheetPiecesValue();
    });
  }
}
const selectedSheetSizeElement = document.getElementById("sheetSize");
const selectedSheetSizeValue = selectedSheetSizeElement.value;

function updateSheetPiecesValue() {
  const sheetSizeField = fields.find((field) => field.id === "sheetSize");

  if (!sheetSizeField) {
    console.log("Sheet Size field not found in the 'fields' data.");
    return;
  }

  const selectedSheetSizeOption = sheetSizeField.values.find(
    (option) => option.value === selectedSheetSizeValue
  );

  if (!selectedSheetSizeOption) {
    console.log("Selected Sheet Size option not found.");
    return;
  }

  const selectedSheetSizeLabel = selectedSheetSizeOption.label;
  const selectedProductElement = document.getElementById("size");
  const selectedProduct = selectedProductElement.value;

  const selectedProductData = uping.find(
    (item) => item.product === selectedProduct
  );
  if (selectedProductData) {
    const sheetPieces = selectedProductData[selectedSheetSizeLabel];
    sizesValue2 = sheetPieces === "" ? "0" : sheetPieces;
    const ofUp = document.getElementById("ofUp");
    ofUp.value = sizesValue2;
  } else {
    console.log("Product not found for the selected sheet size.");
  }
}

function fadeOutElement(elements, duration) {
  var opacity = 1;
  var intervalDuration = 10; // Duration of each interval in milliseconds
  var intervalSteps = duration / intervalDuration; // Number of steps to reach 0 opacity

  // Calculate the change in opacity per interval step
  var opacityStep = opacity / intervalSteps;

  // Start the fading animation for each element in the array
  elements.forEach(function (element) {
    var fadeInterval = setInterval(function () {
      opacity -= opacityStep;
      element.style.opacity = opacity;

      if (opacity <= 0) {
        // When opacity reaches 0, set display to "none" and clear the interval
        element.style.display = "none";
        clearInterval(fadeInterval);
      }
    }, intervalDuration);
  });
}
var comboAnimation = [];
var animation = document.getElementById("tdColors");
var headerAnimation = document.getElementById("headerAnimation");
comboAnimation.push(animation, headerAnimation);
fadeOutElement(comboAnimation, 1000); // Fade out "animation" and "headerAnimation" over 1000 milliseconds (1 second)

function impositionState() {
  var sideOptionElement = document.getElementById("sideOption");
  var readOnlyInput = document.getElementById("tdImposition");
  var comboAnimation2 = [];
  var tdColorsElement = document.getElementById("tdColors");
  comboAnimation2.push(headerAnimation, tdColorsElement);
  sideOptionValue = sideOptionElement.value;

  // Show the jobColors dropdown by default
  tdColorsElement.style.display = "block";
  clearInterval(tdColorsElement.fadeInterval); // Clear any previous fading interval
  var originalImpositionDropdown = document.getElementById("imposition");
  if (sideOptionValue === "Double Sided") {
    if (originalImpositionDropdown) {
      // Check if the element exists before accessing its value
      if (originalImpositionDropdown.value === "NOT APPLIED") {
        for (var i = 0; i < comboAnimation2.length; i++) {
          comboAnimation2[i].style.display = "block";
        }
        headerAnimation.style.opacity = 1;
        tdColorsElement.style.opacity = 1;
        updateBaseRate(
          impressionsCell2,
          impressionsValue,
          jobColorsFront,
          jobColorsBack
        );
        clearInterval(tdColorsElement.fadeInterval); // Clear any previous fading interval
      } else if (
        originalImpositionDropdown.value === "Applied" ||
        originalImpositionDropdown.value === "APPLIED"
      ) {
        fadeOutElement(comboAnimation2, 1000);
        console.log("it is working");
        updateBaseRate(null, null, null, null);
      }
    }
    if (!originalImpositionDropdown) {
      readOnlyInput.innerHTML = "";
      // If the original "imposition" dropdown doesn't exist, create and populate it
      originalImpositionDropdown = document.createElement("select");
      originalImpositionDropdown.className = "form-select form-select-sm";
      originalImpositionDropdown.id = "imposition";
      // Add options to the dropdown
      var originalOptions = ["APPLIED", "NOT APPLIED"];
      for (var i = 0; i < originalOptions.length; i++) {
        var option = document.createElement("option");
        option.text = originalOptions[i];
        option.value = originalOptions[i];
        originalImpositionDropdown.appendChild(option);
      }
      // Add the dropdown back to the "tdImposition"
      readOnlyInput.appendChild(originalImpositionDropdown);
      originalImpositionDropdown.addEventListener("change", impositionState); // Add the event listener to the dynamically created dropdown
    }
  } else if (sideOptionValue === "Single Sided") {
    // If it's Single Sided, set the imposition input to "Not Applicable" and hide the jobColors dropdown
    if (impositionElement) {
      fadeOutElement(comboAnimation2, 1000);
    }
    readOnlyInput.innerHTML =
      '<input type="text" class="form-control form-control-sm" value="Not Applicable" readonly>'; // Create read-only input
  }
}

var sideOptionElement = document.getElementById("sideOption");
var impositionElement = document.getElementById("imposition");

// Add event listeners to trigger impositionState() when the value of sideOption or imposition changes
sideOptionElement.addEventListener("change", impositionState);
impositionElement.addEventListener("change", impositionState);
function getConfig() {
  const table = document.getElementById("configRate");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  const columnName = pressMachines[0].header[0];
  const headerCell = document.createElement("th");
  headerCell.className = "text-start";
  headerCell.textContent = columnName + " SPECIFICATION";
  headerCell.colSpan = 2;
  headerRow.appendChild(headerCell);
  thead.appendChild(headerRow);

  // Create the selectable options row in tbody
  const selectableRow = document.createElement("tr");
  const selectableCell = document.createElement("td");
  selectableCell.colSpan = 2;
  selectableCell.style.height = "10px";
  const selectElement = document.createElement("select");
  selectElement.className = "w-100 border-0 ";

  // Add the press values as options
  for (let i = 1; i < pressMachines.length; i++) {
    const press = pressMachines[i].press;
    const option = document.createElement("option");
    option.value = press;
    option.textContent = press;
    selectElement.appendChild(option);
  }

  selectableCell.appendChild(selectElement);
  selectableRow.appendChild(selectableCell);
  tbody.appendChild(selectableRow);

  const impressionsRow = document.createElement("tr");
  const impressionsCell1 = document.createElement("td");
  impressionsCell2 = document.createElement("td");
  const selectedPress = selectElement.value;
  const jobColorsFElement = document.getElementById("colors");
  jobColorsFront = parseInt(jobColorsFElement.value, 10); // Convert to an integer
  const jobColorsBElement = document.getElementById("jobColors");
  jobColorsBack = parseInt(jobColorsBElement.value, 10);
  sideOptionValue = document.getElementById("sideOption").value;
  impositionElement = document.getElementById("imposition");
  impositionValue = impositionElement?.value ?? "NOT APPLIED";

  const selectedPressData = pressMachines.find(
    (item) => item.press === selectedPress
  );
  if (selectedPressData) {
    impressionsValue = selectedPressData.impressions;
    impressionsCell1.textContent = "IMPRESSION RATE: " + impressionsValue;
    impressionsCell1.className = "fs-6 col-6";
    if (
      (sideOptionValue === "Double Sided" &&
        impositionValue === "Not Applied") ||
      impositionValue === "NOT APPLIED"
    ) {
      updateBaseRate(
        impressionsCell2,
        impressionsValue,
        jobColorsFront,
        jobColorsBack
      );
    } else {
      impressionsCell2.textContent = "BASE RATE (COST) : " + impressionsValue;
      impressionsCell2.className = "fs-6 col-6";
    }
  }
  impressionsRow.appendChild(impressionsCell1);
  impressionsRow.appendChild(impressionsCell2);
  tbody.appendChild(impressionsRow);

  // Create the CTP and custom value row in tbody
  const ctpRow = document.createElement("tr");
  const ctpCell1 = document.createElement("td");
  const ctpCell2 = document.createElement("td");

  const updateCTPCell = (pressData) => {
    ctpCell1.textContent = "CTP RATE: " + pressData.ctp;

    const selectedSheetSizeElement = document.getElementById("sheetSize");
    const selectedSheetSizeValue = selectedSheetSizeElement.value;

    // Find the label corresponding to the selected value in pressData
    let sheetPiecesLabel = "Error";
    const selectedSheetSizeOption = fields
      .find((field) => field.id === "sheetSize")
      .values.find((option) => option.value === selectedSheetSizeValue);
    if (selectedSheetSizeOption) {
      sheetPiecesLabel = selectedSheetSizeOption.label;
    }

    // Now you can use sheetPiecesLabel for whatever purpose you need.
    // If you want to use it to retrieve the value from pressData, you can do it like this:
    const sheetPieces = pressData[sheetPiecesLabel] || "Error";
    const sizesValue =
      sheetPieces === "-" || sheetPieces === "0"
        ? "Error!"
        : "SHEET PIECES: 1/" + sheetPieces;
    ctpCell2.textContent = sizesValue;

    // Extract the numeric value from sheetPieces and sizesValue2
    const numericValue = parseInt(sheetPieces);
    const sizesValue2Int = parseInt(sizesValue2);
    // Update the quantity element with the numeric value

    var slicingCostValue = 70;
    // const divideBy = parts * serialNumbers;
    if (!isNaN(numericValue) && numericValue != 0 && !isNaN(sizesValue2Int)) {
      if (
        (sideOptionValue === "Double Sided" && impositionValue === "Applied") ||
        impositionValue === "APPLIED"
      ) {
        qty1.innerText = (((sizesValue2Int / numericValue) * 1000) / 2) * 1;
        sheetsRate1.innerText = qty1.innerText / sizesValue2Int;
        paperMarketRate1.innerText =
          updatedRate.innerText === "Not found"
            ? errorText
            : (paperMarketRates * sheetsRate1.innerText).toFixed(0);
        if (paperMarketRate1.innerText === errorText) {
          paperMarketRate1.style.backgroundColor = "#cc0000";
          paperMarketRate1.className = "text-white";
        } else {
          paperMarketRate1.className = "";
          paperMarketRate1.style.backgroundColor = "";
        }
        slicingCost1.innerText =
          slicingCostValue * Math.ceil(parseFloat(sheetsRate1.innerText) / 500);
        ctp1.innerText = parseFloat(pressData.ctp) * jobColorsFront;
        const getPressBasePrice =
          jobColorsFront * parseFloat(pressData.impressions);
        const pressElement1 =
          (getPressBasePrice * Math.ceil(qty1.innerText)) / qty1.innerText;
        press1.innerText = pressElement1;
        fixedCost1.innerText =
          parseFloat(
            paperMarketRate1.innerText === errorText
              ? 0
              : paperMarketRate1.innerText
          ) +
          parseFloat(slicingCost1.innerText) +
          parseFloat(ctp1.innerText) +
          parseFloat(press1.innerText);
        const pricePerQty =
          parseFloat(fixedCost1.innerText) +
          parseFloat(setupFee) +
          fixedCost1.innerText * margin;
        pricePerQty1.innerText = pricePerQty.toFixed(2);
        pricePerUnit1.innerText = (
          pricePerQty1.innerText / qty1.innerText
        ).toFixed(2);
        totalProfit.innerText = (
          pricePerQty1.innerText - fixedCost1.innerText
        ).toFixed(2);
      } else if (
        sideOptionValue === "Single Sided" ||
        impositionValue === "NOT APPLIED"
      ) {
        qty1.innerText = (sizesValue2Int / numericValue) * 1000;
        sheetsRate1.innerText = qty1.innerText / sizesValue2Int;
        paperMarketRate1.innerText =
          updatedRate.innerText === "Not found"
            ? errorText
            : paperMarketRates * sheetsRate1.innerText;
        if (paperMarketRate1.innerText === errorText) {
          paperMarketRate1.style.backgroundColor = "#cc0000";
          paperMarketRate1.className = "text-white";
        } else {
          paperMarketRate1.className = "";
          paperMarketRate1.style.backgroundColor = "";
        }
        slicingCost1.innerText =
          slicingCostValue * Math.ceil(parseFloat(sheetsRate1.innerText) / 500);

        ctp1.innerText =
          (jobColorsFront + jobColorsBack) * parseFloat(pressData.ctp);

        const getPressBasePrice2 =
          (jobColorsFront + jobColorsBack) * parseFloat(impressionsValue);
        press1.innerText =
          (getPressBasePrice2 * Math.ceil(qty1.innerText)) / qty1.innerText;
        fixedCost1.innerText =
          parseFloat(paperMarketRate1.innerText) +
          parseFloat(slicingCost1.innerText) +
          parseFloat(ctp1.innerText) +
          parseFloat(press1.innerText);
        const pricePerQty =
          parseFloat(fixedCost1.innerText) +
          parseFloat(setupFee) +
          fixedCost1.innerText * margin;
        pricePerQty1.innerText = pricePerQty.toFixed(2);
        pricePerUnit1.innerText = (
          pricePerQty1.innerText / qty1.innerText
        ).toFixed(2);
        totalProfit.innerText = (
          pricePerQty1.innerText - fixedCost1.innerText
        ).toFixed(2);
      }
    } else {
      // Handle the case when the conversion results in NaN
      qty1.innerText = errorText;
      sheetsRate1.innerText = errorText;
      paperMarketRate1.innerText = errorText;
      paperMarketRate1.style.backgroundColor = "#cc0000";
      paperMarketRate1.className = "text-white";
      slicingCost1.innerText = errorText;
      ctp1.innerText = errorText;
      press1.innerText = errorText;
      fixedCost1.innerText = errorText;
      pricePerQty1.innerText = errorText;
      pricePerUnit1.innerText = errorText;
      totalProfit.innerText = errorText;
    }
  };

  // Initial call to update the CTP cell with the selectedPressData
  updateCTPCell(selectedPressData);

  // Add event listener to update the CTP cell whenever the sheetSize dropdown selection changes
  const sheetSizeElement = document.getElementById("sheetSize");
  sheetSizeElement.addEventListener("change", () => {
    updateCTPCell(selectedPressData);
  });

  // Append the cells to the row
  ctpRow.appendChild(ctpCell1);
  ctpRow.appendChild(ctpCell2);

  // Append the row to the table body
  tbody.appendChild(ctpRow);

  // Clear existing table content and append the new table header and body
  table.innerHTML = "";
  table.appendChild(thead);
  table.appendChild(tbody);

  // Add event listener to select element to update impressions and CTP values when selection changes
  selectElement.addEventListener("change", () => {
    sideOptionValue = document.getElementById("sideOption").value;
    impositionElement = document.getElementById("imposition");
    impositionValue = impositionElement?.value ?? "NOT APPLIED";
    const jobColorsFElement = document.getElementById("colors");
    jobColorsFront = parseInt(jobColorsFElement.value, 10); // Convert to an integer
    const jobColorsBElement = document.getElementById("jobColors");
    jobColorsBack = parseInt(jobColorsBElement.value, 10);
    const selectedPress = selectElement.value;
    const selectedPressData = pressMachines.find(
      (item) => item.press === selectedPress
    );
    if (selectedPressData) {
      impressionsValue = selectedPressData.impressions;
      impressionsCell1.textContent = "IMPRESSION RATE: " + impressionsValue;
      if (
        (sideOptionValue === "Double Sided" &&
          impositionValue === "Not Applied") ||
        impositionValue === "NOT APPLIED"
      ) {
        updateBaseRate(
          impressionsCell2,
          impressionsValue,
          jobColorsFront,
          jobColorsBack
        );
      } else {
        impressionsCell2.textContent = "BASE RATE (COST) : " + impressionsValue;
        impressionsCell2.className = "fs-6 col-6";
      }
      updateCTPCell(selectedPressData);
    }
  });
  jobColorsFElement.addEventListener("change", () => {
    jobColorsFront = parseInt(jobColorsFElement.value, 10); // Convert to an integer
    // selectedFields(null,null,jobColorsFront);
    if (
      (sideOptionValue === "Double Sided" &&
        impositionValue === "Not Applied") ||
      impositionValue === "NOT APPLIED"
    ) {
      jobColorsBack = parseInt(jobColorsBElement.value, 10);
      updateBaseRate(
        impressionsCell2,
        impressionsValue,
        jobColorsFront,
        jobColorsBack
      );
      updateCTPCell(selectedPressData);
    } else {
      jobColorsBack = 0;
      updateBaseRate(
        impressionsCell2,
        impressionsValue,
        jobColorsFront,
        jobColorsBack
      );
      updateCTPCell(selectedPressData);
    }
  });

  const sizeSelect = document.getElementById("size");
  sizeSelect.addEventListener("change", () => {
    updateCTPCell(selectedPressData);
  });
  paperStockSelect.addEventListener("change", () => {
    updateCTPCell(selectedPressData);
  });
  gsmSelect.addEventListener("change", () => {
    updateCTPCell(selectedPressData);
  });

  jobColorsBElement.addEventListener("change", () => {
    jobColorsFront = parseInt(jobColorsFElement.value, 10); // Convert to an integer
    if (
      (sideOptionValue === "Double Sided" &&
        impositionValue === "Not Applied") ||
      impositionValue === "NOT APPLIED"
    ) {
      jobColorsBack = parseInt(jobColorsBElement.value, 10);
      updateCTPCell(selectedPressData);
    }
  });
}

function updateBaseRate(
  impressionsCell2,
  impressionsValue,
  jobColorsFront,
  jobColorsBack
) {
  sideOptionValue = document.getElementById("sideOption").value;
  impositionElement = document.getElementById("imposition");
  impositionValue = impositionElement?.value ?? "NOT APPLIED";
  if (
    (sideOptionValue === "Double Sided" && impositionValue === "Not Applied") ||
    impositionValue === "NOT APPLIED"
  ) {
    impressionsCell2.textContent =
      "BASE RATE (COST) : " +
      impressionsValue * (jobColorsFront + jobColorsBack);
    impressionsCell2.className = "fs-6 col-6";
  } else {
    impressionsCell2.textContent =
      "BASE RATE (COST) : " +
      impressionsValue * (jobColorsFront + jobColorsBack);
    impressionsCell2.className = "fs-6 col-6";
  }
}
const selectedProductElement = document.getElementById("selectProduct");
const selectedProductValue = selectedProductElement.value;

document.addEventListener("DOMContentLoaded", function () {
  const generateInvoiceBtn = document.getElementById("generateInvoiceBtn");
  const modalContent = document.getElementById("invoiceModalContent");

  generateInvoiceBtn.addEventListener("click", function () {
    const selectedProductSize = document.getElementById("size");
    const selectedSizeValue = selectedProductSize.value;
    const selectedGsm = document.getElementById("grams");
    const selectedGsmValue = selectedGsm.value;

    const designInfo = "Customer will provide the design.";

    const customerInfo = {
      clientName: "Mr Adeel",
      businessName: "Print Lab",
    };

    const estimatedDeliveryDate = "Monday, July 17, 2023";

    // Populate the modal content with dynamic data
    modalContent.innerHTML = `
      <div class="container">
        <h4 class="text-decoration-underline">Order Summary:</h4>
        <h5>Product : ${selectedProductValue}</h5>
        <h5>Size : ${selectedSizeValue}</h5>
        <h5>Gsm : ${selectedGsmValue}</h5>
        <h5>Qty : ${qty1.innerText}</h5>
        <h5>Total : ${pricePerQty1.innerText}</h5>
        <h4 class="text-decoration-underline">Design Information:</h4>
        <h6>${designInfo}</h6>
        <h4 class="text-decoration-underline">Customer Information:</h4>
        <h6>Client's name: ${customerInfo.clientName}</h6>
        <h6>Business Name: ${customerInfo.businessName}</h6>
        <h4 class="text-decoration-underline">Estimated Delivery Date:</h4>
        <h6 class="text-danger">${estimatedDeliveryDate}</h6>
      </div>
    `;
    const invoiceModal = new bootstrap.Modal(
      document.getElementById("invoiceModal")
    );
    invoiceModal.show();
  });
});
function selectedFields() {
  const sizeValue = document.getElementById("size").value;
  const selectedPaper = paperStockSelect.value;
  const selectedGsm = gsmSelect.value;
  const impositionValue = impositionElement.value;
  const selectedSheetSizeValue = selectedSheetSizeElement.value;
  const jobColorsBack = document.getElementById("jobColors").value;
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      selectedProductValue,
      jobColorsFront,
      sizeValue,
      selectedPaper,
      selectedGsm,
      selectedSheetSizeValue,
      sideOptionValue,
      impositionValue,
      jobColorsBack
    }), // Send the selected product value as JSON
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("response", data);
    })
    .catch((err) => {
      console.log(err);
    });
}

populateSizeSelect();
getConfig();
// selectedFields();
