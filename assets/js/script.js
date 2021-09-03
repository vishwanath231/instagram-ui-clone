const profileImg = document.querySelector('.profile__img');
const profileBox = document.querySelector('.profile__box');
const likeBtn = document.querySelector('#like__btn');


profileImg.addEventListener('click', () => {
    profileBox.classList.toggle('active');
});



likeBtn.addEventListener('click', () => {
    if (likeBtn.classList.contains("far")) {
        likeBtn.classList.add("fas");
        likeBtn.classList.remove("far");
        likeBtn.style.color= "#ED4956";
    }else{
        likeBtn.classList.remove("fas");
        likeBtn.classList.add("far");
        likeBtn.style.color= "#262626";
    }
});
