


document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách sản phẩm từ localStorage
  const productsFromLocal = JSON.parse(localStorage.getItem('product')) || [];
  
  // Hiển thị tất cả sản phẩm khi trang được tải
  displayFilteredProducts(productsFromLocal, 1);
  
});
const newbooks = JSON.parse(localStorage.getItem('newbook'));
const arrnewproduct = document.getElementsByClassName('item-newproducts');

for (let i = 0; i < arrnewproduct.length; i++) {
    if (newbooks[i]) { // Kiểm tra xem newbooks[i] có tồn tại
        arrnewproduct[i].innerHTML = `
            <div class="images-newbook"><img src="${newbooks[i].src}" alt=""></div>
            <div class="info-book name">${newbooks[i].name}</div>
            <div class="info-book categorynew"><i class="fa-solid fa-tag"></i>${newbooks[i].category}</div>
            <div class="info-book price"> <i class="fas fa-coins newcoin"></i>giá: ${newbooks[i].price}Đ</div>
        `;
    }
}
// ĐƯA LÊN 
const productsFromLocal = JSON.parse(localStorage.getItem('product')) || [];

const pageSize = 8; 
// Gợi ý hiển thị sản phẩm
function showSearchSuggestions(searchTerm) {
  const searchResultsContainer = document.getElementById("show-product");
  const showProductContainer = searchResultsContainer.querySelector('#show-product');
  searchResultsContainer.innerHTML = ''; // Xóa nội dung hiện tại

  // Lọc các sản phẩm phù hợp với từ khóa
  const filteredProducts = productsFromLocal.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Nếu không có sản phẩm phù hợp
  if (filteredProducts.length === 0 && searchTerm.trim() !== '') {
      const noResultsMessage = document.createElement('div');
      noResultsMessage.classList.add('no-results');
      noResultsMessage.innerText = 'Không có gợi ý phù hợp.';
      searchResultsContainer.appendChild(noResultsMessage);
      return;
  }

  // Hiển thị danh sách sản phẩm phù hợp
  filteredProducts.slice(0, 5).forEach(product => { // Giới hạn gợi ý 5 sản phẩm
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('search-suggestion');
      suggestionItem.innerHTML = `
          <img src="${product.src}" alt="${product.name}" class="suggestion-img" onclick="displayinfo(${product.productId})">
          <div class="suggestion-info" onclick="displayinfo(${product.productId})">
              <p class="suggestion-name">${product.name}</p>
              <p class="suggestion-price">${product.price}Đ</p>
          </div>
      `;
      suggestionItem.addEventListener('click', () => {
          // Chọn sản phẩm và cập nhật ô tìm kiếm
          document.querySelector('.search-bar input').value = product.name;
          searchResultsContainer.innerHTML = ''; // Ẩn gợi ý
          searchProducts(); // Tìm kiếm sản phẩm
      });
      searchResultsContainer.appendChild(suggestionItem);
  });
}
// Gắn sự kiện cho ô tìm kiếm
document.querySelector('.search-bar input').addEventListener('input', (event) => {
  const searchTerm = event.target.value.trim();
  showSearchSuggestions(searchTerm);
});


