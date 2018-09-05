  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      console.log(response)
      const blogContainer = document.querySelector('#blog-go-here')
    })

    for (let i = 0; i < response.data.length; i ++){
      console.log(response.data)
    }
