import pool from "../config/db.js";
import { ApiKeyInsertSchema } from "../config/schema.js";

export const createApiKey = async (data: unknown) => {
  const { user_id, name, prefix, public_part, key_hash } = ApiKeyInsertSchema.parse(data);
  const result = await pool.query(
    `INSERT INTO public.api_keys (user_id, name, prefix, public_part, key_hash)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`,
    [user_id, name, prefix, public_part, key_hash],
  );

  return result.rows[0];
};
