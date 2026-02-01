let tongSoSach = 0;
let soSachMat = 0;
let soSachHetHang = 0;
let soSachTonNhieu = 0;
let soSachTonBinhThuong = 0;

let tiepTuc = "có"; 

while (tiepTuc != "không") {
    
    tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (tiepTuc == "có") {
        
        let maSach = prompt("Nhập mã sách:");
        while (maSach == "") {
            maSach = prompt("Mã sách không được để trống! Vui lòng nhập lại:");
        }

        let tenSach = prompt("Nhập tên sách:");
        
        let soLuong = Number(prompt("Nhập số lượng thực tế:"));
        
        let tinhTrang = prompt("Tình trạng (1 - Bình thường, 2 - Mất):");

        tongSoSach = tongSoSach + 1;

        if (tinhTrang == "2") {
            console.log("Kết quả: Sách mất");
            soSachMat = soSachMat + 1;
        } else {
            if (soLuong == 0) {
                console.log("Kết quả: Sách hết");
                soSachHetHang = soSachHetHang + 1;
            } else {
                if (soLuong >= 10) {
                    console.log("Kết quả: Sách tồn kho nhiều");
                    soSachTonNhieu = soSachTonNhieu + 1;
                } else {
                    console.log("Kết quả: Sách tồn kho bình thường");
                    soSachTonBinhThuong = soSachTonBinhThuong + 1;
                }
            }
        }
    } 
}

console.log("--- BÁO CÁO THỐNG KÊ ---");
console.log("Tổng số sách đã kiểm kê: " + tongSoSach + " cuốn");
console.log("Số sách mất: " + soSachMat + " cuốn");
console.log("Số sách hết hàng: " + soSachHetHang + " cuốn");
console.log("Số sách tồn nhiều: " + soSachTonNhieu + " cuốn");
console.log("Số sách tồn bình thường: " + soSachTonBinhThuong + " cuốn");