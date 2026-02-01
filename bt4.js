//nhập thong tin 
const yes = ("có") ;
const no = ("không") ;


let total_book = 0;
let book_loss = 0;
let book_over = 0;
let book_many = 0;
let book_normal = 0;

do {
    let ask = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/Không)");

    if( ask === "có"){
        console.log("Tiếp tục thông tin sách");

//thông tin từng cuốn sách
const number_book = Number(prompt("Mã sách"));
const name_book = prompt("Tên sách");
const real_number = Number(prompt ("Số lượng thực tế trong kho"));
const status_book = Number(prompt("Tình trạng sách (1- bình thg /2-không bthg"));

//in tin sách
console.log("Mã sách",number_book);
console.log("Tên sách",name_book);
console.log("Số lượng thực tế: ",real_number);
console.log("Tình trạng sách: ",status_book);   
   
        

 //tình trạng sách
if( status_book == "1" ){
    console.log("Bình thường (có thể cho mượn)");
} else if( status_book == "2"){
    console.log("Mất (không còn trong kho)");
}

//xử lý 
if (status_book === "2") {
    console.log("Sách mất");
    book_loss = book_loss +1;
} else if( status_book === 1 && real_number === 0){
    console.log("Sách hết (vẫn còn trong hệ thống)");
    book_over = book_over + 1;
} else if( status_book ===  1 && real_number >= 10 ) {
    console.log("Sách tồn kho nhiều");
    book_many = book_many+1;
} else if( status_book === 1 && real_number >=1  && real_number <=9){
    console.log("Sách tồn kho bình thường.");
    book_normal = book_normal+1;
}
    } else if( ask === "không"){
        console.log("Kết thúc và in thống kê");
    };
} while ( ask === "có");




console.log("--- BÁO CÁO KIỂM KÊ ---");
console.log("Tổng số sách đã kiểm kê: " , total_book);
console.log("Số sách mất: " , book_loss);
console.log("Số sách hết hàng: " , book_over);
console.log("Số sách tồn kho nhiều: " , book_many);
console.log("Số sách tồn kho bình thường: " , book_normal);

