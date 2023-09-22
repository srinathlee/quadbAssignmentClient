let status_container = document.getElementById("status-board-section")

let count=1


// _________________progress bar_____________________
const progressbar=document.querySelector(".progress_bar");
const progress_value=document.querySelector(".progress_value");
console.log(progressbar,progress_value)
// progressbar.style.background="red"
let initial_value=1;
let final_value=60;

let progress_id=setInterval(() => {
    progressbar.style.background=`conic-gradient(
        #3DC6C1 ${initial_value *6}deg,
        white ${initial_value *6}deg
    )`;
    if(initial_value==final_value){
        initial_value=0;
    }
    progress_value.textContent=initial_value
    initial_value+=1;
    console.log("hello")
    
}, 1000);  


function createStatusBars(obj) {


    // createing elements______________________________________________________________
    let new_status_container = document.createElement("tr")

    let status_id = document.createElement("td");
    let status_id_value=document.createElement("h4")
    status_id_value.textContent = count;

    let platform_container = document.createElement("td");
    let platform_name = document.createElement("h4");
    platform_name.textContent = obj.name;
    platform_container.append(platform_name)


    let last_price = document.createElement("td");
    let last_price_value=document.createElement("h4");
    last_price_value.textContent = obj.last;


    let sell_buy = document.createElement("td");
    let sell_buy_value=document.createElement("h4");
    sell_buy_value.textContent = `${obj.buy}/${obj.sell}`;

    let difference = document.createElement("td");
    let difference_value=document.createElement("h4");
    difference_value.textContent = obj.volume;

    let savings = document.createElement("td");
    let savings_value=document.createElement("h4");
    savings_value.textContent = obj.base_unit;



    // ______________________________________appending_____________________________________

    status_id.append(status_id_value)
    last_price.append(last_price_value)
    sell_buy.append(sell_buy_value)
    difference.append(difference_value)
    savings.append(savings_value)
    


    new_status_container.append(status_id);
    new_status_container.append(platform_container);
    new_status_container.append(last_price);
    new_status_container.append(sell_buy);
    new_status_container.append(difference);
    new_status_container.append(savings);


    status_container.append(new_status_container)



        // _____________________________________styling_______________________________________

        new_status_container.classList.add("coin-bar-item")
        status_id_value.classList.add("item_element")
        last_price_value.classList.add("item_element")
        sell_buy_value.classList.add("item_element")
        difference_value.classList.add("item_element")
        savings_value.classList.add("item_element")
        platform_name.classList.add("item_element")
  count+=1;

}




// fetching________________________________________________

fetch("https://quadbserver.onrender.com/api/getData")
.then((response)=>{return response.json()})
.then((data)=>{
    for (let i of data.data){ 

        createStatusBars(i)
    }
})
.catch((err)=>{console.log(err)})


// for (let i in [1,2,3,4,5,6,8,9]){

//     createStatusBars()
// }
