import React from 'react'
import { DataTable } from '../../../../_metronic/partials/datatable/DataTable'
import { DataTableModel, DataTableSource } from '../../../../_metronic/partials/datatable/DataTableModel';
import { Update } from './update/Update';
import { ViewDetail } from './view-detail/ViewDetail';

export function Overview() {
  var dataSource: Array<DataTableModel> = [];
  var dataTitle: Array<DataTableSource> = [];

  return (
    <div className='row g-5 g-xxl-8'>
      <DataTable className="data-table" 
      titleModal='Update Example Modal' 
      dataTitle={dataTitle} 
      dataSource={dataSource} 
      title="Hỗ trợ" 
      updateModel={<Update />}
      viewModel={<ViewDetail />}
      ></DataTable>
    </div>
  )
}
