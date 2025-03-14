export const runtime = "nodejs"; // Ensures compatibility

import { cookies } from "next/headers";
import { axiosBaseInstance } from "../axios/config";
import { UserWithSession } from "./auth-types";

const getServerSession = async (): Promise<UserWithSession | null> => {
  try {
    // ✅ Remove `await` from cookies()
    const cookieHeader = cookies().toString();

    const res = await axiosBaseInstance.get<UserWithSession>(`/user/session`, {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data;
  } catch (err) {
    console.log("Error in getting session: ", err);
    return null;
  }
};

export default getServerSession;
