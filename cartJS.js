// ===========================================================-----------------------------=========================================================
// ===========================================================      Start Address Cart     =========================================================
// ===========================================================-----------------------------=========================================================


let userLogin = {};
let addressInfoList = [];
let address2Deliver = {};
// Đóng ô chọn địa chỉ
function closeSelectAddress() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.select-address').classList.add('hidden');

}
// Mở ô chọn địa chỉ 
function openSelectAddress() {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.select-address').classList.remove('hidden');

    displayAddressInfoList();
    setupAddressSelection();
    getAddressBefore();
}

// Lấy dữ liệu từ User khi đăng nhập
getLocalStorageUserLogin()
function getLocalStorageUserLogin() {
    userLogin = JSON.parse(localStorage.getItem('userLogin'));
    if (userLogin === null) return;
    document.querySelector('#idName').value = userLogin.fullname;
    document.querySelector('#idPhoneNumber').value = userLogin.phoneNumber;

    let province = getProvinceNameByID(userLogin.address2);
    let district = getDistrictNameByID(userLogin.address3);
    let ward = getWardNameByID(userLogin.address4);
    let AddressDetail = userLogin.address1 + ", " + ward + ", " + district + ", " + province;

    addressInfoList = [
        {
            userID: userLogin.userId, userFullName: userLogin.fullname, phoneNumber: userLogin.phoneNumber,
            addressDetail: AddressDetail, province: userLogin.address2, district: userLogin.address3, ward: userLogin.address4
        },
    ];
    address2Deliver = addressInfoList[0];
    changeDeliveInfo(); // Dùng để đổi địa chỉ hiển thị ở Địa Chỉ Nhận Hàng
}

// Hiển thị những địa chỉ có sẵn của user
function displayAddressInfoList() {
    let s = '';
    let behindS = `
        <div class="add-address-btn">
            <button onclick = "openAddNewAddress()">
                <i class=" fa-solid fa-plus"></i>Thêm Địa Chỉ Mới
            </button>
        </div>
    `;
    for (let i = 0; i < addressInfoList.length; i++) {
        s += `
        <div class="address-item">
            <div class="select-btn">
                <input type="radio" class = "select-btn-address">
            </div>

            <div class="address-info">
                <div class="user-basic-info">
                    <div class="userFullName">${addressInfoList[i].userFullName}</div>
                    <div class="distance"></div>
                    <div class="phoneNumber">${addressInfoList[i].phoneNumber}</div>
                </div>

                <div class="address-detail">${addressInfoList[i].addressDetail}</div>
            </div>
        </div>
        `
    }
    s += behindS;
    document.querySelector('.address-list').innerHTML = s;
}

// Tắt tất cả các selection đã chọn
function uncheckAllSelection(selections) {
    selections.forEach(select => {
        if (select.checked) {
            select.checked = false;
        }
    });

}

// Chọn địa chỉ này sẽ tắt checked của địa chỉ trước
function setupAddressSelection() {
    let selections = document.querySelectorAll('.select-btn-address');

    selections.forEach(select => {
        select.addEventListener('click', () => {
            uncheckAllSelection(selections);
            select.checked = true;
        });
    });
}

//Chọn địa chỉ và ấn hủy sẽ tự động chọn về cái trước đó
function getAddressBefore() {
    let selections = document.querySelectorAll('.select-btn-address');
    uncheckAllSelection(selections);

    selections.forEach(selection => {
        let addressDetail = selection.closest('.address-item').querySelector('.address-detail').textContent;
        if (addressDetail === address2Deliver.addressDetail) {
            selection.checked = true;
        }
    })
}

// Dùng để đổi địa chỉ hiển thị ở Địa Chỉ Nhận Hàng
function changeDeliveInfo() {
    let s = '';
    s += `
        <div class="buyer-info">${address2Deliver.userFullName} ` + ` ${address2Deliver.phoneNumber}</div>
        <div class="address-info">${address2Deliver.addressDetail}</div>
    `;

    s += `<button class="change-address" onclick="openSelectAddress()">Thay Đổi</button>`;
    document.querySelector('.checkout-section .delive-info').innerHTML = s;
}

// Lấy địa chỉ để giao        
function getAddress2Deliver() {
    let addresses = document.querySelectorAll('.select-btn-address');
    addresses.forEach(address => {
        if (address.checked) {
            let addressItem = address.closest('.address-item');

            let userFullName = addressItem.querySelector('.userFullName').textContent;
            let phoneNumber = addressItem.querySelector('.phoneNumber').textContent;
            let addressDetail = addressItem.querySelector('.address-detail').textContent;

            address2Deliver = {
                userFullName,
                phoneNumber,
                addressDetail,
            };
        }
    });
    changeDeliveInfo();  // Dùng để đổi địa chỉ hiển thị ở Địa Chỉ Nhận Hàng
}


