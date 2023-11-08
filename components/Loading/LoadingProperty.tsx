import React from 'react';
import { Card, Skeleton} from "@nextui-org/react";
export default function LoadingList() {
    function ItemLoading() {
        const html = [];
        for (let i = 0; i < 10; i++) {
            html.push(
                <div className={`col-span-12 md:col-span-3`} key={i}>
                    <Card className="space-y-5 p-4 mt-5" radius="lg">
                        <Skeleton className="rounded-lg">
                            <div className="h-[300px] rounded-lg bg-default-300"></div>
                        </Skeleton>
                        <div className="space-y-3">
                            <Skeleton className="w-3/5 rounded-lg">
                                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-4/5 rounded-lg">
                                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </div>
                    </Card>
                </div>
            )
        }
        return (
            <div className="grid grid-cols-12 gap-4 mb-5">
                {html}
            </div>
        )
    }

    return (
        <>
            <ItemLoading/>
        </>
    )
}