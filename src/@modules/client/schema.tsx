import { TableMenu } from '../../components/Menus/TableMenu';
import { InputType } from '../../pages/app/schema/utils';

const deleteRow = () => null;

const ClientMiniSchema = [
  {
    name: 'S/N',
    key: 'sn',
    description: 'SN',
    selector: (row: any) => row.sn,
    sortable: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'First Name',
    key: 'firstname',
    description: 'First Name',
    selector: (row: any) => row.firstname,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Midlle Name',
    key: 'middlename',
    description: 'Midlle Name',
    selector: (row: any) => row.middlename,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Last Name',
    key: 'lastname',
    description: 'Last Name',
    selector: (row: any) => row.lastname,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Date of Birth',
    key: 'dob',
    description: 'Date of Birth',
    selector: (row: any) => row.dob,
    sortable: true,
    required: true,
    inputType: InputType.DATE,
  },

  {
    name: 'Gender',
    key: 'gender',
    description: 'Male',
    selector: (row: any) => row.gender,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_LIST,
    options: ['Male', 'Female'],
  },

  {
    name: 'Marital Status',
    key: 'maritalstatus',
    description: 'Single',
    selector: (row: any) => row.maritalstatus,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_LIST,
    options: ['Single', 'Married'],
  },

  {
    name: 'Email',
    key: 'email',
    description: 'johndoe@mail.com',
    selector: (row: any) => row.email,
    sortable: true,
    required: true,
    inputType: InputType.EMAIL,
  },

  {
    name: 'Phone Number',
    key: 'phone',
    description: '0806478263',
    selector: (row: any) => row.phone,
    sortable: true,
    required: true,
    inputType: InputType.PHONE,
  },

  {
    name: 'Residential Address',
    key: 'residentialaddress',
    description: 'Ozumba Mbadiwe',
    selector: (row: any) => row.residentialaddress,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Town',
    key: 'town',
    description: 'Ikate Elegushi',
    selector: (row: any) => row.town,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'State',
    key: 'state',
    description: 'Lagos',
    selector: (row: any) => row.state,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Country',
    key: 'country',
    description: 'Nigeria',
    selector: (row: any) => row.country,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Next of Kin',
    key: 'nextofkin',
    description: 'Next of Kin',
    selector: (row: any) => row.nextofkin,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Next of kin Phone',
    key: 'nextofkinphone',
    description: 'Next of Kin',
    selector: (row: any) => row.nextofkinphone,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    cell: (row: any) => (
      <TableMenu size='small' row={row} onDeleteRow={deleteRow} />
    ),
    allowOverflow: true,
    button: true,
    width: '56px',
  },
];

export { ClientMiniSchema };