// Mở ô nhập địa chỉ mới
function openAddNewAddress() {
    document.querySelector('.add-address').classList.remove('hidden');
    document.querySelector('.select-address').classList.add('hidden');
}

// Đóng ô nhập địa chỉ mới
function closeAddNewAddress() {
    document.querySelector('.add-address').classList.add('hidden');
    document.querySelector('.select-address').classList.remove('hidden');
}

// Hiển thị tỉnh
function showProvinces() {
    let s = '<option value="0">Chọn Tỉnh / Thành phố</option>';
    let dataTinh_TP = JSON.parse(localStorage.getItem('Tinh_TP'));
    dataTinh_TP.forEach(tinhTP => {
        s += `
            <option value ="${tinhTP.TinhID}">${tinhTP.TinhName}</option>
        `;
    })
    document.querySelector('#provinces').innerHTML = s;
}
showProvinces();

// Lấy Id tỉnh để hiển thị huyện thuộc tỉnh đó
function getProvinceID() {
    let provinceID = document.querySelector('#provinces').value;
    showDistricts(provinceID);
}

// Hiển thị huyện sau khi chọn tỉnh
function showDistricts(provinceID) {
    let s = '<option value="0">Chọn Quận / Huyện</option>';
    let dataQuan_Huyen = JSON.parse(localStorage.getItem('Quan_Huyen'));
    dataQuan_Huyen.forEach(quanHuyen => {
        if (quanHuyen.TinhID === provinceID)
            s += `
            <option value="${quanHuyen.Quan_HuyenID}">${quanHuyen.Quan_HuyenName}</option>
        `;
    })

    document.querySelector('#districts').innerHTML = s;
}

// Lấy id huyện
function getDistrictID() {
    let districtID = document.querySelector('#districts').value;
    showWards(districtID);
}


// Hiển thị xã sau khi chọn 
function showWards(districtID) {
    let s = '<option value="0">Chọn Phường / Xã</option>';
    let dataPhuong_Xa = JSON.parse(localStorage.getItem('Phuong_Xa'));
    dataPhuong_Xa.forEach(phuongXa => {
        if (phuongXa.Quan_HuyenID === districtID) {
            s += `
                <option value="${phuongXa.PhuongID}">${phuongXa.PhuongName}</option>
            `;
        }
    })

    document.querySelector('#wards').innerHTML = s;
}

// Được gọi khi ấn nút Hoàn thành địa chỉ mới
// Kiểm tra địa chỉ mới đã nhập đủ ch
function checkInfoNewAddress() {
    let address = document.getElementById('idAddress');
    let province = document.getElementById('provinces');
    let district = document.getElementById('districts');
    let ward = document.getElementById('wards');

    let provinceID = province.value;
    let districtID = district.value;
    let wardID = ward.value;

    if (address.value === '') {
        alert("Vui lòng nhập địa chỉ");
        address.focus();
        return;
    }
    if (province.value === '0') {
        alert("Vui lòng chọn tỉnh/thành phố");
        province.focus();
        return;
    }
    if (district.value === '0') {
        alert("Vui lòng chọn quận/huyện");
        district.focus();
        return;
    }
    if (ward.value === '0') {
        alert("Vui lòng chọn phường/xã");
        ward.focus();
        return;
    }
    saveNewAddress(provinceID, districtID, wardID);
}

/*Lấy tỉnh từ ID */
function getProvinceNameByID(id) {
    var Tinh = JSON.parse(localStorage.getItem('Tinh_TP'));
    if (id === '0') {
        return 'Chưa có';
    }
    for (var i = 0; i < Tinh.length; i++) {
        if (id === Tinh[i].TinhID) {
            return Tinh[i].TinhName;
        }
    }
}

/* Láy  Quận-huyện từ ID */
function getDistrictNameByID(id) {
    var Quan = JSON.parse(localStorage.getItem('Quan_Huyen'));
    if (id === '0') {
        return 'Chưa có';
    }
    for (var i = 0; i < Quan.length; i++) {
        if (id === Quan[i].Quan_HuyenID) {
            return Quan[i].Quan_HuyenName;
        }
    }
}

/* Lấy Phường từ id */
function getWardNameByID(id) {
    var Phuong = JSON.parse(localStorage.getItem('Phuong_Xa'));
    if (id === '0') {
        return 'Chưa có';
    }
    for (var i = 0; i < Phuong.length; i++) {
        if (id === Phuong[i].PhuongID) {
            return Phuong[i].PhuongName;
        }
    }
}

