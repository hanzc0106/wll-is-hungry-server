export type getRequestType = { [key: string]: string }

export type anyKeyObject = { [key: string]: any }

export type fileType = {
  lastModifiedDate: Date
  filePath: string
  newFileName: string
  originalFileName: string
  mimetype: string
  size: number
}
