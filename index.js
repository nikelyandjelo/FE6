const URL = 'https://randomuser.me/api';

function dataParam(obj){
    const div = document.getElementById("div")
    div.classList = "done"
    //console.log(obj)
    document.images[0].src = obj[0].picture.large
    document.getElementById("name").innerHTML = `${obj[0].name.title} ${obj[0].name.first} ${obj[0].name.last}`
    document.getElementById("country").innerHTML= obj[0].location.country
    document.getElementById("postcode").innerHTML = obj[0].location.postcode
    document.getElementById("phone").innerHTML = obj[0].phone
}


function getPromise() {

    let p = new Promise(function (resolve, reject){
        setTimeout(()=>{
            const fPromise = fetch(URL);
            console.log('Fetch' )
            resolve(fPromise)
        }, 200)

    })

    p.then(res =>{
        const p2 = new Promise(function (resolve, reject){
            setTimeout(()=>{
                res = res.json()
                console.log('Response' )
                resolve(res)
            }, 20)
        })
    
    p2.then(r =>{
        new Promise(function (resolve, reject){
            setTimeout(()=>{
                r = dataParam(r.results); 
                console.log('Resault' )
                resolve(r)
        }, 20)
    })   
})})}