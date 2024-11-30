
function createProduct() {
    if (localStorage.getItem('product') === null) {
        var productArray = [
            { productId: 1, src: 'assets/images/sanpham1.webp', category: 'tuoitho', name: 'Tôi thấy hoa vàng trên cỏ xanh', price: 99000 },
            { productId: 2, src: 'assets/images/sanpham2.webp', category: 'kynangsong', name: '3 người thầy vỹ đại', price: 60000 },
            { productId: 3, src: 'assets/images/sanpham3.webp', category: 'kynangsong', name: 'nếu chỉ còn một ngày để sống', price: 200000 },
            { productId: 4, src: 'assets/images/sanpham4.webp', category: 'tuoitho', name: 'cây cam ngọt của tôi', price: 220000 },
            { productId: 5, src: 'assets/images/sanpham5.webp', category: 'kynangsong', name: 'đừng chỉ đẹp mà không hiểu chuyện', price: 139000 },
            { productId: 6, src: 'assets/images/sanpham6.webp', category: 'tinhcam', name: 'nhà nàng ở cạnh nhà tôi', price: 290000 },
            { productId: 7, src: 'assets/images/sanpham7.webp', category: 'chualanh', name: 'hiểu về trái tim', price: 99000, },
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

function createproductincart(){
if(localStorage.getItem('productIncart') === null){
var productIncartarr=[
    {
        "productId": 1,
        "src": "assets/images/sanpham1.webp",
        "category": "tuoitho",
        "name": "Tôi thấy hoa vàng trên cỏ xanh",
        "price": 99000,"quantity": 1
    },
    {
        "productId": 2,
        "src": "assets/images/sanpham2.webp",
        "category": "tuoitho",
        "name": "Sản phẩm 2",
        "price": 120000,
        "quantity": 3
    }
 ];
    localStorage.setItem('productIncart', JSON.stringify(productIncartarr));
}

}
function createauthor(){
    if (localStorage.getItem('infobooks') === null) {
    const infobooks1 = [
        { productId: 1, content: "Tác phẩm như một tập nhật ký xoay quanh cuộc sống của những đứa trẻ ở một vùng quê Việt Nam nghèo khó, nổi bật lên là thông điệp về tình anh em, tình làng nghĩa xóm và những tâm tư của tuổi mới lớn.", author: "Nguyễn Nhật Ánh" },
        { productId: 2, content: "Tôi đã nếm trải nhiều thất bại trong hành trình đi qua những tháng ngày của mình. Thế nhưng, mỗi chướng ngại cuối cùng đều lại chính là một bàn đạp đưa tôi gần hơn nữa tới chân lý trong tâm khảm và cuộc đời tốt đẹp nhất của mình.", author: "Robin Sharma" },
        { productId: 3, content: "Một hơi thở ra mà không vào là ngàn thu vĩnh biệt. Cuộc đời này mong manh dễ vỡ là thế. Vậy có bao giờ bạn tự đặt ra câu hỏi “Nếu chỉ còn một ngày để sống mình sẽ làm gì?”.", author: "Nicola Yoon" },
        { productId: 4, content: "Qua sách, José Mauro mang đến giá trị của sự thấu cảm, nói lên thông điệp mọi đứa trẻ xứng đáng được tôn trọng và nuôi dạy bằng tình yêu thương. Đồng thời, tác phẩm phê phán sự áp đặt của người lớn đối với trẻ em. Lời Zézé bộc bạch với mẹ: Con không nên được sinh ra, con không đáng được sống, như điểm kết thúc cho sự hồn nhiên của cậu.", author: " José Mauro de Vasconcelos " },
        { productId: 5, content: "Đừng Chỉ Đẹp Mà Không Hiểu Chuyện bao gồm 12 chương, mỗi chương sách, bạn đọc sẽ hiểu được từng kỹ năng sống, từng lối ứng xử để trở thành người phụ nữ thông minh. Trong mỗi chương, tác giả đưa ra những câu chuyện nhỏ xoay quanh cuộc sống để từ đó khẳng định rằng: Nếu chúng ta biết cách ứng xử, ăn nói khéo léo thì họ sẽ có được thiện cảm của đối phương. Và tác giả quả thật hiểu lòng người đọc biết bao khi đưa ra những bài học, những gợi ý vô cùng cụ thể để họ có thể hình thành cho chính bản thân mình những lối ứng xử khéo léo góp phần tạo nên cuộc sống tràn đầy ý nghĩa. ", author: "Mai Tử" },
        { productId: 6, content: "Một câu chuyện được viết dạng kí vô cùng hài hước và chân thật của một anh chàng mới lớn. Nhưng cũng chính vì vậy người đọc sẽ đón nhận dễ dàng và coi nó như một liều thuốc bổ xả stress không mang nặng tính văn học và bỏ qua những quy tắc nghiêm khắc của văn chương.", author: "Lini Thông minh" },
        { productId: 7, content: "Là tác phẩm đầu tay của nhà sư Minh Niệm, người sáng lập dòng thiền hiểu biết (Understanding Meditation), kết hợp giữa tư tưởng Phật giáo Đại thừa và Thiền nguyên thủy Vipassana, nhưng Hiểu Về Trái Tim không phải tác phẩm thuyết giáo về Phật pháp. Cuốn sách rất “đời” với những ưu tư của một người tu nhìn về cõi thế. Ở đó, có hạnh phúc, có đau khổ, có tình yêu, có cô đơn, có tuyệt vọng, có lười biếng, có yếu đuối, có buông xả… Nhưng, tất cả những hỉ nộ ái ố ấy đều được khoác lên tấm áo mới, một tấm áo tinh khiết và xuyên suốt, khiến người đọc khi nhìn vào, đều thấy mọi sự như nhẹ nhàng hơn…", author: "Minh niệm" },
        { productId: 8, content: "Những câu chuyện ở một vùng nông thôn miền Trung, nơi người sống chịu sự chi phối của cộng đồng làng xã.. Tập truyện đi sâu khai thác diễn biến tâm lý đằng sau các uẩn khúc, đằng sau các bí mật.", author: "Hoàng Công Danh" },
        { productId: 9, content: "Nàng và con mèo của nànglà câu chuyện được chuyển thể dựa theo bộ phim hoạt hình dài 5 phút đầu tiên của Shinkai. Nhẹ nhàng, yên ắng và trải đều như hơi thở, Nàng và con mèo của nàng là một bài hát ru đằm thắm dành cho những ai đang bươn chải ngược xuôi, hối hả theo đuổi dòng đời chảy siết. Ru tâm hồn những người con xa xứ, những người quá đỗi bộn bề suy tư. ", author: "Makoto Shinkai" },
        { productId: 10, content: "Với phong cách kể chuyện chân thực và chi tiết, Nhà đầu tư, Giáo sư Glen Arnold đi sâu tìm hiểu phương pháp luận cùa Buffett qua 22 thương vụ đầu tư đầu tiên. Ông tập trung phân tích cách Warren trẻ tuổi học hỏi từ những sai lầm, biến bại thành thắng và trở thành triệu phú ở tuổi 32. Cuối mỗi chương là những bài học đúc kết về nghệ thuật đầu tư của Warren Buffett, hãy học hỏi từ một doanh nhân bậc thầy để có được những quyết định đầu tư sáng suốt.", author: "Glen Arnold" },
        { productId: 11, content: "Có người nói, hoa cúc vàng đem lại niềm vui cho tâm hồn. Nhưng họ lại không nói rằng, đó là tâm hồn của những kẻ đang yêu, còn đối với kẻ chỉ có thể lặng lẽ đứng nhìn người mình thương từ phía xa, thì tâm hồn họ lại nhàu nát như những cánh hoa vừa bị ai giẫm lên. Có phải trái tim Trường cũng vừa bị chị Ngà giẫm lên, ngay khi một thứ tình cảm non nớt vừa chớm nở?", author: "Nguyễn Nhật Ánh" },
        { productId: 12, content: "Từ những trang sử hào hùng đến những thăng trầm lịch sử, “Việt Nam Sử Lược” là một cuốn sách Lịch sử mở ra hành trình khám phá quá khứ vẻ vang của dân tộc Việt. Đối với những bạn trẻ muốn tìm hiểu về cội nguồn và lịch sử đất nước, “Việt Nam Sử Lược” là một sự lựa chọn phù hợp", author: " Trần Trọng Kim" },
        { productId: 13, content: "Đây chính là tác phẩm nổi tiếng nhất của Antoine De Saint-Expéry  và được bình chọn là tác phẩm xuất sắc nhất thế kỉ 20 ở PhápHoàng Tử Bé kể về một cậu hoàng tử sống trên tiểu tinh cầu Một ngày nọ cậu đã rời hành tinh của mình mà đi xem những phần còn lại của vũ trụ. Và ở những tinh cầu khác cậu đã gặp được toàn những điều kỳ quặc. Cậu bắt đầu khám phá chúng và nhận ra nhiều điều.", author: "De Saint-Expéry " },
        { productId: 14, content: "Lão Tử để lại nhiều nguồn tri thức khiến người đời và hậu thế phải nghiêng mình khâm phục, người đọc tùy hoàn cảnh mỗi lần xem lại đắc thêm ý mới, có tác dụng dẫn dắt con đường tâm linh, dẫn chứng cho ý ông nói, thế nhân ai muốn định nghĩa Đạo mà ông giảng, sau một thời gian nhìn lại cũng tự thấy mình “lạc hậu”, nên không thể định nghĩa được là vậy.", author: "Lão Tử" },
        { productId: 15, content: "cuốn sách Giải mã hoóc-môn Dopamine này nói về các chủ đề xoay quanh “lạc thú”. Nó cũng nói về nỗi đau. Nhưng trên hết, nó nói về mối quan hệ giữa lạc thú và nỗi đau, cũng như tầm quan trọng của việc hiểu được mối quan hệ đó để sống một cuộc đời đúng nghĩa.", author: "Anna Lembke" },
        { productId: 16, content: "Kể về sự phát triển của nhân loại và thế giới xung quanh chúng ta, “Sapiens: Lược sử loài người” là cuốn sách không chỉ phù hợp với các bạn đọc yêu thích tìm hiểu lịch sử, mà còn dễ tiếp cận với mọi đối tượng độc giả, đặc biệt là độc giả trẻ tuổi, thường xuyên di chuyển và muốn tiếp cận nội dung sách một cách nhanh chóng.", author: " Yuval Noah Harari" },
        { productId: 17, content: "Nội dung cuốn Lịch sử tư tưởng Trung Quốc được chia thành 6 phần, 22 chương; trình bày và thảo luận về lịch sử tư tưởng Trung Quốc từ khởi thủy đến đầu thế kỷ XX. Ngay sau khi xuất bản, cuốn sách đã được Viện Hàn lâm Văn khắc và Văn chương Pháp trao giải thưởng Stanilas Julien (1997) và Viện Hàn lâm Khoa học Đạo đức và Chính trị Pháp trao giải thưởng Dagnan-Bouveret (1998). Cuốn sách được đón nhận một cách nồng nhiệt không chỉ trong cộng đồng Pháp ngữ (tái bản vào các năm 2002, 2014) mà còn được dịch ra nhiều thứ tiếng (11 thứ tiếng).", author: "Anne Cheng " },
        { productId: 18, content: "Được viết với văn phong nhẹ nhàng nhưng sâu sắc, cuốn sách đã trở thành một hiện tượng không chỉ ở Hàn Quốc mà còn trên khắp thế giới, trong đó có Việt Nam. Tác giả sử dụng những trải nghiệm thực tế của bản thân và những triết lý Phật giáo để mang đến những thông điệp đầy nhân văn và cảm xúc.", author: "Đại sư Haemin" },
        { productId: 19, content: "Bằng giọng văn tinh tế, truyền cảm, Năm centimet trên giây mang đến những khắc họa mới về tâm hồn và khả năng tồn tại của cảm xúc, bắt đầu từ tình yêu trong sáng, ngọt ngào của một cô bé và cậu bé. Ba giai đoạn, ba mảnh ghép, ba ngôi kể chuyện khác nhau nhưng đều xoay quanh nhân vật nam chính, người luôn bị ám ảnh bởi kí ức và những điều đã qua…", author: "Shinkai Makoto" },
        { productId: 20, content: "uốn sách chứa đựng cả những câu chuyện đối đáp giữa tác giả và Khổng Tử xoay quanh các nguyên tắc đạo đức như tu thân, tề gia, trị quốc, bình thiên hạ, sự chính xác của các mối quan hệ xã hội, đạo đức và quy phạm làm người, “Đạo Trung Dung” và các đức tính “Nhân, Lễ, Nghĩa, Trí, Tín”. Cuốn sách không chỉ là những câu chuyện đối đáp thông thường về nhân tình thế thái mà còn chứa đựng một phạm trù văn hóa truyền thống giúp độc giả hiểu hơn về giáo dục truyền thống của tự nhiên – xã hội – nhân sinh.", author: "Hồ Văn Phi" },
        { productId: 21, content: "Khi chúng ta đang vươn tới những vì sao, chính bởi những thách thức đặt ra phía trước mà chúng ta có lẽ sẽ phải chung tay để ứng phó: du hành vào vũ trụ không phải với tư cách người Nga, người Trung Quốc hay người Mỹ, mà là những đại diện của nhân loại. Nhưng cho đến nay, mặc dù đã thoát khỏi sự kìm hãm của trọng lực, chúng ta vẫn đang bị giam giữ trong tâm trí của chính mình, bị giới hạn bởi sự nghi ngờ của mình về ‘kẻ khác’, và do đó bởi cuộc cạnh tranh chính yếu về tài nguyên. Phía trước chúng ta còn cả một chặng đường dài", author: "Tim Marshall" },
        { productId: 22, content: "Tuổi thơ dữ dội là một tiểu thuyết dài tám phần xuất bản năm 1988 của nhà văn Phùng Quán, có nội dung xoay quanh cuộc sống chiến đấu và sự hy sinh của những thiếu niên 13, 14 tuổi trong hàng ngũ Đội thiếu niên trinh sát của trung đoàn Trần Cao Vân.", author: "Phùng Quán" },
        { productId: 23, content: " Đỏ' là một tác phẩm đặc sắc của Nguyễn Nhật Ánh, xuất bản vào năm 1991. Câu chuyện kể về mối tình đầu trong sáng của học sinh Chương dành cho cô gái quê Út Thêm. Mặc dù không phải là mùa hạ hoàn hảo nhất, nhưng đó là mùa hạ đẹp nhất với tất cả độc giả. Tác phẩm này cuốn hút độc giả bởi sự thật tình và sâu sắc của những nhân vật và câu chuyện.", author: "Nguyễn Nhật Ánh" },
        { productId: 24, content: "", author: "" },
        { productId: 25, content: "", author: "" },
        { productId: 26, content: "", author: "" },
        { productId: 27, content: "", author: "" },
        { productId: 28, content: "", author: "" },
        { productId: 29, content: "", author: "" },
        { productId: 30, content: "", author: "" },
        { productId: 31, content: "", author: "" },
        { productId: 32, content: "", author: "" },
        { productId: 33, content: "", author: "" },
        { productId: 34, content: "", author: "" },
        { productId: 35, content: "", author: "" },
        { productId: 36, content: "", author: "" },
        { productId: 37, content: "", author: "" },
        { productId: 38, content: "", author: "" },
        { productId: 39, content: "", author: "" },
        { productId: 40, content: "", author: "" },
        { productId: 41, content: "", author: "" },
        { productId: 42, content: "", author: "" },
        { productId: 43, content: "", author: "" },
        { productId: 44, content: "", author: "" },
        { productId: 45, content: "", author: "" }
    ];
    localStorage.setItem('infobooks', JSON.stringify(infobooks1));
}

}
createauthor();
const productsinfo = JSON.parse(localStorage.getItem('infobooks'));
console.log(productsinfo);
const arrProducts = JSON.parse(localStorage.getItem('product'));
// Kiểm tra xem trong localStorage đã có productscategory chưa, nếu chưa thì tạo và lưu vào
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

// Lấy dữ liệu từ localStorage
const productscategory = JSON.parse(localStorage.getItem('productscategory'));

function createnewbook() {
    if (localStorage.getItem('newbook') === null) {
        var newbookarray = [
            { productId: 1, src: 'assets/images/sanpham1.webp', category: 'thiếu nhi & tuổi thơ', name: 'Tôi thấy hoa vàng trên cỏ xanh', price: 120000 },
            { productId: 3, src: 'assets/images/sanpham3.webp', category: 'phát triển bản thân', name: 'nếu chỉ còn một ngày để sống', price: 200000 },
            { productId: 24, src: 'assets/images/sanpham24.webp', category: 'hồi ký & tình cảm', name: 'nhà nàng ở cạnh nhà tôi', price: 230000 },
            { productId: 39, src: 'assets/images/sanpham39.webp', category: 'kinh tế & lịch sử', name: 'chiến tranh tiền tệ', price: 299000 },
        ];
        localStorage.setItem('newbook', JSON.stringify(newbookarray));
    }
    const newbooks = JSON.parse(localStorage.getItem('newbook'));
    const arrnewproduct = document.getElementsByClassName('item-newproducts');
    for (let i = 0; i < arrnewproduct.length; i++) {
        s = `
    <div class="images-newbook"><img src="${newbooks[i].src}" alt=""></div>
    <div class="info-book name">${newbooks[i].name}</div>
    <div class="info-book categorynew"><i class="fa-solid fa-tag"></i>${newbooks[i].category}</div>
    <div class="info-book price"> <i class="fas fa-coins newcoin"></i>giá: ${newbooks[i].price}Đ</div>`
        arrnewproduct[i].innerHTML = s;
    }
    console.log('tạo sách mới');
}
function changePage1(pageNumber) {
    // Lấy tất cả các button có class "page-item"
    let pages = document.querySelectorAll('.page');

    // Loại bỏ lớp "active" khỏi tất cả các class
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('activePage');
    }

    // Thêm lớp "active" vào page tương ứng với trang được chọn
    let currentPage = document.getElementsByClassName(`page${pageNumber}`);
    currentPage[0].classList.add('activePage');
}
function resetActivePage() {
    // Lấy tất cả các phần tử có class "page"
    let page1 = document.querySelectorAll('.page');
    // Loại bỏ lớp "active" khỏi tất cả các phần tử
    for (let i = 0; i < page1.length; i++) {
        page1[i].classList.remove('activePage');
    }
    // Thêm lớp "active" vào trang 1
    let pagedefaut = document.querySelector('.page1');
    pagedefaut.classList.add('activePage');
}

function rederpage(categoryproducts) {
    if (!localStorage.getItem('product')) {
        createProduct();
    }
    const arrProducts = JSON.parse(localStorage.getItem('product'));
    var arrdisplay = [];
    if (categoryproducts == 'all') {
        arrdisplay = arrProducts;
    } 
    else if (categoryproducts === 'priceup') {
        arrdisplay = arrProducts;  // Gán arrdisplay từ arrProducts
        arrdisplay = arrdisplay.sort(function(a, b) {
            return a.price - b.price;  // Sắp xếp tăng dần theo giá
        });
    } else if (categoryproducts === 'pricedown') {
        arrdisplay = arrProducts;  // Gán arrdisplay từ arrProducts
        arrdisplay = arrdisplay.sort(function(a, b) {
            return b.price - a.price;  // Sắp xếp giảm dần theo giá
        });
    }
    
    else {
        arrdisplay = arrProducts.filter(function(product) {
            return product.category === categoryproducts;
        });
    }
    let result = arrdisplay.length;
    let numberpage = Math.ceil(result / 8);
    var pagination = document.querySelector('.pagination');
    let pagesHtml = '';  // Khai báo biến pagesHtml để tránh ghi đè
    for (let i = 1; i <= numberpage; i++) {
        // Tạo các phần tử cho các số trang và gán vào pagesHtml
        pagesHtml += `<div class="page page${i}" onclick="changePage1(${i})">${i}</div>`;
    }
    pagination.innerHTML = pagesHtml;
    // Gắn HTML đã tạo vào phần tử pagination
    const pages = document.querySelectorAll('.page');
    
    // Duyệt qua tất cả các phần tử
    for (let i = 0; i < pages.length; i++) {
        // Thêm sự kiện 'click' cho mỗi phần tử
        pages[i].addEventListener('click', function() {
            // Lấy số trang từ phần tử được click (ở đây lấy số trang từ phần tử HTML)
            const pageNumber = i + 1; // Vì chỉ số mảng bắt đầu từ 0 nên ta cộng thêm 1
            
            // Gọi hàm showproduct để hiển thị sản phẩm của trang đó
            showproduct(pageNumber, arrdisplay);
        });
    }
showproduct(1,arrdisplay);
resetActivePage();
}
function showproduct (page,arrdisplay1){
        let productsinPage = 8;
        let startIndex = (page - 1) * productsinPage;
        let endIndex = page * productsinPage;
        if(endIndex>arrdisplay1.length){
            endIndex=arrdisplay1.length;
        }
        var s='';
        var renderproduct=document.querySelector('.products');
        renderproduct.innerHTML=' ';
        for(let i=startIndex;i<endIndex;i++){
     s +=  `<div class="productitems">
            <img class="product-img" src="${arrdisplay1[i].src}" alt="sanpham">
            <div class="product-name">${arrdisplay1[i].name}</div>
            <div class="product-price">${arrdisplay1[i].price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</div>
            <div class="iconfreeship">
                <i class="fa-solid fa-truck"></i>
                <div class="freeship">Freeship</div>
            </div>
            <div class="add-cart" onclick="displayinfo(${arrdisplay1[i].productId})">xem chi tiết</div>
        </div>`;
        }
        renderproduct.innerHTML=s;
        console.log('đã chạy');
}    
window.addEventListener('load', function () {
    createProduct();
    createnewbook();
    console.log('Nút Close không tìm thấyưetvttbetty');
    rederpage('all'); 
    resetActivePage();
});

// window.onload = function() {
//     // Các hàm bạn muốn gọi khi trang tải xong
//     createProduct();
//     createnewbook();
//     console.log('Nút Close không tìm thấyưetvttbetty');
//     rederpage('all'); 
//     resetActivePage();
//    // Ví dụ, mảng arrproducts đã được xác định
// }


function changecategory (category){
  var changecate= document.querySelectorAll('.category');
    for(let i=0;i<changecate.length;i++){
        changecate[i].classList.remove('activePage');
    }
    var categorynow=document.querySelector(`.category${category}`);
    categorynow.classList.add('activePage');
}

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', function() {
      // Khi click vào nút, thêm class 'clicked' để thay đổi màu và phóng to
      this.classList.add('clicked');
    });
  
    // Khi di chuột ra ngoài nút, xóa class 'clicked'
    button.addEventListener('mouseleave', function() {
      this.classList.remove('clicked');
    });
  });

