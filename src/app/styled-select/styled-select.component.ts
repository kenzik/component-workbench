import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-styled-select',
  templateUrl: './styled-select.component.html',
  styleUrls: ['./styled-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StyledSelectComponent),
      multi: true
    }
  ]
})
export class StyledSelectComponent implements ControlValueAccessor {

  @Input() data: any = ['Add data', 'array input', 'to component'];
  @Input() displayField: string = undefined;
  @Input() selectField: string = undefined;
  @Input() label: string = 'Select';
  @Input() width: number = 160;
  @Input() placeHolder: string;

  public disabled: boolean;
  public _value: boolean;
  public selected;

  onChanged: any = () => { }
  onTouched: any = () => { }

  writeValue(val: any) {
    if (val) {
      this.selectValue(val);
    }
  }
  registerOnChange(fn: any) {
    this.onChanged = fn
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectValue(val) {
    this.selected = val;
    this.onChanged(val)
  }

  changed(event) {
    this.selectValue(event.target.value);
  }

}
