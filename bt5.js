let totalRequests = 0;
let successCount = 0;
let rejectedCount = 0;
let pendingCount = 0;

let continueWork = "yes";

while (continueWork != "no") {

    continueWork = prompt("Có yêu cầu đặt mượn trước mới không? (yes/no)");

    if (continueWork == "yes") {
        
        let readerName = prompt("Tên bạn đọc:");
        let bookId = prompt("Mã sách muốn đặt trước:");
        let bookTitle = prompt("Tên sách (tham khảo):");
        let waitingDays = Number(prompt("Số ngày dự kiến chờ:"));
        let priorityLevel = prompt("Ưu tiên (1: SV, 2: GV/NCS, 3: Nhân viên/Đặc cách):");

        totalRequests = totalRequests + 1;

        if (waitingDays > 45) {
            console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
            rejectedCount = rejectedCount + 1;
        } else {
            if (priorityLevel == "3") {
                console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
                successCount = successCount + 1;
            } else {
                if (priorityLevel == "2") {
                    if (waitingDays <= 30) {
                        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
                        successCount = successCount + 1;
                    } else {
                        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
                        pendingCount = pendingCount + 1;
                    }
                } else {
                    if (priorityLevel == "1") {
                        if (waitingDays <= 21) {
                            console.log("Đặt trước thành công");
                            successCount = successCount + 1;
                        } else {
                            console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
                            pendingCount = pendingCount + 1;
                        }
                    } else {
                        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
                        pendingCount = pendingCount + 1;
                    }
                }
            }
        }
    }
}

console.log("--- FINAL REPORT ---");
console.log("Total requests processed: " + totalRequests);
console.log("Successful reservations: " + successCount);
console.log("Rejected reservations: " + rejectedCount);
console.log("Pending reservations: " + pendingCount);