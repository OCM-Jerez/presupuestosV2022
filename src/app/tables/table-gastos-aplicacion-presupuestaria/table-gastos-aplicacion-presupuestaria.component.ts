import { Component, ViewChild } from '@angular/core';
import { Location } from "@angular/common";

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';

import { AvalaibleYearsService } from '../../services/avalaibleYears.service';
import localeTextESPes from '../../../assets/data/localeTextESPes.json';
import { CellRendererOCM, CellRendererOCMtext } from '../../ag-grid/CellRendererOCM';
import { headerHeightGetter } from '../../ag-grid/headerHeightGetter';

import { DataTableGraphService } from '../../services/data-graph.service';
import { Router } from '@angular/router';
import { IDataTableGraph } from '../../commons/interfaces/dataGraph.interface';

import { PrepareDataGraphTreeService } from '../../services/prepareDataGraphTree.service';
import { PrepareDataProgramaDetailsService } from '../../services/prepareDataProgramaDetails.service';
import dataJSON from '@presu/json/2019LiqGas.json';

@Component({
  selector: 'app-table-gastos-aplicacion-presupuestaria',
  templateUrl: './table-gastos-aplicacion-presupuestaria.component.html',
  styleUrls: ['./table-gastos-aplicacion-presupuestaria.component.scss']
})
export class TableGastosAplicacionPresupuestariaComponent {

  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  private gridApi;
  public gridColumnApi;
  public columnDefs;
  public defaultColDef;
  public gridOptions: GridOptions;
  public localeText;
  public rowData: any;
  public groupHeaderHeight = 25;
  public headerHeight = 54;
  public CreditosWidth?: number = 110;
  public tipoClasificacion: string;
  public rowSelection = 'single';

  public DesProWidth = 500;
  public DesCapWidth = 300;
  public isExpanded = true;

  private _dataTableGraph: IDataTableGraph;

  constructor(
    private _router: Router,
    public _avalaibleYearsService: AvalaibleYearsService,
    private _dataTableGraphService: DataTableGraphService,
    private _prepareDataGraphTreeService: PrepareDataGraphTreeService,
    private _prepareDataProgramaDetailsService: PrepareDataProgramaDetailsService,
    private location: Location,

  ) {
    this._dataTableGraph = _dataTableGraphService.dataTableGraph;

    this.columnDefs = [
      {
        headerName: this._dataTableGraph.dataPropertyTable.headerName,
        children: [

          {
            headerName: 'Organico',
            field: 'DesOrg',
            rowGroup: true,
            showRowGroup: 'DesOrg',
            filter: false,
            width: this.DesCapWidth,
            pinned: 'left',
            columnGroupShow: 'close',
            cellRenderer: 'agGroupCellRenderer',
            valueGetter: params => {
              if (params.data) {
                return params.data.CodOrg + ' - ' + params.data.DesOrg;
              } else {
                return null;
              }
            },
            cellRendererParams: {
              suppressCount: true,
              innerRenderer: params => {
                if (params.node.group) {
                  return params.value;
                } else {
                  return '';
                }
              },
              footerValueGetter(params) {
                const val = params.value.split(' - ')[1];
                switch (params.node.level) {
                  case 1:  // Total organico.
                    return `<span style="color: red; font-size: 12px;  font-weight: bold; margin-left: 0px;"> Total ${val}</span>`;
                  case -1: // Total general.
                    return '';
                  default:
                    return 'SIN FORMATO';
                }
              }
            }
          },
          {
            headerName: 'Programa',
            field: 'DesPro',
            rowGroup: true,
            showRowGroup: 'DesPro',
            filter: true,
            width: this.DesProWidth,
            pinned: 'left',
            // columnGroupShow: 'close',
            cellRenderer: 'agGroupCellRenderer',
            valueGetter: params => {
              if (params.data) {
                return params.data.CodPro + ' - ' + params.data.DesPro;
              } else {
                return null;
              }
            },
            cellRendererParams: {
              suppressCount: true,
              innerRenderer: params => params.node.group ? `<span style="color: black; font-size: 12px; margin-left: 0px;">${params.value}</span>` : null,
              footerValueGetter(params) {
                switch (params.node.level) {
                  case 0:  // Total programa.
                    return `<span style="color: red; font-size: 14px; font-weight: bold; margin-left: 0px;"> Total ${params.value}</span>`;
                  case -1: // Total general.
                    return '<span style="color: red; font-size: 18px; font-weight: bold; margin-right: 0px;"> Total general' + '</span>';
                  default:
                    return 'SIN FORMATO';
                }
              }
            }
          },
          {
            headerName: 'Económico',
            field: 'DesEco',
            cellClass: 'resaltado',
            width: 400,
            pinned: 'left',
            columnGroupShow: 'close',
            filter: false,
            valueGetter: params => {
              // console.log(this.screen);
              if (params.data) {
                return params.data.CodEco + ' - ' + params.data.DesEco;
              } else {
                return null;
              }
            },
          },
        ]
      },

      ...this._avalaibleYearsService.getYearsSelected().map(year => {
        return {
          headerName: year,
          children: this.createColumnsChildren(year),
        }
      })

    ];

    this.defaultColDef = {
      width: this.CreditosWidth,
      sortable: true,
      resizable: true,
      filter: true,
      aggFunc: 'sum',
      cellRenderer: CellRendererOCM,
      headerComponentParams: {
        template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button" ></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation" >' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
          '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
          '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>',
      },
    };
    this.gridOptions = {} as GridOptions;
    this.localeText = localeTextESPes;
  }

