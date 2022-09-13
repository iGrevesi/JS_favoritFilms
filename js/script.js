
'use strict';

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let genre = document.querySelector('.promo__genre'),
        promo = document.querySelectorAll('.promo__adv img');
    
        genre.textContent='ДРАМА';
    
    const deleteAdv = (promo) => {
      promo.forEach(item => {
        item.remove();
      });
    };   
     
    let promoList = document.querySelector(".promo__interactive-list");

    const sortArr = (arr) => {
       arr.sort(); 
    }
    
    function createList(films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__ineractive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createList(films, parent);
            });
        });

        sortArr(movieDB.movies);
        classAddItems();
        classAddDelet();
    };
    

    function classAddItems () {
        let classAddItem = promoList.getElementsByTagName( "li" );
        
        for (let i = 0; i < classAddItem.length; i++) {
            classAddItem[i].classList.add('promo__interactive-item');
        }
    };
    
    function classAddDelet () {
        let promoListItem = document.querySelectorAll(".promo__interactive-item");    
       
        for (let i = 0; i < promoListItem.length; i++) {
            promoListItem[i].children[0].classList.add('delete');
            
            // promoListItem[i].children[0].addEventListener('click', () => {
                
                
            //     movieDB.movies.splice(i, 1);
            //     sortArr(movieDB.movies);
            //     parent.innerHTML = "";
                
            //     createList(movieDB.movies, promoList);
            //     sortArr(movieDB.movies);
            // });
        }


    };
    
    

    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          addCheked = addForm.querySelector('[type = "checkbox"]');



    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = addCheked.checked;

        if(newFilm) {
            if (newFilm.length > 21) {
               newFilm = `${newFilm.substring(0, 21)}...`; 
            }
            if (favorite) {
                console.log('favorite');
            }
            movieDB.movies.push(newFilm); 
        }
            e.target.reset(); 
        
            sortArr(movieDB.movies);

        createList(movieDB.movies, promoList);
        classAddItems();
        classAddDelet();
        e.target.reset();
        
    });
    
    
    let promoBg = document.querySelector(".promo__bg");
    promoBg.style.backgroundImage = "url('img/bg.jpg')";
   
    

    deleteAdv(promo);
    createList(movieDB.movies, promoList);

    let divElement = document.querySelector("#myDiv");
    divElement.addEventListener('click', addClass);
    
    function addClass () {
        divElement.classList.toggle("promo__adv-title");
    }
    

    console.log(divElement.classList);

