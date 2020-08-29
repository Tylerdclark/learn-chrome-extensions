const printChildren = (child) => {
    if (child.firstChild === null) {
        console.log(child);
    } else{
        for (grandBaby in child.childNodes){
            printChildren(grandBaby)
        }
    }

}

let contentText = document.getElementsByTagName('body');
//console.log(contentText[0].children);
contentText[0].childNodes.forEach(n => {
    printChildren(n)
})
// for (let i = 0; i < contentText.children.length; i++) {
//     console.log(contentText.children[i].tagName);
//   }

