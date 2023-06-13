function searchProduct(keyword) {
    // 서버 api 요청을 시뮬레이션 하기위해 set Timeout 사용
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = ["Apple", "Banana", "Orange"];
            const filteredProducts = products.filter(product =>
                product.toLowerCase().includes(keyword.toLowerCase())
            );
            
            if(filteredProducts.length!==0){
                resolve(filteredProducts);
                console.log(`검색어 ${keyword} 로 검색된 상품 : `);
            }else{
                reject("error12");
            }
            
            
        }, 1000);
    });
}
searchProduct("asdasd")
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.error("상품 검색 중 오류 발생:", error);
    })

    