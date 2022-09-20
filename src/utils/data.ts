import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// const clientsList = [...Array(100)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avartarUrl: faker.image.avatar(),
//   firstname: faker.name.firstName(),
//   middlename: faker.name.middleName(),
//   lastname: faker.name.lastName(),
//   dob: `${faker.date.birthdate({ min: 18, max: 65, mode: 'age' })}`,
//   gender: sample(['Male', 'Female']),
//   maritalstatus: sample(['Single', 'Married', 'Divorced']),
//   residentialaddress: faker.address.streetName(),
//   email: faker.internet.exampleEmail(),
//   phone: faker.phone.phoneNumber(),
//   town: faker.address.city(),
//   state: faker.address.state(),
//   country: faker.address.country(),
//   nextofkin: faker.name.findName(),
//   nextofkinphone: faker.phone.phoneNumber(),
//   company: faker.company.companyName(),
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'inactive']),
// }));

const clientsList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avartarUrl: faker.image.avatar(),
  firstname: faker.name.firstName(),
  middlename: faker.name.middleName(),
  lastname: faker.name.lastName(),
  dob: `${faker.date.birthdate({ min: 18, max: 65, mode: 'age' })}`,
  gender: sample(['Male', 'Female']),
  maritalstatus: sample(['Single', 'Married', 'Divorced']),
  residentialaddress: faker.address.streetName(),
  email: faker.internet.exampleEmail(),
  phone: faker.phone.phoneNumber(),
  town: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  nextofkin: faker.name.findName(),
  nextofkinphone: faker.phone.phoneNumber(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'inactive']),
  names: [
    { firstname: faker.name.firstName() },
    { middlename: faker.name.middleName() },
    { lastname: faker.name.lastName() },
  ],
  biodata: [
    { dob: `${faker.date.birthdate({ min: 18, max: 65, mode: 'age' })}` },
    { gender: sample(['Male', 'Female']) },
    { maritalstatus: sample(['Single', 'Married', 'Divorced']) },
    { religion: sample(['Christainity', 'Islam', 'Others']) },
    { medicalRecords: ['Record', 'Record 2'] },
    { profession: sample(['Private', 'Public', 'Others']) },
    { phone: faker.phone.phoneNumber() },
    { email: faker.internet.exampleEmail() },
  ],

  address: [
    { country: faker.address.country() },
    { state: faker.address.state() },
    { localgovernment: faker.address.state() },
    { town: faker.address.city() },
    { neighbourhood: faker.address.city() },
    { residentialaddress: faker.address.street() },
  ],
  otherDetails: [
    { medicaldata: ['Record', 'Record 2'] },
    { tags: ['Tag 1', 'Tag 2'] },
    { otherbiodata: faker.lorem.text() },
    { nextofkin: faker.name.findName() },
    { nonhospitalindetifiers: sample(['CD120', 'CD122', 'CD120', 'CD130']) },
    { paymentinformation: sample(['Paid', 'Out of cash']) },
    { assignttocareteam: sample(['Yes', 'No']) },
  ],

  nextofkins: [
    { nextofkin: faker.name.findName() },
    { nextofkinphone: faker.phone.phoneNumber() },
    { nextofkinemail: faker.internet.exampleEmail() },
    {
      relationship: sample(['Parent(s)', 'Sibling(s)', 'Spouse', 'Friend(s)']),
    },
  ],
  nonHospitalIndetifiers: [
    { nin: 'NGA' + Math.round(Math.random() * 142553663673700) },
    {
      voterscardnumber: 'NGAVOTE' + Math.round(Math.random() * 142553663673700),
    },
    {
      driverslicensenumber:
        'NGADRIVE' + Math.round(Math.random() * 142553663673700),
    },
  ],

  paymentInformation: [
    { accountname: faker.name.findName() },
    { accountnumber: `${Math.round(Math.random() * 14263673700)}` },
    {
      bloodgroup: sample(['AA', 'AB', 'SS', 'AC', 'CS']),
    },
    {
      genotype: sample(['A+', 'A-', 'B+']),
    },
    {
      disabilities: sample(['Back', 'Eye sight']),
    },
    {
      allergies: sample(['Back', 'Eye sight']),
    },
    {
      comobidities: sample(['Back', 'Eye sight']),
    },
    { payment: faker.name.findName() },
    { details: faker.lorem.text() },
  ],

  // nextofkin: faker.name.findName(),
  // nextofkinphone: faker.phone.phoneNumber(),
  // company: faker.company.companyName(),
  // isVerified: faker.datatype.boolean(),
  // status: sample(['active', 'inactive']),
}));

const appointmentList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  firstname: faker.name.firstName(),
  middlename: faker.name.middleName(),
  lastname: faker.name.lastName(),
  practitionername: faker.name.lastName(),
  clientId: faker.datatype.uuid(),
  location: faker.address.country(),
  employee: faker.name.findName(),
  start_time: `${faker.date.birthdate({ min: 18, max: 65, mode: 'age' })}`,
  appointmentClass: sample(['On-site', 'Telemedicine', 'Home Visit']),
  appointment_type: sample(['New', 'Type B', 'Follow up', 'Annual Checkup']),
  appointment_status: sample([
    'Scheduled',
    'Confirmed',
    'Checked In',
    'Vitals Taken',
    'With Nurse',
    'With Doctor',
  ]),
  appointmentReason: faker.lorem.text(),
}));

const bandList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  bandType: sample(['Provider', 'Company', 'Patient', 'Plan']),
  description: faker.name.findName(),
}));

const employeeList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  firstname: faker.name.firstName(),
  middlename: faker.name.middleName(),
  lastname: faker.name.lastName(),
  profession: sample(['Private', 'Public', 'Others']),
  description: faker.name.findName(),
  email: faker.internet.exampleEmail(),
  phone: faker.phone.phoneNumber(),
  department: sample([
    'Admin',
    'Pharmacy',
    'Frontdesk',
    'Nursing',
    'Intensive Care',
  ]),
  deptunit: sample([
    'Admin',
    'Pharmacy',
    'Frontdesk',
    'Nursing',
    'Intensive Care',
  ]),
}));
const locationList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  locationType: sample(['Provider', 'Company', 'Patient', 'Plan']),
}));
const visitList = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  visithistory: faker.name.findName(),
}));
const drugList = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  drugtolerance: faker.name.findName(),
}));
const medicationList = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  medications: faker.name.findName(),
}));
const problemList = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  problemlist: faker.name.findName(),
}));
const taskList = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  tasks: faker.name.findName(),
}));

export {
  clientsList,
  appointmentList,
  bandList,
  employeeList,
  locationList,
  visitList,
  drugList,
  medicationList,
  problemList,
  taskList,
};
