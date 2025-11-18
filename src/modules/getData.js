const getData = () => {
    return fetch('https://test-90995-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}


export default getData