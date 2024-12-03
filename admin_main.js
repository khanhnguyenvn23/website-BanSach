// localStorage.clear();
window.onload = function(){
    KhoiTaoKhachHang();
    createProduct();
    Khoi_tao_ten_the_loai();
    KhoiTaoDonHang();
    KhoiTaoCacDiaChi();
    KhoiTaoAdmin();
    
    Login_Admin();
    initFilterModal();   
};

/* Tạo hiệu ứng khi click và hover cho left menu */
const menuItems = document.querySelectorAll('.nav_left-menu');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
         menuItems.forEach(i => i.classList.remove('active'));
         this.classList.add('active');
    }); 
});

function KhoiTaoKhachHang(){
    if(JSON.parse(localStorage.getItem('USER')) === null){
        var USERS = [
            {UserID: 10001, FullName: 'Nguyễn Văn A',UserPassword: '123456', UserName: 'NguyenLam1', Sdt: '0123456788', Status: '1', Address1: 'số 60 Nguyễn Tri Phương', Address2: '1', Address3: '1', Address4: '1'},
            {UserID: 10002, FullName: 'Nguyễn Văn B',UserPassword: '123456' ,UserName: 'NguyenLam2', Sdt: '0123456789', Status: '1', Address1: 'Số 65 Lê Lợi', Address2: '3', Address3: '2', Address4: '1', },
            {UserID: 10003, FullName: 'Nguyễn Văn C',UserPassword: '123456' ,UserName: 'NguyenLam3', Sdt: '0123456780', Status: '0', Address1: 'Số 8 Lê Lai', Address2: '16', Address3: '4', Address4: '1', },
        ];
        localStorage.setItem('USER',JSON.stringify(USERS));
    }
}

 function KhoiTaoAdmin(){
    if(JSON.parse(localStorage.getItem('AdminAccount')) === null){
        var Admin = [
            {AdminID: '0', AdminFullName: 'Nguyễn Công Lâm', AdminName: 'Admin', AdminPassword: 'Admin',AdminSdt: '0376516504',AdminEmail: 'nguyenconglam2k5@gmail.com'}
        ];
        localStorage.setItem('ADMIN', JSON.stringify(Admin));
    }
    if(JSON.parse(localStorage.getItem('SaveLogin')) === null){
        var save = {saveL: '0' ,AdminID: ''};
    
        localStorage.setItem('SaveLogin', JSON.stringify(save));
    }
 }

function KhoiTaoDonHang(){
    if(JSON.parse(localStorage.getItem('orderList')) === null){
    var order = [
        {
            OrderID: 1,
            UserID: 10001,
            FullName: 'Nguyễn Văn A',
            Address: 'số 60 Nguyễn Tri Phương, Bến Thành, Quận 1, TP.Hồ Chí Minh',
            OrderDate: '23/11/2024',
            Sdt: '0123456789',
            Status: '2',
            TotalOrderItems:439000,
            PaymentMethod: 'Thanh toán khi nhận hàng',
            District: '1', //Huyện
            Province: '1', //Tỉnh
            Ward: '1', // Phường
            OrderItems: [
                {productId: 1, quantity: 1, img: 'assets/images/sanpham1.webp', name: 'Tôi thấy hoa vàng trên cỏ xanh',cateory: 'tuoitho', price: 99000, totalPrice1Item: 99000},
                { productId: 2,quantity: 2, img: 'assets/images/sanpham2.webp', name: '3 người thầy vỹ đại' ,category: 'kynangsong', price: 60000, totalPrice1Item: 120000 },
                { productId: 4,quantity: 1, img: 'assets/images/sanpham4.webp', category: 'tuoitho', name: 'Cây cam ngọt của tôi', price: 220000, totalPrice1Item: 220000},
            ]
        },

        {
            OrderID: 2,
            UserID: 10002,
            FullName: 'Nguyễn Văn B',
            Address: 'Số 65 Lê Lợi, Phường 1, Quận 3, TP.Hồ Chí Minh',
            OrderDate: '23/11/2024',
            Sdt: '0123456789',
            Status: '2',
            TotalOrderItems:319000,
            PaymentMethod: 'Thanh toán khi nhận hàng',
            District: '2', //Huyện
            Province: '1', //Tỉnh
            Ward: '3', // Phường
            OrderItems: [
                { productId: 31,quantity: 1, img: 'assets/images/sanpham31.webp', category: 'chualanh', name: 'trèo lên mái nhà để khóc', price: 99000, totalPrice1Item: 99000 },
                { productId: 32,quantity: 1, img: 'assets/images/sanpham32.webp', category: 'chualanh', name: 'những kẻ lãng du', price: 220000, totalPrice1Item: 220000},
            ]
        },

        {
            OrderID: 3,
            UserID: 10003,
            FullName: 'Nguyễn Văn C',
            Address: 'Số 8 Lê Lai, An Lạc, Quận Bình Tân, TP.Hồ Chí Minh',
            OrderDate: '24/11/2024',
            Sdt: '0123456789',
            Status: '2',
            TotalOrderItems:240000,
            PaymentMethod: 'Chuyển khoản',
            District: '4', //Huyện
            Province: '1', //Tỉnh
            Ward: '16', // Phường
            OrderItems: [
                { productId: 20,quantity: 1,img: 'assets/images/sanpham20.webp', category: 'lichsu', name: 'đàm đạo cùng Khổng Tử', price: 240000,totalPrice1Item: 240000},
            ]
        },
        {
            OrderID: 4,
            UserID: 10001,
            FullName: 'Nguyễn Văn A',
            Address: 'số 60 Nguyễn Tri Phương, Bến Thành, Quận 1, TP.Hồ Chí Minh',
            OrderDate: '25/11/2024',
            Sdt: '0123456789',
            Status: '2',
            TotalOrderItems:589000,
            PaymentMethod: 'Thanh toán khi nhận hàng',
            District: '1', //Huyện
            Province: '1', //Tỉnh
            Ward: '1', // Phường
            OrderItems: [
                { productId: 43,quantity: 1, img: 'assets/images/sanpham43.webp', category: 'tinhcam', name: 'Ngày xưa có một chuyện tình', price: 270000,totalPrice1Item:270000  },
                { productId: 44,quantity: 1, img: 'assets/images/sanpham44.webp', category: 'lichsu', name: 'Vì sao Phật giáo giàu chân lý', price: 180000, totalPrice1Item: 180000  },
                { productId: 45,quantity: 1, img: 'assets/images/sanpham45.webp', category: 'kynangsong', name: 'Thép đã tôi thế đấy', price: 139000,totalPrice1Item: 139000 }
            ]
        },
        {
            OrderID: 5,
            UserID: 10002,
            FullName: 'Nguyễn Văn B',
            Address: 'Số 65 Lê Lợi, Phường 1, Quận 3, TP.Hồ Chí Minh',
            OrderDate: '26/11/2024',
            Sdt: '0123456789',
            Status: '0',
            TotalOrderItems:319000,
            PaymentMethod: 'Thanh toán khi nhận hàng',
            District: '2', //Huyện
            Province: '1', //Tỉnh
            Ward: '3', // Phường
            OrderItems: [
                { productId: 31,quantity: 1, img: 'assets/images/sanpham31.webp', category: 'chualanh', name: 'trèo lên mái nhà để khóc', price: 99000, totalPrice1Item: 99000 },
                { productId: 32,quantity: 1, img: 'assets/images/sanpham32.webp', category: 'chualanh', name: 'những kẻ lãng du', price: 220000, totalPrice1Item: 220000},
            ]
        },
    ];
    localStorage.setItem('orderList',JSON.stringify(order));
    }
}

