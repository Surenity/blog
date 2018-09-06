  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      const blogContainer = document.querySelector('#blog-go-here')
        for (let i = 0; i < response.data.length; i ++){
          console.log(response.data)
          // something needs to go here to look through the responce to pull out all the blogs

        }
      // console.log(response)
    })
