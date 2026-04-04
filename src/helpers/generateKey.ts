import crypto from "crypto";

export const generateKey = (): { prefix: string; public_part: string; key_hash: string } => {
  const publicPart = crypto.randomBytes(4).toString("hex");
  const privatePart = crypto.randomBytes(32).toString("hex");
  const prefix = "sk_live";
  const hashedPrivatePart = hashKey(privatePart);
  return { prefix, public_part: publicPart, key_hash: hashedPrivatePart };
};

const hashKey = (key: string) => {
  const hash = crypto.createHash("sha256").update(key).digest("hex");
  return hash;
};
