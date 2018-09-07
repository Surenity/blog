  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      const blogContainer = document.querySelector('#blog-go-here')
        for (let i = 0; i < response.data.length; i ++){
          console.log(response.data)
          // something needs to go here to look through the responce to pull out all the blogs
          // 1. Create desired element
          // 2. Configure said element
          // 3. Append element to parent

          let blogarea = document.createElement('div')
          let blogtitle = document.createTextNode(response.data[i].title)
          let blogbody = document.createTextNode(response.data[i].body)
          blogarea.appendChild(blogtitle)
          blogarea.appendChild(blogbody)
          document.getElementById("blog-go-here").appendChild(blogarea)


          // let random = document.createElement("p")
          // let textrandom = document.createTextNode(response.data[i].title)
          // random.appendChild(textrandom)
          // console.log(blogContainer)
          // document.getElementById("blog-go-here").appendChild(random)


        }
      // console.log(response)
    })
