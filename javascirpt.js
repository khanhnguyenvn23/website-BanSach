// localStorage.clear();
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
        // productArray[1]=null;
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
localStorage.removeItem("infobooks");
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
        { productId: 24, content: "Văn học Nhật đem đến cho độc giả cảm giác bình yên, lãng mạn khi đắm mình trong những tác phẩm tinh tế, chìm trong câu chữ nhẹ nhàng nhưng đầy trầm tư, ám ảnh. Em Sẽ Đến Cùng Cơn Mưa cũng vậy. Không nhiều màu sắc, không nhiều kịch tính, dữ dội mà chỉ với một gam màu trầm buồn, một khung cảnh ảm đạm ngày mưa, một cốt truyện nhẹ nhàng, Ichikawa Takuji đã vẽ nên được một bức tranh tình yêu tuyệt diệu.", author: "Ichikama Takuji" },
        { productId: 25, content: "Quan tâm nhiều hơn tới tâm lý học, chúng ta dần trở nên quen thuộc với các khái niệm như sang chấn tâm lý, hành trình chữa lành,.. Cùng tìm hiểu một khái niệm khác trong lĩnh vực này, đó chính là sách nói Thao Túng Tâm Lý trong tựa sách cùng tên của tác giả Shannon Thomas.", author: "Shannon Thomas" },
        { productId: 26, content: "Bạn có bao giờ hỏi ước mơ của bố mẹ là gì? Hoặc dù có hỏi bố mẹ cũng chỉ trả lời qua loa như “Làm gì có…”. Nhưng bạn biết không, làm gì có ai trên thế giới này không có ước mơ cơ chứ, chỉ là ước mơ của bố mẹ chúng ta được cất giấu rất sâu trong tim và đánh đổi bằng nụ cười của những đứa con mà thôi.", author: " Hạ Mer" },
        { productId: 27, content: "Ngày mùng 7 tháng 11, thành Trường An bỗng xảy ra một loạt vụ án kỳ bí đều có liên quan đến yêu miêu. Người thụ lý điều tra những vụ án này là ngự sử Trương Trạc và cháu trai của Địch Nhân Kiệt - Địch Thiên Lý. Lần theo manh mối để lại, hai người họ tìm đến thầy múa rối Khúc Lạc Đà. Nhưng khi đến nơi, hắn đã chết bất đắc kỳ tử, tử trạng thê thảm như bị yêu quái xé xác, thậm chí còn bị ghép lại thành hình mèo. Càng dấn thân vào cuộc điều tra, họ càng đến gần hơn với một sự thật kinh hoàng khiến bất kỳ ai cũng phải rợn tóc gáy", author: "Trương Vân" },
        { productId: 28, content: "Thân là Tam hoàng tử quyền quý, mẹ là công chúa tiền triều, còn cha là một trong những hoàng đế lừng danh thiên cổ - Đường Thái Tông Lý Thế Dân, nhưng từ sau cái chết thảm khốc của mẹ, bóng đêm bắt đầu buông xuống cuộc đời Lý Khác. Giữa Đại Đường thịnh thế, phồn vinh thái bình, người người hoan ca, vẫn luôn có một kẻ sống giữa áo gấm cơm vàng mà lạc lõng trăn trở, mãi đi tìm người đứng sau lập mưu giết mẹ mình.", author: "Úc Phức" },
        { productId: 29, content: " Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại.", author: "Jim Collins " },
        { productId: 30, content: "Chậm lại một chút để mỗi ngày trọn vẹn và bình an hơn. Khi đặt bút viết bài review này, tôi đã bắt đầu cuộc hành trình “sống chậm” được một thời gian rồi. Sau một chuỗi ngày dài đầy biến động, cái khoảnh khắc khi tôi cạn kiệt hoàn toàn năng lượng, và lê lết đến hết ngày chỉ bằng bản năng sinh tồn; những lời của thầy Thích Nhất Hạnh về một hơi thở chánh niệm đã nâng tôi dậy: “Thở vào, tâm tĩnh lặng Thở ra, miệng mỉm cười Thở vào, an trú trong hiện tại Thở ra, giây phút đẹp tuyệt vời” Vậy, làm thế nào để sống chậm? rong cuốn sách “Sống chậm”, Melanie Barnes đưa ra cho chúng ta một bản tóm tắt chi tiết về lối “sống chậm” này.", author: "MELANIE BARNES" },
        { productId: 31, content: "Những cơn gió heo may len lỏi vào từng góc phố nhỏ, mùa thu về gợi nhớ bao yêu thương đong đầy, bao xúc cảm dịu dàng của ký ức. Đó là nỗi nhớ đau đáu những hương vị quen thuộc của đồng nội, là hoài niệm bất chợt khi đi trên con đường cũ in dấu bao kỷ niệm... để rồi ta ước có một chuyến tàu kỳ diệu trở về những năm tháng ấy, trở về nơi nương náu bình yên sau những tháng ngày loay hoay để học cách trở thành một người lớn. Bạn sẽ được đắm mình trong những cảm xúc đẹp đẽ xen lẫn những tiếc nuối đầy lắng đọng trong “Trốn lên mái nhà đẻ khóc” của Lam.", author: "Lam" },
        { productId: 32, content: "Hippie – Những kẻ lãng du đưa ta đến với những con người hoàn toàn xa lạ, với những mục đích khác nhau nhưng cùng hướng đến vùng đất xa xôi Nepal trên con đường mòn hippie huyền thoại. Trong hành trình đó, chàng trai Brazil tên Paulo gầy gò có chòm râu dê và mái tóc dài bồng bềnh, mơ ước trở thành nhà văn đã gặp gỡ Karla, cô gái Hà Lan ở độ tuổi đôi mươi đang tìm kiếm bạn đồng hành cho chuyến đi.", author: "HIPPIE" },
        { productId: 33, content: "Nếu bạn đang vùi đầu trong sách vở với kỳ thi trước mắt, tò mò vì không “get” được trọng điểm, lo lắng vì lịch thi tới gần và chán nản vì việc học không đến đâu thì đây chính là cuốn sách dành cho bạn, tựa như lời của Zion Kabasawa đã viết : việc đọc sách cũng tương tự việc học. Những người học nhiều mà chẳng được bao nhiêu điều thì thật là lãng phí.", author: " Zion Kabasawa" },
        { productId: 34, content: "sách do Walter Isaacson, nhà báo nổi tiếng người Mỹ, viết trong hai năm. Bản tiếng Việt do AlphaBooks chuyển ngữ, dày 756 trang, ra mắt ngày 20/12. Cuốn sách giống một thước phim, tái hiện cuộc đời tài phiệt giàu nhất thế giới từ lúc ấu thơ đến khi trở thành ông trùm công nghệ. Qua cuốn tiểu sử, Musk hiện lên là một thiên tài điên loạn, người khó kiềm chế cảm xúc của bản thân và xử lý các mối quan hệ xung quanh. ", author: "Walter Isaacson" },
        { productId: 35, content: "Cuốn sách “Trump – Đừng Bao Giờ Bỏ Cuộc” tái bản năm 2022 là tác phẩm của Donald J Trump và Meredith Mclver, nổi tiếng là nhà doanh nhân và cựu tổng thống Hoa Kỳ. Trong sách, ông Trump chia sẻ những thử thách lớn nhất, những thất bại và cuộc chiến khốc liệt nhất của mình và giải thích cách ông biến những nghịch cảnh thành thành công mới.", author: "Donald J. Trump" },
        { productId: 36, content: "nội dung cuốn sách gồm 6 chương, cung cấp cho bạn đọc cái nhìn khách quan, toàn diện và sâu sắc hơn về thảm họa địa - chính trị lớn nhất trong thế kỷ XX cũng như quá trình phục hưng và trỗi dậy của nước Nga dưới sự lãnh đạo của V. Putin. Với tâm huyết nhiều năm nghiên cứu về V. Putin và nước Nga đương đại, cùng những dẫn chứng lịch sử cụ thể, khoa học, những đánh giá khách quan, đa chiều, tác giả - Đại tá Lê Thế Mẫu đã vẽ nên bức tranh toàn cảnh về các cuộc cải cách đã từng dẫn tới sự tan rã của Liên Xô và vai trò, cống hiến của V. Putin trong việc cứu nước Nga thoát khỏi thảm họa địa - chính trị lớn nhất thế kỷ XX", author: "Đại tá Lê Thế Mẫu" },
        { productId: 37, content: "Câu chuyện ly kỳ từ cậu bé giao báo là một hướng dẫn toàn diện cho tinh thần doanh nhân và là cuốn sách “nhất định phải đọc” cho bất kỳ ai đang tìm kiếm một hướng đi mới trong kinh doanh. Deep K. Patel đã tạo ra một cuốn cẩm nang đi tới thành công dưới dạng một câu chuyện ngụ ngôn kể về cuộc sống của cậu bé Ty Chander – một cậu nhóc học lớp 12 đang muốn kiếm thêm tiền đổ xăng, tham dự vũ hội tốt nghiệp, học phí đại học và rất nhiều thứ khác thông qua việc bán báo.", author: "Deep Patel " },
        { productId: 38, content: "Hơn bảy tỷ người trên thế giới có thể viết một thứ gì đó khác chữ “Không” vào mục Tôn giáo trong hồ sơ của mình. Một số sinh ra đã theo một tôn giáo được chọn sẵn; số khác có thể tự lựa chọn theo sở thích, theo định hướng, theo đám đông... Thế rồi họ thực hành đức tin của mình hằng ngày, tự hào về nó và muốn truyền bá nó cho nhiều người khác nữa. Đó là con đường phát triển hết sức tự nhiên của tôn giáo suốt hàng nghìn năm qua, kết quả là vô số tín ngưỡng với cành nhánh xum xuê mà chúng ta thấy ngày nay.", author: "Richard Holloway" },
        { productId: 39, content: "Phần lớn chúng ta thường nghĩ sự hiện diện của đồng tiền trong cuộc sống là một lẽ đương nhiên, như không khí hay nước vậy. Rất ít người trong chúng ta hiểu được nguồn gốc của tiền bạc cũng như sự sinh tồn và phát triển của đồng tiền.Một khi đọc “Chiến tranh tiền tệ - Ai thật sự là người giàu nhất thế giới” bạn sẽ phải giật mình nhận ra một điều kinh khủng rằng, đằng sau những tờ giấy bạc chúng ta chi tiêu hàng ngày là cả một thế lực ngầm đáng sợ - một thế lực bí ẩn với quyền lực siêu nhiên có thể điều khiển cả thế giới rộng lớn này.", author: "Song Hongbing" },
        { productId: 40, content: "huyện được viết theo lối hồi ký. Khanh là quay trở về Việt Nam với những kí ức đã phủ bụi từ 6 năm trước.Tại Sài Gòn, Khanh gặp Linh- người con gái của những miền ký ức và Miu - cô gái tưởng như xa lạ mà thân quen.Vậy Miu là ai? Một cô gái bí ẩn và có cách ứng xử lạ lùng khiến tất cả mọi người đều tò mò về cô.cũng bởi Khanh không hề nhận ra cô nên Miu đã lập một kế hoạch khiến Khanh nhận ra con người thật và tình cảm của cô.", author: "Lâm Phạm" },
        { productId: 41, content: "Ai cũng có một người đặc biệt của riêng mình. Thông thường, mỗi người sẽ có hai, ba thậm chí là bốn người như vậy. Họ vượt qua muôn vàn đại dương thời gian và những tầng mây không gian để đoàn tụ với bạn. Họ đến từ phía bên kia của bầu trời. Có những thứ dù có trốn tránh đến đâu thì cuối cùng vẫn có thể tìm ra. Ngay cả linh hồn cũng vậy. Dù có ở kiếp trước hay kiếp sau thì họ vẫn luôn gắn bó với nhau.", author: "Brian L. Weiss" },
        { productId: 42, content: "Quá khứ và hiện tại, lịch sử và cảnh quan, thiên nhiên và con người hòa quyện nhau như đưa ta về cội nguồn ngàn năm bất khuất của dân tộc để tìm hiểu, để khám phá, để tin tưởng ở khí phách, tài trí, lòng yêu nước, tinh thần tự hào, tự tôn dân tộc, ý thức độc lập, tự chủ, tự lực, tự cường, truyển thống văn hiến và ý chí thống nhất đất nước của nhân dân ta.", author: "Quỳnh Cư, Đỗ Đức Hùng" },
        { productId: 43, content: "Ngày xưa có một chuyện tình là tác phẩm của nhà văn Nguyễn Nhật Ánh viết về đề tài tình yêu với một phong cách hoàn toàn khác lạ so với chính ông từ trước đến nay. Tác phẩm được phát hành bởi nhà xuất bản Trẻ[1] và được nhà văn Nguyễn Nhật Ánh chính thức ra mắt vào ngày 14 tháng 9 năm 2016.[2]", author: "Nguyễn Nhật Ánh " },
        { productId: 44, content: "Vì sao Phật giáo giàu chân lý là một cuốn sách khiến độc giả chúng ta không khỏi tò mò khi bắt đầu đọc tựa đề, và càng làm chúng ta bất ngờ hơn khi đọc từng trang từng trang của cuốn sách. Vì sao Phật giáo giàu chân lý chọn cách giải thích tôn giáo - nhìn Thiền và Giác ngộ từ góc độ khoa học và triết học. Robert Wright không đề cập những khía cạnh “siêu nhiên” hay siêu hình vốn dĩ của đạo Phật, mà bàn về những khía cạnh tự nhiên: các ý niệm phù hợp với phạm vi của tâm lý học và triết học hiện đại. Tác giả đã dành hơn 10 năm nỗ lực để đánh giá hay ít nhất là nối kết những quan điểm cốt lõi của Phật giáo cũng như những kinh nghiệm thiền quán của bản thân ông. ", author: "Robert Wright" },
        { productId: 45, content: " Văn học nước Nga nói chung đã đi vào lòng thế hệ người Việt Nam từ rất lâu về trước, chính bởi tình yêu đối với quê hương của V.L.Lenin, đất nước cái nôi của Cách mạng Tháng Mười.  Người ta yêu, cũng chính là yêu cái chất vừa trữ tình của hình ảnh thiên nhiên qua từng trang sách, yêu cả cái tinh thần mà các tác giả lớn thời đó đã truyền tải. Đối với những người chuyên tìm đọc những ấn phẩm văn học thế kỉ 20 sẽ chẳng xa lạ gì với những quyển sách cũ được in ấn và xuất bản cách đây hơn chục năm về trước, từ lâu đã trở thành người bạn, người thầy, với tầng lớp thanh niên trẻ tuổi luôn mang trong mình biết  bao lý tưởng và ước mơ cao đẹp, mà giờ đây đã trở thành bậc ông, bậc bà của chúng ta", author: "Nikolai Alekseyevich Ostrovsky." }
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
            closeButton.addEventListener('click', function () {
                productinfo.style.display = 'none';
            });
        } else {
            console.log('Nút Close không tìm thấy');
        }
    
        const hieuungthemvaogio = document.getElementById('addtocart1');
    
        // Đảm bảo nút 'addtocart1' đã tồn tại trong DOM và sau đó thêm sự kiện
        if (hieuungthemvaogio != null) {
            hieuungthemvaogio.addEventListener('click', function () {
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
        let userCart = existingCarts.find(cart => cart.UserID === user.UserID);
    
        if (!userCart) {
            // Nếu giỏ hàng của người dùng chưa tồn tại, tạo mới giỏ hàng với mảng sản phẩm trống
            userCart = {
                UserID: user.UserID,
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
    
    
var sanpham=document.getElementById('sanpham');
var themsanpham=document.querySelector('.themsanpham');
sanpham.onclick = function () {
    // Thực hiện hành động khi phần tử được nhấn
themsanpham.style.display="block";
const mangsanpham = JSON.parse(localStorage.getItem('product'));
let s='';
for(let i=0;i<mangsanpham.length;i++){
    s+=`<div class="chuasanpham"><img class="anhsanpham"src="${mangsanpham[i].src}" alt=""><div class="tensanpham">${mangsanpham[i].name}</div><div class="suasanpham" onclick="suasp(${mangsanpham[i].productId})"><i class="fa-solid fa-gear"></i></div><div class="xoasanpham" onclick="removeProductById(${mangsanpham[i].productId})"><i class="fa-solid fa-xmark"></i></div></div>`;
}
s+=  `<div class ="them" onclick="themsp()">Thêm sản phẩm</div>`;
themsanpham.innerHTML=s;
// addRemoveEventListener();
};

function thoatra(){
    themsanpham.style.display="none";
}
function themsp(){
var them=document.querySelector('.them');
    var themsuaxoa=document.querySelector('.themsuaxoa');
    themsuaxoa.style.display="block";
    document.querySelector('.a111').style.display = "block";
    document.querySelector('.a222').style.display = "none";
}
document.getElementById("imageFile").addEventListener("change", function(event) {
    var file = event.target.files[0]; // Lấy file ảnh được chọn
    var reader = new FileReader();

    reader.onload = function(e) {
        var imagePreview = document.getElementById("imagePreview");
        imagePreview.src = e.target.result; // Gán ảnh đọc được vào src của thẻ img
        imagePreview.style.display = "block"; // Hiển thị ảnh xem trước
    };

    if (file) {
        reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
    }
});

// Hàm thêm sản phẩm vào mảng khi nhấn nút "Hoàn thành"
document.getElementById("addProductButton").onclick = function() {
    var bookName = document.getElementById("bookName").value;
    var bookPrice = document.getElementById("bookPrice").value;
    var bookCategory = document.getElementById("bookCategory").value;
    var imageFile = document.getElementById("imageFile").files[0];

    if (!bookName || !bookPrice || !bookCategory || !imageFile) {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
        return;
    }

    // Chuyển file ảnh thành URL sử dụng FileReader
    var reader = new FileReader();
    reader.onload = function(event) {
        var newProduct = {
            productId: (JSON.parse(localStorage.getItem('product')) || []).length + 1,
            src:'assets/images/comingsoon.png',  // Đường dẫn ảnh
            category: bookCategory,
            name: bookName,
            price: parseInt(bookPrice)
        };

        var products = JSON.parse(localStorage.getItem('product')) || [];
        products.push(newProduct);
        localStorage.setItem('product', JSON.stringify(products));

        alert("Sản phẩm đã được thêm thành công!");
        renderProductList();
    };
    const mangsanpham = JSON.parse(localStorage.getItem('product'));
    let s='';
    for(let i=0;i<mangsanpham.length;i++){
        s+=`<div class="chuasanpham"><img class="anhsanpham"src="${mangsanpham[i].src}" alt=""><div class="tensanpham">${mangsanpham[i].name}</div><div class="suasanpham" onclick="suasp(${mangsanpham[i].productId})"><i class="fa-solid fa-gear"></i></div><div class="xoasanpham"onclick="removeProductById(${mangsanpham[i].productId})"><i class="fa-solid fa-xmark"></i></div></div>`;
    }
    s+=  `<div class ="them" onclick="themsp()">Thêm sản phẩm</div>`;
    themsanpham.innerHTML=s;
    // addRemoveEventListener();
    var outra=document.querySelector('.themsuaxoa');
outra.style.display="none";
    reader.readAsDataURL(imageFile); // Đọc ảnh dưới dạng Data URL
};
function outra1(){
var thoathem=document.querySelector('.thoatthem');
var outra=document.querySelector('.themsuaxoa');
outra.style.display="none";
}
// function addRemoveEventListener() {
//     // Lấy tất cả các phần tử có class 'xoasanpham'
//     const deleteButtons = document.querySelectorAll('.xoasanpham');

//     // Duyệt qua tất cả các phần tử và thêm sự kiện 'click'
//     deleteButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Lấy productId từ thuộc tính data-product-id
//             const productId = this.getAttribute('data-product-id');
            
//             // Gọi hàm xóa sản phẩm
//             removeProductById(productId);
//         });
//     });
// }
function removeProductById(productId1) {
    // Hiển thị hộp thoại xác nhận
    const isConfirmed = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    
    // Nếu người dùng chọn OK (xác nhận), tiến hành xóa
    if (isConfirmed) {
        let products = JSON.parse(localStorage.getItem('product')) || [];
        
        // Lọc mảng để loại bỏ sản phẩm có productId trùng khớp
        products = products.filter(product => product.productId !== productId1);
        localStorage.removeItem("product");
        // Lưu lại mảng sau khi xóa sản phẩm
        localStorage.setItem('product', JSON.stringify(products));
        
        // Thông báo đã xóa thành công
        alert("Sản phẩm đã được xóa!");
        const mangsanpham = JSON.parse(localStorage.getItem('product'));
let s='';
for(let i=0;i<mangsanpham.length;i++){
    s+=`<div class="chuasanpham"><img class="anhsanpham"src="${mangsanpham[i].src}" alt=""><div class="tensanpham">${mangsanpham[i].name}</div><div class="suasanpham" onclick="suasp(${mangsanpham[i].productId})"><i class="fa-solid fa-gear"></i></div><div class="xoasanpham" onclick="removeProductById(${mangsanpham[i].productId})"><i class="fa-solid fa-xmark"></i></div></div>`;
}
s+=  `<div class ="them" onclick="themsp()">Thêm sản phẩm</div>`;
themsanpham.innerHTML=s;
        // renderProductList();
    }



}

// // Hàm để cập nhật danh sách sản phẩm trong giao diện
// function renderProductList() {
//     const mangsanpham = JSON.parse(localStorage.getItem('product')) || [];
//     let s = '';

//     for (let i = 0; i < mangsanpham.length; i++) {
//         s += `<div class="chuasanpham">
//                 <img class="anhsanpham" src="${mangsanpham[i].src}" alt="">
//                 <div class="tensanpham">${mangsanpham[i].name}</div>
//                 <div class="suasanpham"><i class="fa-solid fa-gear"></i></div>
//                 <div class="xoasanpham">
//                     <i class="fa-solid fa-xmark" onclick="removeProductById(${mangsanpham[i].productId})"></i>
//                 </div>
//               </div>`;
//     }

//     s += `<div class="them" onclick="themsp()">Thêm sản phẩm</div>`;
//     themsanpham.innerHTML = s;
// }
// Hàm để lưu thông tin sản phẩm khi sửa
 function suasp(productId) {
    
    var themsanpham=document.querySelector('.themsuaxoa');
    themsanpham.style.display="block";
    document.querySelector('.a111').style.display = "none";
    document.querySelector('.a222').style.display = "block";
    document.getElementById("addProductButton").onclick = function() {
    var bookName = document.getElementById("bookName").value;
    var bookPrice = document.getElementById("bookPrice").value;
    var bookCategory = document.getElementById("bookCategory").value;
    if (!bookName || !bookPrice || !bookCategory) {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
        return;
    }

    // Gọi hàm để sửa thông tin sản phẩm
    saveProductData(productId, bookName, bookPrice, bookCategory);
};}

// Hàm để lưu thông tin sản phẩm (chỉ sửa)
function saveProductData(productId, bookName, bookPrice, bookCategory) {
    var products = JSON.parse(localStorage.getItem('product')) || [];

    // Tìm sản phẩm theo productId và cập nhật
    var productIndex = products.findIndex(product => product.productId == productId);
    
    if (productIndex !== -1) {
        // Giữ nguyên ảnh cũ, chỉ thay đổi tên, giá, và danh mục
        products[productIndex] = {
            productId: productId,
            src: products[productIndex].src, // Giữ nguyên ảnh (không thay đổi src)
            category: bookCategory,
            name: bookName,
            price: parseInt(bookPrice)
        };
        
        // Lưu lại danh sách sản phẩm vào localStorage
        localStorage.setItem('product', JSON.stringify(products));

        alert("Sản phẩm đã được sửa thành công!");
        // Đóng form sửa sau khi hoàn tất
        document.querySelector(".themsuaxoa").style.display = "none";

        // Cập nhật lại danh sách sản phẩm (nếu cần thiết)
        renderProductList();  // Cập nhật giao diện (nếu bạn cần hiển thị lại danh sách)
     
    } else {
        alert("Không tìm thấy sản phẩm để sửa.");
    }
}