function createProduct() {
    if (localStorage.getItem('product') === null) {
        var productArray = [
            { productId: 1, src: 'assets/images/sanpham1.webp', category: 'tuoitho', name: 'Tôi thấy hoa vàng trên cỏ xanh', price: 99000 },
            { productId: 2, src: 'assets/images/sanpham2.webp', category: 'kynangsong', name: '3 người thầy vỹ đại', price: 60000 },
            { productId: 3, src: 'assets/images/sanpham3.webp', category: 'kynangsong', name: 'nếu chỉ còn một ngày để sống', price: 200000 },
            { productId: 4, src: 'assets/images/sanpham4.webp', category: 'tuoitho', name: 'cây cam ngọt của tôi', price: 220000 },
            { productId: 5, src: 'assets/images/sanpham5.webp', category: 'kynangsong', name: 'đừng chỉ đẹp mà không hiểu chuyện', price: 139000 },
            { productId: 6, src: 'assets/images/sanpham6.webp', category: 'tinhcam', name: 'nhà nàng ở cạnh nhà tôi', price: 290000 },
            { productId: 7, src: 'assets/images/sanpham7.webp', category: 'chualanh', name: 'hiểu về trái tim', price: 99000 },
            { productId: 8, src: 'assets/images/sanpham8.webp', category: 'chualanh', name: 'trong con say níu sợi dây đứt', price: 230000 },
            { productId: 9, src: 'assets/images/sanpham9.webp', category: 'tinhcam', name: 'nàng và con mèo của nàng', price: 99000 },
            { productId: 10, src: 'assets/images/sanpham10.webp', category: 'kynangsong', name: 'nhà đầu tư vĩ đại', price: 260000 },
            { productId: 11, src: 'assets/images/sanpham11.webp', category: 'tuoitho', name: 'đi qua hoa cúc', price: 180000 },
            { productId: 12, src: 'assets/images/sanpham12.webp', category: 'lichsu', name: 'Việt Nam sử lược', price: 60000 },
            { productId: 13, src: 'assets/images/sanpham13.webp', category: 'tuoitho', name: 'hoàng tử bé', price: 130000 },
            { productId: 14, src: 'assets/images/sanpham14.webp', category: 'lichsu', name: 'Đạo đức kinh', price: 99000 },
            { productId: 15, src: 'assets/images/sanpham15.webp', category: 'kynangsong', name: 'giải mã hóc-môn dopamine', price: 270000 },
            { productId: 16, src: 'assets/images/sanpham16.webp', category: 'lichsu', name: 'lược sử loài người', price: 139000 },
            { productId: 17, src: 'assets/images/sanpham17.webp', category: 'lichsu', name: 'lịch sử tư tưởng trung quốc', price: 300000 },
            { productId: 18, src: 'assets/images/sanpham18.webp', category: 'chualanh', name: 'yêu những điều không hoàn hảo', price: 230000 },
            { productId: 19, src: 'assets/images/sanpham19.webp', category: 'tinhcam', name: '5cm/s', price: 99000 },
            { productId: 20, src: 'assets/images/sanpham20.webp', category: 'lichsu', name: 'đàm đạo cùng Khổng Tử', price: 240000 },
            { productId: 21, src: 'assets/images/sanpham21.webp', category: 'lichsu', name: 'những tù nhân của địa lý', price: 139000 },
            { productId: 22, src: 'assets/images/sanpham22.webp', category: 'tuoitho', name: 'tuổi thơ dữ dội', price: 130000 },
            { productId: 23, src: 'assets/images/sanpham23.webp', category: 'tinhcam', name: 'hạ đỏ', price: 260000 },
            { productId: 24, src: 'assets/images/sanpham24.webp', category: 'tinhcam', name: 'em sẽ đến cùng cơn mưa', price: 230000 },
            { productId: 25, src: 'assets/images/sanpham25.webp', category: 'kynangsong', name: 'thao túng tâm lý', price: 240000 },
            { productId: 26, src: 'assets/images/sanpham26.webp', category: 'chualanh', name: 'mẹ làm gì có ước mơ', price: 139000 },
            { productId: 27, src: 'assets/images/sanpham27.webp', category: 'tinhcam', name: 'Yêu miêu', price: 99000 },
            { productId: 28, src: 'assets/images/sanpham28.webp', category: 'tinhcam', name: 'trường an ly ca', price: 130000 },
            { productId: 29, src: 'assets/images/sanpham29.webp', category: 'kynangsong', name: 'từ tốt đến vỹ đại', price: 270000 },
            { productId: 30, src: 'assets/images/sanpham30.webp', category: 'kynangsong', name: 'Sống Chậm', price: 260000 },
            { productId: 31, src: 'assets/images/sanpham31.webp', category: 'chualanh', name: 'trèo lên mái nhà để khóc', price: 99000 },
            { productId: 32, src: 'assets/images/sanpham32.webp', category: 'chualanh', name: 'những kẻ lãng du', price: 220000 },
            { productId: 33, src: 'assets/images/sanpham33.webp', category: 'kynangsong', name: 'làm sao học ít hiểu nhiều', price: 270000 },
            { productId: 34, src: 'assets/images/sanpham34.webp', category: 'kynangsong', name: 'tiểu sử Elon Musk', price: 99000 },
            { productId: 35, src: 'assets/images/sanpham35.webp', category: 'kynangsong', name: 'Trump đừng bao giờ bỏ cuộc', price: 230000 },
            { productId: 36, src: 'assets/images/sanpham36.webp', category: 'kynangsong', name: 'V.Putin sự vĩ đại của nước Nga', price: 290000 },
            { productId: 37, src: 'assets/images/sanpham37.webp', category: 'kynangsong', name: 'sự ly kỳ của cậu bé giao báo', price: 300000 },
            { productId: 38, src: 'assets/images/sanpham38.webp', category: 'lichsu', name: 'lược sử tôn giáo', price: 270000 },
            { productId: 39, src: 'assets/images/sanpham39.webp', category: 'lichsu', name: 'chiến tranh tiền tệ', price: 180000 },
            { productId: 40, src: 'assets/images/sanpham40.webp', category: 'tinhcam', name: 'Vẽ em bằng màu nội nhớ', price: 220000 },
            { productId: 41, src: 'assets/images/sanpham41.webp', category: 'tinhcam', name: 'kiếp nào ta cũng tìm thấy nhau', price: 99000 },
            { productId: 42, src: 'assets/images/sanpham42.webp', category: 'lichsu', name: 'các triều đại Việt Nam', price: 290000 },
            { productId: 43, src: 'assets/images/sanpham43.webp', category: 'tinhcam', name: 'Ngày xưa có một chuyện tình', price: 270000 },
            { productId: 44, src: 'assets/images/sanpham44.webp', category: 'lichsu', name: 'Vì sao Phật giáo giàu chân lý', price: 180000 },
            { productId: 45, src: 'assets/images/sanpham45.webp', category: 'kynangsong', name: 'Thép đã tôi thế đấy', price: 139000 }
        ];

        localStorage.setItem('product', JSON.stringify(productArray));
    }
}

function Khoi_tao_ten_the_loai(){
    if (localStorage.getItem('productscategory') === null) {
        const productscategory = [
            {category: 'tuoitho', categoryname: "Thiếu nhi & tuổi thơ"},
            {category: 'kynangsong', categoryname: "Phát triển kỹ năng sống"},
            {category: 'tinhcam', categoryname: "Tiểu thuyết & tình cảm"},
            {category: 'chualanh', categoryname: "Tâm lý & chữa lành"},
            {category: 'lichsu', categoryname: "Lịch sử & tôn giáo"},
        ];
        // Lưu vào localStorage
        localStorage.setItem('productscategory', JSON.stringify(productscategory));
    }
}

 function KhoiTaoCacDiaChi(){
    if(JSON.parse(localStorage.getItem('Tinh_TP')) === null){
        var Tinh_TP = [
            {TinhID: '1', TinhName: 'TP.Hồ Chí Minh'},
            {TinhID: '2', TinhName: 'Hà Nội'}
        ];
        localStorage.setItem('Tinh_TP',JSON.stringify(Tinh_TP));
    }
    if(JSON.parse(localStorage.getItem('Quan_Huyen')) === null){
        var Quan_Huyen = [
            {TinhID: '1', Quan_HuyenID: '1', Quan_HuyenName: 'Quận 1'},
            {TinhID: '1', Quan_HuyenID: '2', Quan_HuyenName: 'Quận 3'},
            {TinhID: '1', Quan_HuyenID: '3', Quan_HuyenName: 'Quận 5'},
            {TinhID: '1', Quan_HuyenID: '4', Quan_HuyenName: 'Quận Bình Tân'},
            {TinhID: '1', Quan_HuyenID: '5', Quan_HuyenName: 'Quận Thủ Đức'},
            {TinhID: '2', Quan_HuyenID: '6', Quan_HuyenName: 'Quận Ba Đình'},
            {TinhID: '2', Quan_HuyenID: '7', Quan_HuyenName: 'Quận Hoàn Kiếm'},
            {TinhID: '2', Quan_HuyenID: '8', Quan_HuyenName: 'Quận Tây Hồ'},
        ];
        localStorage.setItem('Quan_Huyen',JSON.stringify(Quan_Huyen));
    }
    if(JSON.parse(localStorage.getItem('Phuong_Xa')) === null){
        var Phuong = [
            /*Phường không cần id */
            {Quan_HuyenID: '1',PhuongID: '1',PhuongName:'Bến Thành'},
            {Quan_HuyenID: '1',PhuongID: '2',PhuongName:'Bến Nghé'},
            {Quan_HuyenID: '1',PhuongID: '3',PhuongName:'Phạm Ngũ Lão'},
            {Quan_HuyenID: '2',PhuongID: '4',PhuongName:'Phường 1'},
            {Quan_HuyenID: '2',PhuongID: '5',PhuongName:'Phường 2'},
            {Quan_HuyenID: '2',PhuongID: '6',PhuongName:'Phường 3'},
            {Quan_HuyenID: '2',PhuongID: '7',PhuongName:'Phường 4'},
            {Quan_HuyenID: '2',PhuongID: '8',PhuongName:'Phường 5'},
            {Quan_HuyenID: '3',PhuongID: '9',PhuongName:'Phường 1'},
            {Quan_HuyenID: '3',PhuongID: '10',PhuongName:'Phường 2'},
            {Quan_HuyenID: '3',PhuongID: '11',PhuongName:'Phường 3'},
            {Quan_HuyenID: '3',PhuongID: '12',PhuongName:'Phường 4'},
            {Quan_HuyenID: '3',PhuongID: '13',PhuongName:'Phường 5'},
            {Quan_HuyenID: '3',PhuongID: '14',PhuongName:'Phường 6'},
            {Quan_HuyenID: '4',PhuongID: '15',PhuongName:'Bình Hưng Hoà'},
            {Quan_HuyenID: '4',PhuongID: '16',PhuongName:'An Lạc'},
            {Quan_HuyenID: '4',PhuongID: '17',PhuongName:'Tân Tạo'},
            {Quan_HuyenID: '4',PhuongID: '18',PhuongName:'Bình Trị Đông A'},
            {Quan_HuyenID: '5',PhuongID: '19',PhuongName:'An Khánh'},
            {Quan_HuyenID: '5',PhuongID: '20',PhuongName:'An Phú'},
            {Quan_HuyenID: '5',PhuongID: '21',PhuongName:'An Lợi Đông'},
            {Quan_HuyenID: '6',PhuongID: '22',PhuongName:'Cống Vị'},
            {Quan_HuyenID: '6',PhuongID: '23',PhuongName:'Điện Biên'},
            {Quan_HuyenID: '6',PhuongID: '24',PhuongName:'Đội Cấn'},
            {Quan_HuyenID: '6',PhuongID: '25',PhuongName:'An Lợi Đông'},
            {Quan_HuyenID: '7',PhuongID: '26',PhuongName:'Chương Dương Bộ'},
            {Quan_HuyenID: '7',PhuongID: '27',PhuongName:'Cửa Đông'},
            {Quan_HuyenID: '7',PhuongID: '28',PhuongName:'Cửa Nam'},
            {Quan_HuyenID: '7',PhuongID: '29',PhuongName:'Đông Xuân'},
            {Quan_HuyenID: '8',PhuongID: '30',PhuongName:'Bưởi'},
            {Quan_HuyenID: '8',PhuongID: '31',PhuongName:'Thuỵ Khuê'},
            {Quan_HuyenID: '8',PhuongID: '32',PhuongName:'Yến Phụ'},
        ];
        localStorage.setItem('Phuong_Xa', JSON.stringify(Phuong));
    }
}

/*Lấy tỉnh từ ID */
function Lay_Tinh_Tu_ID(id){
    var Tinh = JSON.parse(localStorage.getItem('Tinh_TP'));
    if(id === '0'){
        return 'Chưa có';
    }
    for(var i = 0; i < Tinh.length; i++){
        if(id === Tinh[i].TinhID){
            return Tinh[i].TinhName;
        }
    }
}

