import { Injectable } from '@angular/core';
import { DataTableGraphService } from './data-graph.service';
import gastosOrganicaOrganicos from '../../assets/data/gastosOrganicaOrganicos.json';
import gastosProgramaAreas from '../../assets/data/gastosProgramaAreas.json';


@Injectable({
  providedIn: 'root'
})
export class PrepareDataGraphTreeService {
  private _dataGraphTree: any[] = [];
  constructor(private _dataTableGraphService: DataTableGraphService
  ) {

  }

  async prepareDataGraphTree(rowData) {
    const tipoClasificacion = this._dataTableGraphService.dataTableGraph.clasificationType;
    console.log('tipoClasificacion', tipoClasificacion);
    console.log('rowData', rowData);


    switch (tipoClasificacion) {
      case 'gastosOrganicaOrganicos':
        this._dataGraphTree = gastosOrganicaOrganicos.map(item => {
          const dataLastYear = rowData.filter(x => x.CodOrg == item.codigo);
          const sumDefinitivas = dataLastYear.filter((item) => item["Definitivas2015"]).reduce((prev, current) => prev + current["Definitivas2015"], 0);
          return { ...item, total: sumDefinitivas }
        })
        console.log(this._dataGraphTree);
        this._dataTableGraphService.dataGraphTree = this._dataGraphTree;
        break;
      case 'gastosProgramaAreas':
        this._dataGraphTree = gastosProgramaAreas.map(item => {
          const dataLastYear = rowData.filter(x => x.CodPro == item.codigo);
          const sumDefinitivas = dataLastYear.filter((item) => item["Definitivas2015"]).reduce((prev, current) => prev + current["Definitivas2015"], 0);
          return { ...item, total: sumDefinitivas }
        })
        console.log(this._dataGraphTree);
        this._dataTableGraphService.dataGraphTree = this._dataGraphTree;
        break;



    }


  }

}