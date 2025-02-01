
function getmovies(){
    return JSON.parse(localStorage.getItem('movies')) || [];
}


function setmovies(movies){
    localStorage.setItem('movies',JSON.stringify(movies));
}

document.getElementById('addfilm').addEventListener('click',add)


function add(){


    let title=document.getElementById('titleform').value;
    let réalisateur=document.getElementById('réalisateur').value;
    let Discription=document.getElementById('Discription').value;
    let date=document.getElementById('date').value;
    let filmimage=document.getElementById('filmimage').value;
   

     let movie={
        title,
        réalisateur,
        Discription,
        filmimage,
        date
     }

   const movies=getmovies();

   movies.push(movie);

   setmovies(movies);

   document.getElementById('titleform').value="";
   document.getElementById('réalisateur').value="";
   document.getElementById('Discription').value="";
   document.getElementById('date').value="";
   document.getElementById('filmimage').value="";

   location.assign("Hom.html");

 
}




function displayFilms(){
  
    const containner=document.getElementById('filmcontainner');
    containner.innerHTML=" ";

    const movies=getmovies();

    console.log(movies);

    movies.forEach((movie,index)=>{


      return  containner.innerHTML+=`

            <div class="card" style="width: 20rem;">
                <img src="${movie.filmimage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    
                    <a href="#" class="btn"style="background-color:rgb(26, 216, 165); color: #fff; ">details..</a>
                    <a href="#" class="btn"style="background-color:#1ab2d8; color: #fff; ">modifier</a>
                    <a href="#" onclick="suppFilm(${index})" id="dellet"   class="btn"style="background-color: crimson; color: #fff; ">supprimer</a>

                </div>
                </div>
        `;

    })   
}



displayFilms();

function suppFilm(index){

    let movies=getmovies();
    movies.splice(index,1);

    setmovies(movies);
    displayFilms();

}
































// document.getElementById('search').addEventListener('input', function() {
//     let filter = this.value.toLowerCase();
//     let movies = document.querySelectorAll('.movie');
//     movies.forEach(movie => {
//         let title = movie.getAttribute('data-title').toLowerCase();
//         if (title.includes(filter)) {
//             movie.style.display = 'block';
//         } else {
//             movie.style.display = 'none';
//         }
//     });
// });
