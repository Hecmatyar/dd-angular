import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AccessLevelMap} from "../../../api/dto/AccessLevelMap.g";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {functionsMap} from "../../../core/consts/functions-map";
import {categoriesMap} from "../../../core/consts/categoty-map";

@Component({
  selector: 'app-access-builder',
  templateUrl: './access-builder.component.html',
  styleUrls: ['./access-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessBuilderComponent implements OnChanges {
  @Input() accessLevel: AccessLevelMap;
  @Input() accessLevelSelected: AccessLevel[];
  @Input() accessLevelDisabled: AccessLevelMap;
  @Input() isLoading: boolean;

  private innerAccessLevelSelected: AccessLevel[];
  private selectedCategory: string;

  constructor(private detectRef: ChangeDetectorRef) {
    this.accessLevel = {} as AccessLevelMap;
    this.accessLevelDisabled = {} as AccessLevelMap;
    this.accessLevelSelected = [];
    this.innerAccessLevelSelected = [];
  }

  get categoryList(): string[] {
    return Object.keys(this.accessLevel || {});
  }

  get functionList(): AccessLevel[] {
    return this.accessLevel[this.selectedCategory];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.accessLevelSelected && changes.accessLevelSelected.currentValue) {
      this.innerAccessLevelSelected = [...this.accessLevelSelected];
    }

    if (changes.accessLevelDisabled && changes.accessLevelDisabled.currentValue) {
      this.addDisabledFunctions();
    }

    if (changes.accessLevel && changes.accessLevel.currentValue) {
      this.selectedCategory = Object.keys(this.accessLevel)[0];
    }
  }

  getCategoryName(name: string): string {
    return categoriesMap.get(name);
  }

  getFunctionName(name: AccessLevel): string {
    return functionsMap.get(name);
  }

  getActiveSelect(name: string): string {
    const total = this.accessLevel[name].length;
    const selected = this.accessLevel[name].filter(item => this.innerAccessLevelSelected.includes(item)).length;

    return `(${selected} / ${total})`;
  }

  isFunctionDisable(name: AccessLevel): boolean {
    let disable = false;
    Object.keys(this.accessLevelDisabled || {}).forEach(level => {
      if ((this.accessLevelDisabled[level] || []).includes(name)) {
        disable = true;
      }
    });

    return disable;
  }

  isAccessLevelChecked(name: AccessLevel): boolean {
    return this.innerAccessLevelSelected.includes(name);
  }

  updateSelectedAccessLevel(func: AccessLevel): void {
    if (this.innerAccessLevelSelected.includes(func)) {
      this.innerAccessLevelSelected = this.innerAccessLevelSelected.filter(item => item !== func);
    } else {
      this.innerAccessLevelSelected.push(func);
    }
    this.detectRef.detectChanges();
  }

  onSelectCategory(name: string): void {
    this.selectedCategory = name;
    this.detectRef.detectChanges();
  }

  getAdditionalSelectedAccessLevel(): AccessLevel[] {
    const result = [];
    this.innerAccessLevelSelected.forEach(item => {
      if (!this.isFunctionDisable(item)) {
        result.push(item);
      }
    });

    return result;
  }

  getSelectedAccessLevel(): AccessLevel[] {
    return this.innerAccessLevelSelected;
  }

  private addDisabledFunctions(): void {
    let disabled = [];
    Object.keys(this.accessLevelDisabled || {}).forEach(level => {
      disabled = [...disabled, ...this.accessLevelDisabled[level]];
    });
  }
}