/* Láy  Quận-huyện từ ID */
function Lay_Quan_Huyen_Tu_ID(id){
    var Quan = JSON.parse(localStorage.getItem('Quan_Huyen'));
    if(id === '0'){
        return 'Chưa có';
    }
    for(var i = 0; i < Quan.length; i++){
        if(id === Quan[i].Quan_HuyenID){
            return Quan[i].Quan_HuyenName;
        }
    }
}

/* Lấy Phường từ id */
function Lay_Phuong_Xa_Tu_ID(id){
    var Phuong = JSON.parse(localStorage.getItem('Phuong_Xa'));
    if(id === '0'){
        return 'Chưa có';
    }
    for(var i = 0; i < Phuong.length; i++){
        if(id === Phuong[i].PhuongID){
            return Phuong[i].PhuongName;
        }
    }
}
/*-----------------------------------------------BĂT ĐẦU PHẦN ĐĂNG NHẬP ADMIN----------------------------------------------------------- */

function Login_Admin(){
     var saveLog = JSON.parse(localStorage.getItem('SaveLogin'));
     var Admin = JSON.parse(localStorage.getItem('ADMIN'));
     /*Khi đã lưu đăng nhập */
     if(saveLog.saveL === '1' && saveLog.AdminID !== ''){
         for(var i = 0; i < Admin.length; i++){
             if(Admin[i].AdminID === saveLog.AdminID){
                 document.getElementById('form_login_Admin').style.display = 'none';
                 document.getElementById('name_account').innerHTML = Admin[i].AdminFullName;
                Show_Admin_infor();
                 return;
             }
         }
     }
     var username = document.getElementById('Admin_Name');
     var pass = document.getElementById('Admin_Password');
     /* Khi load trang hoặc đăng nhập lần đầu tiên */
     if(username.value === '' && pass.value ===''){
         return;
     }
    for(var i = 0; i < Admin.length; i++){
        if(username.value === Admin[i].AdminName && pass.value === Admin[i].AdminPassword){
            alert('Đăng nhập thành công!');
            document.getElementById('form_login_Admin').style.display = 'none';
            document.getElementById('name_account').innerHTML = Admin[i].AdminFullName;
            saveLog.AdminID = Admin[i].AdminID;
            localStorage.setItem('SaveLogin', JSON.stringify(saveLog));
            Show_Admin_infor();
            return;
        }
        else{
            alert('Tên tài khoản hoặc mật khẩu không chính xác');
            return;
        }
    }

}

function Show_Admin_infor(){
    var saveLog = JSON.parse(localStorage.getItem('SaveLogin'));
    var Admin = JSON.parse(localStorage.getItem('ADMIN'));
    var s =' <div id="Thong_tin_Admin"> <p class="title_admin">Thông tin Admin:</p>';
    for(var i = 0; i < Admin.length; i++){
        if(saveLog.AdminID === Admin[i].AdminID){
            s+= '<p class="text_admin">Họ và Tên: ' +Admin[i].AdminFullName+ '</p>';
            s+= '<p class="text_admin">Số điện thoại: '+Admin[i].AdminSdt + '</p>';
            s+= '<p class="text_admin">Email: ' + Admin[i].AdminEmail + '</p>';
            s+= '<p class="title_admin infor_shop">Thông tin SHOP:</p>';
            s+= '<p class="text_admin">Tên Shop: Kho Tàng Sách</p>'
            s+= '<p class="text_admin">Chi nhánh chính: số 06, An Dương Vương, Phường 3, Quận 5 TP.Hồ Chí Minh</p>';
            s+= '<p class="text_admin">Hotline: 0357069735</p>';
            s+= '<div id="Thong_tin_Admin_control">';
            s+= '<div id="back_home_bnt" onclick = "Back_home_Web()"><i class="fa-solid fa-arrow-left"></i> Trở lại trang bán hàng</div>';
            s+= '<div id="logout_bnt" onclick = "Logout_Admin()"><i class="fa-solid fa-arrow-right-from-bracket"></i>Đăng xuất</div>';
            s+= '<div id="lock_login" onclick = "saveLogin()"><i class="fa-solid fa-floppy-disk"></i>Lưu đăng nhập</div> </div>';
        }
    }
    document.getElementById('admin_content').innerHTML = s;
    if(saveLog.saveL === '0'){
        document.getElementById('lock_login').innerHTML = '<i class="fa-solid fa-floppy-disk"></i>Lưu đăng nhập';
        document.getElementById('lock_login').style.width = '150px';
        document.getElementById('lock_login').style.backgroundColor = 'red' ;
    }
    else{
        document.getElementById('lock_login').innerHTML = '<i class="fa-regular fa-floppy-disk"></i>Huỷ lưu đăng nhập';
        document.getElementById('lock_login').style.width = '180px';
        document.getElementById('lock_login').style.backgroundColor = 'green' ;
    }
}

function saveLogin(){
    var saveLog = JSON.parse(localStorage.getItem('SaveLogin'));
    if(saveLog.saveL === '0'){
        if(confirm('Điều này sẽ khiến tài khoản không đăng xuất khi reload lại trang gây ra lổ hổng trong bảo mật! Bạn vẫn muốn lưu đăng nhập?')){
            saveLog.saveL = '1';
            localStorage.setItem('SaveLogin',JSON.stringify(saveLog));
            alert('Lưu đăng nhập thành công');
            Show_Admin_infor();
            return;
        }
    }
    else{
        saveLog.saveL = '0';
        localStorage.setItem('SaveLogin',JSON.stringify(saveLog));
        alert('Huỷ lưu đăng nhập thành công');
        Show_Admin_infor();
        return;
    }
}

function Logout_Admin(){
    var saveLog = JSON.parse(localStorage.getItem('SaveLogin'));
    saveLog.saveL = '0';
    saveLog.AdminID = '';
    localStorage.setItem('SaveLogin',JSON.stringify(saveLog));
    window.location.href = window.location.href;
}

//trở về trang chủ
function Back_home_Web(){
    window.location.href = 'index.html';
}

/*-----------------------------------------------BĂT ĐẦU PHẦN DOANH THU---------------------------------------------------------- */


function show_control_doanh_thu(){
    var a = document.getElementById('chon_ThoiGian');
    if(a.value === '0'){
        document.getElementById('day_control').style.display = 'none';
        document.getElementById('from_day').value = '';
        document.getElementById('to_day').value = '';
        return;
    }
    else{
        document.getElementById('day_control').style.display = 'block';
        return;
    }
}

function kiemtra_TonTai(userID){
    var dataOrder = JSON.parse(localStorage.getItem('orderList'));
    for(var i = 0; i < dataOrder.length; i++){
        if(dataOrder[i].UserID === userID){
            return true;
        }
    }
    return false;
}

function chuyen_dinh_dang_ngay_thang(date){
    var[day,month,year] = date.split('/');
    return `${year}-${month}-${day}`;
}

// --------------------------------------------------------------Thống kê khách hàng--------------------------------------------------
//Tính tổng doanh số khách hàng trong danh sach
function Tong_doanh_so_cua_khach(idUser, tenData){
    var data = JSON.parse(localStorage.getItem(tenData));
    var total = 0;
    for(var i = 0; i < data.length; i++){
        if(data[i].UserID === idUser){
            for(var k = 0; k < data[i].orders.length;k++){
                total += data[i].orders[k].gia_tri;
            }
            break;
        }
    }
    return total;
}

//Sắp xếp khách hàng theo doanh thu từ lớn đến bé
function Sort_Rev_Khach_Hang(){
    var data = JSON.parse(localStorage.getItem('Rev_Khach'));
    if(data === null){
        return;
    }
    data.sort(function(a, b) { 
        return Tong_doanh_so_cua_khach(b.UserID,'Rev_Khach') - Tong_doanh_so_cua_khach(a.UserID,'Rev_Khach');
    });
    localStorage.setItem('Rev_Khach',JSON.stringify(data));
}

//Cập nhật dữ liệu tổng của khách hàng được lấy từ các orderList

function cap_nhat_data_doanh_thu(){
    var dataOrderList = JSON.parse(localStorage.getItem('orderList'));
    if(dataOrderList === null){
        return;
    }
    var data_1 = JSON.parse(localStorage.getItem('Rev_Khach')) || [];
    var Rev_User_map = {};

    for(var i = 0; i < dataOrderList.length; i++){
        if(dataOrderList[i].Status === '2'){
            if(!Rev_User_map[dataOrderList[i].UserID]){
                Rev_User_map[dataOrderList[i].UserID] = [];
            }
            Rev_User_map[dataOrderList[i].UserID].push({OrderID: dataOrderList[i].OrderID, 
                                                        gia_tri: dataOrderList[i].TotalOrderItems,
                                                        day_Order: dataOrderList[i].OrderDate,
                                                        orderItems: dataOrderList[i].OrderItems
                                                    });
        }
    }
    data_1 = [];
    for(var UserID in Rev_User_map){
        if(Rev_User_map.hasOwnProperty(UserID)){
             data_1.push({ UserID: parseInt(UserID, 10), orders: Rev_User_map[UserID]});
        }
    }
    localStorage.setItem('Rev_Khach',JSON.stringify(data_1));
    Sort_Rev_Khach_Hang();
}

//Sắp xếp dữ liệu khách in ra theo ngày từ lớn đến bé
function Sort_Rev_Show_Khach_Hang(){
    var data = JSON.parse(localStorage.getItem('dataShow_khach'));
    if(data === null){
        return;
    }
    data.sort(function(a, b) { 
        return Tong_doanh_so_cua_khach(b.UserID,'dataShow_khach') - Tong_doanh_so_cua_khach(a.UserID,'dataShow_khach');
    });
    localStorage.setItem('dataShow_khach',JSON.stringify(data));
}