// Hiển thị sản phẩm và phân trang
function displayFilteredProducts(filteredProducts, currentPage) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Xóa nội dung hiện tại

    // Kiểm tra nếu không có sản phẩm nào sau khi lọc
    if (filteredProducts.length === 0) {
      const noProductsMessage = document.createElement('div');
      noProductsMessage.classList.add('no-products-message');
      noProductsMessage.innerText = 'Không tìm thấy sản phẩm phù hợp.';
      productsContainer.appendChild(noProductsMessage);
      return; // Dừng lại nếu không có sản phẩm nào
  }
    // Tính toán chỉ số bắt đầu và kết thúc
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    // Hiển thị sản phẩm trên trang hiện tại
    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('productitems');
        productItem.innerHTML = `
            <img class="product-img" src="${product.src}" alt="">
             <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</div>
            <div class="iconfreeship">
                <i class="fa-solid fa-truck"></i>
                <div class="freeship">Freeship</div>
            </div>
            <div class="add-cart" onclick="displayinfo(${product.productId})">Thêm vào giỏ</div>

        `;
        productsContainer.appendChild(productItem);
    });

    // Gọi hàm hiển thị phân trang
    renderPage(filteredProducts, currentPage);
}
function renderPage(filteredProducts, currentPage) {
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = ''; // Xóa nội dung hiện tại

  // Hiển thị số trang
  for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('div');
      pageButton.classList.add('page', `page${i}`);
      if (i === currentPage) {
          pageButton.classList.add('activepage'); // Đánh dấu trang hiện tại
      }
      pageButton.innerText = i;
      pageButton.addEventListener('click', () => changePage(filteredProducts, i));
      paginationContainer.appendChild(pageButton);
  }
}
function changePage(filteredProducts, pageNumber) {
  // Hiển thị sản phẩm mới khi chuyển trang
  displayFilteredProducts(filteredProducts, pageNumber);
}
function searchProducts() {
  const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
  const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
  const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
  const category = document.getElementById('advanced-search-category-select').value;

  // Lọc sản phẩm dựa trên tiêu chí tìm kiếm
  const filteredProducts = productsFromLocal.filter(product => {
      const matchesName = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = category === 'Tất cả' || product.category === category;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

      return matchesName && matchesCategory && matchesPrice;
  });

  // Hiển thị sản phẩm đã lọc từ trang 1
  displayFilteredProducts(filteredProducts, 1);
   // Cuộn xuống phần sản phẩm
   const productsContainer = document.querySelector('.products');
   productsContainer.scrollIntoView({ behavior: 'smooth' });  
}
document.querySelector('.search-bar input').addEventListener('input', searchProducts);
document.getElementById('min-price').addEventListener('change', searchProducts);
document.getElementById('max-price').addEventListener('change', searchProducts);
document.getElementById('advanced-search-category-select').addEventListener('change', searchProducts);
// reset tìm kiếm
function resetSearch() {
  // Reset các trường tìm kiếm về trạng thái ban đầu
  document.querySelector('.search-bar input').value = '';  
  document.getElementById('min-price').value = '';         
  document.getElementById('max-price').value = '';         
  document.getElementById('advanced-search-category-select').value = 'Tất cả';  
  searchProducts();
}

// Gắn sự kiện click cho nút reset
document.getElementById('reset-search').addEventListener('click', function(event) {
  event.preventDefault(); 
  resetSearch();  
}); // ĐƯA ĐẾN ĐÂY 


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 
});
//


document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra trạng thái đăng nhập từ localStorage
  const userAccount = localStorage.getItem("userLogin")
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");
  const accountinfo = document.getElementById("account-info-link")

  if (userAccount) {
    loginLink.style.display = "inline-block";
    logoutLink.style.display = "inline-block";
    accountinfo.style.display = "inline-block"
  } else {
    loginLink.style.display = "inline-block";
    logoutLink.style.display = "none";
    accountinfo.style.display = "none"
  }

  logoutLink.addEventListener("click", function () {
    localStorage.removeItem("userLogin");

    loginLink.style.display = "inline-block";
    logoutLink.style.display = "none";
    accountinfo.style.display = "none";
    location.reload();
  });
});
// ĐƯA LÊN ĐẾN CUỐI
// Đợi DOM được load đầy đủ
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các thành phần liên quan
  const filterBtn = document.querySelector(".filter-btn");
  const advancedSearch = document.querySelector(".advanced-search");

  // Thêm sự kiện click cho nút Lọc
  filterBtn.addEventListener("click", function () {
    // Kiểm tra nếu phần advanced-search đang mở, thì đóng lại
    if (advancedSearch.classList.contains("open")) {
      advancedSearch.classList.remove("open");
    } else {
      // Nếu chưa mở, thì mở ra
      advancedSearch.classList.add("open");
    }
  });

  // Tùy chọn: Đóng phần advanced-search khi click ra ngoài
  document.addEventListener("click", function (event) {
    if (!advancedSearch.contains(event.target) && !filterBtn.contains(event.target)) {
      advancedSearch.classList.remove("open");
    }
  });
});


