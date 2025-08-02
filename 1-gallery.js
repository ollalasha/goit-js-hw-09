import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-CgTBfC_f.js";const i=[{preview:new URL("../img/small1.jpg",import.meta.url).href,original:new URL("../img/large1.jpg",import.meta.url).href,description:"Image 1"},{preview:new URL("../img/small2.jpg",import.meta.url).href,original:new URL("../img/large2.jpg",import.meta.url).href,description:"Image 2"}],t=document.querySelector(".gallery"),m=i.map(({preview:e,original:r,description:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${e}" alt="${l}" />
        </a>
      </li>`).join("");t.innerHTML=m;new a(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
