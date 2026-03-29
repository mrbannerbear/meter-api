import crypto from "crypto";

export const generateKey = (): { randomKey: string; hash: string } => {
  const publicKey = crypto.randomBytes(4).toString("hex");
  const privateKey = crypto.randomBytes(32).toString("hex");
  const prefix = "sk_live";
  const hashedPrivateKey = hashKey(privateKey);
  const publicPart = `${prefix}_${publicKey}_`;
  const randomKey = publicPart + privateKey;
  return { randomKey, hash: hashedPrivateKey };
};

const hashKey = (key: string) => {
  const hash = crypto.createHash("sha256").update(key).digest("hex");
  return hash;
};
