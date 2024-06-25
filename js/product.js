function getQueryParams() {
    const params = {};
    window.location.search.slice(1).split("&").forEach(function (item) {
        const pair = item.split("=");
        params[pair[0]] = decodeURIComponent(pair[1]);
    });
    return params;
}

function loadProduct() {
    const params = getQueryParams();
    const productId = params.id;

    fetch('../json/product.json')
        .then(response => response.json())
        .then(productData => {
            const product = productData[productId];

            if (product) {
                document.getElementById('product-title').innerText = product.title;
                document.getElementById('product-price').innerText = product.price;
                document.getElementById('product-img').src = '../' + product.image;

                const colorSelector = document.getElementById('color-selector');
                product.colors.forEach((color, index) => {
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = 'color';
                    input.id = `color-${index}`;
                    input.value = color;
                    colorSelector.appendChild(input);

                    const label = document.createElement('label');
                    label.htmlFor = `color-${index}`;
                    label.style.backgroundColor = color;
                    colorSelector.appendChild(label);
                });

                const sizeSelector = document.getElementById('size-selector');
                product.sizes.forEach((size, index) => {
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = 'size';
                    input.id = `size-${index}`;
                    input.value = size;
                    sizeSelector.appendChild(input);

                    const label = document.createElement('label');
                    label.htmlFor = `size-${index}`;
                    label.innerText = size;
                    sizeSelector.appendChild(label);
                });
            } else {
                document.getElementById('product-title').innerText = 'Prodotto non trovato';
            }
        })
        .catch(error => {
            console.error('Errore nel caricamento del file JSON:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadProduct);
