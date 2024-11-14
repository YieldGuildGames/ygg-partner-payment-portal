"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import NextLink from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Purchase
            </p>
            <h4 className="text-white font-medium text-large">
              Guild Advancement Program
            </h4>
          </CardHeader>
          <NextLink
            href="/payment/guild-advancement-program"
            className="block w-full h-full"
          >
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/ygg_assets/ygg_gap_image.png"
            />
          </NextLink>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Purchase
            </p>
            <h4 className="text-white font-medium text-large">
              Future of Work Quest Package
            </h4>
          </CardHeader>
          <NextLink
            href="/payment/future-of-work-package"
            className="block w-full h-full"
          >
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/ygg_assets/ygg_fow_machine.jpg"
            />
          </NextLink>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">
              Purchase
            </p>
            <h4 className="text-black font-medium text-large">Game Testing</h4>
          </CardHeader>
          <NextLink
            href="/payment/game-testing-package"
            className="block w-full h-full"
          >
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/ygg_assets/ygg_game_tester.jpg"
            />
          </NextLink>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            {/* <h4 className="text-black font-medium text-2xl">Acme camera</h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/ygg_assets/partner_dashboard_2.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Plan your Quests Better</p>
              <p className="text-black text-tiny"></p>
            </div>
            <NextLink
              href={process.env.NEXT_PUBLIC_PARTNER_DASHBOARD_URL as string}
              target="_blank"
            >
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Go to Partner Dashboard
              </Button>
            </NextLink>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/ygg_assets/ygg_logo.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Visit</p>
                <p className="text-tiny text-white/60">
                  Yield Guild Games Main Site
                </p>
              </div>
            </div>
            <NextLink href="https://www.yieldguild.io/" target="_blank">
              <Button radius="full" size="sm">
                Go to main site
              </Button>
            </NextLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