// nút đóng lọc
function closeSearchAdvanced() {
  document.querySelector(".advanced-search").classList.toggle("open");
}
// Đăng ký, đăng nhập
/* ÔNG LẤY HẾT CODE NÀY ĐỔI LẠI CODE TRONG GIT HỘ TUI CÁI */
"use strict";

document.querySelector("#login-link").addEventListener("click", () => {
  // Hiển thị modal
  document.querySelector(".modal").style.display = "flex";
  showLogin();
});
document.querySelector(".close-btn").addEventListener("click", () => {
  // Ẩn modal khi đóng
  document.querySelector(".modal").style.display = "none";
  showLogin();
});
//Thông tin tài khoản
document.querySelector("#account-info-link").addEventListener("click", () => {
  // hien thi thong tin
  document.querySelector(".modal1").style.display = "flex";
})
document.querySelector(".modal1").addEventListener("click", (event) => {
  // Kiểm tra nếu người dùng click vào phần nền bên ngoài (không phải nội dung bên trong)
  if (event.target.classList.contains("modal1")) {
    document.querySelector(".modal1").style.display = "none";
  }
});
//



function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
  document.querySelector(".tab-container .tab.active-tab").classList.remove("active-tab");
  document.querySelector(".tab-container .tab").classList.add("active-tab");
}

function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.querySelector(".tab-container .tab.active-tab").classList.remove("active-tab");
  document.querySelectorAll(".tab-container .tab")[1].classList.add("active-tab");
}

function register() {
  const username = document.getElementById("register-username").value;
  const fullname = document.getElementById("register-fullname").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const phoneNumber = document.getElementById("phone-number").value;
  let presentId = parseInt(localStorage.getItem("presentId"));
 /* const address1 = document.getElementById("infoaddress").value ='';
  const address2 = document.getElementById("provinces").value=0;
  const address3 = document.getElementById("districts").value=0;
  const address4 = document.getElementById("wards").value=0;*/
if (fullname.length == 0) {
  document.querySelector('.form-message-fullname').innerHTML = 'Vui lòng nhập họ vâ tên';
  document.getElementById('register-fullname').focus();
  return;
} else if (fullname.length < 3) {
  document.getElementById('register-fullname').value = '';
  document.querySelector('.form-message-fullname').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
  return;
} else {
  document.querySelector('.form-message-fullname').innerHTML = '';
}
if (password.length == 0) {
  document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu';
  return;
} else if (password.length < 6) {
  document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
  document.getElementById('register-password').value = '';
  return;
} else {
  document.querySelector('.form-message-password').innerHTML = '';
}
if (confirmPassword == 0) {
  document.querySelector('.form-message-password-confi').innerHTML = 'Vui lòng nhập lại mật khẩu';
  return;
} else if (confirmPassword !== password) {
  document.querySelector('.form-message-password-confi').innerHTML = 'Mật khẩu không khớp';
  document.getElementById('confirm-password').value = '';
  return;
} else {
  document.querySelector('.form-message-password-confi').innerHTML = '';
}
if (phoneNumber.length == 0) {
  document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập vào số điện thoại';
  return;
} else if (!/^\d{10}$/.test(phoneNumber)) {
  document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
  document.getElementById('phone-number').value = '';
  return;
} else {
  document.querySelector('.form-message-phone').innerHTML = '';
}

  if (!presentId) {
    presentId = 10001;
  }

  if (!username || !password || !confirmPassword || !phoneNumber || !fullname /*|| !address2 || !address3 || !address4*/) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không khớp!");
    return;
  }
  const userAccountList = JSON.parse(localStorage.getItem("userAccountList")) || [];

  const isUsernameTaken = userAccountList.some((user) => user.username === username);
  if (isUsernameTaken) {
    alert("Tên đăng nhập đã tồn tại!");
    return;
  }

  const newUser = {
    userId: presentId,
    username,
    fullname,
    password,
    phoneNumber,
    address1:'',
    address2:0,
    address4:0,
    address3:0,
  };

  userAccountList.push(newUser);

  localStorage.setItem("userAccountList", JSON.stringify(userAccountList));
  localStorage.setItem("presentId", presentId + 1);
   // Sau khi đăng ký thành công, hiển thị thông tin người dùng
  alert("Đăng kí thành công!");
  showLogin();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const userAccountList = JSON.parse(localStorage.getItem("userAccountList")) || [];

  const matchedUser = userAccountList.find(
    (user) => user.username === username && user.password === password
  );

  if (matchedUser) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("userLogin", JSON.stringify(matchedUser));
    // getuserid(username,password);
    window.location.href = "index.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

