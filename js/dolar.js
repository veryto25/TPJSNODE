// Cotizacion dolar
const apiButton = document.getElementById('apiButton')
const apiData = document.getElementById('apiData')
const url = 'https://mercados.ambito.com//dolar/oficial/variacion'

const obtenerDolar = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        apiData.innerText = `Precio de Venta: ${data.venta}\nPrecio de Compra: ${data.compra}\nFecha: ${data.fecha}`;
        })


        .catch(e => console.log(new Error(e)))
}
apiButton.addEventListener('click', obtenerDolar);