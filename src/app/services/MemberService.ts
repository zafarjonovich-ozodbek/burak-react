import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

// MemberService.file - (DATA FETCH) Backend'dan "member data"ni olish uchun ishlatiladi
class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users"; // "request" jo'natiladigan "URL manzili"
      const result = await axios.get(url); //axios — FRONTENDdan BACKENDga HTTP so‘rov yuborish va javobni olish uchun
      console.log("getTopUsers:", result);

      return result.data; // result = "URL" | result.data = "URL.data"(url'dan kelayotkan info)
    } catch (err) {
      console.log("ERROR, getTopUsers:", err);
      throw err;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("getRestaurant:", result);

      const restaurant: Member = result.data;
      return restaurant;

      return result.data;
    } catch (err) {
      console.log("ERROR, getRestaurant:", err);
      throw err;
    }
  }
}

export default MemberService;
