import {animate, style, transition, trigger} from "@angular/animations";

export const fadeIn =  trigger("fade", [
    transition("void => *", [style({ opacity: 0 }), animate(750)])
]);
