import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input-comment',
  templateUrl: './input-comment.component.html',
  styleUrls: ['./input-comment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCommentComponent),
      multi: true
    }
  ]
})
export class InputCommentComponent implements ControlValueAccessor {

  @Input() placeHolder: string;

  public disabled: boolean;
  public _value: string;

  onChanged: any = () => { }
  onTouched: any = () => { }

  writeValue(val: string) {
    this._value = val;
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
    console.log('changed: ', v);
    this._value = v;
    this.onChanged(v);
  }

}
