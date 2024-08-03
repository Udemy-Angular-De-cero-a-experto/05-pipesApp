import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
// import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    // MenuModule,
    MessagesModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule { }
