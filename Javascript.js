let okay =document.querySelector('button.hover');
hover.addEventlistener('click',applyUopdate);

const myFirstPromise =new Promise((resolve, reject) => {
    let success=true;
    if(success){
        resolve("The Data Arrived Safely!")
    }
    else{
        reject("Something Went Wrong")
    }
});
