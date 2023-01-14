class Error {
    render() {
        const html = `
        <div class="error-container">
            <div class="error-msg">   
                <h2>Нет доступа к серверу товаров.</h2>
                <h3>Попробуйте зайти позже.</h3>
            </div>   
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();