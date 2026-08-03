import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined in .env file");
  throw new Error("DATABASE_URL is not defined");
}

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });
