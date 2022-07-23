// Bài 1
document.getElementById("ngayHomTruoc").onclick = function () {
  // Đầu vào
  var ngay = document.getElementById("ngay").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  // Xử lý

  var ngayTruoc;
  if (ngay) {
    ngayTruoc = --ngay;
  }

  var thangMoi;
  if (ngay === 0) {
    thangMoi = --month;
  } else {
    thangMoi = month;
  }
  var namTruoc;

  var ngayThangTruoc;
  var thangTruoc;
  if (ngayTruoc === 0 && thangMoi === 0) {
    ngayThangTruoc = "31";
    thangTruoc = "12";
    namTruoc = --year;
  } else if (ngayTruoc === 0 && thangMoi === 1) {
    ngayThangTruoc = "31";
    thangTruoc = "1";
  } else if (ngayTruoc === 0 && thangMoi === 2) {
    ngayThangTruoc = "28";
    thangTruoc = "2";
  } else if (ngayTruoc === 0 && thangMoi === 3) {
    ngayThangTruoc = "31";
    thangTruoc = "3";
  } else if (ngayTruoc === 0 && thangMoi === 4) {
    ngayThangTruoc = "30";
    thangTruoc = "4";
  } else if (ngayTruoc === 0 && thangMoi === 5) {
    ngayThangTruoc = "31";
    thangTruoc = "5";
  } else if (ngayTruoc === 0 && thangMoi === 6) {
    ngayThangTruoc = "30";
    thangTruoc = "6";
  } else if (ngayTruoc === 0 && thangMoi === 7) {
    ngayThangTruoc = "31";
    thangTruoc = "7";
  } else if (ngayTruoc === 0 && thangMoi === 8) {
    ngayThangTruoc = "31";
    thangTruoc = "8";
  } else if (ngayTruoc === 0 && thangMoi === 9) {
    ngayThangTruoc = "30";
    thangTruoc = "9";
  } else if (ngayTruoc === 0 && thangMoi === 10) {
    ngayThangTruoc = "31";
    thangTruoc = "10";
  } else if (ngayTruoc === 0 && thangMoi === 11) {
    ngayThangTruoc = "30";
    thangTruoc = "11";
  } else {
    ngayThangTruoc = ngayTruoc;
    thangTruoc = thangMoi;
  }

  var xemNgayTruoc = ngayThangTruoc + "/" + thangTruoc + "/" + year;
  // Đầu ra
  document.getElementById("ketQua4").innerHTML = xemNgayTruoc;
};

document.getElementById("ngayHomSau").onclick = function () {
  // Đầu vào
  var ngay = document.getElementById("ngay").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  // Xử lý

  var ngayMoi;
  if (ngay) {
    ngayMoi = ++ngay;
  }

  var monthNew;
  var dayNew;
  var yearNew;

  if (ngayMoi === 32 && month === 1) {
    dayNew = 1;
    monthNew = ++month;
  } else if (ngayMoi === 29 && month === 2) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 32 && month === 3) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 31 && month === 4) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 32 && month === 5) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 31 && month === 6) {
    dayNew = "7";
    monthNew = ++month;
  } else if (ngayMoi === 32 && month === 7) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 32 && month === 8) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 31 && month === 9) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 32 && month === 10) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi === 31 && month === 11) {
    dayNew = "1";
    monthNew = ++month;
  } else if (ngayMoi >= 32 && month === 12) {
    dayNew = "1";
    monthNew = "1";
    yearNew = ++year;
  } else if (ngayMoi <= 31 && month !== 2) {
    monthNew = month;
    dayNew = ngayMoi;
  } else if (ngayMoi <= 29 && month === 2) {
    monthNew = month;
    dayNew = ngayMoi;
  } else {
    confirm("vui long nhập ngày khác");
  }

  var xemNgayMoi = dayNew + "/" + monthNew + "/" + year;
  // Đầu ra
  document.getElementById("ketQua4").innerHTML = xemNgayMoi;
};

// Bài tập 2
document.getElementById("kiemTradate").onclick = function () {
  // Đầu vào
  var thang = document.getElementById("thang").value * 1;
  var nam = document.getElementById("nam").value * 1;
  // Xử lý
  var date = 0;
  if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 11
  ) {
    date = "có 31 ngày";
  } else if (
    thang === 4 ||
    thang === 6 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    date = "có 30 ngày";
  } else if (thang === 2) {
    date = "có 28 ngày";
  } else {
    confirm("không có tháng đó");
  }

  var tongNgay = "tháng " + thang + " " + "năm " + nam + " " + date;
  // Đầu ra
  document.getElementById("ketQua2").innerHTML = tongNgay;
};

// Bài tập 3
document.getElementById("kiemTraSo").onclick = function () {
  // Đầu vào
  var number = document.getElementById("number").value * 1;
  //   Xử lý
  var num1 = Math.floor(number / 100);
  var num2 = Math.floor(number / 10) % 10;
  var num3 = number % 10;

  var number1 = num1;
  switch (num1) {
    case 1:
      number1 = "một";
      break;
    case 2:
      number1 = "hai";
      break;
    case 3:
      number1 = "ba";
      break;
    case 4:
      number1 = "bốn";
      break;
    case 5:
      number1 = "năm";
      break;
    case 6:
      number1 = "sáu";
      break;
    case 7:
      number1 = "bảy";
      break;
    case 8:
      number1 = "tám";
      break;
    case 9:
      number1 = "chín";
      break;
    default:
      number1 = "vui lòng nhập số có 3 chữ số";
  }
  var number2 = num2;
  switch (num2) {
    case 1:
      number2 = "một";
      break;
    case 2:
      number2 = "hai";
      break;
    case 3:
      number2 = "ba";
      break;
    case 4:
      number2 = "bốn";
      break;
    case 5:
      number2 = "năm";
      break;
    case 6:
      number2 = "sáu";
      break;
    case 7:
      number2 = "bảy";
      break;
    case 8:
      number2 = "tám";
      break;
    case 9:
      number2 = "chín";
      break;
    default:
      number2 = "vui lòng nhập số có 3 chữ số";
  }
  var number3 = num3;
  switch (num3) {
    case 1:
      number3 = "một";
      break;
    case 2:
      number3 = "hai";
      break;
    case 3:
      number3 = "ba";
      break;
    case 4:
      number3 = "bốn";
      break;
    case 5:
      number3 = "năm";
      break;
    case 6:
      number3 = "sáu";
      break;
    case 7:
      number3 = "bảy";
      break;
    case 8:
      number3 = "tám";
      break;
    case 9:
      number3 = "chín";
      break;
    default:
      number3 = "vui lòng nhập số có 3 chữ số";
  }

  var sum = number1 + " trăm " + number2 + " ngươi " + number3;
  //   Đầu ra
  document.getElementById("ketQua3").innerHTML = sum;
};
