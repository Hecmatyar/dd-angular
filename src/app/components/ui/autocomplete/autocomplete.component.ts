import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {BaseFormControl} from "../base-form-control";
import {ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {EntityDto} from "../../../api/dto/EntityDto.g";

export class AutocompleteComponent extends BaseFormControl implements OnInit, OnChanges, OnDestroy {
  innerValue: string;
  placeholder: string;
  options: string[];
  filteredOptions: EntityDto[];
  subscriptions: Subscription[];
  private searchValue: Subject<string> = new Subject<string>();
  private value: Subject<string> = new Subject<string>();

  constructor(protected detect: ChangeDetectorRef) {
    super();
    this.placeholder = '';
    this.filteredOptions = [];
    this.subscriptions = [];
    this.options = [];
  }

  static setOptions(list: EntityDto[] = []): string[] {
    return list.map(item => item.name);
  }

  ngOnInit(): void {
    this.innerValue = this.parentForm.get(this.controlName).value;
    this.subscriptions.push(this.searchValue.pipe(debounceTime(800)).subscribe(async () => {
      if (this.innerValue && this.innerValue.trim().length && !this.filteredOptions.some(option => option.name === this.innerValue)) {
        await this.loadOptions();
        this.options = AutocompleteComponent.setOptions(this.filteredOptions);
        this.detect.detectChanges();
      }
      this.checkExistValue(this.innerValue);
    }));
    this.subscriptions.push(this.value.pipe(debounceTime(200)).subscribe(async (value) => {
      this.setControl(value);
    }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.innerValue = this.parentForm.get(this.controlName).value;
  }

  onSelectionChange(value: string): void {
    this.value.next(value);
  }

  changeSearchValue(value: string): void {
    this.setControl(null);
    this.searchValue.next(value);
  }

  setControl(name: string): void {
    const value = this.filteredOptions.find(option => option.name === name);
    this.parentForm.patchValue({[this.controlName]: (value || {} as EntityDto).id});
    this.parentForm.get(this.controlName).markAsDirty();
    this.parentForm.get(this.controlName).markAsTouched();
  }

  async loadOptions(): Promise<void> {
    // empty
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  isInvalid(): boolean {
    return (this.parentForm.get(this.controlName).dirty && !this.parentForm.get(this.controlName).valid);
  }

  private checkExistValue(value: string): void {
    if (this.filteredOptions.some(option => option.name === value)) {
      this.value.next(value);
    } else {
      this.value.next(null);
    }
  }
}