// Được gọi sau khi kiểm tra đã nhập đầy đủ thông tin địa chỉ mới chưa
// Lưu địa chỉ mới trong giỏ hàng (chỉ sử dụng được ở giỏ hàng)
function saveNewAddress(provinceID, districtID, wardID) {
    let newAddress = [];
    newAddress.userID = userLogin.UserID;
    newAddress.userFullName = userLogin.fullname;
    newAddress.phoneNumber = userLogin.phoneNumber;
    newAddress.addressDetail = document.querySelector('#idAddress').value;

    let wardName = getWardNameByID(wardID);
    let districtName = getDistrictNameByID(districtID);
    let provinceName = getProvinceNameByID(provinceID);

    // Lấy địa chỉ cụ thể, tỉnh, huyện, xã gộp thành 1.
    newAddress.addressDetail = document.querySelector('#idAddress').value +
        ", " + wardName + ", " + districtName + ", " + provinceName;

    addressInfoList.push(newAddress);

    closeAddNewAddress();    //Đóng bảng tạo địa chỉ mới
    displayAddressInfoList();//Hiển thị thông tin các địa chỉ
    setupAddressSelection(); //chọn cái này sẽ tắt cái kia
    getAddressBefore();      //lấy địa chỉ trước nếu như không xác nhận
    console.log("Lưu Địa Chỉ mới");
}
// ===========================================================----------------------------=========================================================
// ===========================================================      End Address Cart      =========================================================
// ===========================================================----------------------------=========================================================


















// ===========================================================----------------------=========================================================
// ===========================================================      Start Cart      =========================================================
// ===========================================================----------------------=========================================================
let orderSummary = {};
const productInCart = document.querySelector('.product-in-cart');
const orderHistory = document.querySelector('.orderHistory');
const continueShopping = document.querySelector('.back-mainPage');

// Bấm vào các lựa chọn bên trái giỏ hàng sẽ đổi màu
function thayDoiLuaChonLeftMenu(activeElement, inactiveElement) {
    activeElement.classList.add('selected');
    inactiveElement.classList.remove('selected');
}

// Để Hiện Phần giao diện của Sản phẩm trong Giỏ
productInCart.addEventListener('click', () => {
    thayDoiLuaChonLeftMenu(productInCart, orderHistory);
    document.querySelector('.items-in-cart').classList.remove('hidden');
    document.querySelector('.history-in-cart').classList.add('hidden');
});

// Để Hiện Phần giao diện Lịch Sử mua hàng
orderHistory.addEventListener('click', () => {
    thayDoiLuaChonLeftMenu(orderHistory, productInCart);
    document.querySelector('.items-in-cart').classList.add('hidden');
    document.querySelector('.history-in-cart').classList.remove('hidden');
});

// Để quay lại mua hàng
continueShopping.addEventListener('click', () => {
    document.getElementById('backIndexHtml').click();
})

// Mở bảng Không có sản phẩm nào trong Lịch Sử
function addNoneOrderHistory() {
    if (localStorage.getItem('orderList') === null)
        document.querySelector('.none-orderHistory-list').classList.remove('hidden');
}
addNoneOrderHistory();

// Đóng bảng Không có sản phẩm nào trong Lịch Sử
function closeNoneOrderHistory() {
    document.querySelector('.none-orderHistory-list').classList.add('hidden');
}


// Thêm bớt sản phẩm và tính tiền tổng của 1 sản phẩm
function tongTien1SP(orderItem, item) {
    const totalPrice1Item = orderItem.querySelector('.total-price');
    let totalPrice = item.quantity * item.price;
    totalPrice1Item.textContent = totalPrice.toLocaleString('vi-VN') + 'đ';

    item.totalPrice1Item = totalPrice; // Thêm thuộc tính tổng tiền 1 loại sản phẩm
}

