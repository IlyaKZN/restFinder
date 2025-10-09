export type TRestItem = {
  id: number
  name: string
  cuisines: string[]
  avgCheck: number
  minutesFromMetro: number
  images: string[]
  schedule: Record<string, string>
}
