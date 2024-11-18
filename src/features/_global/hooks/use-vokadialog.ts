import { useCallback, useEffect, useRef, useState } from "react";

export interface UseVokadialogProps {
  onDialogOpen?: () => void;
  onDialogClose?: () => void;
  onVisibleChange?: (visible?: boolean) => void;
}

export const useVokadialog = (props?: UseVokadialogProps) => {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const onVisibleChangeFunc = useRef(props?.onVisibleChange);
  onVisibleChangeFunc.current = props?.onVisibleChange;

  const open = useCallback(() => {
    setVisible(true);
    props?.onDialogOpen?.();
  }, [props]);

  const close = useCallback(() => {
    setVisible(false);
    props?.onDialogClose?.();
  }, [props]);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      onVisibleChangeFunc.current?.(visible);
    }
  }, [ready, visible]);

  return {
    open,
    close,
    setVisible,
    visible,
  };
};
