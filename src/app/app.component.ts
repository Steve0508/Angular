import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { AttributeDirectiveNgstyleComponent } from './attribute-directive-ngstyle/attribute-directive-ngstyle.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalsComponent } from './linked-signals/linked-signals.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive
    //UsersComponent,
    // DataBindingComponent,
    //StructuralDirectiveNgifVsIfComponent,
    // StructuralDirectiveNgforVsForComponent,
  //StructuralDirectiveNgswitchVsSwitchComponent,
  //AttributeDirectiveComponent
//AttributeDirectiveNgstyleComponent
//SignalsComponent
//LinkedSignalsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projectname';
}
