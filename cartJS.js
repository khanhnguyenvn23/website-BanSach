const productInCart = document.querySelector('.product-in-cart');
const orderHistory = document.querySelector('.orderHistory');
const statusSection = document.querySelector('.status-section');

function thayDoiLuaChonLeftMenu(activeElement, inactiveElement, showStatus = false) {
    activeElement.classList.add('selected');
    inactiveElement.classList.remove('selected');
    statusSection.style.display = showStatus ? 'block' : 'none';
}

productInCart.addEventListener('click', () => {
    thayDoiLuaChonLeftMenu(productInCart, orderHistory, false);
});

orderHistory.addEventListener('click', () => {
    thayDoiLuaChonLeftMenu(orderHistory, productInCart, true);
});

// Thay đổi lựa chọn trong lịch sử giao hàng
const statusItems = [
    document.querySelector('.status-success'),
    document.querySelector('.status-pending'),
    document.querySelector('.status-canceled')
]

function thayDoiLuaChonHistoryLM(activeElement) {
    statusItems.forEach(item => {
        if (item === activeElement) {
            item.classList.add('selected-orderHistory');
        }
        else item.classList.remove('selected-orderHistory');
    })
}

statusItems.forEach(item => {
    item.addEventListener('click', () => {
        thayDoiLuaChonHistoryLM(item);
    })
})
// Thêm bớt sản phẩm và tính tiền tổng của 1 sản phẩm
function themBotSanPham(btn) {
    const quantityItem = btn.parentElement.querySelector('input[id = "quantity"]');
    let currentQuantity = parseInt(quantityItem.value);

    const bookName = btn.parentElement.parentElement.querySelector('.product-descript a').textContent;
    const book = books.find(b => b.name === bookName);
    const price = book.price;

    if (btn.classList.contains('increase-btn')) {
        quantityItem.value = currentQuantity + 1;
    } else if (btn.classList.contains('decrease-btn') && currentQuantity > 1) {
        quantityItem.value = currentQuantity - 1;
    }
    let totalPrice = quantityItem.value * price;
    btn.parentElement.parentElement.querySelector('.text-size.other:last-child').textContent = totalPrice.toLocaleString('vi-VN');
}

// Làm việc với mảng chứa các sách
var books = [
    { productId: 1, img: 'assets/images/sanpham1.webp', cateory: 'tuoitho', name: 'Tôi thấy hoa vàng trên cỏ xanh', price: 250000 },
    { productId: 2, img: 'assets/images/sanpham2.webp', cateory: 'phattrien', name: 'sống chậm', price: 270000 },
    { productId: 3, img: 'assets/images/sanpham3.webp', cateory: 'chualanh', name: 'nếu chỉ còn một ngày để sống', price: 200000 },
    { productId: 40, img: 'assets/images/sanpham40.webp', cateory: 'tinhcam', name: 'Vẽ em bằng màu nội nhớ', price: 220000 },
    { productId: 41, img: 'assets/images/sanpham41.webp', cateory: 'tinhcam', name: 'kiếp nào ta cũng tìm thấy nhau', price: 250000 },
    { productId: 42, img: 'assets/images/sanpham42.webp', cateory: 'lich su', name: 'các triều đại Việt Nam', price: 290000 },
    { productId: 43, img: 'assets/images/sanpham43.webp', cateory: 'tinhcam', name: 'Ngày xưa có một chuyện tình', price: 270000 }
]
// var books = JSON.parse(localStorage.getItem('product'));

function displayOrderItems() {
    var s = "";
    for (let i = 0; i < books.length; i++) {
        s += `
                <div class="order-item">
                    <div><input class="select-1" type="checkbox"></div>
                    <div class="text-size product-descript">
                        <img src="` + books[i].img + `">
                        <a>`+ books[i].name + `</a>
                    </div>
                    <div class="text-size other">` + books[i].price.toLocaleString('vi-VN') + `</div>
                    <div class="text-size other alter-quantity">
                        <button class="text-size decrease-btn" onclick = "themBotSanPham(this)">-</button>
                        <input type="number" id="quantity" value="1"  readonly>
                        <button class="text-size increase-btn" onclick = "themBotSanPham(this)">+</button>
                    </div>
                    <div class="text-size other">
                        <span class = "total-price">` + books[i].price.toLocaleString('vi-VN') + `</span>
                    </div>

                </div>`
    }
    document.querySelector('.cart-section .orderItems-list').innerHTML = s;
}


