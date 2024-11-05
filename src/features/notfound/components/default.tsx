import { Button } from "@/features/_global";
import { ArrowRight } from "lucide-react";
import React from "react";

export interface Default404Props {
  appName?: string;
}

export const Default404 = (props: Default404Props) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[100svh]  text-muted-foreground">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-tight mb-4">404</h1>
        <p className="text-2xl font-light mb-8">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <p className="mb-10 text-lg">
          Mungkin Anda salah mengetik URL atau halaman tersebut sudah dihapus.
        </p>

        <Button
          variant="default"
          className="p-4 rounded-lg flex items-center"
          onClick={() => (window.location.href = "/")}
        >
          Kembali ke Beranda
          <ArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} {props.appName}. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
