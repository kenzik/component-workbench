import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StyledSelectComponent } from './styled-select.component';

@NgModule({
  declarations: [StyledSelectComponent],
  imports: [CommonModule, FormsModule],
  exports: [StyledSelectComponent]
})
export class StyledSelectModule {}
