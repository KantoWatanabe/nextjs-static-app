
type CookieOptions = {
  domain?: string;
  path?: string;
  expires?: number|string|Date;
  samesite?: SameSiteValue;
  secure?: boolean;
};

type SameSiteValue = 'lax' | 'strict' | 'none';

export class Cookie {

  private constructor() {}

  static get(key: string): string|undefined {
    const cookies = document.cookie.split(';');
    let value;
    for (const cookie of cookies) {
      const content = cookie.split('=');
      if (content[0] === key) {
        value = decodeURIComponent(content[1]);
        break;
      }
    }
    return value;
  }

  static set(key: string, value: string, options?: CookieOptions) {
    document.cookie = `${key}=${encodeURIComponent(value)}; ${Cookie.optionsStr(options)}`;
  }

  static remove(key: string, options?: CookieOptions) {
    document.cookie = `${key}=; max-age=0; ${Cookie.optionsStr(options)}`;
  }

  private static optionsStr(options?: CookieOptions): string {
    let optionsStr = '';
    if (options?.domain) {
      optionsStr += `domain=${options.domain}; `;
    }
    optionsStr += `path=${options?.path ? options?.path : '/'}; `;
    if (options?.expires) {
      if (typeof options.expires === 'number') {
        optionsStr += `max-age=${options.expires}; `;
      } else if (typeof options.expires === 'string') {
        optionsStr += `expires=${options.expires}; `;
      } else if (options.expires instanceof Date) {
        optionsStr += `expires=${options.expires.toUTCString()}; `;
      }
    }
    if (options?.samesite) {
      optionsStr += `samesite=${options.samesite}; `;
    }
    if (options?.secure) {
      optionsStr += `secure; `;
    }
    return optionsStr;
  }
}
