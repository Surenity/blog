  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      console.log(response)
      const blogContainer = document.querySelector('#blog-go-here')
    })
