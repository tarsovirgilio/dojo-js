/**
 * Object.defineProperty(): O método Object.defineProperty() define uma nova
 * propriedade diretamente em um objeto, ou modifica uma propriedade já existente
 * em um objeto, e retorna o objeto.
 * 
 * Ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * 
 * Object.defineProperties(): O método Object.defineProperties() define uma nova
 * propriedade ou modifica uma existente no objeto, retornando o objeto.
 * 
 * Ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
 */

function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: true,
        configurable: false,
    });
    
    Object.defineProperties(this, {
        valueOfStock: {
            enumerable: true,
            value: () => (this.price * this.stock),
            writable: true,
            configurable: false,
        },
        applyDiscount: {
            enumerable: true,
            value: (discount) => {
                this.price = this.price - ((discount*price)/100);
                return this.price;
            },
            writable: true,
            configurable: false,
        }
    })
}

const product = new Product('Camisa', 24.9, 10);

console.log('product: ', product);

console.log('product props: ', Object.keys(product));

console.log('product total value in stock: ', product.valueOfStock());

console.log('product apply discount: ', product.applyDiscount(10));