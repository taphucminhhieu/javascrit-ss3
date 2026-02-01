// nhập thông tin
let ask = prompt("hỏi thủ thư có bao nhiêu quyển sách: ");
let lisk =Number(prompt("Số lần mượn sách."));


//xuất ra màn hình
console.log("Lượt mượn : ",lisk);

//kiểm tra lượt mượn
if(lisk >14){
    console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày).");
}else if(lisk <=14){
    console.log("Mượn thành công");
}

// vòng lặp thông tin mượn sách
for(let i = 0 ; i< lisk ; i++) {
    console.log("người thứ: ",i+1 );
    
    //khai báo tên và sách trong vòng lặp
    const name_user = prompt("Tên người mượn sách");
    const name_book = prompt("Tên sách mượn");

    //vong lặp giới hạn ngày
    let day;
    while(true) {
        day = Number( prompt("số ngày (1-30)"));
        if( day >=1 && day <=30 ){
            console.log("sô ngày: ",day);
            break;
        }else {
            console.log("vui long nhập lại ngà (1-30)");
        }
    }
        console.log("Tên người mượn: ",name_user);
        console.log("Tên sách: ",name_book);
        console.log("Số ngày mượn: ",day);
}

