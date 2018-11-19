import { NgModule } from '@angular/core';

import { SpringbootsandboxSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringbootsandboxSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringbootsandboxSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringbootsandboxSharedCommonModule {}
