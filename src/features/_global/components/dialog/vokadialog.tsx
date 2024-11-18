import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "./credenza";
import { Button, ButtonProps } from "../../libs";
import React from "react";

export interface VokadialogAction extends ButtonProps {
  label?: React.ReactNode;
}

export interface VokadialogProps {
  visible?: boolean;
  header?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  actions?: VokadialogAction[];
}

export const Vokadialog = React.memo((props: VokadialogProps) => {
  return (
    <>
      <Credenza open={props.visible} onOpenChange={props.onOpenChange}>
        <CredenzaContent>
          {props.header ? (
            <CredenzaHeader>{props.header}</CredenzaHeader>
          ) : (
            <CredenzaHeader>
              {props.title && <CredenzaTitle>{props.title}</CredenzaTitle>}
              {props.description && (
                <CredenzaDescription>{props.description}</CredenzaDescription>
              )}
            </CredenzaHeader>
          )}

          <CredenzaBody>{props.content}</CredenzaBody>
          {props.footer ? (
            <CredenzaFooter>{props.footer}</CredenzaFooter>
          ) : (
            <CredenzaFooter>
              <CredenzaClose asChild>
                <Button>Close</Button>
              </CredenzaClose>
            </CredenzaFooter>
          )}
        </CredenzaContent>
      </Credenza>
    </>
  );
});
