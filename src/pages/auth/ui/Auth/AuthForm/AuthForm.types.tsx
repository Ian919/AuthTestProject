export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthFormErrors {
  email?: string;
  password?: string;
}

export interface AuthFormState {
  mail: string;
  password: string;
  errors: AuthFormErrors;
}

export interface AuthFormProps {
  onSubmit?: (data: AuthFormData) => void;
}

export interface AuthFormFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  placeholder: string;
  type?: string;
}

export interface AuthFormSubmitButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