//Cập nhật dữ liệu khách hàng được in ra theo ngày
function capnhat_DT_khach_theo_ngay_va_in(){
    var data = JSON.parse(localStorage.getItem('Rev_Khach'));
    if(data === null){
        return;
    }
    var startDate = document.getElementById('from_day');
    var endDate = document.getElementById('to_day');
    if(startDate.value === ''){
        alert('Vui lòng nhập ngày bắt đầu thống kê !');
        startDate.focus();
        return;
    }
    if(endDate.value === ''){
        alert('Vui lòng nhập ngày kết thúc thống kê !');
        endDate.focus();
        return;
    }

    var filteredData = [];
    
    data.forEach(user => {
        let filteredOrders = user.orders.filter(order => {
            let date_chuyen_doi = chuyen_dinh_dang_ngay_thang(order.day_Order);
            return date_chuyen_doi >= startDate.value && date_chuyen_doi <= endDate.value;
        })
        
        if( filteredOrders.length > 0){
            filteredData.push({
                UserID: user.UserID,
                orders: filteredOrders
            });
        }
    });
    //Lưu dữ liệu vào local storges
    localStorage.setItem('dataShow_khach', JSON.stringify(filteredData));
    Sort_Rev_Show_Khach_Hang();
    ShowKQ_Khach_hang();
}


function Ten_khach(userID){
    var data = JSON.parse(localStorage.getItem('USER'));
    for(var i = 0; i < data.length; i++){
        if(userID === data[i].UserID){
            return data[i].FullName;
        }
    }
    return 'Khong co';
}

function Hien_gia_tien(gia){
    var giaTien = Number(gia).toLocaleString('vi-VN');
    return giaTien + 'VNĐ';
}

function TongDoanhThu_theo_khach(){
    var a = document.getElementById('chon_ThoiGian');
    var data, t;
    if(a.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Khach'));
        t = 'Rev_Khach';
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_khach'))
        t = 'dataShow_khach';
    }
    if(data === null){
        return 0;
    }
    var total = 0;
    for(var i = 0; i < data.length; i++){
        total += Tong_doanh_so_cua_khach(data[i].UserID, t);
    }
    return total;
}

//Hiện dao diện tổng của phần doanh thu
function Show_doanh_thu(){
    var show = document.getElementById('admin_content');
    var s = '<div id="title_doanhthu">Thống kê doanh thu cửa hàng</div>';
    s += '<div id="control_doanh_thu_2">';
    s += '<select name="" id="chon_Loai_TK" onchange = "control_show_tk_1()"> <option value="0">Thống kê theo khách hàng</option> <option value="1">Thống kê theo mặt hàng</option> </select> </div>';
    s += '<div id="control_doanh_thu_1">';
    s += ' <select name="" id="chon_ThoiGian" onchange="show_control_doanh_thu(); control_show_tk_3();"> <option value="0">Từ trước tới nay</option> <option value="1">Trong khoảng thời gian</option> </select>';
    s += ' <div id="day_control"> <label for="from_day">Từ ngày:</label> <input type="date" name="" id="from_day"> <label for="to_day">Đến ngày:</label> <input type="date" name="" id="to_day">  <button onclick = "control_show_tk_2()">Xác nhận</button>  </div>  </div>';
    s += '<div id="All_infor_doanh_thu"> </div>';
    s += ' <div id="kq_thong_ke">  </div>  </div>';
    show.innerHTML = s;
    cap_nhat_data_doanh_thu();
    cap_nhat_data_doanh_thu_2();
    ShowKQ_Khach_hang();
}

// Hiện bảng của phần thống kê khách hàng
function ShowKQ_Khach_hang(){
    var control1 = document.getElementById('chon_ThoiGian');
    var data,tongdt;
    if(control1.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Khach')); //Từ trước đến nay
        tongdt = 'Rev_Khach';
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_khach')); //Theo ngày
        tongdt = 'dataShow_khach';
    }
    document.getElementById('All_infor_doanh_thu').innerHTML = '<p >Tổng doanh thu theo các tiêu chí trên: '+ Hien_gia_tien(TongDoanhThu_theo_khach()) +'</p>';
    var s = '<p id="title_thongke">Các khách hàng đã mua hàng</p> <table id="kq_thong_ke_theo_khach_hang">';
    s+= '<tr> <th>STT</th> <th>Mã khách hàng</th> <th>Tên khách hàng</th> <th>Tổng doanh thu phát sinh</th> <th>Xem hoá đơn</th> </tr>';
    var show = document.getElementById('kq_thong_ke');
    if(data === null || data.length === '0'){
        s+= '</table> <p id = "thong_bao_rong_thongke">Danh sách rỗng</p>';
        show.innerHTML = s;
        return;
    }

    for(var i = 0; i < data.length; i++){
        s+= '<tr> <td>'+ (i + 1) + '</td> <td>';
        s+= data[i].UserID + '</td> <td>';
        s+= Ten_khach(data[i].UserID) + '</td> <td>';
        s+= Hien_gia_tien(Tong_doanh_so_cua_khach(data[i].UserID, tongdt)) + '</td> <td class="bnt_ShowOrder_all">  <div class="bnt_ShowOrder" onclick = "hien_danhsach_hd_theo_khach('+ data[i].UserID + ')">Xem</div> </td> </tr>';
    }
    
    show.innerHTML = s+ '</table>';
}

function thoat_danhsach_hd_thongke(){
    document.getElementById('bang_hd_thong_ke').style.display = 'none';
    document.getElementById('nganThoat').style.display = 'none';
}

function ds_sp_trong_hd(orderID){
    var s = '';
    var data = JSON.parse(localStorage.getItem('orderList'))
    for(var i = 0; i< data.length; i++){
        if(orderID === data[i].OrderID){
            for(var l = 0; l < data[i].OrderItems.length; l++){
                s+= '<p>' + data[i].OrderItems[l].name + ' x' + data[i].OrderItems[l].quantity + '</p>';
            }
        }
    }
    return s;
}

function hien_danhsach_hd_theo_khach(idUser){
    document.getElementById('bang_hd_thong_ke').style.display = 'block'
    document.getElementById('nganThoat').style.display = 'block';
    var control1 = document.getElementById('chon_ThoiGian');
    var data;
    if(control1.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Khach')); //Từ trước đến nay
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_khach')); //Theo ngày
    }

    if(data === null){
        return;
    }
    var s = ' <button id="thoat_bang_hd_thong_ke" onclick="thoat_danhsach_hd_thongke()"><i class="fa-solid fa-xmark"></i></button>';
    s += '<p class="infor1">Các hoá đơn của khách hàng: ' +Ten_khach(idUser)+ '</p>';
    s += '<p class="infor1">Mã khách hàng:'+ idUser +'</p>';
    s += '<table> <th>Mã hoá đơn</th> <th>Các sản phẩm</th> <th>Ngày thanh toán</th> <th>Tổng giá trị hoá đơn</th><th>Chi tiết hoá đơn</th></tr>';
    for(var i = 0; i < data.length; i++){
        if(idUser === data[i].UserID){
            for(var k = 0; k < data[i].orders.length; k++){
                s+= '<tr> <td>' + data[i].orders[k].OrderID + '</td>';
                s+= '<td>' + ds_sp_trong_hd(data[i].orders[k].OrderID) + '</td>';
                s+= '<td>' + data[i].orders[k].day_Order + '</td>';
                s+= '<td>' + Hien_gia_tien(data[i].orders[k].gia_tri) + '</td>';
                s+= '<td> <button class="bnt_xem_hdtk" onclick = "hien_chitiet_hd_thongke('+ data[i].orders[k].OrderID +')">Xem</button>  </td>';
                s+= '</tr>';
            }
        }
    }
    document.getElementById('bang_hd_thong_ke').innerHTML = s+ '</table>';
}

function thoat_chitiet_hd_thongke(){
    document.getElementById('chitiet_hd_thongke').style.display = 'none';
    document.getElementById('nganThoat2').style.display = 'none';
}

function hien_chitiet_hd_thongke(orderID){
    document.getElementById('chitiet_hd_thongke').style.display = 'block';
    document.getElementById('nganThoat2').style.display = 'block';
    var s = '<div id="thoat_chitiet_hd_thongke" onclick="thoat_chitiet_hd_thongke()"><i class="fa-solid fa-xmark"></i></div>';
    s+= '<p id="head_title">Thông tin đơn hàng</p>';
    s+= '<p>Mã Đơn hàng: ' + orderID + '</p>';
    var data = JSON.parse(localStorage.getItem('orderList'));
    if(data === null){
        document.getElementById('chitiet_hd_thongke').innerHTML = '<p> Không có dữ liệu đơn hàng </p>';
        return;
    }
    for(var i = 0; i < data.length; i++){
        if(orderID === data[i].OrderID){
            s+= '<p>Tổng giá trị đơn hàng: ' + Hien_gia_tien(data[i].TotalOrderItems) + '</p>';
            s+= '<p class="title_infor">Thông tin khách hàng</p>';
            s+= '<p>Mã khách hàng: ' + data[i].UserID + '</p>';
            s+= '<p>Tên khách hàng: '+ data[i].FullName + '</p>';
            s+= '<p>Số điện thoại: ' +data[i].Sdt + '</p>';
            s+= '<p>Địa chỉ nhận hàng: '+ data[i].Address +'</p>';
            s+= '<p>Phương thức thanh toán: ' +data[i].PaymentMethod + '</p>'
            s+= '<p class="title_infor">Các sản phẩm:</p>';
            s+= '<div id="ds_sp" > ';
            for(var k = 0; k < data[i].OrderItems.length; k++){
                s+= '<div class="ds_sp_items1">';
                s+= '<img src="' + data[i].OrderItems[k].img + '" alt="" class="ds_sp_items1_img">';
                s+= '<p>' + data[i].OrderItems[k].name + ' x' + data[i].OrderItems[k].quantity + '</p>';
                s+= '<p>Tổng giá: ' + Hien_gia_tien(data[i].OrderItems[k].price) + '</p> </div>';
            }
            s+= '</div>';
        }
    }
    document.getElementById('chitiet_hd_thongke').innerHTML = s;
}

// --------------------------------------------------------------Thống kê mặt hàng--------------------------------------------------

//Hàm sắp xếp dữ liệu thống kê của sản phẩm
function Sort_Rev_Product(){
    var data = JSON.parse(localStorage.getItem('Rev_Product'));
    if(data === null){
        return;
    }
    data.sort(function(a, b) { 
        return tong_doanh_thu_san_pham(b.productId) - tong_doanh_thu_san_pham(a.productId);
    });
    localStorage.setItem('Rev_Product',JSON.stringify(data));
}

