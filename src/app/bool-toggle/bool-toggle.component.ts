import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-bool-toggle',
  templateUrl: './bool-toggle.component.html',
  styleUrls: ['./bool-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BoolToggleComponent),
      multi: true
    }
  ]
})
export class BoolToggleComponent implements ControlValueAccessor{

  @Input() labelTrue: string = 'y';
  @Input() labelFalse: string = 'n';

  public disabled: boolean;
  public _value: boolean;

  onChanged: any = () => { }
  onTouched: any = () => { }

  writeValue(val: boolean) {
    this._value = val ? val : false;
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

  changed(val) {
    this._value = val;
    this.onChanged(val);
  }

  setTrue() {
    this._value = true;
    this.onChanged(this._value);
  }
  setFalse() {
    this._value = false;
    this.onChanged(this._value);
  }

}
