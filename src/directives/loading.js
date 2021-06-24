import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 判断el中是否有loading效果的img元素
function getLoadingImg(el){
    return el.querySelector("img[data-role=loading]");
}

function createLoading(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    
    return img;
}

// bind和update的内容差不多，可以简写
export default function(el, binding){
    const curImg = getLoadingImg(el);
    if(binding.value){
        if(!getLoadingImg(el)){
            const img = createLoading();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}