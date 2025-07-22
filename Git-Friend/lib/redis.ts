import { Redis } from "@upstash/redis"


export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})


export type ReadmeGenerationStatus = "pending" | "processing" | "completed" | "failed"


export const CACHE_KEYS = {
  README_GENERATION: (repoUrl: string) => `readme:${repoUrl}`,
  README_STATUS: (repoUrl: string) => `readme:status:${repoUrl}`,
}


export const CACHE_TTL = {
  README: 7 * 24 * 60 * 60, 
  STATUS: 24 * 60 * 60, 
}
