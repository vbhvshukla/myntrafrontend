let bagItems;
onPageLoad();
function onPageLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayBagIcon();
    displayItemsonHomePage();
}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    console.log(bagItems);
    displayBagIcon();

}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else {
        bagItemCountElement.style.visibility = 'hidden';
    }
     
}
function displayItemsonHomePage(){
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement){
        return;
    }
    let innerHTML ='';
    //This loop appends 8 html divs in innerHTML and then
    items.forEach(item=>{
        innerHTML += `
        <div class="item-container">
            <img src="${item.image}" alt="item image" class="item-image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company-name">
                ${item.company}
            </div>
            <div class="item-name">
                ${item.item_name}
            </div>
            <div class="price">
                <span class = "current-price">${item.current_price}</span>
                <span class = "original-price">${item.original_price}</span>
                <span class = "discount">${item.discount_percentage}% off</span>
            </div>
            <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to bag</button>
        </div>`
    });
    // This 8 divs are saved in inner HTML so the by using the function below we are able to generate 8 divs in the itemsContainerElement.innerhtml
    itemsContainerElement.innerHTML = innerHTML;
}
