import { init } from '@noriginmedia/norigin-spatial-navigation';

require("prism-themes/themes/prism-dracula.min.css")

const isBrowser = typeof window !== "undefined"

if (isBrowser) {
    init({
        visualDebug: false
    });
    
    // window.addEventListener("keypress", (evt) => {
    //     if (evt.keyCode === 461) {
    //         window.history.go(-1)
    //     }
    // })
}