// Hàm hiển thị thông tin người dùng trong tài khoản
function displayUserInfo(user) {
  // Lấy các trường thông tin từ người dùng đã đăng nhập
  document.getElementById("infoname").value = user.fullname;
  document.getElementById("infophone").value = user.phoneNumber;
  document.getElementById("infoemail").value = user.email;
  document.getElementById("infoaddress").value = user.address1;
  // Điền vào các dropdown tỉnh, quận, phường
  document.getElementById("provinces").value = user.address2;
  populateDistricts(); // Gọi hàm để điền quận huyện dựa trên tỉnh
  document.getElementById("districts").value = user.address3;
  populateWards(); // Gọi hàm để điền phường xã dựa trên quận
  document.getElementById("wards").value = user.address4;
  // Đặt sự kiện lưu thay đổi thông tin người dùng
  document.getElementById("save-info-user").addEventListener("click", function() {
      changeInformation(user);
  });

  // Đặt sự kiện thay đổi mật khẩu
  document.getElementById("save-password").addEventListener("click", function() {
      changePassword(user);
  });
}

// Hàm thay đổi thông tin người dùng
function changeInformation(user) {
  const updatedFullname = document.getElementById("infoname").value;
  const updatedPhone = document.getElementById("infophone").value;
  const updatedEmail = document.getElementById("infoemail").value;
  const updatedAddress = document.getElementById("infoaddress").value;
  const updatedAddress2 = document.getElementById("provinces").value;
  const updatedAddress3 = document.getElementById("districts").value;
  const updatedAddress4 = document.getElementById("wards").value;

  // Cập nhật thông tin vào đối tượng người dùng
  user.fullname = updatedFullname;
  user.phoneNumber = updatedPhone;
  user.email = updatedEmail;
  user.address1 = updatedAddress.trim();
  user.address2 = updatedAddress2.trim();
  user.address3 = updatedAddress3.trim();
  user.address4 = updatedAddress4.trim();

  // Lưu lại thông tin người dùng vào localStorage
  const userAccountList = JSON.parse(localStorage.getItem("userAccountList"));
  const index = userAccountList.findIndex((u) => u.username === user.username);
  userAccountList[index] = user; // Cập nhật người dùng trong danh sách
  localStorage.setItem("userAccountList", JSON.stringify(userAccountList));
  localStorage.setItem("userLogin", JSON.stringify(user));

  alert("Cập nhật thông tin thành công!");
}

// Hàm thay đổi mật khẩu
function changePassword(user) {
  const currentPassword = document.getElementById("password-cur-info").value;
  const newPassword = document.getElementById("password-after-info").value;
  const confirmPassword = document.getElementById("password-comfirm-info").value;

  // Kiểm tra mật khẩu cũ và mật khẩu mới
  if (currentPassword !== user.password) {
      alert("Mật khẩu hiện tại không đúng!");
      return;
  }

  if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới không khớp!");
      return;
  }

  if (newPassword.length < 6) {
      alert("Mật khẩu mới phải dài hơn 6 ký tự!");
      return;
  }

  // Cập nhật mật khẩu
  user.password = newPassword;

  // Lưu lại thông tin vào localStorage
  const userAccountList = JSON.parse(localStorage.getItem("userAccountList"));
  const index = userAccountList.findIndex((u) => u.username === user.username);
  userAccountList[index] = user;
  localStorage.setItem("userAccountList", JSON.stringify(userAccountList));
  localStorage.setItem("userLogin", JSON.stringify(user));

  alert("Đổi mật khẩu thành công!");
}