function themBotSanPham(btn) {
    const itemQuantity = btn.parentElement.querySelector('input[id = "quantity"]');

    const itemName = btn.parentElement.parentElement.querySelector('.product-descript a').textContent; // Lấy tên sản phẩm
    const item = orderItems.find(item => item.name === itemName); // Tìm sản phẩm trong giỏ đã được thêm trước đó

    if (btn.classList.contains('increase-btn')) {
        itemQuantity.value++;  // Bấm nút tăng thì tăng Sl
    } else if (btn.classList.contains('decrease-btn') && itemQuantity.value > 1) {
        itemQuantity.value--;  // Bấm nút giảm thì giảm Sl
    }

    item.quantity = itemQuantity.value;
    tongTien1SP(btn.parentElement.parentElement, item);
}
let orderItems = [];
function getOrderItems() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    
    if (userLogin == null) {
        alert("Có lỗi, bạn chưa đăng nhập.");
    }
     else {
        // Kiểm tra nếu người dùng đã đăng nhập
        const existingCarts = JSON.parse(localStorage.getItem("shoppingCarts")) || [];

        // Tìm giỏ hàng của người dùng trong localStorage
        const userCart = existingCarts.find(cart => cart.UserId === userLogin.UserId);

        if (userCart && userCart.items.length > 0) {
            // Nếu giỏ hàng tồn tại và có sản phẩm, gán sản phẩm vào orderItems
            const productArray = JSON.parse(localStorage.getItem("product")) || [];

            orderItems = userCart.items.map(item => {
                // Tìm sản phẩm trong mảng productArray theo productId
                const product = productArray.find(p => p.productId === item.productId);

                if (product) {
                    return {
                        productId: product.productId,
                        name: product.name, // Tên sản phẩm
                        price: product.price, // Giá sản phẩm
                        img: product.src, // Hình ảnh sản phẩm
                        quantity: item.quantity || 1, // Số lượng (mặc định là 1 nếu không có)
                        totalPrice1Item: product.price * (item.quantity || 1), // Tổng giá cho 1 sản phẩm
                    };
                }
                return null; // Trả về null nếu không tìm thấy sản phẩm
            }).filter(item =>  item!== null); // Lọc bỏ các giá trị null nếu sản phẩm không tồn tại
        } else {
            console.log("Giỏ hàng của người dùng trống.");
        }
    }
}
getOrderItems();

// Hàm thêm số lượng cho các sản phẩm trong giỏ hàng
function addQuantity() {
    for (let i = 0; i < orderItems.length; i++) {
        orderItems[i].quantity = 1; // Đặt lại số lượng cho mỗi sản phẩm là 1
        orderItems[i].totalPrice1Item = orderItems[i].price; // Cập nhật giá trị tổng cho sản phẩm
    }
}

// Gọi hàm để thêm sản phẩm vào giỏ hàng (nếu cần)
addQuantity();

// Hiển thị các sản phẩm được thêm trong giỏ
function displayOrderItems() {
    var s = "";
    for (let i = 0; i < orderItems.length; i++) {
        s += `
                <div class="order-item">
                    <div><input class="select-1" type="checkbox"></div>
                    <div class="text-size product-descript">
                        <img src="` + orderItems[i].img + `">
                        <a>`+ orderItems[i].name + `</a>
                    </div>
                    <div class="text-size other">` + orderItems[i].price.toLocaleString('vi-VN') + `đ</div>
                    <div class="text-size other alter-quantity">
                        <button class="text-size decrease-btn" onclick = "themBotSanPham(this)">-</button>
                        <input type="number" id="quantity" value="${orderItems[i].quantity}"  readonly>
                        <button class="text-size increase-btn" onclick = "themBotSanPham(this)">+</button>
                    </div>
                    <div class="text-size other">
                        <span class = "total-price">` + orderItems[i].price.toLocaleString('vi-VN') + `đ</span>
                    </div>

                </div>`
    }
    document.querySelector('.cart-section .orderItems-list').innerHTML = s;
}


// Chọn từng sản phẩm hoặc tất cả để xóa hoặc mua
let orderItemIsPayed = [];

// Nút lấy hết
const selectAll = document.getElementById('select-all');
// Nút lấy 1 cái
const select1 = document.getElementsByClassName('select-1');

function nangCapChonTatCa() { //khi chọn từng cái sản phẩm 1/ khi chọn hết rồi thì checkbox của chọn tất cả = true
    let allChecked = true;    //                           2/ khi bỏ chọn 1 sản phẩm khi đang chọn tất cả thì ctấtcả = false
    for (let i = 0; i < select1.length; i++) {
        if (!select1[i].checked)
            allChecked = false;
    }
    selectAll.checked = allChecked;
}

// Chọn sản phẩm nào thì sản phẩm đó sẽ bỏ vào Mảng SP sẽ Xóa hoặc Thanh toán
function chon1SanPham(selection) {
    let bookName = selection.parentElement.parentElement.querySelector('.product-descript a').textContent;
    let book = orderItems.find(book => book.name === bookName);

    if (selection.checked) orderItemIsPayed.push(book);                               //Thêm vào
    else {
        let index = orderItemIsPayed.findIndex(item => item.productId === book.productId); //Bỏ ra
        orderItemIsPayed.splice(index, 1);
    }
}

