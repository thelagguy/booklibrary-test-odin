//array to store the book objects*
arrBooks = [] ;

function Book(name,pages,author){
    this.uid =crypto.randomUUID() ;
    this.name =name  ;
    this.pages =pages ;
    this.author =author
}


function addtolib(name,pages,author){
    nBook = new Book(name,pages,author) ;
    //feed values to object create

    //send object to array/library^
    arrBooks.push(nBook);
}

entry =document.querySelector(".bookshelf tbody") ; //select body and then create new





const dlg =document.querySelector(".dlg") ;
const add_b =document.querySelector(".Add") ;
const close =document.querySelector(".Close") ;
const sub =document.querySelector(".Sub") ;

 let book =document.querySelector("#bname"); ///input values for books
 let pages =document.querySelector("#pages"); ///input values for books
 let author =document.querySelector("#author"); ///input values for books



add_b.addEventListener("click", (e) =>{
    dlg.showModal();
})

close.addEventListener("click", (e) =>{
    dlg.close() ;
})

function output(i){
    console.log(arrBooks[i]);
}
const row = document.querySelector(".bookshelf tbody") ;
let start = 0;
sub.addEventListener("click", (e) =>{
    book.validity.valueMissing ? book.setCustomValidity('Please enter something idiot') : book.setCustomValidity('');
    if (book.validity.valid){
        e.preventDefault() ;
       
        addtolib(book.value,pages.value,author.value) ;
       
        row.innerHTML =row.innerHTML + `<tr></tr>`
        
        for (let i =start ; i <arrBooks.length ; i++){
            row.innerHTML =row.innerHTML + 
            // `<tr id=${arrBooks[i].uid}>
                `<td>${arrBooks[i].uid}</td>
                <td>${arrBooks[i].name}</td>
                <td>${arrBooks[i].pages}</td>
                <td>${arrBooks[i].author}</td>
                <td><input id="tick" type="checkbox"></input></td>`
            // </tr>` ;
             output(i);
        }
        start += 1 ;
     dlg.close() ; //close after submit
    } 
   
})


