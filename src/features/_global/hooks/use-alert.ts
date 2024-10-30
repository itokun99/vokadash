import { useToast } from "../libs";

export const useAlert = () => {
  const { toast } = useToast();

  const success = (message: string, title?: string) => {
    toast({
      title,
      variant: "success",
      description: message,
    });
  };

  const error = (message: string, title?: string) => {
    toast({
      title,
      variant: "destructive",
      description: message,
    });
  };

  return {
    success,
    error,
  };
};