// Lấy hết vào Mảng SP sẽ Xóa hoặc Thanh toán khi chọn nút Tất cả
function chonTatCa() {
    // Nếu nút chọn tất cả = true. Sao chép mảng từ mảng SP được thêm vào giỏ
    if (selectAll.checked) orderItemIsPayed = Array.from(orderItems);
    // Ngược lại gán thành rỗng
    else orderItemIsPayed = [];

    // Gán tất cả các nút chọn 1 SP thành true nếu nút tất cả = true
    for (let i = 0; i < select1.length; i++) {
        select1[i].checked = selectAll.checked;
    }
}


//  Khi chọn sẽ kích hoạt hàm chon1SanPham(selection);
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

// Đóng thông báo nếu chưa chọn SP nào để thanh toán
function closeAlertNotSelect() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.modal .alert-cart').classList.add('hidden');
}
// Mở thông báo nếu chưa chọn SP nào để thanh toán
function openAlertNotSelect(word) {
    let modal = document.querySelector('.modal');
    const alertModalBuy = modal.querySelector('.message');
    alertModalBuy.textContent = `Bạn vẫn chưa chọn sản phẩm để ${word}`;
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.modal .alert-cart').classList.remove('hidden');
}

// Được gọi khi ấn nút Mua Hàng.
function muaHang() {
    if (orderItemIsPayed.length === 0) {
        openAlertNotSelect("mua");
        return;
    }

    thanhToan();
}
// Được gọi khi ấn nút Xóa
function xoaKhoiGioHang() {
    if (orderItemIsPayed.length === 0) {
        openAlertNotSelect("xóa");
        return;
    }

    deleteItem();

    displayOrderItems();
    ganSuKienChoCheckbox();
}
// Xóa sản phẩm được chọn
function deleteItem() {
    orderItemIsPayed.forEach(itemPayed => {
        // Xóa trong giỏ đã lấy từ localStorage
        let indexOrderItem = orderItems.findIndex(item => item.productId === itemPayed.productId);
        orderItems.splice(indexOrderItem, 1);


        // Xóa trong giỏ localStorage
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        const shoppingCarts = JSON.parse(localStorage.getItem("shoppingCarts")) || [];

        const currentCart = shoppingCarts.find(cart => cart.userId === userLogin.userId);
        let indexItemCurrentCart = currentCart.items.findIndex(item => item.productId === itemPayed.productId);
        currentCart.items.splice(indexItemCurrentCart, 1); // Xóa sản phẩm khỏi giỏ hàng của người dùng

        localStorage.setItem("shoppingCarts", JSON.stringify(shoppingCarts));
    });
    orderItemIsPayed.length = 0;
}


function thanhToan() {
    // Ẩn phần giỏ hàng
    document.querySelector('.cart-section').classList.add('hidden');
    document.querySelector('.footer-cart-actions').classList.add('hidden');

    // Hiển thị phần thanh toán
    document.querySelector('.checkout-section').classList.remove('hidden');
    displayOrderItemsIsPayed();
}


function quayLaiGioHang() {
    // Ẩn phần thanh toán
    document.querySelector('.checkout-section').classList.add('hidden');

    // Hiển thị phần giỏ hàng 
    document.querySelector('.cart-section').classList.remove('hidden');
    document.querySelector('.footer-cart-actions').classList.remove('hidden');
}

// Tạo thuộc tính và thêm cho Tóm tắt mua hàng
function createOrderSummary() {
    orderSummary.FullName = address2Deliver.userFullName;
    orderSummary.Sdt = address2Deliver.phoneNumber;
    orderSummary.Address = address2Deliver.addressDetail;
    orderSummary.OrderDate = getDateNow();
    orderSummary.Status = "Chưa xác nhận";
    // Thuộc tính PaymentMethod sẽ được add vào sau khi chọn paymentMethod
}


// Lấy tổng của 1 đơn
function getTotalAmount(productList) {
    let totalAmount = 0;
    productList.forEach(product => {
        totalAmount += product.price * product.quantity;
    })
    return totalAmount;
}

// Hiển thị những sản phẩm sẽ mua
function displayOrderItemsIsPayed() {
    var s = "";
    for (let i = 0; i < orderItemIsPayed.length; i++) {
        s += `
                <div class="order-item">
                    <div class="text-size product-descript">
                        <img src="` + orderItemIsPayed[i].img + `">
                        <a>`+ orderItemIsPayed[i].name + `</a>
                    </div>
                    <div class="text-size other">` + orderItemIsPayed[i].price.toLocaleString('vi-VN') + `đ</div>
                    <div class="text-size other alter-quantity">` + orderItemIsPayed[i].quantity + `</div>
                    <div class="text-size other">
                        <span class = "total-price">` + orderItemIsPayed[i].totalPrice1Item.toLocaleString('vi-VN') + `đ</span>
                    </div>

                </div>`
    }

    s += `
        <div class = "summary">
            <div class = "total-amount">
                <div ><strong>Tổng Tiền: </strong></div>
                <div class = "text-total">${getTotalAmount(orderItemIsPayed).toLocaleString('vn-VN')}đ</div>
            </div> 
        </div> 
    `;
    document.querySelector('.product-is-payed .orderItems-list').innerHTML = s;
}

