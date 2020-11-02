import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {BaseForm} from "../../../../core/base/base-form";
import {AdminBrandFull} from "../../../../api/dto/AdminBrandFull.g";
import {BrandCategory} from "../../../../api/dto/BrandCategory.g";
import {EntityDto} from "../../../../api/dto/EntityDto.g";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {NotificationService} from "../../../../core/services/notification.service";
import {brandListPath} from "../../../../core/path";
import {Select} from "../../../../core/interfaces/select";
import {UpdateBrandRequest} from "../../../../core/interfaces/requests/update-brand-request";
import {BrandType} from "../../../../api/dto/BrandType.g";

@Component({
  selector: 'app-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./brands-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() brand: AdminBrandFull;
  @Input() brandsCategory: BrandCategory[];
  @Input() allBrands: EntityDto[];

  @Output() submitForm = new EventEmitter();

  brandsItems: Select[];
  categoryItems: Select[];
  brandTypeItems: Select[];

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService) {
    super();
    this.backPath = brandListPath;
    this.brandTypeItems = [
      {key: BrandType.Online, value: BrandType.Online},
      {key: BrandType.OnlineInMail, value: BrandType.OnlineInMail}
    ];
  }

  get selectCategoriesArray(): FormArray {
    return this.form.get("categories") as FormArray;
  }

  get selectBrandsArray(): FormArray {
    return this.form.get("relatedBrands") as FormArray;
  }

  ngOnInit(): void {
    this.initForm({categories: [], relatedBrands: []} as AdminBrandFull);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.brand && changes.brand.currentValue) {
      this.initForm(changes.brand.currentValue);
    }
    if (changes.brandsCategory && changes.brandsCategory.currentValue) {
      const categories = changes.brandsCategory.currentValue;
      this.categoryItems = categories.map(item => ({key: item.id, value: item.name}));
    }
    if (changes.allBrands && changes.allBrands.currentValue) {
      const categories = changes.allBrands.currentValue;
      this.brandsItems = categories.map(item => ({key: item.id, value: item.name}));
    }
  }

  initForm(brand: AdminBrandFull): void {
    let categories = brand.categories.map(item => this.fb.group({key: [item.name, [Validators.required]]}));
    !categories.length && (categories = [this.fb.group({key: [null, [Validators.required]]})]);
    let brands = brand.relatedBrands.map(item => this.fb.group({key: [item.name, [Validators.required]]}));
    !brands.length && (brands = [this.fb.group({key: [null, [Validators.required]]})]);

    this.form = this.fb.group({
      "id": brand.id,
      "name": [brand.name, [Validators.required]],
      "image": brand.image,
      "type": [brand.type, [Validators.required]],
      "commissionBuy": [brand.commissionBuy, [Validators.required]],
      "commissionBulkBuy": [brand.commissionBulkBuy, [Validators.required]],
      "commissionSell": [brand.commissionSell, [Validators.required]],
      "maxAmount": [brand.maxAmount, [Validators.required]],
      "url": [brand.url, [Validators.required]],
      "phone": [brand.phone, [Validators.required]],
      "numberLength": [brand.numberLength, [Validators.required]],
      "pinCodeLength": [brand.pinCodeLength, [Validators.required]],
      "comment": [brand.comment ? brand.comment.text : ""],
      "categories": this.fb.array(categories),
      "relatedBrands": this.fb.array(brands),
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");
      return;
    }

    const imageValue = this.form.get('image').value;
    const imageName = typeof imageValue === "string" ? imageValue : null;
    const imageFile = typeof imageValue !== "string" ? imageValue : null;
    this.saveVendor({
      request:{
        ...this.form.value,
        image: imageName,
      },
      imageFile,
    });
  }

  saveVendor(form: UpdateBrandRequest): void {
    this.submitForm.emit(form);
  }
}
