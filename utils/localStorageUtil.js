class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage != null)
            return JSON.parse(productsLocalStorage);

        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let isPushedProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            isPushedProduct = true;
        } else
            products.splice(index, 1);

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return {isPushedProduct, products}
    }
}

const localStorageUtil = new LocalStorageUtil();