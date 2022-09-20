enum InputType {
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  DECIMAL = 'DECIMAL',
  EMAIL = 'EMAIL',
  FILE_UPLOAD = 'FILE_UPLOAD',
  HIDDEN = 'HIDDEN',
  JSON = 'JSON',
  NUMBER = 'NUMBER',
  PHONE = 'PHONE',
  READ_ONLY = 'READ_ONLY',
  BOOLEAN_CHECK = 'BOOLEAN_CHECK',
  SELECT_AUTO_SUGGEST = 'SELECT_AUTO_SUGGEST',
  SELECT_CHECKBOX = 'SELECT_CHECKBOX',
  SELECT_RADIO = 'SELECT_RADIO',
  SELECT_LIST = 'SELECT_LIST',
  MULTIPLE_ADD = 'MULTIPLE_ADD',
  SNOMED = 'SNOMED',
  TEXT = 'TEXT',
  TEXT_AREA = 'TEXT_AREA',
}

enum FormType {
  EDIT = 'edit',
  CREATE = 'create',
  DETAIL = 'details',
  LIST = 'lists',
  BULK_CREATE = 'bulk_create',
}

export type Schema = {
  name: string;
  key: string;
  description?: string;
  selector?: (_row: any) => string;
  sortable?: boolean;
  inputType: InputType;
  required?: boolean;
  validator?: any;
  options?: any[];
  defaultValue?: string;
};

export { FormType, InputType };