// Chọn lựa chọn thanh toán
function setupPaymentSelection() {
    let selections = document.querySelectorAll('.select-checkout');

    selections.forEach(select => {
        select.addEventListener('click', () => {
            uncheckAllSelection(selections);
            select.checked = true;
        });
    });
}
setupPaymentSelection();

// Hiển thị bảng nhập dữ liệu khi chọn Thanh Toán Bằng Thẻ
function showPaymentForm(method) {
    // Ẩn tất cả các form thanh toán
    const cashForm = document.querySelector('.cash-payment-form');
    const bankForm = document.querySelector('.bank-payment-form');
    const cardForm = document.querySelector('.card-payment-form');

    cashForm.classList.add('hidden');
    bankForm.classList.add('hidden');
    cardForm.classList.add('hidden');

    // Hiện form tương ứng với phương thức thanh toán đã chọn
    if (method === 'cash') {
        cashForm.classList.remove('hidden');
    } else if (method === 'bank-transfer') {
        bankForm.classList.remove('hidden');
    } else if (method === 'card') {
        cardForm.classList.remove('hidden');
    }
}

// Kiểm tra các thông tin trong thẻ đã đủ ch
function checkInfoCardMethod() {
    let selectedMethod = document.querySelector('.select-checkout:checked').value;

    if (selectedMethod === 'card') {
        let cardNumber = document.getElementById('card-number');
        let cardExpiry = document.getElementById('card-expiry');
        let cardCvv = document.getElementById('card-cvv');

        if (!cardNumber.value) {
            alert("Vui lòng nhập số thẻ");
            cardNumber.focus();
            return false;
        }
        if (!cardExpiry.value) {
            alert("Vui lòng nhập ngày hết hạn");
            cardExpiry.focus();
            return false;
        }
        if (!cardCvv.value) {
            alert("Vui lòng nhập CVV");
            cardCvv.focus();
            return false;
        }
    }
    return true;
}

// Ấn nút thanh toán là xong
function hoanTatThanhToan() {
    let selectionsCheckout = document.querySelectorAll('.select-checkout');
    let haveSelect = false;
    selectionsCheckout.forEach(selection => {
        if (selection.checked) {
            haveSelect = true;
            orderSummary.PaymentMethod = selection.closest('.payment-option div').textContent.trim();
        }
    })

    if (!haveSelect) {
        alert("Vui lòng chọn phương thức thanh toán");
        return;
    }

    if (!checkInfoCardMethod()) return;
    closeCheckoutSection();
    closeNoneOrderHistory()
    createOrderSummary();
    displayOrderSummary();
    console.log(orderItemIsPayed);
    deleteItem();               // Xóa các SP đã mua ra khỏi giỏ
}

// Đóng giao diện thanh toán
function closeCheckoutSection() {
    document.querySelector('.checkout-section').classList.add('hidden');
}

//  Lấy ngày hiện tại
function getDateNow() {
    let today = new Date();
    let day = today.getDate().toString().padStart(2, '0');
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let year = today.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    return currentDate;
}

// Hiển thị Tóm tắt Thanh toán
function displayOrderSummary() {
    let userFullName = orderSummary.FullName;
    let userSDT = orderSummary.Sdt;
    let userAddress = orderSummary.Address;
    let orderDate = orderSummary.OrderDate;
    let statusText = orderSummary.Status;
    let paymentMethod = orderSummary.PaymentMethod;
    let s = `
    <h1>Tóm tắt đơn hàng</h1>

        <div class="buyer-info">
            <div class="title">Thông tin người mua:</div>
            <div class="section-content"><Strong>Tên:</Strong> ${userFullName}</div>
            <div class="section-content"><Strong>Số điện thoại:</Strong> ${userSDT}</div>
            <div class="section-content"><Strong>Địa chỉ:</Strong> ${userAddress}</div>
        </div>

        <div class="order-info">
            <div class="title">Thông tin đơn hàng:</div>
            <div class="section-content"><Strong>Ngày đặt hàng:</Strong> ${orderDate}</div>
            <div class="section-content"><Strong>Trạng thái:</Strong> ${statusText}</div>
            <div class="payment-method"><strong>Phương thức thanh toán:</strong> ${paymentMethod}</div>
            <div class="product-is-payed">
                <div class="product-table-header">
                    <div class="text-size product-descript">Sản Phẩm</div>
                    <div class="text-size other">Đơn Giá</div>
                    <div class="text-size other">Số Lượng</div>
                    <div class="text-size other">Số Tiền</div>
                        </div>

                <div class="orderItems-list">

                        </div>
                    </div>
                </div>

        
    `;
    document.querySelector('.order-summary').innerHTML = s;
    displayOrderItemsSummary();
}

