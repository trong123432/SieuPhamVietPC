var prevScrollpos = window.pageYOffset;
var header = document.getElementById("header");
var sidebar = document.getElementById("sidebar");
let cpubox = document.getElementById("cpudiv");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = "translateY(-64px)";
  }
  prevScrollpos = currentScrollPos;
};

cpubox.style.display = "none";
console.log(cpubox);
function closeDiv() {
  cpubox.style.display = "none";
  document.body.style.overflow = "";
}
function openDiv() {
  cpubox.style.display = "flex";
  // document.body.style.overflow = "hidden";
}

window.addEventListener("click", (event) => {
  if (event.target === cpubox) {
    cpubox.style.display = "none";
  }
});

var oCpu = document.getElementById("open-cpu");
var oBoard = document.getElementById("open-board");
var oRam = document.getElementById("open-ram");
var oVga = document.getElementById("open-vga");
var oTan = document.getElementById("open-tannhiet");
var oCase = document.getElementById("open-case");

var pCpu = document.getElementById("prod--cpu");
var pBoard = document.getElementById("prod--board");
var pRam = document.getElementById("prod--ram");
var pVga = document.getElementById("prod--vga");
var pTan = document.getElementById("prod--tannhiet");
var pCase = document.getElementById("prod--case");

oCpu.addEventListener("click", function () {
  openDiv();
  pCpu.style.display = "";
  pBoard.style.display = "none";
  pRam.style.display = "none";
  pVga.style.display = "none";
  pTan.style.display = "none";
  pCase.style.display = "none";
});
oBoard.addEventListener("click", function () {
  openDiv();
  pCpu.style.display = "none";
  pBoard.style.display = "";
  pRam.style.display = "none";
  pVga.style.display = "none";
  pTan.style.display = "none";
  pCase.style.display = "none";
});
oRam.addEventListener("click", function () {
  openDiv();
  pCpu.style.display = "none";
  pBoard.style.display = "none";
  pRam.style.display = "";
  pVga.style.display = "none";
  pTan.style.display = "none";
  pCase.style.display = "none";
});
oVga.addEventListener("click", function () {
  openDiv();
  pCpu.style.display = "none";
  pBoard.style.display = "none";
  pRam.style.display = "none";
  pVga.style.display = "";
  pTan.style.display = "none";
  pCase.style.display = "none";
});
oTan.addEventListener("click", function () {
  openDiv();
  pCpu.style.display = "none";
  pBoard.style.display = "none";
  pRam.style.display = "none";
  pVga.style.display = "none";
  pTan.style.display = "";
  pCase.style.display = "none";
});
oCase.addEventListener("click", function () {
  openDiv();
  pCpu.style.display = "none";
  pBoard.style.display = "none";
  pRam.style.display = "none";
  pVga.style.display = "none";
  pTan.style.display = "none";
  pCase.style.display = "";
});

var cellCpu = document.getElementById("cell__cpu");
var addCpu1 = document.getElementById("add--cpu-1");
var addCpu2 = document.getElementById("add--cpu-2");
var addCpu3 = document.getElementById("add--cpu-3");
var cpu = document.getElementById("cpu");

addCpu1.addEventListener("click", function () {
  closeDiv();
  cellCpu.style.display = "none";
  cpu.style.display = "flex";
});
addCpu2.addEventListener("click", function () {
  closeDiv();
  cellCpu.style.display = "none";
  cpu.style.display = "flex";
});
addCpu3.addEventListener("click", function () {
  closeDiv();
  cellCpu.style.display = "none";
  cpu.style.display = "flex";
});

var cellBoard = document.getElementById("cell__board");
var addBoard1 = document.getElementById("add--board-1");
var addBoard2 = document.getElementById("add--board-2");
var addBoard3 = document.getElementById("add--board-3");
var board = document.getElementById("board");

addBoard1.addEventListener("click", function () {
  closeDiv();
  cellBoard.style.display = "none";
  board.style.display = "flex";
});
addBoard2.addEventListener("click", function () {
  closeDiv();
  cellBoard.style.display = "none";
  board.style.display = "flex";
});
addBoard3.addEventListener("click", function () {
  closeDiv();
  cellBoard.style.display = "none";
  board.style.display = "flex";
});

var cellRam = document.getElementById("cell__ram");
var addRam1 = document.getElementById("add--ram-1");
var addRam2 = document.getElementById("add--ram-2");
var addRam3 = document.getElementById("add--ram-3");
var ram = document.getElementById("ram");

addRam1.addEventListener("click", function () {
  closeDiv();
  cellRam.style.display = "none";
  ram.style.display = "flex";
});
addRam2.addEventListener("click", function () {
  closeDiv();
  cellRam.style.display = "none";
  ram.style.display = "flex";
});
addRam3.addEventListener("click", function () {
  closeDiv();
  cellRam.style.display = "none";
  ram.style.display = "flex";
});

var cellVga = document.getElementById("cell__vga");
var addVga1 = document.getElementById("add--vga-1");
var addVga2 = document.getElementById("add--vga-2");
var addVga3 = document.getElementById("add--vga-3");
var vga = document.getElementById("vga");

addVga1.addEventListener("click", function () {
  closeDiv();
  cellVga.style.display = "none";
  vga.style.display = "flex";
});
addVga2.addEventListener("click", function () {
  closeDiv();
  cellVga.style.display = "none";
  vga.style.display = "flex";
});
addVga3.addEventListener("click", function () {
  closeDiv();
  cellVga.style.display = "none";
  vga.style.display = "flex";
});

var cellTan = document.getElementById("cell__tan");
var addTan1 = document.getElementById("add--tan-1");
var addTan2 = document.getElementById("add--tan-2");
var addTan3 = document.getElementById("add--tan-3");
var tan = document.getElementById("tan");

addTan1.addEventListener("click", function () {
  closeDiv();
  cellTan.style.display = "none";
  tan.style.display = "flex";
});
addTan2.addEventListener("click", function () {
  closeDiv();
  cellTan.style.display = "none";
  tan.style.display = "flex";
});
addTan3.addEventListener("click", function () {
  closeDiv();
  cellTan.style.display = "none";
  tan.style.display = "flex";
});

var cellCase = document.getElementById("cell__case");
var addCase1 = document.getElementById("add--case-1");
var addCase2 = document.getElementById("add--case-2");
var addCase3 = document.getElementById("add--case-3");
var Case = document.getElementById("case");

addCase1.addEventListener("click", function () {
  closeDiv();
  cellCase.style.display = "none";
  Case.style.display = "flex";
});
addCase2.addEventListener("click", function () {
  closeDiv();
  cellVga.style.display = "none";
  Case.style.display = "flex";
});
addCase3.addEventListener("click", function () {
  closeDiv();
  cellCase.style.display = "none";
  Case.style.display = "flex";
});
