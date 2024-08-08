import { ReactNode } from "react";

interface NewsDetailLayoutProp {
  children: ReactNode;
  modal: ReactNode;
  details: any
}

export default function NewsDetailLayout({ children, modal, details }: NewsDetailLayoutProp) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}