// Kiểm tra và hiển thị thông tin khi trang tải
document.addEventListener("DOMContentLoaded", function() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (userLogin) {
      displayUserInfo(userLogin); // Hiển thị thông tin người dùng
  }
});


// Hàm để khởi tạo các tỉnh vào dropdown
function populateProvinces() {
  const provinces = JSON.parse(localStorage.getItem('Tinh_TP')) || [];
  const provincesSelect = document.getElementById('provinces');
  
  provincesSelect.innerHTML = '<option value="">Chọn Tỉnh / Thành phố</option>'; // Reset dropdown
  
  provinces.forEach(province => {
      const option = document.createElement('option');
      option.value = province.TinhID;
      option.textContent = province.TinhName;
      provincesSelect.appendChild(option);
  });
}

// Hàm để hiển thị quận/huyện khi chọn tỉnh
function populateDistricts() {
  const provinceId = document.getElementById('provinces').value;
  const districts = JSON.parse(localStorage.getItem('Quan_Huyen')) || [];
  const districtsSelect = document.getElementById('districts');
  
  if (!provinceId) {
      districtsSelect.innerHTML = '<option value="">Chọn Quận / Huyện</option>';
      return;
  }
  
  const filteredDistricts = districts.filter(district => district.TinhID === provinceId);
  
  districtsSelect.innerHTML = '<option value="">Chọn Quận / Huyện</option>'; // Reset dropdown
  filteredDistricts.forEach(district => {
      const option = document.createElement('option');
      option.value = district.Quan_HuyenID;
      option.textContent = district.Quan_HuyenName;
      districtsSelect.appendChild(option);
  });
}

// Hàm để hiển thị phường/xã khi chọn quận/huyện
function populateWards() {
  const districtId = document.getElementById('districts').value;
  const wards = JSON.parse(localStorage.getItem('Phuong_Xa')) || [];
  const wardsSelect = document.getElementById('wards');
  
  if (!districtId) {
      wardsSelect.innerHTML = '<option value="">Chọn Phường / Xã</option>';
      return;
  }
  
  const filteredWards = wards.filter(ward => ward.Quan_HuyenID === districtId);
  
  wardsSelect.innerHTML = '<option value="">Chọn Phường / Xã</option>'; // Reset dropdown
  filteredWards.forEach(ward => {
      const option = document.createElement('option');
      option.value = ward.PhuongID;
      option.textContent = ward.PhuongName;
      wardsSelect.appendChild(option);
  });
}

// Hàm khởi tạo dropdown và các sự kiện
window.onload = function() {
  populateProvinces();
  
  // Gắn sự kiện onchange cho các dropdown
  document.getElementById('provinces').addEventListener('change', populateDistricts);
  document.getElementById('districts').addEventListener('change', populateWards);
};
// tìm kiếm drop
// Lấy các phần tử
const searchBar = document.querySelector('#searchh');
const searchDropdown = document.querySelector('#search-results');

// Hiển thị dropdown khi nhấn vào search bar
searchBar.addEventListener('click', function (event) {
  // Kiểm tra nếu dropdown không có lớp 'show' thì thêm nó vào
  searchDropdown.classList.toggle('show'); 
  event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
});

// Ẩn dropdown khi nhấn bên ngoài
document.addEventListener('click', function (event) {
  // Nếu click bên ngoài search-bar và searchDropdown thì ẩn dropdown
  if (!searchBar.contains(event.target) && !searchDropdown.contains(event.target)) {
    searchDropdown.classList.remove('show'); // Loại bỏ lớp 'show'
  }
});