// Hiển thị các sản phẩm đã mua trong phần tóm tắt
function displayOrderItemsSummary() {
    var s = "";
    for (let i = 0; i < orderItemIsPayed.length; i++) {
        s += `
                <div class="order-item">
                    <div class="text-size product-descript">
                        <img src="` + orderItemIsPayed[i].img + `">
                        <a>`+ orderItemIsPayed[i].name + `</a>
                    </div>
                    <div class="text-size other">` + orderItemIsPayed[i].price.toLocaleString('vi-VN') + `đ</div>
                    <div class="text-size other alter-quantity">` + orderItemIsPayed[i].quantity + `</div>
                    <div class="text-size other">
                        <span class = "total-price">` + orderItemIsPayed[i].totalPrice1Item.toLocaleString('vi-VN') + `đ</span>
                    </div>

                </div>`
    }

    s += `
        <div class = "summary">
            <div class = "total-amount">
                <div ><strong>Tổng Tiền: </strong></div>
                <div class = "text-total">${getTotalAmount(orderItemIsPayed).toLocaleString('vn-VN')}đ</div>
            </div> 
        </div> 
    `;
    document.querySelector('.order-summary .product-is-payed .orderItems-list').innerHTML = s;
    saveAsLocalStorage();
}

// Lưu vào localStorage các thuộc tính để admin làm việc xác nhận đơn
function saveAsLocalStorage() {
    let DonHang = JSON.parse(localStorage.getItem('orderList'));
    if (DonHang === null) DonHang = [];

    let new_DonHang = {
        OrderID: (DonHang.length + 1) + "",
        UserID: address2Deliver.userID,
        FullName: address2Deliver.userFullName,
        Sdt: address2Deliver.phoneNumber,
        Address: address2Deliver.addressDetail.trim(),
        Province: address2Deliver.province,
        District: address2Deliver.district,
        Ward: address2Deliver.ward,
        OrderItems: orderItemIsPayed,
        TotalOrderItems: getTotalAmount(orderItemIsPayed),
        OrderDate: getDateNow(),
        PaymentMethod: orderSummary.PaymentMethod,
        Status: "0",
    };
    console.log(new_DonHang.OrderItems[0]);
    DonHang.push(new_DonHang);
    localStorage.setItem('orderList', JSON.stringify(DonHang));
}

// Hàm chuyển đổi trạng thái số thành chuỗi 
function getStatusLabel(status) {
    switch (status) {
        case "0": return "Chưa xử lý";
        case "1": return "Đã xử lý";
        case "2": return "Đã giao";
        case "3": return "Đã hủy";
        default: return "Không xác định";
    }
}
// Hiển thị Lịch Sử mua hàng
function displayOrderHistory() {
    let s = '';
    const orderHistoryList = JSON.parse(localStorage.getItem('orderList'));
    if (orderHistoryList === null) return;
    for (let i = 0; i < orderHistoryList.length; i++) {
        if (orderHistoryList[i].UserID !== userLogin.userId) continue;
        const order = orderHistoryList[i];
        let orderItems = '';
        let orderTotalPrice = 0;
        let orderStatus = getStatusLabel(order.Status);


        order.OrderItems.forEach(item => {
            orderItems += `${item.name} x ${item.quantity}, `;
            orderTotalPrice += item.quantity * item.price;
        });

        s += `
            <div class="orderHistory">
                <div class = "orderID">${order.OrderID}</div>

                <div class="product">${orderItems}</div>

                <div>${orderTotalPrice.toLocaleString('vn-VN')}đ</div>
                <div class = "orderStatus">${orderStatus}</div>

                <div class = "btn-detail">

                </div>
            </div>
        `;
    }

    document.querySelector('.orderHistory-list').innerHTML = s;

    displayBtnWatchCancel();
    saveOrderDetail();
}

