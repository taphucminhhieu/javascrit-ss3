// nhập thông tin
let ask = prompt("hỏi thủ thư có bao nhiêu quyển sách: ");
let lisk =Number(prompt("Số lần mượn sách."));
const lish_loan = [];


//xuất ra màn hình
console.log("Lượt mượn : ", lisk);


// vòng lặp thông tin mượn sách
for(let i = 0 ; i< lisk ; i++) {
    console.log("người thứ: ",i+1 );
    
    //khai báo tên và sách trong vòng lặp
    const name_user = prompt("Tên người mượn sách");
    const name_book = prompt("Tên sách mượn");

    //vong lặp giới hạn ngày
    let day_borrow;
    while(true) {
        day_borrow = Number(prompt("số ngày mượn"));

    if( day_borrow <= 14){
        console.log("Trả đúng hạn");
        break;
    }else if( day_borrow == 15 && day_borrow <= 21){
        console.log("Trả muộn nhẹ" + " Phạt nhắc nhở");
        break;
    }else if( day_borrow > 21) {
        console.log("Quá hạn nghiêm trọng" + " Cần ghi bản phạt");
        break;
    }else {
        console.log("nhập lại");
    };
}
        console.log("Tên người trả: ",name_user);
        console.log("Tên sách: ",name_book);
        console.log("Số ngày mượn: ",day_borrow);
}
