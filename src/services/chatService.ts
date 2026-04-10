import { verifyKey } from "../helpers/generateKey.js";
import { getApiKeyByPublicPart } from "../repository/keyRepository.js";

export const createChatService = async (apiKey: string) => {
  const [prefix, public_part, private_part] = apiKey.split("-");
  if (!prefix || !public_part || !private_part) {
    throw new Error("Invalid API key format");
  }
  const { key_hash: storedPrivatePartHash } = await getApiKeyByPublicPart(prefix, public_part);
  if (!storedPrivatePartHash) {
    throw new Error("API key not found");
  }
  const isValidKey = verifyKey(private_part, storedPrivatePartHash);
  if (!isValidKey) {
    throw new Error("Invalid API key");
  }
  return { message: "Good job!" };
};
