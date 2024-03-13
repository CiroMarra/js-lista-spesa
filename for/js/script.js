// Consegna:
// Data una lista della spesa:
//Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.


// creo una variabile per selezionare l'elemento del DOM con id: "lista-spesa"
 const myLi = document.querySelector('#lista-spesa');
// controllo quello che c'è all'interno dell'array
 const list = ['Latte','Cacao','Insalata','Carote','Pomodori','Piatti pronti'];
// con l'utilizzo di un ciclo for prendo gli elementi contenuti dentro l'array e li stampo all'interno del DOM.
 for(let i = 0; i < list.length; i++){
         const product = list[i];
        
         myLi.innerHTML += `<li>${product}</li>`;
}



