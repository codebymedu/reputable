export class API {
  public static uploadImage = async (image: File) => {
    // TODO: Cleanup
    return URL.createObjectURL(image);
  };
}

export default API;
