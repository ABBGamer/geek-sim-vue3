import {checkMobile} from "@/utils/helper_utils";
import {ref} from "vue";

class App {
    is_mobile = false;
    theme = ref('test')
    constructor() {
        this.is_mobile = checkMobile();
    }
}

export const app = new App()
window.addEventListener('resize', () => app.is_mobile = checkMobile())
