import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numberer',
  templateUrl: './numberer.component.html',
  styleUrls: ['./numberer.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumbererComponent),
      multi: true
    }
  ]
})
export class NumbererComponent implements ControlValueAccessor {

  @Input() max: number;
  @Input() min: number = 0;
  @Input() labelLeft: string = '-';
  @Input() labelRight: string = '+';

  public disabled: boolean;
  public _value: number;

  onChanged: any = () => { }
  onTouched: any = () => { }

  writeValue(val: number) {
    this._value = val ? val : 0;
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

  changed(v) {
    const val = parseInt(v);
    this._value = val;
    this.onChanged(val);
  }

  increase() {
    if (this._value !== this.max && !this.disabled) {
      this._value++;
      this.onChanged(this._value);
    }
  }
  decrease() {
    if (this._value !== this.min && !this.disabled) {
      this._value--;
      this.onChanged(this._value);
    }
  }
}
