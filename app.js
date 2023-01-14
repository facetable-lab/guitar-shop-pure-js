let CATALOG = [];

function render() {
    //Колличество товаров в локальном хранилище
    const productsStore = localStorageUtil.getProducts();

    //Рендер хедера
    headerPage.render(productsStore.length);

    //Рендер товаров
    productsPage.render();
}

// server/catalog.json
fetch('https://json.extendsclass.com/bin/bd136e2d2889').then(r => r.json()).then(body => {
    CATALOG = body;
    render();
}).catch(err => {
    console.error(err)
})




