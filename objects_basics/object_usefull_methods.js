// Copiando objetos

const product = { name: 't-shirt', price: 20.99 }

const changedProduct = product;

const copyProduct = { ...product };

changedProduct.name = 'white t-shirt';

console.log('product: (side effected)', product);

console.log('changedProduct: ', changedProduct);

console.log('copyProduct: ', copyProduct);

// Copiando com metodo Object.assign()

const anotherCopyProduct = Object.assign({}, product);

changedProduct.name = 'black t-shirt';

console.log('product: (side effected)', product);

console.log('changedProduct: (side effected)', changedProduct);

console.log('anotherCopyProduct: ', anotherCopyProduct);

// listando propriedades de um objeto em um array

console.log('product keys: ', Object.keys(product));

// listando valores de um objeto em um array

console.log('product values: ', Object.values(product));

// listando as propriedades e valores de um objeto em uma matriz

console.log('product entries: ', JSON.stringify(Object.entries(product)));

// descrevendo a propriedade de um objeto

console.log('product property name description: ', Object.getOwnPropertyDescriptor(product, 'name'));