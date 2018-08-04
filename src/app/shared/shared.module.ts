import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StarComponent } from './star.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent, ConvertToSpacePipe],
  exports: [StarComponent, ConvertToSpacePipe, CommonModule, FormsModule]
})
export class SharedModule {}
