interface Timestamps {
  createdAt: string
  updatedAt: string
}

export type Tag = Timestamps & {
  id: number
  name: string
}

export type TagOption = { value: string; label: string }

export type Pin = Timestamps & {
  description: string
  id: number
  image: string
  shareUrl: string
  siteName: string
  tagList: string[]
  tags?: Tags[]
  tagOptions: TagOption[]
  title: string
  token: string
  url: string
  userId: number
  viewedCount: number
}

export type PagyMetadata = {
  count: number
  firstUrl: string
  from: number
  items: number
  last: number
  lastUrl: string
  nextUrl: string
  page: number
  pageUrl: string
  prevUrl: string
  scaffoldUrl: string
  series: string[]
  to: number
}

export type Pagy<T> = T & { metadata: PagyMetadata }
