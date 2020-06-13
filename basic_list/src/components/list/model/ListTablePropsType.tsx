import { Params, TableColumn, TableOptions } from './index'
import { BaseListApi } from '../api/BaseListApi'
import { PageData, PageParam } from './Page'
import { ReactElement } from 'react'

export type ListTableOperate = (param: {
  searchPage: (page: PageParam) => Promise<void>
  selectedRowKeys: string[]
  page: PageData<any>
  params: Params
}) => ReactElement

export interface ListTablePropsType {
  columns: TableColumn[]
  api: BaseListApi
  params: Params
  tableOptions?: TableOptions
  tableOperate?: ListTableOperate
}
