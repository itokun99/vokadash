export const jsonHelper = {
  parse: (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch (err) {
      console.error("jsonHelper -> parse -> error ->", err);
      return null;
    }
  },
  string: (obj: unknown) => {
    try {
      return JSON.stringify(obj);
    } catch (err) {
      console.error("jsonHelper -> string -> error ->", err);
      return "";
    }
  },
};

export function searchParamsToObject(
  searchParams: string,
): Record<string, string> {
  const params = new URLSearchParams(searchParams);
  const obj: Record<string, string> = {};
  for (const [key, value] of params) {
    obj[key] = value;
  }
  return obj;
}

export type ParamType = Record<string, string | number | undefined | null>;

export function objectToSearchParams(obj?: ParamType): string {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return "";
  }

  const params = new URLSearchParams();
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "string" || typeof value === "number") {
      params.append(key, value.toString());
    }
  });

  return params.toString();
}
