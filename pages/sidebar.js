

const mysidebar = new Promise(function(myResolve, myReject) {
    const item = [{
            "no": "1",
            "name": "home",
            "url": "./home/index.html",
            "category": "main",
            "icon": "bi bi-house",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "2",
            "name": "about",
            "url": "./about/index.html",
            "category": "main",
            "icon": "bi bi-person-circle",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "3",
            "name": "blog",
            "url": "./blog/index.html",
            "category": "main",
            "icon": "bi bi-file-post",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "4",
            "name": "apps",
            "url": "./apps/index.html",
            "category": "main",
            "icon": "bi bi-grid",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "5",
            "name": "newsletter",
            "url": "./newsletter/index.html",
            "category": "main",
            "icon": "bi bi-envelope",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "6",
            "name": "donate",
            "url": "./donate/index.html",
            "category": "main",
            "icon": "bi bi-gift",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "7",
            "name": "contacts",
            "url": "./contacts/index.html",
            "category": "main",
            "icon": "bi bi-telephone",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "8",
            "name": "tags",
            "url": "./tags/index.html",
            "category": "main",
            "icon": "bi bi-tag",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "9",
            "name": "randoms",
            "url": "./randoms/index.html",
            "category": "main",
            "icon": "bi bi-sunglasses",
            "icon_clicked": "",
            "status":"",
            "description": "random app that i made"
        },
        {
            "no": "10",
            "name": "-",
            "url": "./tags/index.html",
            "category": "main",
            "icon": "",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "11",
            "name": "budget",
            "url": "./budget/index.html",
            "category": "personal",
            "icon": "bi bi-calendar-event",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "12",
            "name": "event",
            "url": "./event/index.html",
            "category": "personal",
            "icon": "bi bi-calendar-event",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "13",
            "name": "education",
            "url": "./education/index.html",
            "category": "personal",
            "icon": "bi bi-mortarboard-fill",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "14",
            "name": "billing",
            "url": "./billing/index.html",
            "category": "personal",
            "icon": "bi bi-file-post",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "15",
            "name": "payment",
            "url": "./payment/index.html",
            "category": "personal",
            "icon": "bi bi-cash-coin",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "16",
            "name": "kanban",
            "url": "./kanban/index.html",
            "category": "personal",
            "icon": "bi bi-file-post",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "17",
            "name": "games",
            "url": "./games/index.html",
            "category": "personal",
            "icon": "bi bi-credit-card",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "18",
            "name": "video",
            "url": "./video/index.html",
            "category": "personal",
            "icon": "bi bi-credit-card",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "19",
            "name": "images",
            "url": "./images/index.html",
            "category": "personal",
            "icon": "bi bi-images",
            "icon_clicked": "",
            "status":"",
            "description": ""
        },
        {
            "no": "20",
            "name": "event",
            "url": "./event/index.html",
            "category": "freelance",
            "icon": "bi bi-calendar-event",
            "icon_clicked": "",
            "status":"",
            "description": ""
        }
    ];


    // "Producing Code" (May take some time) with added 1 second delay
    setTimeout(() => {
        myResolve(item);
        myReject({
            status: "404",
            error: "Something goes wrong" + " 😔"
        }); // when error
    }, 0); //set time here
});

// main function here
(function sidebar() {
    const element = document.getElementById("sidebar")
    const data = mysidebar
    const page = "about"
    const root = "../../"
    const config = {
    	title: page,
    	url:root
    }

    //const data = "https://jsonplaceholder.typicode.com/posts"
    /*
      using promise to load data 
    */
    getPosts(data).then(sidebar => {
        const template = getSidebar(sidebar,config);
        element.innerHTML = template;
    });
}(mysidebar))


async function getPosts(data) {
    const url = data;
    //const response = await fetch(url);
    console.log(data)
    return await data;
}

const getSidebar = (posts,config) => {
	const root = config.url  //"../" declare root directory
	const active = config.active // get page

//const active = (sidebar.name == "blog") ? "active" : '';
//console.log(posts)
const newState = posts.map(obj =>
    obj.name === config.page ? { ...obj, status: "active", url:root+obj.url } : obj
);

/* create list of sidebar item */
const sidebar = newState.slice(0, 3).map(item).join("");
  return ` <!-- search bar -->
               <div class="list-group-item  list-group-item-light p-3" href="#!">
                  <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Search . . . " aria-label="Recipient's username" aria-describedby="basic-addon2">
                  </div>
               </div> 
              <!-- sidebar item -->
               ${sidebar}
              <!-- end sidebar item -->
  `    
}

function item(sidebar) {
	const url = sidebar.url
	const active = sidebar.status
	const name = sidebar.name
	const icon = sidebar.icon

	//const active = ""
	//const active = (sidebar.name == "blog") ? "active" : '';
    return `
   	 <a class="list-group-item list-group-item-action list-group-item-light p-3 ${status}" 
   	 href="${url}" ><i class="${icon}" style="padding: 8px;"></i>
   	 ${name}</h5></a>
   `;
}