//Sắp xếp dữ liệu sản phẩm in ra theo ngày từ lớn đến bé
function Sort_Rev_Show_product(){
    var data = JSON.parse(localStorage.getItem('dataShow_product'));
    if(data === null){
        return;
    }
    data.sort(function(a, b) { 
        return tong_doanh_thu_san_pham(b.productId) - tong_doanh_thu_san_pham(a.productId);
    });
    localStorage.setItem('dataShow_product',JSON.stringify(data));
}

// Hàm để cập nhật dữ liệu thống kê theo sản phẩm
function cap_nhat_data_doanh_thu_2() {
    var orderList = JSON.parse(localStorage.getItem('orderList'));
    if (orderList === null) {
        return;
    }

    var productIdMap = {};

    orderList.forEach(order => {
        if (order.Status === '2') { // Thêm điều kiện kiểm tra Status
            order.OrderItems.forEach(item => {
                if (!productIdMap[item.productId]) {
                    productIdMap[item.productId] = [];
                }
                productIdMap[item.productId].push({
                    orderID: order.OrderID,
                    day_Order: order.OrderDate,
                    totalPrice: item.totalPrice1Item,
                    quantity: item.quantity
                });
            });
        }
    });

    var result = [];
    for (var productId in productIdMap) {
        if (productIdMap.hasOwnProperty(productId)) {
            result.push({
                productId: parseInt(productId, 10),
                orders: productIdMap[productId]
            });
        }
    }

    localStorage.setItem('Rev_Product', JSON.stringify(result));
    Sort_Rev_Product();
}


// Hàm để cập nhật dữ liệu thống kê theo sản phẩm theo ngày
function cap_nhat_DT_san_pham_theo_ngay_va_in(){
    var data = JSON.parse(localStorage.getItem('Rev_Product'));
    if(data === null){
        return;
    }
    var startDate = document.getElementById('from_day');
    var endDate = document.getElementById('to_day');
    if(startDate.value === ''){
        alert('Vui lòng nhập ngày bắt đầu thống kê !');
        startDate.focus();
        return;
    }
    if(endDate.value === ''){
        alert('Vui lòng nhập ngày kết thúc thống kê !');
        endDate.focus();
        return;
    }

    var filteredData = [];
    
    data.forEach(item => {
        let filteredOrders = item.orders.filter(order => {
            let date_chuyen_doi = chuyen_dinh_dang_ngay_thang(order.day_Order);
            return date_chuyen_doi >= startDate.value && date_chuyen_doi <= endDate.value;
        })
        
        if( filteredOrders.length > 0){
            filteredData.push({
                productId: item.productId,
                orders: filteredOrders
            });
        }
    });
    //Lưu dữ liệu vào local storges
    localStorage.setItem('dataShow_Product', JSON.stringify(filteredData));
    Sort_Rev_Show_product();
    show_KQ_Product();
}
//Hàm tính tổng số lượng sản phẩm bán ra
function tong_luong_sp_ban_ra(productID){
    var a = document.getElementById('chon_ThoiGian');
    var data;
    if(a.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Product'));
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_Product'))
    }
    if(data === null){
        return;
    }
    var total = 0;
    for(var i = 0; i < data.length; i++){
        if(parseInt(productID, 10) === data[i].productId){
            for(var k = 0; k < data[i].orders.length; k++){
                total += data[i].orders[k].quantity;
            }
            break;
        }
    }
    return total;
}

//Tính tổng doanh thu từ sản phẩm đó;
function tong_doanh_thu_san_pham(productID){
    var a = document.getElementById('chon_ThoiGian');
    var data;
    if(a.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Product'));
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_Product'))
    }
    if(data === null){
        return;
    }
    var total = 0;
    for(var i = 0; i < data.length; i++){
        if(parseInt(productID, 10) === data[i].productId){
            for(var k = 0; k < data[i].orders.length; k++){
                total += data[i].orders[k].totalPrice;
            }
            break;
        }
    }
    return total;
}

function TongDoanhThu_theo_product(){
    var a = document.getElementById('chon_ThoiGian');
    var data;
    if(a.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Product'));
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_Product'))
    }
    if(data === null){
        return;
    }
    var total = 0;
    for(var i = 0; i < data.length; i++){
        total+= tong_doanh_thu_san_pham(data[i].productId);
    }
    return total;
}

function Hien_ten_sp_theo_id(productID){
    var data = JSON.parse(localStorage.getItem('product'));
    if(data === null){
        return;
    }
    for(var i = 0; i < data.length; i++){
        if(productID === data[i].productId){
            return data[i].name;
        }
    }
    return 'khong_co';
}

function Hien_ten_theloai_theo_id(productId){
    var data1 = JSON.parse(localStorage.getItem('product'));
    var categoryID = '';
    for(var k = 0; k < data1.length; k++){
        if(productId === data1[k].productId){
            categoryID = data1[k].category;
        }
    }

    var data2 = JSON.parse(localStorage.getItem('productscategory'));
    for(var i = 0; i< data2.length; i++){
        if(data2[i].category === categoryID){
            return data2[i].categoryname;
        }
    }
    return 'none';
}

function show_KQ_Product(){
    var a = document.getElementById('chon_ThoiGian');
    var data;
    var show = document.getElementById('kq_thong_ke');
    if(a.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Product'));
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_Product'))
    }
    document.getElementById('All_infor_doanh_thu').innerHTML = '<p >Tổng doanh thu theo các tiêu chí trên: '+ Hien_gia_tien(TongDoanhThu_theo_product()) +'</p>';
    if(data === null){
        show.innerHTML = '<p>Không có dữ liệu</p>';
        return;
    }
    var s ='<p id="title_thongke">Các sản phẩm đã được bán ra</p>';
    s+= '<table id="kq_thong_ke_theo_san_pham">';
    s+= '<tr> <th>STT</th> <th>Mã sản phẩm</th> <th>Tên sản phẩm</th> <th>Loại sản phẩm</th> <th>Số lượng sản phẩm bán ra</th> <th>Tổng doanh từ của sản phẩm</th> <th>Xem hoá đơn</th> </tr>'
    for(var i = 0; i < data.length; i++){
        s+= '<tr> <td>' + (i+1) + '</td> <td>';
        s+= data[i].productId + '</td> <td>';
        s+= Hien_ten_sp_theo_id(data[i].productId) + '</td> <td>';
        s+= Hien_ten_theloai_theo_id(data[i].productId) + '</td> <td>';
        s+= tong_luong_sp_ban_ra(data[i].productId) + '</td> <td>';
        s+= Hien_gia_tien(tong_doanh_thu_san_pham(data[i].productId)) + '</td>';
        s+= ' <td class="bnt_ShowOrder_all"> <div class="bnt_ShowOrder" onclick="Hien_ds_hd_theo_product('+data[i].productId+')">Xem</div></td></tr>';
    }
    show.innerHTML = s + '</table>';
}

function Hien_ds_hd_theo_product(productId){
    document.getElementById('bang_hd_thong_ke').style.display = 'block'
    document.getElementById('nganThoat').style.display = 'block';
    var control1 = document.getElementById('chon_ThoiGian');
    var data;
    if(control1.value === '0'){
        data = JSON.parse(localStorage.getItem('Rev_Product')); //Từ trước đến nay
    }
    else{
        data = JSON.parse(localStorage.getItem('dataShow_product')); //Theo ngày
    }

    if(data === null){
        return;
    }
    var s = ' <button id="thoat_bang_hd_thong_ke" onclick="thoat_danhsach_hd_thongke()"><i class="fa-solid fa-xmark"></i></button>';
    s += '<p class="infor1">Các hoá đơn có mặt hàng: ' +Hien_ten_sp_theo_id(productId)+ '</p>';
    s += '<p class="infor1">Mã sản phẩm:'+ productId +'</p>';
    s += '<table> <th>Mã hoá đơn</th> <th>Các sản phẩm</th> <th>Ngày thanh toán</th> <th>Tổng giá trị hoá đơn</th><th>Chi tiết hoá đơn</th></tr>';
    for(var i = 0; i < data.length; i++){
        if(productId === data[i].productId){
            for(var k = 0; k < data[i].orders.length; k++){
                s+= '<tr> <td>' + data[i].orders[k].orderID + '</td>';
                s+= '<td>' + ds_sp_trong_hd(data[i].orders[k].orderID) + '</td>';
                s+= '<td>' + data[i].orders[k].day_Order + '</td>';
                s+= '<td>' + Hien_gia_tien(data[i].orders[k].totalPrice) + '</td>';
                s+= '<td> <button class="bnt_xem_hdtk" onclick = "hien_chitiet_hd_thongke('+ data[i].orders[k].orderID +')">Xem</button>  </td>';
                s+= '</tr>';
            }
        }
    }
    document.getElementById('bang_hd_thong_ke').innerHTML = s+ '</table>';
}

function control_show_tk_1(){
    var control = document.getElementById('chon_Loai_TK').value;
    var control2 = document.getElementById('chon_ThoiGian').value;
    if(control === '0'){
        if(control2 === '0'){
            ShowKQ_Khach_hang();
        }
        else{
            capnhat_DT_khach_theo_ngay_va_in();
        }
    }
    else{
        if(control2 === '0'){
            show_KQ_Product();
        }
        else{
            cap_nhat_DT_san_pham_theo_ngay_va_in();
        }
    }
    return;
}

function control_show_tk_2(){
    var control = document.getElementById('chon_Loai_TK').value;
    if(control === '0'){
        capnhat_DT_khach_theo_ngay_va_in();
    }
    else{
        cap_nhat_DT_san_pham_theo_ngay_va_in();
    }
    return;
}

function control_show_tk_3(){
    var control1 = document.getElementById('chon_Loai_TK').value;
    var control2 = document.getElementById('chon_ThoiGian').value;
    if(control1 === '0'){
        if(control2 === '0'){
            ShowKQ_Khach_hang();
        }
        else{
            capnhat_DT_khach_theo_ngay_va_in();
        }
    }
    else{
        if(control2 === '0'){
            show_KQ_Product();
        }
        else{
            cap_nhat_DT_san_pham_theo_ngay_va_in();
        }
    }
    return;
}


