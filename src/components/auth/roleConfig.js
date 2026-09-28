/**
 * Role-specific configuration for registration forms.
 * Each role defines its display label, icon, and registration fields.
 */
const roleConfig = {
  student: {
    label: 'Student',
    icon: '🎓',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
    ],
  },
  company: {
    label: 'Company',
    icon: '🏢',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Enter company name' },
      { name: 'email', label: 'Official Email', type: 'email', placeholder: 'Enter official email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
    ],
  },
  institute: {
    label: 'Institute',
    icon: '🏛️',
    fields: [
      { name: 'instituteName', label: 'Institute Name', type: 'text', placeholder: 'Enter institute name' },
      { name: 'email', label: 'Official Email', type: 'email', placeholder: 'Enter official email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
    ],
  },
  government: {
    label: 'Government',
    icon: '⚖️',
    fields: [
      { name: 'departmentName', label: 'Department / Organization Name', type: 'text', placeholder: 'Enter department name' },
      { name: 'email', label: 'Official Email', type: 'email', placeholder: 'Enter official email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
    ],
  },
};

export default roleConfig;
