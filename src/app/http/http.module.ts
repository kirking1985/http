import { NgModule } from '@angular/core';
import { HttpModule as NgHttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HttpWrapperService } from './http-wrapper.service';
import { CurrentUserService } from './current-user.service';
import { StorageService } from './storage.service';


@NgModule({
    imports: [
        CommonModule,
        NgHttpModule
    ],
    exports: [],
    declarations: [],
    providers: [HttpWrapperService, CurrentUserService, StorageService,],
})
export class HttpModule { }
