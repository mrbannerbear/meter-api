import type { ApiKeyCreateRequest } from "../config/schema.js";
import { generateKey } from "../helpers/generateKey.js";
import { createApiKey } from "../repository/keyRepository.js";

export const createApiKeyService = async (data: ApiKeyCreateRequest) => {
  const { key, prefix, public_part, key_hash } = generateKey();
  await createApiKey({ ...data, prefix, public_part, key_hash });
  return { key };
};
