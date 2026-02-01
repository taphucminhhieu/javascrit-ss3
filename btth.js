// --- LOGIN PART (Using while) ---
let correctPass = "admin123";
let attempts = 3;
let canLogin = false;

while (attempts > 0) {
    let inputPass = prompt("Enter password:");
    
    if (inputPass == correctPass) {
        console.log("Login Success!");
        canLogin = true;
        break; 
    } else {
        attempts = attempts - 1;
        if (attempts > 0) {
            console.log("Wrong! Attempts left: " + attempts);
        } else {
            console.log("System Locked!");
        }
    }
}

// --- MAIN MENU (Only if login is true) ---
if (canLogin == true) {
    while (true) {
        let menu = prompt("Select function:\n1 - Add new books\n2 - Show book map\n3 - Exit");

        if (menu == "1") {
            // Function 1: Add new books (Using for)
            let bookCount = Number(prompt("How many books to add?"));
            let totalPrice = 0;

            for (let i = 1; i <= bookCount; i = i + 1) {
                let price = Number(prompt("Price for book number " + i + ":"));
                
                if (price <= 0) {
                    console.log("Error: Bad price, skip this book.");
                    continue; 
                }
                
                totalPrice = totalPrice + price;
            }
            console.log("Total price for this batch: " + totalPrice + " VNĐ");

        } else {
            if (menu == "2") {
                // Function 2: Book map (Using nested loops)
                for (let area = 1; area <= 3; area = area + 1) {
                    for (let shelf = 1; shelf <= 5; shelf = shelf + 1) {
                        
                        if (area == 2) {
                            if (shelf == 3) {
                                console.log("Area 2 - Shelf 3 (Fixing...)");
                                continue; 
                            }
                        }
                        
                        console.log("Area " + area + " - Shelf " + shelf);
                    }
                }

            } else {
                if (menu == "3") {
                    // Function 3: Exit
                    console.log("Goodbye!");
                    break; 
                } else {
                    console.log("Wrong choice, try again.");
                }
            }
        }
    }
}