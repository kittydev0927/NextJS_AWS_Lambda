// test data for Stepper and FormProgress components
export const sampleSteps = [
  {
    label: 'Location',
    href: 'home-location',
  },
  {
    label: 'Move In Date',
    href: 'estimated-move-in-date',
  },
  {
    label: 'Bedrooms',
    href: 'number-of-bedrooms',
  },
  {
    label: 'Monthly Price',
    href: 'complete',
  },
  // Step 5 to 9 are commented because for iteration 1 only needs 4 steps
  // {
  //   label: 'Bedrooms',
  // },
  // {
  //   label: 'Criteria',
  // },
  // {
  //   label: 'Monthly Price',
  // },
  // {
  //   label: 'Credit Score',
  // },
  // {
  //   label: 'Animals',
  // },
];

export const coApplicantSampleSteps = [
  {
    label: 'Applicants',
    href: '',
  },
  {
    label: 'Background',
    href: '',
  },
  {
    label: 'Lease Details',
    href: '',
  },
  {
    label: 'Applicant Info',
    href: '',
  },
  {
    label: 'Current Address',
    href: '',
  },
  {
    label: 'Occupant Info',
    href: '',
  },
  {
    label: 'Animals',
    href: '',
  },
  {
    label: 'Additional Info',
    href: '',
  },
  {
    label: 'Income and Employment',
    href: '',
  },
  {
    label: 'Payment',
    href: '',
  },
];

export const primaryApplicantSampleSteps = [
  {
    label: 'Background',
    href: '',
  },
  {
    label: 'Lease Details',
    href: '',
  },
  {
    label: 'Applicants',
    href: '',
  },
  {
    label: 'Applicant Info',
    href: '',
  },
  {
    label: 'Current Address',
    href: '',
  },
  {
    label: 'Occupant Info',
    href: '',
  },
  {
    label: 'Animals',
    href: '',
  },
  {
    label: 'Additional Info',
    href: '',
  },
  {
    label: 'Income and Employment',
    href: '',
  },
  {
    label: 'Payment',
    href: '',
  },
];

export const extendedSteps = [
  {
    label: 'Most Interested',
    href: '',
  },
  {
    label: 'Other Parties',
    href: '',
  },
  {
    label: 'Date',
    href: '',
  },
  {
    label: 'Monthly Price',
    href: '',
  },
  {
    label: 'Bedrooms',
    href: '',
  },
  {
    label: 'Criteria',
    href: '',
  },
  {
    label: 'Monthly Price',
    href: '',
  },
  {
    label: 'Credit Score',
    href: '',
  },
  {
    label: 'Animals',
    href: '',
  },
];

export const sampleNotifications = [
  {
    unread: true,
    actionable: true,
    title: 'Documents Needed',
    details:
      'Hi Samantha! Please upload a copy of your emotional support animal certification to complete your profile.',
    actionButtonText: 'Upload Documents',
    deadline: 'Sep 22',
    onClick: () => alert('upload documents clicked'),
    actionType: 'upload',
  },
  {
    unread: false,
    actionable: false,
    title: 'Saved Homes Update',
    details: 'You’re saved home is no longer availible: 1234 Gresham Park Ln, Lithonia GA 30283',
  },
  {
    unread: true,
    actionable: true,
    title: 'Complete Your Profile',
    details: 'Complete your profile to view a curated list of recommended homes.',
    actionButtonText: 'Complete Profile',
    deadline: 'Sep 22',
    onClick: () => alert('complete profile clicked'),
    actionType: 'redirect',
  },
  {
    unread: false,
    actionable: false,
    title: 'Saved Homes Update',
    details: 'You’re saved home is no longer availible: 2345 Gresham Park Ln, Lithonia GA 30283',
  },
  {
    unread: true,
    actionable: true,
    title: 'Documents Needed',
    details: 'Hi Samantha! Please upload a copy of your paylip to complete your profile.',
    actionButtonText: 'Upload Payslip',
    deadline: 'Sep 22',
    onClick: () => alert('upload payslip clicked'),
    actionType: 'upload',
  },
  {
    unread: false,
    actionable: false,
    title: 'Saved Homes Update',
    details: 'You’re saved home is no longer availible: 3456 Gresham Park Ln, Lithonia GA 30283',
  },
  {
    unread: true,
    actionable: true,
    title: 'Documents Needed',
    details: 'Hi Samantha! Please upload a copy of your identification document to complete your profile.',
    actionButtonText: 'Upload Govt. ID',
    deadline: 'Sep 22',
    onClick: () => alert('upload ID clicked'),
    actionType: 'upload',
  },
  {
    unread: false,
    actionable: false,
    title: 'Saved Homes Update',
    details: 'You’re saved home is no longer availible: 4567 Gresham Park Ln, Lithonia GA 30283',
  },
  {
    unread: true,
    actionable: true,
    title: 'Complete Your Profile',
    details: 'Please update your contact details to view a curated list of recommended homes.',
    actionButtonText: 'Update Contact',
    deadline: 'Sep 22',
    onClick: () => alert('update contact details clicked'),
    actionType: 'redirect',
  },
  {
    unread: false,
    actionable: false,
    title: 'Saved Homes Update',
    details: 'You’re saved home is no longer availible: 5678 Gresham Park Ln, Lithonia GA 30283',
  },
];
