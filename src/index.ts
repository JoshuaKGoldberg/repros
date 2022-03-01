interface ItLike {
  (name: string, other: number, extra?: unknown): void;
  (name: string, callback: () => void, extra?: unknown): void;
  (name: string, other: string, extra?: unknown): void;
  (name: string, callback: () => Promise<void>, extra?: unknown): void;
}

declare const it: ItLike;

// Autocomplete shows the signature:
// '(name: string, callback: () => void, extra?: unknown): void;'
it("", async () => {});

// I would have hoped for the more precise signature:
// '(name: string, callback: () => Promise<void>, extra?: unknown): void;'
