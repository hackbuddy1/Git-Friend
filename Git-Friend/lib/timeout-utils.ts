/**
 
 * @param promise 
 * @param timeoutMs 
 * @param errorMessage 
 * @returns 
 */
export async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs = 10000,
  errorMessage = "Operation timed out",
): Promise<T> {
  let timeoutId: NodeJS.Timeout

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(errorMessage))
    }, timeoutMs)
  })

  return Promise.race([
    promise.then((result) => {
      clearTimeout(timeoutId)
      return result
    }),
    timeoutPromise,
  ])
}

/**
t
 * @param fn 
 * @param fallback 
 * @param timeoutMs 
 * @returns 
 */
export async function executeSafely<T>(fn: () => Promise<T>, fallback: T, timeoutMs = 10000): Promise<T> {
  try {
    return await withTimeout(fn(), timeoutMs)
  } catch (error) {
    console.error("Operation failed or timed out:", error)
    return fallback
  }
}
