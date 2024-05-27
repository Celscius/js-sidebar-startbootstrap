const config = {
    root: "../",
    active:""
}


// main function here
(function app() {
    const element = document.getElementById("app")
    const data = container
    const page = "about"
    
    //const data = "https://jsonplaceholder.typicode.com/posts"
    /*
      using promise to load data 
    */
    getPosts(data).then(posts => {
        //const template = getTemplate(posts);
        element.innerHTML = posts;
    });
}(container,mysidebar,mynavbar))


async function getPosts(data) {
    const url = data;
    //const response = await fetch(url);
    console.log(data)
    return await data;
}

function getTemplate(posts) {
  const title = "The Perfect Blend of Features <br> for your Company"     
  const description = "We bring the results while helping you achieve cost and time savings without taking on risk or management overhead."


  /*get only five data using .slice(0, 5)*/
  const apps = posts.slice(0, 5).map(postToRowView).join("");
  return `
    <section class="py-6 bg-light-primary">
   <div class="container">
      <div class="row justify-content-center text-center mb-4">
         <div class="col-xl-6 col-lg-8 col-sm-10">
            <h2 class="font-weight-bold pl ">${title}
            </h2>
            <p class="text-muted mb-0">${description}</p>
         </div>
      </div>
      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate" data-aos="fade-up">
        ${apps}
      </div>
   </div>
</section>
  `;
}

function postToRowView(data) {
  return `
   <div class="col my-3">
         <a href ="${data.url}">
            <div class="card border-hover-primary hover-scale">
               <div class="card-body">
                  <div class="text-primary mb-5">
                      <img src="${data.icon}" style="height:50px;width:50px;" alt="apps image"> 
                  </div>
                  <h6 class="font-weight-bold mb-3">${data.title}</h6>
                  <p class="text-muted mb-0">${data.description}</p>
               </div>
            </div>
            </a>
         </div>`
         ;
}

