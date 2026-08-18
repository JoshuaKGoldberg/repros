export async function getValue(): Promise<string> {
  return 'value';
}

export function useValue(): void {
  void getValue();
}