  async onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = await this._prepareDataProgramaDetailsService.getDataAllYear();
    console.log(this.rowData);

    // this.rowData = dataJSON;
    console.log(this._dataTableGraphService.selectedCodeRow);
    console.log(this._dataTableGraphService.selectedCodeRow.split("-")[0]);
    console.log(this._dataTableGraphService.selectedCodeRow.split("-")[1]);
    console.log(this._dataTableGraphService.selectedCodeRow.split("-")[2]);

    this.rowData = this.rowData.filter(x => x.CodOrg == this._dataTableGraphService.selectedCodeRow.split("-")[0]);
    this.rowData = this.rowData.filter(x => x.CodPro == this._dataTableGraphService.selectedCodeRow.split("-")[1]);
    this.rowData = this.rowData.filter(x => x.CodEco == this._dataTableGraphService.selectedCodeRow.split("-")[2]);
    console.log(this.rowData);
  }

  // TODO: Las colummnas disparan su altura
  headerHeightSetter() {
    // var padding = 20;
    // var height = headerHeightGetter() + padding;
    // this.gridApi.setHeaderHeight(height);
    // this.gridApi.resetRowHeights();
  }

  createColumnsChildren(year: number) {
    return [
      {
        headerName: 'Créditos',
        children: [
          {
            headerName: 'Previsiones Iniciales',
            field: `Iniciales${year}`,
            columnGroupShow: 'close'
          },
          {
            headerName: 'Total Modificaciones',
            field: `Modificaciones${year}`,
            width: 140,
            columnGroupShow: 'close'
          },
          {
            headerName: 'Creditos definitivos',
            field: `Definitivas${year}`,
            width: 140,
            columnGroupShow: 'close'
          },
        ]
      },
      {
        headerName: 'Gastos',
        children: [
          {
            headerName: 'Gastos Comprometidos',
            field: `GastosComprometidos${year}`,
            width: 140,
            columnGroupShow: 'close',
          },
          {
            headerName: 'Obligaciones reconocidas netas',
            field: `ObligacionesReconocidasNetas${year}`,
            width: 135,
            columnGroupShow: 'close'
          },
          {
            headerName: 'Pagos',
            field: `Pagos${year}`,
            columnGroupShow: 'close'
          },
          {
            headerName: 'Obligaciones pendientes de pago al 31 diciembre',
            field: `ObligacionesPendientePago${year}`,
            width: 120,
            columnGroupShow: 'close'
          },
        ]
      },
      {
        headerName: 'Remanente Credito',
        field: `RemanenteCredito${year}`,
      },
    ];
  }



  volver() {
    this.location.back();
  }

}