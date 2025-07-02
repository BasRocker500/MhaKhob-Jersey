document.addEventListener('DOMContentLoaded', function() {
    // สมมติว่ามี API สำหรับดึงสินค้าที่ /api/products
    // fetch('/api/products')
    //     .then(response => response.json())
    //     .then(products => {
    //         const productListDiv = document.getElementById('product-list');
    //         productListDiv.innerHTML = ''; // Clear existing content

    //         products.forEach(product => {
    //             const productItem = `
    //                 <div class="product-item">
    //                     <img src="${product.imageUrl}" alt="${product.name}">
    //                     <h3>${product.name}</h3>
    //                     <p>${product.description}</p>
    //                     <p class="price">ราคา: ฿${product.price.toFixed(2)}</p>
    //                     <button>Add to Cart</button>
    //                 </div>
    //             `;
    //             productListDiv.innerHTML += productItem;
    //         });
    //     })
    //     .catch(error => console.error('Error fetching products:', error));

    // หากยังไม่มี Back-end ที่สมบูรณ์ คุณสามารถใส่ข้อมูลสินค้าแบบ Static ก่อนได้
    const staticProduct = {
        name: "POLO MhaKhob",
        description: "เสื้อโปโล MhaKhob ผลิตจากผ้าคุณภาพดี สวมใส่สบาย เหมาะสำหรับทุกโอกาส",
        price: 899.00,
        imageUrl: "Screenshot 2025-06-26 174150.png" // ใช้ชื่อไฟล์รูปภาพที่คุณส่งมา
    };

    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = `
        <div class="product-item">
            <img src="${staticProduct.imageUrl}" alt="${staticProduct.name}">
            <h3>${staticProduct.name}</h3>
            <p>${staticProduct.description}</p>
            <p class="price">ราคา: ฿${staticProduct.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    `;
});