export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidName = (name: string): boolean => {
  // At least 2 characters, only letters, spaces, and hyphens
  const nameRegex = /^[a-zA-Z\s-]{2,}$/;
  return nameRegex.test(name);
};

export const validateSignupData = (data: { name: string; email: string; password: string }): string[] => {
  const errors: string[] = [];

  if (!isValidName(data.name)) {
    errors.push('Name must be at least 2 characters long and contain only letters, spaces, and hyphens');
  }

  if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!isStrongPassword(data.password)) {
    errors.push(
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    );
  }

  return errors;
};

export const validateLoginData = (data: { email: string; password: string }): string[] => {
  const errors: string[] = [];

  if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.password) {
    errors.push('Password is required');
  }

  return errors;
}; 