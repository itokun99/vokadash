import React, { PropsWithChildren } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  cn,
} from "../../libs";

export interface ConfirmationAlertProps extends PropsWithChildren {
  title?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  cta?: {
    title?: React.ReactNode;
    variant?: string;
    className?: string;
    onClick?: () => void;
  }[];
}

export const ConfirmationAlert = React.memo((props: ConfirmationAlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild={Boolean(props.children)}>
        {props.children || props.label}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="text-left">
          {props.title && <AlertDialogTitle>{props.title}</AlertDialogTitle>}
          {props.description && (
            <AlertDialogDescription>{props.description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        {props.cta?.length && (
          <AlertDialogFooter>
            {props.cta?.map((c, i) => {
              if (i === 0) {
                return (
                  <AlertDialogCancel
                    onClick={c?.onClick}
                    className={cn("m-0", c?.className)}
                  >
                    {c?.title}
                  </AlertDialogCancel>
                );
              }
              return (
                <AlertDialogAction
                  onClick={c?.onClick}
                  className={cn("text-white", c?.className)}
                >
                  {c?.title}
                </AlertDialogAction>
              );
            })}
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
});
