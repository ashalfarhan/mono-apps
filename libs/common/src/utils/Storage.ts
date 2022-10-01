export class AcmeStorage {
  private static PREFIX = 'acme_';

  static get<T>(key: string, _default: T): T;
  static get<T>(key: string, _default?: T | void): T | null | undefined;
  static get<T>(key: string, _default?: T) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key) ?? '';
      return JSON.parse(raw);
    } catch {
      return _default;
    }
  }

  static set(key: string, value: unknown) {
    return localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
  }

  static clear() {
    return localStorage.clear();
  }
}
