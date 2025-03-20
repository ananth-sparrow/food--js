let buttons=document.querySelectorAll(".btn");
let boxes=document.querySelectorAll(".box");
let searchbox=document.querySelector("#search");

searchbox.addEventListener("keyup",(e)=>{
searchtext=e.target.value.toLowerCase().trim();
boxes.forEach((box)=>{
    let data=box.dataset.item;
   
    if(data.includes(searchtext)){
        box.style.display="block";
    }
    else{
        box.style.display="none";
    }
});

buttons.forEach((button)=>{
    button.classList.remove("btn-clicked");

});
buttons[0].classList.add("btn-clicked");
});
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        let filter=e.target.dataset.filter;


        boxes.forEach((box=>{
            if(filter=="alt"){
                box.style.display="block";
            }
            else{
                let boxfilter=box.dataset.item;
                if(filter==boxfilter){
                    box.style.display="block";
                }
                else{
                    box.style.display="none";
                }
            }
        }));
    });
});


function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove("btn-clicked");

    });
    e.target.classList.add("btn-clicked");
}
