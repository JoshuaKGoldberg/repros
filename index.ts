interface Fruits {
  apple: string;
}

type LazyGetters<T> = {
  [K in keyof T as K extends string ? `get_${K}` : never]: () => Promise<T[K]>;
};

declare const lazyFruits: LazyGetters<Fruits>;

async function getApple() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "apple";
}

export function main() {
  // Should be lint complaint for a floating Promise
  getApple();

  // Does the Biome type-analyzer support this???
  lazyFruits.get_apple();
}
