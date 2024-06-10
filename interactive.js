  const wrapper = document.querySelector(".wrapper");

  const button = document.querySelector("button");

  button.addEventListener("click",()=>{
    console.log("Clicked");
    let num = 6;
    addNewImage(num);
  })

  function addNewImage(num){
    while(num > 0){
      const newImageElement = document.createElement("img");
      newImageElement.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*3000)}`;
      wrapper.appendChild(newImageElement);
      num--;
    }
   
  }