/*---------------------------------------------------BẮT ĐẦU PHẦN KHÁCH HÀNG------------------------------------------------------------ */
/*Hiện Quận - Huyện --> Thực hiện khi lựa chọn của TỈnh thay đổi (onchange) */
function HienQuanUser(){
    var Tinh = document.getElementById('User_Tinh-tp');
    var showQuan = document.getElementById('User_Quan-huyen');
    var Quan = JSON.parse(localStorage.getItem('Quan_Huyen'));
    var s ='<option value="0" selected>Quận/Huyện</option>';
    if(Tinh.value === '0'){
        showQuan.innerHTML = s;
        return false;
    }
    for(var i = 0; i < Quan.length; i++){
        if(Quan[i].TinhID === Tinh.value){
            s+= ' <option value="' + Quan[i].Quan_HuyenID + '">' + Quan[i].Quan_HuyenName + '</option>';
        }
    }
    showQuan.innerHTML = s;
}

/*Hiện Xã - Phường --> Thực hiện khi lựa chọn của Quận thay đổi (onchange) */
function HienPhuongXaUser(){
    var Quan = document.getElementById('User_Quan-huyen');
    var showPhuong = document.getElementById('User_Phuong-xa');
    var Phuong = JSON.parse(localStorage.getItem('Phuong_Xa'));
    var s = '<option value="0" selected>Phường/xã</option>';
    if(Quan.value === '0'){
        showPhuong.innerHTML = s;
        return false;
    }
    for(var i = 0; i < Phuong.length; i++){
        if(Phuong[i].Quan_HuyenID === Quan.value){
            s+= ' <option value="' + Phuong[i].PhuongID + '">' + Phuong[i].PhuongName + '</option>';
        }
    }
    showPhuong.innerHTML = s;
}


function kiem_tra_so_dien_thoai(phoneNumber) {
    if(phoneNumber[0] !== '0'){
        return false;
    }
    else{
        return true;
    }
}

/*Hàm kiểm tra trùng lặp tên đăng nhập */
function KT_UserName(username){
    var data = JSON.parse(localStorage.getItem('USER'));
    for(var i = 0; i < data.length; i++){
        if(username === data[i].UserName){
            return true;
        }
    }
    return false;
}

//Kiểm tra trùng std;
function Kt_Trung_std(sdt){
    var data = JSON.parse(localStorage.getItem('USER'));
    for(var i = 0; i < data.length; i++){
        if(sdt === data[i].Sdt){
            return true;
        }
    }
    return false;
}

/*Chuyển trạng thái sang lời */
function ChuyenTrangThai(it){
    if(it === '0'){
        return 'Đang bị khoá';
    }
    else{
        return 'Đang hoạt động';
    }
}

/* Hiển thị khách hàng */ 

function showUser(){
    var s = '<div id="khach_hang"> <p id="content_name">Danh sách khách hàng</p> <div id="them_khach_hang" onclick = "ShowForm_Add_User()">Thêm +</div> <div id="show_list"></div> <table id="table_from-khach_hang"> <tr id="user_head_table"> <th >STT</th> <th >Mã khách hàng</th> <th>Họ và tên</th> <th>Tên đăng nhập</th> <th>Số điện thoại</th> <th>Trạng thái TK</th> <th class="cot7"></th> </tr> ';
    if(localStorage.getItem('USER') === null){
        document.getElementById('admin_content').innerHTML = s +'</table> <div id="khong_co_khach_hang">Không có khách hàng nào</div> </div> </div>';
        return false;
    }
    var UserArray = JSON.parse(localStorage.getItem('USER'));
    if(UserArray.length === 0){
        document.getElementById('admin_content').innerHTML = s +'</table> <div id="khong_co_khach_hang">Không có khách hàng nào</div> </div> </div>';
        return false;
    }
    for(var i = 0; i < UserArray.length; i++){
        s+= '<tr class="user_body_table"> <td>' + (i+1) + '</td> <td>' + UserArray[i].UserID + '</td> <td>'+ UserArray[i].FullName + '</td> <td>' + UserArray[i].UserName + '</td> <td>' + UserArray[i].Sdt + '</td> <td>' + ChuyenTrangThai(UserArray[i].Status) + '</td> <td class="cot7"> <div class="khach_hang_chitiet" onclick = "Show_chitiet_User(' + UserArray[i].UserID+ ')" > Chi tiết </div> <div title="Xoá" class="khach_hang_delete" onclick ="DeleteUser(\''+UserArray[i].UserID+'\')"> <i class="fa-solid fa-xmark"></i> </div> </td> </tr>';
    }
    document.getElementById('admin_content').innerHTML = s +'</table> </div> </div>';
}

/* Xoá khách hàng */
function DeleteUser(UserDel){
    var UserArray = JSON.parse(localStorage.getItem('USER'));
    for(i = 0; i < UserArray.length; i++){
        if(UserArray[i].UserID == UserDel){
            if(confirm('Bạn muốn xoá người dùng này')){
                UserArray.splice(i,1);
            }
        }
    }
    localStorage.setItem('USER',JSON.stringify(UserArray));
    showUser();
}

/* Hiện bảng thêm khách hàng */
function ShowForm_Add_User(){
    document.getElementById('form_add_infor').style.display = 'block';
    document.getElementById('nganThoat').style.display = 'block';
    /*Hiện tỉnh --> thực hiện ngay sau khi form hiện ra */
    var Tinh = JSON.parse(localStorage.getItem('Tinh_TP'));
    var add4 = document.getElementById('User_Tinh-tp');
    var s = '<option value="0" selected>Tỉnh/thành phố</option>';
    for(var i = 0; i < Tinh.length; i++){
        s += ' <option value="' + Tinh[i].TinhID + '">' + Tinh[i].TinhName + '</option>';
    }
    add4.innerHTML = s;
}

/* Ẩn bảng thêm khách hàng */
function HideForm_Add_User(){
    document.getElementById('form_add_infor').style.display = 'none';
    document.getElementById('add_user').reset();
    document.getElementById('nganThoat').style.display = 'none';
}

/* Thêm khách hàng */
function AddUser(){
    var UserArray = JSON.parse(localStorage.getItem('USER')) || [];
    var newUserID = UserArray.length + 10001;
    var newUserFullName = document.getElementById('Hoten');
    var newUserSdt = document.getElementById('SDT');
    if(isNaN(Number(newUserSdt.value)) || newUserSdt.value.length < 10){
        alert('Số điện thoại không đúng');
        newUserSdt.focus();
        newUserSdt.select();
        return false;
    }
    if(kiem_tra_so_dien_thoai(newUserSdt.value) === false){
        alert('Số điện thoại không đúng');
        newUserSdt.focus();
        newUserSdt.select();
        return false;
    }
    if(Kt_Trung_std(newUserSdt.value)){
        alert('Số điện thoại đã tồn tại, vui lòng nhập lại!');
        newUserSdt.focus();
        newUserSdt.select();
        return false;
    }
    if(newUserFullName.value === ''){
        alert('Vui lòng nhập tên');
        newUserFullName.focus();
        return false;
    }
    var newUserName = document.getElementById('tenDangnhap');
    if(newUserName.value === ''){
        alert('Vui lòng điền tên đăng nhập');
        newUserFullName.focus();
        return false;
    }
    if(newUserName.value.length < 6){
        alert('Tên đăng nhập phải trên 6 chữ số');
        newUserName.focus();
        return false;
    }
    if(KT_UserName(newUserName.value)){
        alert('Tên đăng nhập đã tồn tại');
        newUserName.focus();
        newUserName.select();
        return false;
    }
    var newUserPassword = document.getElementById('mkhau');
    if(newUserPassword.value === ''){
        alert('Vui lòng điền mật khẩu');
        newUserPassword.focus();
        return false;
    }
    if(newUserPassword.value.length < 6){
        alert('Mật khẩu phải trên 6 chữ số');
        newUserPassword.focus();
        return false;
    }
    var re_newUserPassword = document.getElementById('re_mkhau');
    if(newUserPassword.value !== re_newUserPassword.value){
        alert('Mật khẩu nhập lại không đúng');
        re_newUserPassword.focus();
        re_newUserPassword.select();
        return false;
    }
    var newAddress1 = document.getElementById('Duong_soNha');
    if(newAddress1.value === ''){
        alert('Vui lòng nhập địa chỉ');
        newAddress1.focus();
        return false;
    }
    var newAddress2 = document.getElementById('User_Phuong-xa');
    var newAddress3 = document.getElementById('User_Quan-huyen');
    var newAddress4 = document.getElementById('User_Tinh-tp');
    if(newAddress4.value === '0'){
        alert('Vui lòng chọn tỉnh/thành phố');
        newAddress4.focus();
        return false;
    }
    if(newAddress3.value === '0'){
        alert('Vui lòng chọn quận/huyện');
        newAddress3.focus();
        return false;
    }
    if(newAddress2.value === '0'){
        alert('Vui lòng chọn phường xã');
        newAddress2.focus();
        return false;
    }
    var Usertmp = {UserID: newUserID, FullName: newUserFullName.value, UserPassword: newUserPassword.value, UserName: newUserName.value,Sdt: newUserSdt.value,Status: '1', Address1: newAddress1.value, Address2: newAddress2.value, Address3: newAddress3.value, Address4: newAddress4.value  };
    UserArray.unshift(Usertmp);
    if(confirm('Bạn có chắc muốn thêm khách hàng ?')){
        localStorage.setItem('USER' ,JSON.stringify(UserArray));
        alert('Thêm khách hàng thành công');
        HideForm_Add_User();
        showUser();
        return;
    }
}

/* Thoát chi tiết và chỉnh sửa */
function exitCSUser(){
    document.getElementById('Show_user_Chitiet_va_Sua').style.display = 'none';
    document.getElementById('nganThoat').style.display = 'none';
    showUser();
}

