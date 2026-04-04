import type { ApiKeyCreateRequest } from "../config/schema.js";
import { generateKey } from "../helpers/generateKey.js";
import { createApiKey } from "../repository/keyRepository.js";

export const createApiKeyService = async (data: ApiKeyCreateRequest) => {
  const { prefix, public_part, key_hash } = generateKey();
  return await createApiKey({ ...data, prefix, public_part, key_hash });
};
