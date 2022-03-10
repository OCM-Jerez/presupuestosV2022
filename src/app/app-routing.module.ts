import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';
import { ComparaIngComponent } from './comparativas/compara-ing/compara-ing.component';
import { ComparaGasComponent } from './comparativas/compara-gas/compara-gas.component';
import { GraphEconomicoGastoComponent } from './comparativas/graph/graph-economico-gasto/graph-economico-gasto.component';
import { GraphProgramaComponent } from './comparativas/graph/graph-programa/graph-programa.component';
import { GraphCapituloGastoComponent } from './comparativas/graph/graph-capitulo-gasto/graph-capitulo-gasto.component';
import { GraphOrganicoGastoComponent } from './comparativas/graph/graph-organico-gasto/graph-organico-gasto.component';
import { GraphCapituloIngresoComponent } from './comparativas/graph/graph-capitulo-ingreso/graph-capitulo-ingreso.component';
import { GraphEconomicoIngresoComponent } from './comparativas/graph/graph-economico-ingreso/graph-economico-ingreso.component';
import { SelectCodigoComponent } from './comparativas/graph/select-codigo/select-codigo.component';

const routes: Routes = [
  { path: 'home', component: IndiceComponent },
  { path: 'Ingresos', component: IngresosComponent },
  { path: 'Gastos', component: GastosComponent },
  { path: 'ComparaIng', component: ComparaIngComponent },
  { path: 'ComparaGas', component: ComparaGasComponent },

  { path: 'SelectCodigo', component: SelectCodigoComponent },

  { path: 'GraficoCapituloIngreso', component: GraphCapituloIngresoComponent },
  { path: 'GraficoEconomicoIngreso', component: GraphEconomicoIngresoComponent },
  { path: 'GraficoCapituloGasto', component: GraphCapituloGastoComponent },
  { path: 'GraficoOrganicoGasto', component: GraphOrganicoGastoComponent },
  { path: 'GraficoEconomicoGasto', component: GraphEconomicoGastoComponent },
  { path: 'GraficoProgramaGasto', component: GraphProgramaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