/*Hiện chi tiết và chỉnh sửa */
function Show_chitiet_User(idUser){
    document.getElementById('Show_user_Chitiet_va_Sua').style.display = 'block';
    document.getElementById('nganThoat').style.display = 'block';
    var show = document.getElementById('CSUser_show');
    var data = JSON.parse(localStorage.getItem('USER'));
    var s = '<div class="text_CSUser">Thông tin chi tiết khách hàng:</div>';
    var diachi = '' ;
    for(var i = 0; i < data.length; i++){
        if(idUser === data[i].UserID){
            if(data[i].Address2 === '0' || data[i].Address3 === '0' || data[i].Address4 === '0'){
                diachi = 'Chưa cập nhật';
            }
            else{
                diachi =  data[i].Address1 + ' , ' +Lay_Phuong_Xa_Tu_ID(data[i].Address2)+ ' , '+ Lay_Quan_Huyen_Tu_ID(data[i].Address3) + ' , ' + Lay_Tinh_Tu_ID(data[i].Address4);
            }
            s+= '<p >Họ và tên: ' + data[i].FullName + ' </p> <p>Số điện thoại: '+ data[i].Sdt + ' </p> <p>Địa chỉ: ' + diachi + '</p>';
            s+= '<div class="text_CSUser">Thông tin tài khoản:</div>' + '<p>Tài khoản : ' + data[i].UserName + '</p> <p>Mật khẩu : ' + data[i].UserPassword + '</p>';
            s+= '<div id="CSUser_status"><span>Trạng thái tài khoản:</span> <span id="stas">' + ChuyenTrangThai(data[i].Status) + '</span></div>';
            s+= '<div id="CSUser_control">  <div id="CSUse_set" onclick = "Show_Set_User('+data[i].UserID+')"><i class="fa-solid fa-gear"></i> Chỉnh sửa</div> <div id="CSUse_lock" onclick = "Change_Status_User('+ data[i].UserID +')"> </div> </div>';
            show.innerHTML = s;
            if(data[i].Status !== '0'){
                document.getElementById('stas').style.color = 'green';
                document.getElementById('CSUse_lock').innerHTML = '<i class="fa-solid fa-lock"></i> Khoá tài khoản';
            }
            else{
                document.getElementById('stas').style.color = 'red';
                document.getElementById('CSUse_lock').innerHTML = '<i class="fa-solid fa-lock-open"></i> Mở khoá tài khoản';
                document.getElementById('CSUse_lock').style.backgroundColor = 'green';
            }
            return;
        }
    }
}

/*Đổi trạng thái */
function Change_Status_User(idUser){
    var data = JSON.parse(localStorage.getItem('USER'));
    for(var i = 0; i < data.length; i++){
        if(idUser === data[i].UserID){
            if(data[i].Status === '0'){
                data[i].Status = '1';
            }
            else{
                data[i].Status = '0';
            }
            break;
        }
    }
    localStorage.setItem('USER',JSON.stringify(data));
    Show_chitiet_User(idUser);
}

function Thoat_Set_User(){
    if(confirm('Bạn có chắc sẽ huỷ chỉnh sửa này'))
    {
        document.getElementById('Set_User').style.display = 'none';
        document.getElementById('set_user_form').reset();
        return;
    }
}

/*Hiện Quận - Huyện --> Thực hiện khi lựa chọn của TỈnh thay đổi (onchange) của phần chỉnh sửa */
function Set_HienQuanUser(){
    var Tinh = document.getElementById('Set_User_Tinh-tp');
    var showQuan = document.getElementById('Set_User_Quan-huyen');
    var Quan = JSON.parse(localStorage.getItem('Quan_Huyen'));
    var s ='<option value="0" selected>Quận/Huyện</option>';
    if(Tinh.value === '0'){
        showQuan.innerHTML = s;
        return false;
    }
    for(var i = 0; i < Quan.length; i++){
        if(Quan[i].TinhID === Tinh.value){
            s+= ' <option value="' + Quan[i].Quan_HuyenID + '">' + Quan[i].Quan_HuyenName + '</option>';
        }
    }
    showQuan.innerHTML = s;
}

/*Hiện Xã - Phường --> Thực hiện khi lựa chọn của Quận thay đổi (onchange) của phần chỉnh sửa*/
function Set_HienPhuongXaUsert(){
    var Quan = document.getElementById('Set_User_Quan-huyen');
    var showPhuong = document.getElementById('Set_User_Phuong-xa');
    var Phuong = JSON.parse(localStorage.getItem('Phuong_Xa'));
    var s = '<option value="0" selected>Phường/xã</option>';
    if(Quan.value === '0'){
        showPhuong.innerHTML = s;
        return false;
    }
    for(var i = 0; i < Phuong.length; i++){
        if(Phuong[i].Quan_HuyenID === Quan.value){
            s+= ' <option value="' + Phuong[i].PhuongID + '">' + Phuong[i].PhuongName + '</option>';
        }
    }
    showPhuong.innerHTML = s;
}

/**********Hiện form Chỉnh sửa**************/
function Show_Set_User(idUser){
    document.getElementById('Set_User').style.display = 'block';
    var Tinh = JSON.parse(localStorage.getItem('Tinh_TP'));
    var add4 = document.getElementById('Set_User_Tinh-tp');
    var s = '<option value="0" selected>Tỉnh/thành phố</option>';
    for(var i = 0; i < Tinh.length; i++){
        s += ' <option value="' + Tinh[i].TinhID + '">' + Tinh[i].TinhName + '</option>';
    }
    add4.innerHTML = s;
    var data = JSON.parse(localStorage.getItem('USER'));

    for(var i = 0; i < data.length; i++ ){
        if(idUser === data[i].UserID){
            document.getElementById('Set_Hoten').value = data[i].FullName;
            document.getElementById('Set_SDT').value = data[i].Sdt;
            document.getElementById('Set_Duong_soNha').value = data[i].Address1;
            document.getElementById('Set_tenDangnhap').value = data[i].UserName;
            document.getElementById('Set_mkhau').value = data[i].UserPassword;
            document.getElementById('Set_re_mkhau').value = data[i].UserPassword;
            document.getElementById('Set_User_Tinh-tp').value = data[i].Address4;
            Set_HienQuanUser();
            document.getElementById('Set_User_Quan-huyen').value = data[i].Address3;
            Set_HienPhuongXaUsert();
            document.getElementById('Set_User_Phuong-xa').value = data[i].Address2;
        }
    }
    document.getElementById('Set_button').setAttribute('onclick', 'Xac_nhan_Chinh_Sua_User(' + idUser + ')');
}

/*----------------------------Xác nhận chỉnh sửa---------------------------------- */
function Xac_nhan_Chinh_Sua_User(idUser){
    var newTen = document.getElementById('Set_Hoten');
    var data = JSON.parse(localStorage.getItem('USER'));
    if(newTen.value === ''){
        alert('Vui lòng nhập tên');
        newTen.focus();
        return false;
    }
    var newSdt = document.getElementById('Set_SDT');
    if(isNaN(Number(newSdt.value)) || newSdt.value.length < 10){
        alert('Số điện thoại không đúng');
        newSdt.focus();
        newSdt.select();
        return false;
    }
    if(kiem_tra_so_dien_thoai(newSdt.value) === false){
        alert('Số điện thoại không đúng');
        newSdt.focus();
        newSdt.select();
        return false;
    }
    if(Kt_Trung_std(newSdt.value)){
        alert('Số điện thoại đã tồn tại, vui lòng nhập lại!');
        newSdt.focus();
        newSdt.select();
        return false;
    }
    var newDiaChiNha = document.getElementById('Set_Duong_soNha');
    if(newDiaChiNha.value === ''){
        alert('Vui lòng nhập địa chỉ');
        newDiaChiNha.focus();
        return false;
    }
    var newUserName =  document.getElementById('Set_tenDangnhap');
    if(newUserName.value === ''){
        alert('Vui lòng nhập tên đăng nhập');
        newUserName.focus();
        return false;
    }
    if(newUserName.value.length < 6){
        alert('Tên đăng nhập phải trên 6 chữ số');
        newUserName.focus();
        return false;
    }
    var kt2 = '';
    for(var i = 0; i < data.length; i++ ){
        if(data[i].UserID === idUser){
            kt2 = data[i].UserName;
        }
    }
    if(KT_UserName(newUserName.value) && kt2 !== newUserName.value){
        alert('Tên đăng nhập đã tồn tại');
        newUserName.focus();
        newUserName.select();
        return false;
    }
    var newMK = document.getElementById('Set_mkhau');
    if(newMK.value === ''){
        alert('Vui lòng nhập mật khẩu');
        newMK.focus();
        return false;
    }
    if(newMK.value.length < 6){
        alert('Mật khẩu phải trên 6 chữ số');
        newMK.focus();
        return false;
    }
    var newRe_MK = document.getElementById('Set_re_mkhau');
    if(newMK.value !== newRe_MK.value){
        alert('Mật khẩu nhập lại không đúng');
        newRe_MK.focus();
        newRe_MK.select();
        return false;
    }
    var newTinh = document.getElementById('Set_User_Tinh-tp');
    var newQuan = document.getElementById('Set_User_Quan-huyen');
    var newXa = document.getElementById('Set_User_Phuong-xa');
    if(newTinh.value === '0'){
        alert('Vui lòng chọn tỉnh/thành phố');
        newTinh.focus();
        return false;
    }
    if(newQuan.value === '0'){
        alert('Vui lòng chọn quận/huyện');
        newQuan.focus();
        return false;
    }
    if(newXa.value === '0'){
        alert('Vui lòng chọn phường xã');
        newXa.focus();
        return false;
    }
  
    for(var i = 0; i < data.length; i++ ){
        if(idUser === data[i].UserID){
            data[i].FullName = newTen.value;
            data[i].Sdt = newSdt.value;
            data[i].Address1 = newDiaChiNha.value;
            data[i].Address4 = newTinh.value;
            data[i].Address3 = newQuan.value;
            data[i].Address2 = newXa.value;
            data[i].UserName = newUserName.value;
            data[i].UserPassword = newMK.value;
            break;
        }
    }
    if(confirm('Bạn có chắc muốn chỉnh sửa ?'))
    {
        localStorage.setItem('USER',JSON.stringify(data));
        alert('Chỉnh sửa thành công');
        document.getElementById('Set_User').style.display = 'none';
        document.getElementById('set_user_form').reset
        Show_chitiet_User(idUser);
        return;
    }
}

