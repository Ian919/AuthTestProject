import { toast } from 'react-toastify';
import { ZodError, z } from 'zod';

export const handleValidationError = (error: unknown): boolean => {
  if (error instanceof ZodError) {
    const toastMessages: string[] = [];

    error.issues.forEach((err) => {
      if (err.path && err.path.length > 0) {
        toastMessages.push(err.message);
      }
    });

    if (toastMessages.length > 0) {
      toast.error(toastMessages.join(', '));
    }
    return false;
  }
  return false;
};

export const validateWithSchema = <T>(
  schema: z.ZodSchema<T>,
  data: T
): { isValid: boolean; error?: ZodError } => {
  try {
    schema.parse(data);
    return { isValid: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { isValid: false, error };
    }
    throw error;
  }
};
