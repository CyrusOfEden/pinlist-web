interface Timestamps {
  createdAt: string
  updatedAt: string
}

export type Tag = Timestamps & {
  id: number
  name: string
}

export type User = {
  id: number
  username: string
  email: string
  phoneNumber: string
  photoUrl: string
  gender: string
}

export type TagOption = { value: string; label: string }

export type Pin = Timestamps & {
  archivedAt: string
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
  isStarred: boolean
  notes: string
}

export type PinParams = Pick<
  Pin,
  | "description"
  | "id"
  | "image"
  | "isStarred"
  | "notes"
  | "siteName"
  | "tagOptions"
  | "title"
  | "url"
>

export type PagyMetadata = {
  count: number
  firstUrl: string
  from: number
  items: number
  last: number
  lastUrl: string
  next: number
  nextUrl: string
  page: number
  pageUrl: string
  prev: number
  prevUrl: string
  scaffoldUrl: string
  series: string[]
  to: number
}

export type Pagy<T> = T & { metadata: PagyMetadata }