/*-----------------------------------------------XONG KHÁCH HÀNG------------------------------------------------------------------- */

    function hienThiDonHang(orderList) {
        const mainContent = document.getElementById("admin_content");

        if (!orderList) {
            orderList = JSON.parse(localStorage.getItem("orderList")) || [];
        }

        let contentHTML = `
            <h1 class="centering">DANH SÁCH ĐƠN HÀNG</h1>
            <div class="filter" id="filter">
                <button id="filterBtn" class="filter-btn"><i class="fa-solid fa-filter"></i> Lọc</button>
            </div>
            <table id="orderTable">
                <thead>
                    <tr>
                        <th class="centering">Mã đơn</th>
                        <th>Khách hàng</th>
                        <th class="centering">Ngày đặt</th>
                        <th class="centering">Tổng tiền</th>
                        <th class="centering">Trạng thái</th>
                        <th class="centering">Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
        `;

        if (orderList.length === 0) {
            contentHTML += `
                    <tr>
                        <td colspan="6" style="text-align: center;">Không có đơn hàng</td>
                    </tr>
            `;
        } else {
            for (let i = 0; i < orderList.length; i++) {
                const order = orderList[i];
                const totalAmount = order.OrderItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString('vi-VN');
                contentHTML += `
                    <tr>
                        <td class="centering">${order.OrderID}</td>
                        <td >${order.FullName}</td>
                        <td class="centering">${order.OrderDate}</td>
                        <td class="centering">${totalAmount} đ</td>
                        <td class="centering">
                            <select class="status-dropdown" data-order-id="${order.OrderID}" onchange="handleStatusChange(this)">
                                <option value="0" ${order.Status === "0" ? "selected" : ""}>Chưa xử lý</option>
                                <option value="1" ${order.Status === "1" ? "selected" : ""}>Đã xử lý</option>
                                <option value="2" ${order.Status === "2" ? "selected" : ""}>Đã giao</option>
                                <option value="3" ${order.Status === "3" ? "selected" : ""}>Đã hủy</option>
                            </select>
                        </td>
                        <td class="centering">
                            <button class="detail-button" onclick="xemChiTiet(${order.OrderID - 1})">Xem</button>
                        </td>
                    </tr>
                `;
            }
        }

        contentHTML += `
                </tbody>
            </table>
        `;

        mainContent.innerHTML = contentHTML;
        initFilterModal();
        const statusDropdowns = document.querySelectorAll('.status-dropdown');
        for (let i = 0; i < statusDropdowns.length; i++) {
            changeSelectColor(statusDropdowns[i]);
        }
    }


    function handleStatusChange(selectElement) {
        const orderId = selectElement.dataset.orderId; 
        const newStatus = selectElement.value; 
        const orders = JSON.parse(localStorage.getItem('orderList')) || [];
        const order = orders[orderId-1];

        if (!order) {
            alert('Đơn hàng không tồn tại.');
            selectElement.value = order ? order.Status : "0"; 
            changeSelectColor(selectElement); 
            return;
        }

        const currentStatus = order.Status;

        if (currentStatus === "2" || currentStatus === "3") {
            alert('Trạng thái hiện tại không thể thay đổi.');
            selectElement.value = currentStatus; 
            changeSelectColor(selectElement); 
            return;
        }

        if (currentStatus === "1" && newStatus === "0") {
            alert('Không thể thay đổi từ "Đã xử lý" về "Chưa xử lý".');
            selectElement.value = currentStatus; 
            changeSelectColor(selectElement); 
            return;
        }

        const isConfirmed = confirm('Bạn có chắc chắn muốn thay đổi trạng thái đơn hàng không?');
        if (!isConfirmed) {
            selectElement.value = currentStatus; 
            changeSelectColor(selectElement);
            return;
        }

        order.Status = newStatus;
        localStorage.setItem('orderList', JSON.stringify(orders));

        changeSelectColor(selectElement);

        alert('Trạng thái đơn hàng đã được cập nhật.');
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

    // Thay đổi màu chữ theo trạng thái
    function changeSelectColor(selectElement, orderId) {

    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case "0": 
            selectElement.style.color = "#f0ad4e"; 
            break;
        case "1": 
            selectElement.style.color = "#1565D6"; 
            break;
        case "2": 
            selectElement.style.color = "#5cb85c";
            break;
        case "3": 
            selectElement.style.color = "#d9534f"; 
            break;
        default:
            selectElement.style.color = "#000000"; 
            break;
    }


    }


    // Hàm hiển thị chi tiết đơn hàng
    function xemChiTiet(index) {
    const orderList = JSON.parse(localStorage.getItem("orderList")) || [];
    const order = orderList[index];

    if (!order) {
        alert("Đơn hàng không tồn tại.");
        return;
    }

    const modal = document.getElementById("orderDetailModal");
    const closeModal = document.getElementById("closeDetailModal");
    const content = document.getElementById("orderDetailContent");

    let details = `
        <p><strong>Mã đơn hàng:</strong> ${index + 1}</p> 
        <p><strong>Tên khách hàng:</strong> ${order.FullName}</p>
        <p><strong>Số điện thoại:</strong> ${order.Sdt}</p>
        <p><strong>Địa chỉ giao hàng:</strong> ${order.Address}</p>
        <p><strong>Ngày đặt:</strong> ${order.OrderDate}</p>
        <p><strong>Trạng thái:</strong> ${getStatusLabel(order.Status)}</p>
        <h4><strong>Danh sách sản phẩm:</strong></h4>
        <ul>
    `;

    order.OrderItems.forEach((item) => {
        details += `<li>${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price.toLocaleString('vi-VN')} đ</li>`;
    });

    const totalPrice = order.OrderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    details += `
        </ul>
        <p><strong>Tổng tiền:</strong> ${totalPrice.toLocaleString('vi-VN')} đ</p>
    `;

    content.innerHTML = details;
    modal.style.display = "block";

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    }


    function locDonHangTheoTrangThai(orderList, selectedStatus) {
    if (selectedStatus === "" || selectedStatus === undefined) {
        return orderList;
    }

    return orderList.filter(order => order.Status === selectedStatus);
    }

    // Hàm lọc danh sách đơn hàng theo ngày
    function locDonHangTheoNgay(orderList, fromDate, toDate) {
    if (!fromDate || !toDate) return orderList;

    const from = convertToDateFormat(fromDate, true);
    const to = convertToDateFormat(toDate, true);

    return orderList.filter(order => {
        const orderDate = convertToDateFormat(order.OrderDate);
        return orderDate >= from && orderDate <= to;
    });
    }

    // Hàm lọc đơn hàng theo địa chỉ
    function locDonHangTheoDiaChi(orderList) {
    const provinceId = document.getElementById('provinces').value;
    const districtId = document.getElementById('districts').value;
    const wardId = document.getElementById('wards').value;

    return orderList.filter(order => {
        const isProvinceMatch = provinceId ? provinceId === order.Province : true;
        const isDistrictMatch = districtId ? districtId === order.District : true;
        const isWardMatch = wardId ? wardId === order.Ward : true;
        return isProvinceMatch && isDistrictMatch && isWardMatch;
    });
    }



    // Hàm lọc và hiển thị đơn hàng
    function filterOrders() {
    const orderList = JSON.parse(localStorage.getItem("orderList")) || [];
    const selectedStatus = document.getElementById("statusFilter").value;
    const filterFromDate = document.getElementById("fromDate").value;
    const filterToDate = document.getElementById("toDate").value;

    let filteredOrders = locDonHangTheoTrangThai(orderList, selectedStatus);
    filteredOrders = locDonHangTheoNgay(filteredOrders, filterFromDate, filterToDate);
    filteredOrders = locDonHangTheoDiaChi(filteredOrders);

    // Hiển thị danh sách đơn hàng đã lọc
    hienThiDonHang(filteredOrders); 
    }



    // Hàm chuyển đổi ngày để đúng form so sánh
    function convertToDateFormat(dateString, isFromDate = false) {
    if (isFromDate) {
        const [year, month, day] = dateString.split('/');
        return new Date(`${month}/${day}/${year}`);
    } else {
        const [day, month, year] = dateString.split('/');
        return new Date(`${month}/${day}/${year}`);
    }
    }

    // Hàm mở/đóng modal lọc
    function initFilterModal() {
    const filterBtn = document.getElementById("filterBtn");
    const filterModal = document.getElementById("filterModal");
    const closeModal = document.getElementById("closeModal");
    const confirmFilter = document.getElementById("confirmFilter");

    filterBtn.addEventListener("click", () => {
        filterModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        filterModal.style.display = "none";
    });

    confirmFilter.addEventListener("click", () => {
        filterOrders(); 
        filterModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === filterModal) {
            filterModal.style.display = "none";
        }
    });
    }




//     // Hàm để khởi tạo các tỉnh vào dropdown
//     function populateProvinces() {
//     const provinces = JSON.parse(localStorage.getItem('Tinh_TP')) || [];
//     const provincesSelect = document.getElementById('provinces');

//     provincesSelect.innerHTML = '<option value="">Chọn Tỉnh/TP</option>'; // Reset dropdown

//     provinces.forEach(province => {
//         const option = document.createElement('option');
//         option.value = province.TinhID;
//         option.textContent = province.TinhName;
//         provincesSelect.appendChild(option);
//     });
//     }

//     // Hàm để hiển thị quận/huyện khi chọn tỉnh
//     function populateDistricts() {
//     const provinceId = document.getElementById('provinces').value;
//     const districts = JSON.parse(localStorage.getItem('Quan_Huyen')) || [];
//     const districtsSelect = document.getElementById('districts');

//     if (!provinceId) {
//         districtsSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
//         return;
//     }

//     const filteredDistricts = districts.filter(district => district.TinhID === provinceId);

//     districtsSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>'; // Reset dropdown
//     filteredDistricts.forEach(district => {
//         const option = document.createElement('option');
//         option.value = district.Quan_HuyenID;
//         option.textContent = district.Quan_HuyenName;
//         districtsSelect.appendChild(option);
//     });
//     }

//     // Hàm để hiển thị phường/xã khi chọn quận/huyện
//     function populateWards() {
//     const districtId = document.getElementById('districts').value;
//     const wards = JSON.parse(localStorage.getItem('Phuong_Xa')) || [];
//     const wardsSelect = document.getElementById('wards');

//     if (!districtId) {
//         wardsSelect.innerHTML = '<option value="">Chọn Phường/Xã</option>';
//         return;
//     }

//     const filteredWards = wards.filter(ward => ward.Quan_HuyenID === districtId);

//     wardsSelect.innerHTML = '<option value="">Chọn Phường / Xã</option>'; // Reset dropdown
//     filteredWards.forEach(ward => {
//         const option = document.createElement('option');
//         option.value = ward.PhuongID;
//         option.textContent = ward.PhuongName;
//         wardsSelect.appendChild(option);
//     });
// }





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
