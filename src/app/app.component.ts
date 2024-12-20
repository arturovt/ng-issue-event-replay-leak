import { ApplicationRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly appRef = inject(ApplicationRef);

  onLoad(): void {}
}
