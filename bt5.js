let total_requests = 0;
let success_count = 0;
let rejected_count = 0;
let pending_count = 0;

while (true) {
    let ask = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask === "có") {
        let user_name = prompt("Tên bạn đọc:");
        let book_id = prompt("Mã sách muốn đặt trước:");
        let book_title = prompt("Tên sách (tham khảo):");

        let wait_days;
        while (true) {
            wait_days = parseInt(prompt("Số ngày dự kiến chờ (số nguyên >= 1):"));
            if (wait_days >= 1) break;
            alert("Vui lòng nhập số ngày hợp lệ!");
        }

        let object;
        while (true) {
            object= object(prompt("Đối tượng ưu tiên (1: Sinh viên, 2: Giảng viên, 3: Nhân viên/Đặc cách):"));
            if (objecty === 1 || object === 2 || object === 3) break;
            console.log("Vui lòng chỉ nhập 1, 2 hoặc 3!");
        }

        total_requests++;

        if (wait_days > 45) {
            console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
            rejected_count++;
        } else if (priority === 3) {
            console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
            success_count++;
        } else if (priority === 2 && wait_days <= 30) {
            console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
            success_count++;
        } else if (priority === 1 && wait_days <= 21) {
            console.log("Đặt trước thành công");
            success_count++;
        } else {
            console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
            pending_count++;
        }
    }
}

console.log("Báo cáo ca làm việc: Đặt mượn trước");
console.log("Tổng số yêu cầu đã xử lý: " + total_requests );
console.log("Thành công: " + success_count );
console.log("Bị từ chối: " + rejected_count );
console.log("Đang chờ xét duyệt: " + pending_count);