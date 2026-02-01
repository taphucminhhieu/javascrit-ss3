//vòng lặp yêu cầu gia hạn
const yes = ("có") ;
const no = ("không") ;
do {
    let ask = prompt("Bạn có muốn gia hạn không ?");
    
    if( ask === "có"){
        console.log("Đã gia hạn thành công.");
        break;
    } else if( ask === "không"){
        console.log("kết thúc");
        continue;
    } else {
        console.log(" có hoặc không.");
    }

} while (false)// chỉ chạy 1 lần duy nhất

//thông tin người dùng khai báo và lập danh sách
const lish_loan = [];
const borrow =Number(prompt ("Số người mượn sách"));
const name_user = ("Tên bạn đọc:");
const name_book = ("Tên sách");
const day_borrow_now = Number(prompt ("Số ngày đã mượn"));
const day_borrow_future = Number(prompt ("Số ngày muốn gia hạn thêm")) ;

for( i = 0; i <= borrow; i++ ){
    console.log("người thứ: ",i+1 );

    //vòng lặp giới hạn ngày
    const name_user = prompt("Tên bạn đọc:");
    const name_book = prompt("Tên sách:");

    while(true){
        if ( day_borrow_now + day_borrow_future > 60 ) {
            console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
            break;
        } else if ( day_borrow_now > 45) {
            console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
            break;
        } else {
            console.log("Gia hạn thành công");
            break;
        }
    };
    console.log("Tên bạn đọc: ",name_user);
    console.log("Tên sách: ",name_book);
    console.log("Số ngày đã mượn: ",day_borrow_now);
    console.log("Số ngày gia hạn thêm: ",day_borrow_future);
}
