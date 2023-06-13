// ARMAZENAMENTO DE DADOS

const listRequest = []

// INSERINDO DADOS 
const postRequest = (name, date, quantity = 0) => {
    const id = 0

    listRequest.push(
        {
            idRequest: listRequest.length + 1,
            name,
            date,
            quantity
        }
    )
    // console.log(listRequest)
}

postRequest('CAMISA', '09/05/2023', 1200)
postRequest('CALÇA', '10/05/2023', 1400)
postRequest('BERMUDA', '13/05/2023', 5000)
postRequest('CUECA', '14/05/2023', 6000)
postRequest('BERMUDA', '14/05/2023', 6000)
postRequest('TÊNIS', '15/05/2023', 750)
postRequest('CAMISA', '17/05/2023', 510)
postRequest('CALÇA', '18/05/2023', 1200)


// CHAMADA DE TODOS OS DADOS
const getAllRequest = () => {

    listRequest.forEach((request) => {
        console.table(`idRequest: ${request.idRequest} Name:${request.name} | date: ${request.date} | quantity: ${request.quantity}`)
    });
}

//getAllRequest()


// FILTRO DE DADOS
const filterRequest = (type, search) => {

    if (type == 'date') {
        const filterType = listRequest.filter(item => item.date == search)
        console.log(filterType)
    } if (type == 'name') {
        const filterType = listRequest.filter(item => item.name == search)
        console.log(filterType)
    } if (type == 'idRequest') {
        const filterType = listRequest.filter(item => item.idRequest == search)
        console.log(filterType)
    }

}

filterRequest('date',  '10/05/2023')