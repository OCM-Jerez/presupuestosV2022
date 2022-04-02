import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AvalaibleYearsService } from '../services/avalaibleYears.service';
import { TipoClasificacionService } from '../services/tipoClasificacion.service';

// import { AVALAIBLE_YEARS } from '../../assets/data/avalaible-years-data'
import { DataGraphService } from '../services/data-graph.service';
import { IDataGraph } from '../commons/interfaces/dataGraph.interface';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements OnInit {
  // private radioSel!: any;
  private sendData: IDataGraph = <IDataGraph>{};

  radioSelected?: string;
  // yearsList: any[];
  list: any[] = [];

  constructor(
    private router: Router,
    private tipoclasificacionService: TipoClasificacionService,
    private avalaibleYearsService: AvalaibleYearsService,
    private dataGraphService: DataGraphService
  ) {
    // this.yearsList = AVALAIBLE_YEARS;
    // this.radioSelected = "2021";
  }

  ngOnInit() {
    this.radioSelected = this.avalaibleYearsService.getCurrentYear();
    this.list = [
      {
        year: 2015,
        checked: false,
      },
      {
        year: 2016,
        checked: false,
      }, {
        year: 2017,
        checked: false,
      }, {
        year: 2018,
        checked: false,
      },
      {
        year: 2019,
        checked: false,
      }, {
        year: 2020,
        checked: false,
      }, {
        year: 2021,
        checked: true,
      }, {
        year: 2022,
        checked: false,
      },
      // {
      //   year: "Todos",
      //   checked: false,
      // }
    ]
  }

  // #region routes; 
  // porIngresos() {
  //   this.router.navigateByUrl('/Ingresos')
  // }

  graphIngresosEconomicaCapitulos() {
    this.sendData = <IDataGraph>{
      data: "ingresosEconomicaCapitulos",
      titleSelect: "Selección capítulo de ingreso",
      optionSelect: "Selecciona capítulo de ingreso",
      errorSelect: "Error debes seleccionar un capítulo de ingreso",
      URLSelect: "/GraficoCapituloIngreso"
    };
    this.dataGraphService.sendData = this.sendData;

    const years = this.result.map((year) => year.year);

    this.avalaibleYearsService.setAvalaibleYear(years);

    this.router.navigateByUrl('/SelectCodigo')

    // Es posible pasar parametros a traves de la ruta.
    // Para ello se cre una interfaz IData y se le asigna un objeto sendData con los datos.
    // Con este metodo no hace falta crear un service.
    // El problema es cuando estos mismos datos hay que pasarlos a una segund ruta.
    // Por ejemplo al volver desde una seleccion habria que incluir los datos en la rutay.

    // this.router.navigate(['/SelectCodigo'], { state: { 'data': this.sendData } })
  }

  graphIngresosEconomicaEconomicos() {
    this.sendData = <IDataGraph>{
      data: "ingresosEconomicaEconomicos",
      titleSelect: "Selección económico de ingreso",
      optionSelect: "Selecciona económico de ingreso",
      errorSelect: "Error debes seleccionar un económico de ingreso",
      URLSelect: "/GraficoEconomicoIngreso"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosEconomicaCapitulos() {
    this.sendData = <IDataGraph>{
      data: "gastosEconomicaCapitulos",
      titleSelect: "Selección capítulo de gasto",
      optionSelect: "Selecciona capítulo de gasto",
      errorSelect: "Error debes seleccionar un capítulo de gasto",
      URLSelect: "/GraficoCapituloGasto"
    };
    this.dataGraphService.sendData = this.sendData;

    const years = this.result.map((year) => year.year);

    this.avalaibleYearsService.setAvalaibleYear(years);

    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosOrganicaOrganicos() {
    this.sendData = <IDataGraph>{
      data: "gastosOrganicaOrganicos",
      titleSelect: "Selección orgánico",
      optionSelect: "Selecciona orgánico",
      errorSelect: "Error debes seleccionar un orgánico",
      URLSelect: "/GraficoOrganicoGasto"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosProgramaProgramas() {
    this.sendData = <IDataGraph>{
      data: "gastosProgramaProgramas",
      titleSelect: "Selección programa",
      optionSelect: "Selecciona programa",
      errorSelect: "Error debes seleccionar un programa",
      URLSelect: "/GraficoProgramaGasto"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  grapgGastosEconomicaEconomicos() {
    this.sendData = <IDataGraph>{
      data: "gastosEconomicaEconomicos",
      titleSelect: "Selección económico de gasto",
      optionSelect: "Selecciona económico de gasto",
      errorSelect: "Error debes seleccionar un económico de gasto",
      URLSelect: "/GraficoEconomicoGasto"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }


  graphGastosProgramaGruposProgramas() {
    this.sendData = <IDataGraph>{
      data: "gastosProgramaGruposProgramas",
      titleSelect: "Selección grupo programas",
      optionSelect: "Selecciona grupo de programas",
      errorSelect: "Error debes seleccionar un grupo de programas",
      URLSelect: "/GraficoGruposProgramas"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosProgramaPoliticas() {
    this.sendData = <IDataGraph>{
      data: "gastosProgramaPoliticas",
      titleSelect: "Selección política gasto",
      optionSelect: "Selecciona política de gasto",
      errorSelect: "Error debes seleccionar una política de gasto",
      URLSelect: "/GraficoPoliticasGastos"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosProgramaAreas() {
    this.sendData = <IDataGraph>{
      data: "gastosProgramaAreas",
      titleSelect: "Selección area gasto",
      optionSelect: "Selecciona area de gasto",
      errorSelect: "Error debes seleccionar una area de gasto",
      URLSelect: "/GraficoAreasGastos"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  // porCapitulo() {
  //   this.tipoclasificacionService.tipoClasificacion = 'capítulo'
  //   this.router.navigateByUrl('/Gastos')
  // }

  // porEconomico() {
  //   this.tipoclasificacionService.tipoClasificacion = 'económico'
  //   this.router.navigateByUrl('/Gastos')
  // }

  // porOrganico() {
  //   this.tipoclasificacionService.tipoClasificacion = 'orgánico'
  //   this.router.navigateByUrl('/Gastos')
  // }

  // porPrograma() {
  //   this.tipoclasificacionService.tipoClasificacion = 'programa'
  //   this.router.navigateByUrl('/Gastos')
  // }

  comparaIng() {
    this.tipoclasificacionService.tipoClasificacion = 'Cap'
    this.getSelectedItem();
    this.router.navigateByUrl('/ComparaIng')
  }

  comparaIngEco() {
    this.tipoclasificacionService.tipoClasificacion = 'Eco'
    this.router.navigateByUrl('/ComparaIng')
  }

  comparaCap() {
    this.tipoclasificacionService.tipoClasificacion = 'Cap'
    this.router.navigateByUrl('/ComparaGas')
  }

  comparaOrg() {
    this.tipoclasificacionService.tipoClasificacion = 'Org'
    this.router.navigateByUrl('/ComparaGas')
  }

  comparaPro() {
    this.tipoclasificacionService.tipoClasificacion = 'Pro'
    this.router.navigateByUrl('/ComparaGas')
  }

  comparaEco() {
    this.tipoclasificacionService.tipoClasificacion = 'Eco'
    this.router.navigateByUrl('/ComparaGas')
  }

  graphIngresosEconomicaArticulos() {
    this.sendData = <IDataGraph>{
      data: "ingresosEconomicaArticulos",
      titleSelect: "Selección articulo ingreso",
      optionSelect: "Selecciona articulo de ingreso",
      errorSelect: "Error debes seleccionar un articulo de ingreso",
      URLSelect: "/ingresosEconomicaArticulos"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphIngresosEconomicaConceptos() {
    this.sendData = <IDataGraph>{
      data: "ingresosEconomicaConceptos",
      titleSelect: "Selección concepto ingreso",
      optionSelect: "Selecciona concepto de ingreso",
      errorSelect: "Error debes seleccionar un concepto de ingreso",
      URLSelect: "/ingresosEconomicaConceptos"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosEconomicaArticulos() {
    this.sendData = <IDataGraph>{
      data: "gastosEconomicaArticulos",
      titleSelect: "Selección articulo gasto",
      optionSelect: "Selecciona articulo de gasto",
      errorSelect: "Error debes seleccionar un articulo de gasto",
      URLSelect: "/gastosEconomicaArticulos"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  graphGastosEconomicaConceptos() {
    this.sendData = <IDataGraph>{
      data: "gastosEconomicaConceptos",
      titleSelect: "Selección concepto gasto",
      optionSelect: "Selecciona concepto de gasto",
      errorSelect: "Error debes seleccionar un concepto de gasto",
      URLSelect: "/gastosEconomicaConceptos"
    };
    this.dataGraphService.sendData = this.sendData;
    this.router.navigateByUrl('/SelectCodigo')
  }

  // graphGastosEconomicaEconomicos() {
  //   this.sendData = <IDataGraph>{
  //     data: "gastosEconomicaEconomicos",
  //     titleSelect: "Selección económico gasto",
  //     optionSelect: "Selecciona económico de gasto",
  //     errorSelect: "Error debes seleccionar un económico de gasto",
  //     URLSelect: "/gastosEconomicaEconomicos"
  //   };
  //   this.dataGraphService.sendData = this.sendData;
  //   this.router.navigateByUrl('/SelectCodigo')
  // }



  // #endregion routes

  private getSelectedItem() {
    // this.radioSel = AVALAIBLE_YEARS.find(Item => Item === this.radioSelected)!;
    // console.log([this.result]);
    //this.radioSel = this.result[0].year;
    // console.log(this.radioSel);
    const years = this.result.map((year) => year.year);
    this.avalaibleYearsService.setAvalaibleYear(years);
  }

  onItemChange() {
    this.getSelectedItem();
  }

  get result(): {
    year: number,
    checked: boolean,
  }[] {
    return this.list.filter(item => item.checked);
  }

  changeCheckbox(event: Event) {
    this.getSelectedItem();
    // console.log(event.target);
  }

}
