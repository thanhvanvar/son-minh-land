import React from "react";
import { Button } from "@nextui-org/react";
import queryString from "query-string";
import { useRouter } from "next/router";

export default function Pagination(props: any) {
  const router = useRouter();
  const currentPage = Number(router.query.pa ? router.query.pa : "1");
  const totalPages = Math.ceil(props.totalData / 10);
  let pages: number[] = [];
  const handleChangePage = (e: any) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (router.query.contentId) {
      router.push(
        {
          pathname: String(router.query.contentId),
          query: queryString.stringify({
            c: router.query.c ? router.query.c : undefined,
            l: router.query.l ? router.query.l : undefined,
            p: router.query.p ? router.query.p : undefined,
            a: router.query.a ? router.query.a : undefined,
            odb: router.query.odb ? router.query.odb : undefined,
            odm: router.query.odm ? router.query.odm : undefined,
            b: router.query.b ? router.query.b : undefined,
            t: router.query.t ? router.query.t : undefined,
            h: router.query.h ? router.query.h : undefined,
            s: router.query.s ? router.query.s : undefined,
            sta: router.query.sta ? router.query.sta : undefined,
            pa: e,
          }),
        },
        undefined,
        { shallow: true }
      );
    } else {
      router.push(
        {
          pathname: String(router.pathname),
          query: queryString.stringify({
            sta: router.query.sta ? router.query.sta : undefined,
            pa: e,
          }),
        },
        undefined,
        { shallow: true }
      );
    }
  };
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const ControlBefore = () => {
    if (currentPage > 3 && props.totalData > 10) {
      return (
        <>
          <div>
            <Button
              className={`mx-1`}
              isIconOnly
              size={"sm"}
              color="success"
              variant="ghost"
              onClick={() => handleChangePage(1)}
            >
              1
            </Button>
          </div>
          <div>
            <Button
              className={`mx-1`}
              isIconOnly
              size={"sm"}
              color="success"
              variant="ghost"
            >
              ...
            </Button>
          </div>
        </>
      );
    }
  };
  const ControlAfter = () => {
    if (currentPage < props.totalData && props.totalData > 10) {
      return (
        <>
          <div>
            <Button
              className={`mx-1`}
              isIconOnly
              size={'sm'}
              color="success"
              variant="ghost"
            >
              ...
            </Button>
          </div>
          <div>
            <Button
              className={`mx-1`}
              size={'sm'}
              color="success"
              variant="ghost"
            >
              <span className={`text-base text-sm`}>{totalPages}</span>
            </Button>
          </div>
        </>
      );
    }
  };
  const ItemNumber = () => {
    return (
      <>
        {pages.map((page, index) => {
          if (
            page > currentPage - 3 &&
            page < currentPage + 3 &&
            props.totalData > 10
          ) {
            return (
              <Button
                key={index}
                isIconOnly
                className={`mx-1 ${
                  Number(currentPage) === page ? "text-white" : ""
                }`}
                size={'sm'}
                color="success"
                variant={Number(currentPage) === page ? "solid" : "ghost"}
                id={String(page)}
                onClick={() => handleChangePage(page)}
              >
                {page}
              </Button>
            );
          }
          return null;
        })}
      </>
    );
  };

  return (
    <>
      <div className={`flex flex-row justify-center pt-5`}>
        <ControlBefore />
        <ItemNumber />
        <ControlAfter />
      </div>
    </>
  );
}
