export class API {
  public static uploadImage = async (image: File) => {
    return URL.createObjectURL(image);
  };
}

export default API;
