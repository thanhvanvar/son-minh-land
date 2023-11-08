import React from 'react';
import {Card, Skeleton} from "@nextui-org/react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper";

import {useWindowSize} from "../../hooks/useMain";

export default function LoadingList() {
    const {width} = useWindowSize()

    function ItemLoadingDesktop() {
        const html = [];
        for (let i = 0; i < 5; i++) {
            html.push(
                <SwiperSlide key={i} className={`py-4`}>
                    <Card className="w-full space-y-5 p-4" radius="lg">
                        <Skeleton className="rounded-lg">
                            <div className="h-[208px] rounded-lg bg-default-300"></div>
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
                </SwiperSlide>
                // <SwiperSlide key={i}>
                //     <Grid.Container>
                //         <Grid sm={12} md={12}>
                //             <Card variant="bordered" css={{mw: "330px", my: 10}}>
                //                 <Grid>
                //                     <ContentLoader
                //                         width={"100%"}
                //                         height={'100%'}
                //                         viewBox="0 0 395 420"
                //                         backgroundColor="#f0f0f0"
                //                         foregroundColor="#dedede"
                //                     >
                //                         <rect x="0" y="0" rx="10" ry="10" width="100%" height="270"/>
                //                         <rect x="5" y="287" rx="5" ry="5" width="378" height="20"/>
                //                         <rect x="5" y="316" rx="5" ry="5" width="239" height="20"/>
                //                         <rect x="5" y="346" rx="5" ry="5" width="20%" height="20"/>
                //                         <rect x="100" y="346" rx="5" ry="5" width="20%" height="20"/>
                //                         <rect x="5" y="380" rx="5" ry="5" width="378" height="20"/>
                //                     </ContentLoader>
                //                 </Grid>
                //             </Card>
                //         </Grid>
                //     </Grid.Container>
                // </SwiperSlide>
            )
        }
        return (
            <Swiper
                slidesPerView={4.2}
                spaceBetween={15}
                navigation={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {html}
            </Swiper>
        )
    }

    function ItemLoadingMobile() {
        const html = [];
        for (let i = 0; i < 5; i++) {
            html.push(
                <SwiperSlide key={i}>
                    {/*<Grid.Container>
                        <Grid sm={12} md={12}>
                            <Card variant="bordered" css={{mw: "330px", my: 10}}>
                                <Grid>
                                    <ContentLoader
                                        width={"100%"}
                                        height={'100%'}
                                        viewBox="0 0 395 420"
                                        backgroundColor="#f0f0f0"
                                        foregroundColor="#dedede"
                                    >
                                        <rect x="0" y="0" rx="10" ry="10" width="100%" height="270"/>
                                        <rect x="5" y="287" rx="5" ry="5" width="378" height="20"/>
                                        <rect x="5" y="316" rx="5" ry="5" width="239" height="20"/>
                                        <rect x="5" y="346" rx="5" ry="5" width="20%" height="20"/>
                                        <rect x="100" y="346" rx="5" ry="5" width="20%" height="20"/>
                                        <rect x="5" y="380" rx="5" ry="5" width="378" height="20"/>
                                    </ContentLoader>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid.Container>*/}
                </SwiperSlide>
            )
        }
        return (
            <>
                {/*<Grid css={{pb: 80}}>
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={15}
                    navigation={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {html}
                </Swiper>
            </Grid>*/}
            </>
        )
    }

    return (
        <>
            {width > 1280 ? <ItemLoadingDesktop/> : ''}
            {width < 650 ? <ItemLoadingMobile/> : ''}
        </>
    )
}