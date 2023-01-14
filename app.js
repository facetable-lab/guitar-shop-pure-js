let CATALOG = [];

function render() {
    //Колличество товаров в локальном хранилище
    const productsStore = localStorageUtil.getProducts();

    //Рендер хедера
    headerPage.render(productsStore.length);

    //Рендер товаров
    productsPage.render();
}

//Рендер спиннера
spinnerPage.render();

// server/catalog.json
fetch('https://json.extendsclass.com/bin/bd136e2d2889X').then(r => r.json()).then(body => {
    CATALOG = body;
    spinnerPage.handleClear()
    render();
}).catch(err => {
    errorPage.render();
});