function findObjectByProperty(objects, property, value) {
    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        if (obj[property] === value) {
            return obj; // Trả về đối tượng đầu tiên tìm thấy
        }
    }
    return null; // Trả về null nếu không tìm thấy
}

// function displayinfo(productid) {
//     // Lấy phần tử với id để display lên
//     const productinfo = document.getElementById('showinfoproduct');
//     productinfo.style.display = 'grid';
//     productinfo.innerHTML='';
//     const result =findObjectByProperty(productsinfo,"productId",productid);
//             productinfo.innerHTML=` <div class="productinfo-img"> <img src="${arrProducts[productid-1].src}" alt="" class="info-img"></div>
//     <div class="productinfo-info">
//         <div class="info1 name1">${arrProducts[productid-1].name}</div>
//         <div class="info1 author"><i class="fa-solid fa-tag taginfo"></i>Tác giả: ${result.author}</div>
//         <div class="info1 price1">${arrProducts[productid-1].price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</div>
//         <div class="info1 content1"> ${result.content}</div>
//         <div class="camket"><i class="fa-solid fa-file-shield"></i>Nhận sản phẩm như mô tả.Thông tin thẻ của bạn được bảo mật và không được chia sẻ với người bán.</div>
//     </div>
//     <div class="addtocart1" id="addtocart1">thêm vào giỏ</div>
//     <div class="closeinfo" id="close1"><i class="fa-solid fa-xmark"></i></div>`;
//     const closeButton = document.getElementById('close1');
//     // Đảm bảo nút 'close' đã tồn tại trong DOM và sau đó thêm sự kiện
//     if (closeButton != null) {
//         closeButton.addEventListener('click', function() {
//             // Khi click vào nút 'close', ẩn phần tử chứa thông tin sản phẩm
//             productinfo.style.display = 'none';
//         });
//     } else {
//         console.log('Nút Close không tìm thấy');
//     }
    
