import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-option-component',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  public currentMessage;
  constructor(public popoverController: PopoverController,
  ) {
    this.popoverController.getTop().then(data => {
      this.currentMessage = data.componentProps.message;
    });
  }

  public delete(): void {
    this.popoverController.dismiss(this.currentMessage, 'delete').then();
  }

  public edit(): void {
    this.popoverController.dismiss(this.currentMessage, 'edit').then();
  }
}
