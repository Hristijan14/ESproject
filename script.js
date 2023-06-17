//fetching and displaying data

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((post) => {
      const content = `
      <div class="posts">
      <img src=${post.profile_image} alt=${post.type} class="profile-img">
      <span class="name">${post.name}</span>
      <div class="date">${post.date}</div>
      <p>${post.caption}</p>
      <a href="#${post.id}">
      <img src=${post.image} alt=${post.source_type} class="content-img" />
      </a>
      <span class="likes">❤${post.likes}</span>
      </div>
      <div id=${post.id} class="focused-image">
      <a href="#" class="close"></a>
      <img src=${post.image}>
      </div> 
      `;

      document.querySelector("main").insertAdjacentHTML("beforeend", content);
    });
  });

//themeChange

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

//loadMore

const loadMore = document.querySelector(".btn-container");
let firstPosts = 4;

loadMore.addEventListener("click", function () {
  const postList = document.querySelectorAll(".posts");
  for (let i = firstPosts; i < firstPosts + 4; i++) {
    if (postList[i]) {
      postList[i].style.display = "flex";
    }
  }
  firstPosts += 4;

  if (firstPosts >= postList.length) {
    event.target.classList.add("loaded");
  }
});

//-------------------------------------------------------------------
//                         Lightbox:

// document.querySelectorAll(".posts img").forEach((image) => {
//   image.onclick = () => {
//     console.log("clicked");
//     document.querySelector(".popup-image").style.display = "block";
//     document.querySelector(".popup-image img").src = image.getAttribute("src");
//   };
// });

// document.querySelector(".popup-image span").onclick = () => {
//   document.querySelector(".popup-image").style.display = "none";
// };

// --------------

// const focused = document.createElement("div");
// focused.id = "focused";
// document.body.appendChild(focused);

// const images4 = document.querySelectorAll("img");
// images4.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     focused.classList.add("active");
//     const img = document.createElement("img");
//     img.src = image.src;
//     while (focused.firstChild) {
//       focused.removeChild(focused.firstChild);
//     }
//     focused.appendChild(img);
//   });
// });

// focused.addEventListener("click", (e) => {
//   if (e.target !== e.currentTarget) return;
//   focused.classList.remove("active");
// });

// ------------------------------------------------------------------
