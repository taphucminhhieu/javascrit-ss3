let totalFeedbacks = 0;
let seriousComplaints = 0;
let mediumComplaints = 0;
let lightComplaints = 0;
let improvementSuggestions = 0;
let positiveFeedbacks = 0;

let continueWork = "có";

while (continueWork != "không") {

    continueWork = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

    if (continueWork == "có") {
        
        let readerName = prompt("Tên bạn đọc:");
        while (readerName == "") {
            readerName = prompt("Tên bạn đọc không được để trống! Vui lòng nhập lại:");
        }

        let cardId = prompt("Mã thẻ bạn đọc (nếu có, có thể để trống):");
        let feedbackType = prompt("Loại phản hồi (1: Khiếu nại, 2: Đề xuất, 3: Tích cực):");
        let content = prompt("Nội dung ngắn gọn:");

        totalFeedbacks = totalFeedbacks + 1;

        if (feedbackType == "1") {
            let severityLevel = prompt("Mức độ nghiêm trọng (1: Nhẹ, 2: Trung bình, 3: Nghiêm trọng):");

            if (severityLevel == "3") {
                console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
                seriousComplaints = seriousComplaints + 1;
            } else {
                if (severityLevel == "2") {
                    console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
                    mediumComplaints = mediumComplaints + 1;
                } else {
                    if (severityLevel == "1") {
                        console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
                        lightComplaints = lightComplaints + 1;
                    }
                }
            }
        } else {
            if (feedbackType == "2") {
                console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
                improvementSuggestions = improvementSuggestions + 1;
            } else {
                if (feedbackType == "3") {
                    console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
                    positiveFeedbacks = positiveFeedbacks + 1;
                }
            }
        }
    }
}

console.log("--- BÁO CÁO TỔNG HỢP ---");
console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + totalFeedbacks);
console.log("Số khiếu nại nghiêm trọng (mức 3): " + seriousComplaints);
console.log("Số khiếu nại trung bình (mức 2): " + mediumComplaints);
console.log("Số khiếu nại nhẹ (mức 1): " + lightComplaints);
console.log("Số đề xuất cải thiện: " + improvementSuggestions);
console.log("Số phản hồi tích cực: " + positiveFeedbacks);