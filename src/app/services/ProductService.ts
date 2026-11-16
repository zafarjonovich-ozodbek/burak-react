import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";

// ProductService.file - (DATA FETCH) Backend'dan "product data"ni olish uchun ishlatiladi
class ProductService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  // 'Popular Dishes', 'Fresh Menu' lar uchun umumiy "multe usage method" yaratdik
  public async getProducts(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`; // "request" jo'natiladigan "URL manzili"
      if (input.productCollection)
        url += `&productCollection=${input.productCollection}`; // agar 'input'da "prCollection" bolsa "URL"ga "inp.prCollection"ni qo'shsin
      if (input.search) url += `&search=${input.search}`; // agar 'input'da "search" bolsa "URL"ga "inp.search"ni qo'shsin

      const result = await axios.get(url); //axios — FRONTENDdan BACKENDga HTTP so‘rov yuborish va javobni olish uchun
      console.log("getProducts:", result);

      return result.data; // result = "URL" | result.data = "URL.data"(url'dan kelayotkan info)
    } catch (err) {
      console.log("ERROR, getProducts:", err);
      throw err;
    }
  }
}

export default ProductService;