function displayBtnWatchCancel() {

    // Lấy tất cả các đơn hàng
    let orderHistory = document.querySelectorAll('.orderHistory-list .orderHistory');
    orderHistory.forEach(order => {
        // Lấy orderID
        let orderID = order.querySelector('.orderID').textContent.trim();
        // Lấy trạng thái đơn hàng
        let orderStatus = order.querySelector('.orderStatus').textContent.trim();


        // Tạo nút Xem
        let btn_Watch = `
            <button class="btn-watch" 
            onclick="viewOrderDetails('`+ orderID + `')">Xem</button>
        `;

        // Tạo nút Hủy
        let btn_Cancel = `
            <div class="distance"></div>
            <div class="display-btn-cancel">
                <button class="btn-cancel" 
                onclick="cancelOrder('`+ orderID + `')">Hủy</button>
            </div>
        `;

        // Lấy container của các nút
        let btnContainer = order.querySelector('.btn-detail');

        // Hiển thị các nút dựa trên trạng thái
        if (orderStatus === "Chưa xử lý" || orderStatus === "Đã xử lý") {
            btnContainer.innerHTML = btn_Watch + btn_Cancel;
        } else {
            btnContainer.innerHTML = btn_Watch;
        }
    });
}

// Hủy đơn hàng sẽ chuyển trạng thái đơn hàng thành Hủy
function cancelOrder(orderID) {
    let orderHistory
        = document.querySelectorAll('.orderHistory-list .orderHistory');

    orderHistory.forEach(order => {
        // Lấy orderID
        let orderIDHistory = order.querySelector('.orderID').textContent.trim();
        console.log(orderIDHistory);
        console.log(orderID);
        if (orderIDHistory === orderID) {
            order.querySelector('.orderStatus').textContent = "Đã hủy";
            // Đổi status trong LocalStorage!!!
            updateCancelStatus(orderID);
        }
    })
}
function updateCancelStatus(orderID) {
    const orderList = JSON.parse(localStorage.getItem("orderList"));
    console.log(orderList);
    orderList.forEach(order => {
        if (orderID === order.OrderID) {
            order.Status = "3";
            localStorage.setItem("orderList", JSON.stringify(orderList));
            alert("Đã Hủy Thành Công Đơn Hàng " + orderID);
            displayOrderHistory();
        }
    })
}

// Chi tiết Đơn hàng đã mua
function saveOrderDetail() {
    let s = '';
    const orderList = JSON.parse(localStorage.getItem('orderList'));
    if (orderList === null) return;

    for (let i = 0; i < orderList.length; i++) {
        const orderDetail = orderList[i];
        let orderItem = '';
        let orderTotalPrice = 0;
        orderDetail.OrderItems.forEach(item => {
            orderItem += `
                <li>${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price.toLocaleString('vn-VN')}đ</li>
            `;
            orderTotalPrice += item.quantity * item.price;
        })

        s += `
            <div class="order-detail hidden">
                <div class = "orderID">
                    <div class = "title">Mã đơn hàng: </div>
                    <div class = "id">${orderDetail.OrderID}</div>
                </div>
                <p><strong>Tên khách hàng: </strong>${orderDetail.FullName}</p>
                <p><strong>Số điện thoại: </strong>${orderDetail.Sdt}</p>
                <p><strong>Địa chỉ giao hàng: </strong>${orderDetail.Address}</p>
                <p><strong>Ngày đặt: </strong>${orderDetail.OrderDate}</p>
                <p><strong>Phương thức thanh toán: </strong>${orderDetail.PaymentMethod}</p>
                <p><strong>Trạng thái: </strong>${getStatusLabel(orderDetail.Status)}</p>
                <div class="orderItem-list">
                    <h2>Danh sách sản phẩm</h2>
                    <ul class="orderItem">${orderItem}</ul>
                </div>
                <p class="totalAmount"><strong>Tổng tiền: ${orderTotalPrice.toLocaleString('vn-VN')}đ</strong></p>
                <div class = "btn-close">
                    <button onclick = "closeOrderDetail()">Đóng</button>
                </div>
            </div>
        `;
    }

    document.querySelector('.modal-order-detail').innerHTML = s;
}

//  Đóng chi tiết mua hàng
function closeOrderDetail() {
    // Ẩn modal chính
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.modal-order-detail').classList.add('hidden');

    // Ẩn tất cả các chi tiết đơn hàng
    let ordersDetail = document.querySelectorAll('.order-detail');
    ordersDetail.forEach(order => {
        order.classList.add('hidden');
    });
    console.log("Đã đóng chi tiết đơn hàng.");
}

//  Hiển thị Chi tiết mua hàng
function viewOrderDetails(orderID) {

    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.modal-order-detail').classList.remove('hidden');
    let ordersDetail = document.querySelectorAll('.order-detail');
    let ordDetailNeedOpen;
    ordersDetail.forEach(order => {
        if (order.querySelector('.id').textContent === orderID) {
            ordDetailNeedOpen = order;
        }
    });
    ordDetailNeedOpen.classList.remove('hidden');
}
// ===========================================================--------------------=========================================================
// ===========================================================      End Cart      =========================================================
// ===========================================================--------------------=========================================================
