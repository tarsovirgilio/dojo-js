function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    let privateStock = stock;
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: () => privateStock,
        set: (value) => {
            if(typeof value !== 'number') {
                throw new Error('invalid number');
                return;
            }
            privateStock = value;
        }
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

console.log('product total value in stock: ', product.valueOfStock());

console.log('product apply discount: ', product.applyDiscount(10));

