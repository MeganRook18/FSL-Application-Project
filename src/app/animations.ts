import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const fadeIn = trigger("fade", [
  transition("void => *", [style({ opacity: 0 }), animate(750)])
]);

export const detailExpand = trigger("detailExpand", [
  state("collapsed", style({ height: "0px", minHeight: "0" })),
  state("expanded", style({ height: "*" })),
  transition(
    "expanded <=> collapsed",
    animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
  )
]);
