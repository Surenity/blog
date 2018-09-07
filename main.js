  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      const blogContainer = document.querySelector('#blog-go-here')
        for (let i = 0; i < response.data.length; i ++){
          console.log(response.data)
          // something needs to go here to look through the responce to pull out all the blogs
          // 1. Create desired element
          // 2. Configure said element
          // 3. Append element to parent

          // let title = document.createElement('div')

          let random = document.createElement("p")
          let textrandom = document.createTextNode("words and things")
          random.appendChild(textrandom)
          document.getElementById("blogContainer").appendChild(random)


        }
      // console.log(response)
    })
