import { NgModule } from '@angular/core';

import { ConnectorService } from './connector/connector.service'
import { NotificationService } from './notification/notification.service'

@NgModule({
  providers: [
    ConnectorService,
    NotificationService
  ]
})
export class ServicesModule {}