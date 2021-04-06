import {aspect, aspects} from "./aspects";
import {houses} from "./houses";
import {PLANETS, planetsByType, position} from "./astros";

export type Astro = {
  name: string
  position: Object
  type: "luminary" | "personal" | "social" | "transpersonal" | "other"
};

export type AstroCollection = {
  [id: string] : Astro
}

export const planets = (date): AstroCollection => {
  return Object.keys(PLANETS)
    .reduce(
      (accumulator, name) => {
        const planetPosition = position(name, date);
        accumulator[name] = {
          name,
          ...planetPosition,
          type: planetsByType[name]
        };
        return accumulator;
      },
      {}
    );
};

export {
  houses,
  position,
  PLANETS,
  aspect,
  aspects,
};
