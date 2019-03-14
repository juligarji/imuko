import { NgModule } from '@angular/core';

import { ConnectorService } from './connector/connector.service'
import { NotificationService } from './notification/notification.service'
import { ApiService } from './info/api.service';
import { PushService } from './info/push.service';

@NgModule({
  providers: [
    ConnectorService,
    NotificationService,
    ApiService,
    PushService
  ]
})
export class ServicesModule {}