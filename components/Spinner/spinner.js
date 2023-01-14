class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
        <div class="spinner-container">
            <img src="components/Spinner/img/spinner.svg" alt="" class="spinner__img">
        </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();