// Chọn từng sản phẩm hoặc tất cả để xóa hoặc mua
let productIsPayOrDel = [];


const selectAll = document.getElementById('select-all');
const select1 = document.getElementsByClassName('select-1');

function nangCapChonTatCa() {          //Hàm này có chức năng là khi chọn từng cái sản phẩm 1/ khi chọn hết rồi thì checkbox của chọn tất cả = true
    let allChecked = true;
    for (let i = 0; i < select1.length; i++) {
        if (!select1[i].checked)
            allChecked = false;
    }
    selectAll.checked = allChecked;
}

function chon1SanPham(selection) {
    let bookName = selection.parentElement.parentElement.querySelector('.product-descript a').textContent;
    let book = books.find(book => book.name === bookName);

    if (selection.checked) productIsPayOrDel.push(book);
    else {
        let index = productIsPayOrDel.findIndex(product => product.name === bookName);
        productIsPayOrDel.splice(index, 1);
    }
}


function chonTatCa() {
    if (selectAll.checked) productIsPayOrDel = Array.from(books);
    else productIsPayOrDel = [];

    for (let i = 0; i < select1.length; i++) {
        select1[i].checked = selectAll.checked;
    }
}



function ganSuKienChoCheckbox() {
    const select1 = document.getElementsByClassName('select-1');
    for (let i = 0; i < select1.length; i++) {
        select1[i].addEventListener('click', () => {
            chon1SanPham(select1[i]);
        });

        select1[i].addEventListener('click', nangCapChonTatCa);
    }
}


displayOrderItems();
ganSuKienChoCheckbox();


function muaHang() {
    if (productIsPayOrDel.length === 0) {
        alert("Vui lòng chọn sản phẩm để thanh toán");
        return;
    }

    thanhToan();
}

function xoaKhoiGioHang() {
    if (productIsPayOrDel.length === 0) {
        alert("Vui lòng chọn sản phẩm để xóa");
        return;
    }

    productIsPayOrDel.forEach(product => {
        let index = books.findIndex(book => book.name === product.name);
        books.splice(index, 1);
    });

    productIsPayOrDel.length = 0;
    displayOrderItems();
    ganSuKienChoCheckbox();
}


var address = [
    { fullName: 'Tăng Huỳnh Quốc Khánh', numberPhone: '012345XXXX', }
]






function thanhToan() {
    // Ẩn phần giỏ hàng
    document.querySelector('.cart-section').classList.add('hidden');
    document.querySelector('.footer-cart-actions').classList.add('hidden');

    // Hiển thị phần thanh toán
    document.querySelector('.checkout-section').classList.remove('hidden');
    displayOrderItemsIsPayed();
}


function quayLaiGioHang() {
    document.querySelector('.checkout-section').classList.add('hidden');

    document.querySelector('.cart-section').classList.remove('hidden');
    document.querySelector('.footer-cart-actions').classList.remove('hidden');
}

function displayOrderItemsIsPayed() {
    var s = "";
    for (let i = 0; i < productIsPayOrDel.length; i++) {
        s += `
                <div class="order-item">
                    <div class="text-size product-descript">
                        <img src="` + productIsPayOrDel[i].img + `">
                        <a>`+ productIsPayOrDel[i].name + `</a>
                    </div>
                    <div class="text-size other">` + productIsPayOrDel[i].price.toLocaleString('vi-VN') + `</div>
                    <div class="text-size other alter-quantity">1</div>
                    <div class="text-size other">
                        <span class = "total-price">` + productIsPayOrDel[i].price.toLocaleString('vi-VN') + `</span>
                    </div>

                </div>`
    }
    document.querySelector('.product-is-payed .orderItems-list').innerHTML = s;
}




