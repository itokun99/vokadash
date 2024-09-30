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
