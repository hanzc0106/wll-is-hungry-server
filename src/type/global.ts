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

export type Pagination = {
  pageNumb: number
  pageSize: number
  pageTotal: number
}

export type PaginationReq = Pick<Pagination, 'pageNumb' | 'pageSize'>
export type paginationRes = Pagination
