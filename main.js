  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      for (let i = 0; i < response.data.length; i ++){
        console.log(response.data)
      }
      // console.log(response)
      const blogContainer = document.querySelector('#blog-go-here')
    })
