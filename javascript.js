function createProduct() {
    if (localStorage.getItem('product') === null) {
        const productArray = [
            { productId: 1, img: 'assets/images/sanpham1.webp', cateory: 'tuoitho', name: 'Tôi thấy hoa vàng trên cỏ xanh', price: 250000 },
            { productId: 2, img: 'assets/images/sanpham2.webp', cateory: 'phattrien', name: 'sống chậm', price: 270000 },
            { productId: 3, img: 'assets/images/sanpham3.webp', cateory: 'chualanh', name: 'nếu chỉ còn một ngày để sống', price: 200000 },
            { productId: 4, img: 'assets/images/sanpham4.webp', cateory: 'tuoitho', name: 'cây cam ngọt của tôi', price: 220000 },
            { productId: 5, img: 'assets/images/sanpham5.webp', cateory: 'phattrien', name: 'đừng chỉ đẹp mà không hiểu chuyện', price: 280000 },
            { productId: 6, img: 'assets/images/sanpham6.webp', cateory: 'tinhcam', name: 'em sẽ đến cùng cơn mưa', price: 290000 },
            { productId: 7, img: 'assets/images/sanpham7.webp', cateory: 'chualanh', name: 'hiểu về trái tim', price: 250000 },
            { productId: 8, img: 'assets/images/sanpham8.webp', cateory: 'chualanh', name: 'trong con say níu sợi dây đứt', price: 230000 },
            { productId: 9, img: 'assets/images/sanpham9.webp', cateory: 'tinhcam', name: 'nàng và con mèo của nàng', price: 250000 },
            { productId: 10, img: 'assets/images/sanpham10.webp', cateory: 'nguoinoitieng', name: 'nhà đầu tư vĩ đại', price: 260000 },
            { productId: 11, img: 'assets/images/sanpham11.webp', cateory: 'tuoitho', name: 'đi qua hoa cúc', price: 240000 },
            { productId: 12, img: 'assets/images/sanpham12.webp', cateory: 'lich su', name: 'Việt Nam sử lược', price: 270000 },
            { productId: 13, img: 'assets/images/sanpham13.webp', cateory: 'tuoitho', name: 'hoàng tử bé', price: 290000 },
            { productId: 14, img: 'assets/images/sanpham14.webp', cateory: 'tongiao', name: 'Đạo đức kinh', price: 250000 },
            { productId: 15, img: 'assets/images/sanpham15.webp', cateory: 'phattrien', name: 'giải mã hóc-môn dopamine', price: 270000 },
            { productId: 16, img: 'assets/images/sanpham16.webp', cateory: 'lich su', name: 'lược sử loài người', price: 280000 },
            { productId: 17, img: 'assets/images/sanpham17.webp', cateory: 'tongiao', name: 'lịch sử tư tưởng trung quốc', price: 300000 },
            { productId: 18, img: 'assets/images/sanpham18.webp', cateory: 'chualanh', name: 'yêu những điều không hoàn hảo', price: 230000 },
            { productId: 19, img: 'assets/images/sanpham19.webp', cateory: 'tieuthuyet', name: '5cm/s', price: 250000 },
            { productId: 20, img: 'assets/images/sanpham20.webp', cateory: 'tongiao', name: 'đàm đạo cùng Khổng Tử', price: 240000 },
            { productId: 21, img: 'assets/images/sanpham21.webp', cateory: 'lich su', name: 'những tù nhân của địa lý', price: 280000 },
            { productId: 22, img: 'assets/images/sanpham22.webp', cateory: 'tuoitho', name: 'tuổi thơ dữ dội', price: 290000 },
            { productId: 23, img: 'assets/images/sanpham23.webp', cateory: 'tinhcam', name: 'hạ đỏ', price: 260000 },
            { productId: 24, img: 'assets/images/sanpham24.webp', cateory: 'tinhcam', name: 'nhà nàng ở cạnh nhà tôi', price: 230000 },
            { productId: 25, img: 'assets/images/sanpham25.webp', cateory: 'phattrien', name: 'thao túng tâm lý', price: 240000 },
            { productId: 26, img: 'assets/images/sanpham26.webp', cateory: 'chualanh', name: 'mẹ làm gì có ước mơ', price: 280000 },
            { productId: 27, img: 'assets/images/sanpham27.webp', cateory: 'tieuthuyet', name: 'Yêu miêu', price: 250000 },
            { productId: 28, img: 'assets/images/sanpham28.webp', cateory: 'tieuthuyet', name: 'trường an ly ca', price: 290000 },
            { productId: 29, img: 'assets/images/sanpham29.webp', cateory: 'phattrien', name: 'từ tốt đến vỹ đại', price: 270000 },
            { productId: 30, img: 'assets/images/sanpham30.webp', cateory: 'phattrien', name: '3 người thầy vỹ đại', price: 260000 },
            { productId: 31, img: 'assets/images/sanpham31.webp', cateory: 'chualanh', name: 'trèo lên mái nhà để khóc', price: 250000 },
            { productId: 32, img: 'assets/images/sanpham32.webp', cateory: 'chualanh', name: 'những kẻ lãng du', price: 220000 },
            { productId: 33, img: 'assets/images/sanpham33.webp', cateory: 'phattrien', name: 'làm sao học ít hiểu nhiều', price: 270000 },
            { productId: 34, img: 'assets/images/sanpham34.webp', cateory: 'nguoinoitieng', name: 'tiểu sử Elon Musk', price: 250000 },
            { productId: 35, img: 'assets/images/sanpham35.webp', cateory: 'nguoinoitieng', name: 'Trump đừng bao giờ bỏ cuộc', price: 230000 },
            { productId: 36, img: 'assets/images/sanpham36.webp', cateory: 'nguoinoitieng', name: 'V.Putin sự vĩ đại của nước Nga', price: 290000 },
            { productId: 37, img: 'assets/images/sanpham37.webp', cateory: 'phattrien', name: 'sự ly kỳ của cậu bé giao báo', price: 300000 },
            { productId: 38, img: 'assets/images/sanpham38.webp', cateory: 'tongiao', name: 'lược sử tôn giáo', price: 270000 },
            { productId: 39, img: 'assets/images/sanpham39.webp', cateory: 'lich su', name: 'chiến tranh tiền tệ', price: 240000 },
            { productId: 40, img: 'assets/images/sanpham40.webp', cateory: 'tinhcam', name: 'Vẽ em bằng màu nội nhớ', price: 220000 },
            { productId: 41, img: 'assets/images/sanpham41.webp', cateory: 'tinhcam', name: 'kiếp nào ta cũng tìm thấy nhau', price: 250000 },
            { productId: 42, img: 'assets/images/sanpham42.webp', cateory: 'lich su', name: 'các triều đại Việt Nam', price: 290000 },
            { productId: 43, img: 'assets/images/sanpham43.webp', cateory: 'tinhcam', name: 'Ngày xưa có một chuyện tình', price: 270000 },
            { productId: 44, img: 'assets/images/sanpham44.webp', cateory: 'tongiao', name: 'Vì sao Phật giáo giàu chân lý', price: 240000 },
            { productId: 45, img: 'assets/images/sanpham45.webp', cateory: 'tieuthuyet', name: 'Thép đã tôi thế đấy', price: 280000 }
        ];

        localStorage.setItem('product', JSON.stringify(productArray));
    }
}
createProduct();
