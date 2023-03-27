const products = [
    {id: '1', nombre: 'Nintendo Switch', valor: 300000, stock: 17, categoria:'consolas', imagen:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nintendo_Switch_Console.png'},
    {id: '2', nombre: 'Playstation 5', valor: 800000, stock: 15 , categoria:'consolas', imagen:'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$'},
    {id: '3', nombre: 'Xbox Series X', valor: 550000, stock: 12 , categoria:'consolas', imagen:'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png'},
    {id: '4', nombre: 'Pokemon Escarlata', valor: 55000, stock: 7, categoria:'video-juegos', imagen:'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a6/latest/20220602081633/Pok%C3%A9mon_Escarlata_logo.png/300px-Pok%C3%A9mon_Escarlata_logo.png'},
    {id: '5', nombre: 'Mario Party', valor: 55000, stock: 22, categoria:'video-juegos', imagen:'https://cdnx.jumpseller.com/multihogar/image/30251188/resize/1090/1090?1671045370'},
    {id: '6', nombre: 'God of War Ragnarok (PS5)', valor: 65000, stock: 13, categoria:'video-juegos', imagen:'https://fhalcongaming.com/wp-content/uploads/2022/04/GOWRAGNAROKPS4.png'},
    {id: '7', nombre: 'Halo Infinite (XBOX)', valor: 50000, stock: 3, categoria:'video-juegos', imagen:'https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Halo%20Inf-cknta3tef00f601whbfd6x76h.png'},
    {id: '8', nombre: 'Switch Controller', valor: 90000, stock: 29, categoria:'otros', imagen:'https://www.pngkey.com/png/full/876-8763356_nintendo-switch-pro-controller-nintendo-switch-pro-controller.png'},
    {id: '9', nombre: 'Control Xbox', valor: 35000, stock: 24, categoria:'otros', imagen:'https://assets.xboxservices.com/assets/13/85/138560bf-8a3b-47d2-b32c-ab5a053a25ab.png?n=XBX_A-BuyBoxBGImage04-D.png'},
    {id: '10', nombre: 'Elden Ring (PC)', valor: 45000, stock: 7,  categoria:'video-juegos', imagen:'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/eldenring_new.png'},
    {id: '11', nombre: 'Elden Ring (PS5)', valor: 55000, stock: 10,  categoria:'video-juegos', imagen:'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/eldenring_new.png'},
    {id: '12', nombre: 'Catan - El Juego', valor: 25000, stock: 15,  categoria:'otros', imagen:'https://deviramericas.com/wp-content/uploads/2013/06/CATbas34.png'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (nombreCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.categoria === nombreCategoria))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}