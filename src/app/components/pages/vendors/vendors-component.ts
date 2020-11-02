import {BulkVendorsFilterComponent} from "./bulk/bulk-vendors-filter/bulk-vendors-filter.component";
import {BulkVendorsTableComponent} from "./bulk/bulk-vendors-table/bulk-vendors-table.component";
import {MobileVendorsFilterComponent} from "./mobile/mobile-vendors-fitler/mobile-vendors-filter.component";
import {MobileVendorsTableComponent} from "./mobile/mobile-vendors-table/mobile-vendors-table.component";
import {PartnersVendorsFilterComponent} from "./partners/partners-vendors-filter/partners-vendors-filter.component";
import {PartnersVendorsTableComponent} from "./partners/partners-vendors-table/partners-vendors-table.component";
import {BulkVendorsRowTemplateComponent} from "./bulk/bulk-vendors-table/bulk-vendors-row-template/bulk-vendors-row-template.component";
import {MobileVendorsRowTemplateComponent} from "./mobile/mobile-vendors-table/mobile-vendors-row-template/mobile-vendors-row-template.component";
import {PartnersVendorsRowTemplateComponent} from "./partners/partners-vendors-table/partners-vendors-row-template/partners-vendors-row-template.component";
import {PartnersVendorsCreateComponent} from "./partners/partners-vendors-create/partners-vendors-create.component";
import {BulkVendorsCreateComponent} from "./bulk/bulk-vendors-create/bulk-vendors-create.component";
import {BulkVendorsFormComponent} from "./bulk/bulk-vendors-form/bulk-vendors-form.component";
import {MobileVendorsFormComponent} from "./mobile/mobile-vendors-form/mobile-vendors-form.component";
import {PartnersVendorsFormComponent} from "./partners/partners-vendors-form/partners-vendors-form.component";

export const vendorsComponents = [
  BulkVendorsFilterComponent,
  BulkVendorsTableComponent,
  BulkVendorsRowTemplateComponent,
  BulkVendorsCreateComponent,
  BulkVendorsFormComponent,

  MobileVendorsFilterComponent,
  MobileVendorsTableComponent,
  MobileVendorsRowTemplateComponent,
  MobileVendorsFormComponent,

  PartnersVendorsFilterComponent,
  PartnersVendorsTableComponent,
  PartnersVendorsRowTemplateComponent,
  PartnersVendorsCreateComponent,
  PartnersVendorsFormComponent,
];
