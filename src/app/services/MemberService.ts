import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

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

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("Signup:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("ERROR, signup:", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("Login:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("ERROR, login:", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("Logout:", result);

      localStorage.removeItem("memberData");
    } catch (err) {
      console.log("ERROR, logout:", err);
      throw err;
    }
  }
}

export default MemberService;
