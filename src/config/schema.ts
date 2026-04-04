import { z } from 'zod';

// --- Users Table ---
export const UserSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  first_name: z.string().min(1),
  last_name: z.string().default(''),
  password_hash: z.string(),
  balance_credits: z.number().int().default(500),
  stripe_customer_id: z.string().nullable().optional(),
  created_at: z.date().default(() => new Date()),
});

// --- API Keys Table ---
export const ApiKeySchema = z.object({
  id: z.uuid(),
  user_id: z.uuid(),
  name: z.string().min(1),
  prefix: z.string(),
  public_part: z.string(),
  key_hash: z.string(),
  is_active: z.boolean(),
  last_used_at: z.coerce.date().nullable(),
  created_at: z.coerce.date(),
});

// Client request body (controller input)
export const ApiKeyCreateRequestSchema = z.object({
  user_id: z.uuid(),
  name: z.string().min(1),
});

// Data to insert
export const ApiKeyInsertSchema = ApiKeySchema.pick({
  user_id: true,
  name: true,
  prefix: true,
  public_part: true,
  key_hash: true,
});

// --- Payments Table ---
export const PaymentSchema = z.object({
  id: z.uuid(),
  user_id: z.uuid().nullable().optional(),
  stripe_session_id: z.string(),
  amount_total: z.number().int(),
  credits_added: z.number().int(),
  status: z.string(),
  created_at: z.date().default(() => new Date()),
});

// --- Plans Table ---
export const PlanSchema = z.object({
  id: z.string(), // Note: SQL definition was text, not uuid
  name: z.string(),
  requests_per_day: z.number().int(),
  credit_multiplier: z.number().default(1.0),
});

// --- Usage Logs Table ---
export const UsageLogSchema = z.object({
  id: z.uuid(),
  user_id: z.uuid().nullable().optional(),
  key_id: z.uuid().nullable().optional(),
  endpoint: z.string(),
  idempotency_key: z.string().nullable().optional(),
  tokens_used: z.number().int().default(0),
  credit_cost: z.number().int().default(0),
  status_code: z.number().int().nullable().optional(),
  response_body: z.string().nullable().optional(),
  created_at: z.date().default(() => new Date()),
});


// --- Types ---
export type User = z.infer<typeof UserSchema>;
export type ApiKey = z.infer<typeof ApiKeySchema>;
export type ApiKeyCreateRequest = z.infer<typeof ApiKeyCreateRequestSchema>;
export type ApiKeyInsert = z.infer<typeof ApiKeyInsertSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
export type Plan = z.infer<typeof PlanSchema>;
export type UsageLog = z.infer<typeof UsageLogSchema>;