//     const hieuungthemvaogio = document.getElementById('addtocart1');
   
//     // Đảm bảo nút 'close' đã tồn tại trong DOM và sau đó thêm sự kiện
//     if (hieuungthemvaogio != null) {
//         hieuungthemvaogio.addEventListener('click', function() {
//             // Kiểm tra trạng thái hiện tại của phần tử
//             if (addtocart1.style.transform === "scale(1.07)") {
//                 // Nếu đã phóng to, thu nhỏ lại
//                 addtocart1.style.transition = "all 0.01s ease";
//                 addtocart1.style.transform = "scale(1)";  // Thu nhỏ về kích thước ban đầu
//             } else {
//                 // Nếu chưa phóng to, phóng to
//                 addtocart1.style.transition = "all 0.01s ease";
//                 addtocart1.style.transform = "scale(1.07)";  // Phóng to 1.05 lần
//             }
//             const userAccount = localStorage.getItem("userLogin");
//             if (userAccount==null) {
//                 document.querySelector(".modal").style.display = "flex";
//             }

//         });
       
//     }
// }
  // Lấy phần tử với class 'closeinfo' và 'productinfo'
  // Xác nhận phần tử tồn tại sau khi được tạo ra
    // Kiểm tra xem phần tử #close1 đã có trong DOM chưa
    const closeButton = document.getElementById('close1');
    
    // Đảm bảo nút 'close' đã tồn tại trong DOM và sau đó thêm sự kiện
    if (closeButton != null) {
        closeButton.addEventListener('click', function() {
            // Khi click vào nút 'close', ẩn phần tử chứa thông tin sản phẩm
            productinfo.style.display = 'none';
        });
    } else {
        console.log('Nút Close không tìm thấy');
    }
    function getuserid(){
        const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userAccountList = JSON.parse(localStorage.getItem("userAccountList")) || [];

  const matchedUser = userAccountList.find(
    (user) => user.username === username && user.password === password
  );
    if (matchedUser) {

    }
    }
    const hieuungthemvaogio = document.getElementById('addtocart1');
   
    // Đảm bảo nút 'close' đã tồn tại trong DOM và sau đó thêm sự kiện
    if (hieuungthemvaogio != null) {
        hieuungthemvaogio.addEventListener('click', function() {
    
            // Khi click vào nút 'close', ẩn phần tử chứa thông tin sản phẩm
            addtocart1.style.display = 'none';
            addtocart1.style.transition = "all 0.3s ease";  // Thêm hiệu ứng mượt mà
            addtocart1.style.width = "150%";  // Phóng to chiều rộng
            addtocart1.style.height = "150%";  // Phóng to chiều cao
        });
    } 



    function displayinfo(productid) {
        // Lấy phần tử với id để display lên
        const productinfo = document.getElementById('showinfoproduct');
        productinfo.style.display = 'grid';
        productinfo.innerHTML = '';
    
        const result = findObjectByProperty(productsinfo, "productId", productid);
        productinfo.innerHTML = `
            <div class="productinfo-img"> 
                <img src="${arrProducts[productid-1].src}" alt="" class="info-img">
            </div>
            <div class="productinfo-info">
                <div class="info1 name1">${arrProducts[productid-1].name}</div>
                <div class="info1 author"><i class="fa-solid fa-tag taginfo"></i>Tác giả: ${result.author}</div>
                <div class="info1 price1">${arrProducts[productid-1].price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</div>
                <div class="info1 content1">${result.content}</div>
                <div class="camket">
                    <i class="fa-solid fa-file-shield"></i>Nhận sản phẩm như mô tả. Thông tin thẻ của bạn được bảo mật và không được chia sẻ với người bán.
                </div>
            </div>
            <div class="addtocart1" id="addtocart1">thêm vào giỏ</div>
            <div class="closeinfo" id="close1"><i class="fa-solid fa-xmark"></i></div>
        `;
        
        // Đảm bảo nút 'close' đã tồn tại trong DOM và sau đó thêm sự kiện
        const closeButton = document.getElementById('close1');
        if (closeButton != null) {
            closeButton.addEventListener('click', function() {
                productinfo.style.display = 'none';
            });
        } else {
            console.log('Nút Close không tìm thấy');
        }
    
        const hieuungthemvaogio = document.getElementById('addtocart1');
       
        // Đảm bảo nút 'addtocart1' đã tồn tại trong DOM và sau đó thêm sự kiện
        if (hieuungthemvaogio != null) {
            hieuungthemvaogio.addEventListener('click', function() {
                const userAccount = localStorage.getItem("userLogin");
    
                if (userAccount == null) {
                    // Nếu người dùng chưa đăng nhập, hiển thị modal yêu cầu đăng nhập
                    document.querySelector(".modal").style.display = "flex";
                } else {
                    // Nếu người dùng đã đăng nhập, thực hiện thêm sản phẩm vào giỏ hàng
                    const user = JSON.parse(userAccount); // Lấy thông tin người dùng từ localStorage
                    addToCart(user, productid); // Thêm sản phẩm vào giỏ
                }
            });
        }
    }
    // Hàm để thêm sản phẩm vào giỏ hàng
    function addToCart(user, productid) {
        // Lấy danh sách giỏ hàng từ localStorage
        const existingCarts = JSON.parse(localStorage.getItem("shoppingCarts")) || [];
        
        // Kiểm tra xem giỏ hàng của người dùng đã tồn tại chưa
        let userCart = existingCarts.find(cart => cart.userId === user.userId);
        
        if (!userCart) {
            // Nếu giỏ hàng của người dùng chưa tồn tại, tạo mới giỏ hàng với mảng sản phẩm trống
            userCart = {
                userId: user.userId,
                items: []  // Mảng sản phẩm trống
            };
            existingCarts.push(userCart); // Thêm giỏ hàng mới vào danh sách giỏ hàng
        }
        
        // Kiểm tra nếu sản phẩm đã có trong giỏ hàng, nếu chưa thêm vào
        const productExists = userCart.items.find(item => item.productId === productid);
        if (!productExists) {
            // Thêm sản phẩm vào giỏ hàng
            userCart.items.push({ productId: productid });
            localStorage.setItem("shoppingCarts", JSON.stringify(existingCarts));
            alert("Sản phẩm đã được thêm vào giỏ hàng!");
        } else {
            alert("Sản phẩm đã có trong giỏ hàng!");
        }
    }
    