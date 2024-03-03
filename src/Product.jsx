import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FlagIcon, UserIcon } from 'lucide-react';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
function Product() {
  return (
    <>
      <div className="grid md:grid-cols-3 items-start max-w-6xl px-4 mx-auto gap-6 md:gap-10 w-100 h=100">
        
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          
        </div>
        <div className="flex space-x-6">
          <a className="text-base clickcolor hover:text-gray-300" href="#">
            FITNESS
          </a>
          <a className="text-base hover:text-gray-300" href="#">
            CARE
          </a>
          <a className="text-base hover:text-gray-300" href="#">
            MIND
          </a>
          <a className="text-base hover:text-gray-300" href="#">
            GEAR
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-base hover:text-gray-300" href="#">
            KOCHI
          </a>
          <Button className="clickbutton text-black">GET APP</Button>
          <SignedIn>
          <UserButton />
          </SignedIn>
          <SignedOut>
          <UserIcon/>
          </SignedOut>
        </div>
      </nav>
      </div>
      <div className="border-t border-b divide-y dark:border-gray-800">
        <div className="flex items-center justify-between max-w-6xl px-4 mx-auto py-4 md:py-6">
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4">
              <a className="font-medium" href="#">
                All
              </a>
              <a className="font-medium" href="#">
                Mats
              </a>
              <a className="font-medium" href="#">
                Props
              </a>
              <a className="font-medium" href="#">
                Apparel
              </a>
              <a className="font-medium" href="#">
                Accessories
              </a>
            </nav>
          </div>
        </div>
      </div>
      <section className="max-w-6xl px-4 mx-auto py-6 grid gap-6 text-black">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 dark:filter dark:brightness-90">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Product 1"
            className="object-cover w-screen h-80"
            height={400}
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/319324509/EX/IZ/CI/2951851/rubber-yoga-mat.jpg"
            style={{
              aspectRatio: "500/400",
              objectFit: "contain",
            }}
            width={500}
          />
          <div className="grid gap-1.5 p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Eco-Friendly Yoga Mat</h3>
            <p className="text-sm text-gray-500">Biodegradable and non-toxic</p>
            <h4 className="font-semibold text-lg md:text-xl">$49.99</h4>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 dark:filter dark:brightness-90">
          <a className="absolute inset-0 z-10" href="">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Product 2"
            className="object-cover w-screen h-80"
            height={400}
            src="https://upyoga.in/cdn/shop/products/61bMcYkLKqL._AC_SL1500_729fc777-c9ec-4d62-ac56-af818249b826_1445x.jpg?v=1670588645.jpg"
            style={{
              aspectRatio: "500/400",
              objectFit: "contain",
            }}
            width={500}
          />
          <div className="grid gap-1.5 p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Yoga Blocks (Set of 2)</h3>
            <p className="text-sm text-gray-500">Support and stability</p>
            <h4 className="font-semibold text-lg md:text-xl">$19.99</h4>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 dark:filter dark:brightness-90">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Product 3"
            className="object-cover w-screen h-80"
            height={400}
            src="https://img01.ztat.net/article/spp-media-p1/d854f0a355a44160a67e4bd944ab6c9e/9dd1ca9aa2a14f78afa39ae373756ebf.jpg?imwidth=1800.jpg"
            style={{
              aspectRatio: "500/400",
              objectFit: "contain",
            }}
            width={500}
          />
          <div className="grid gap-1.5 p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Performance Yoga Top</h3>
            <p className="text-sm text-gray-500">Breathable and stylish</p>
            <h4 className="font-semibold text-lg md:text-xl">$29.99</h4>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 dark:filter dark:brightness-90">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Product 4"
            className="object-cover w-full h-80"
            height={400}
            src="https://i.etsystatic.com/11778018/r/il/beb490/2605610709/il_570xN.2605610709_iy6q.jpg"
            style={{
              aspectRatio: "500/400",
              objectFit: "contain",
            }}
            width={500}
          />
          <div className="grid gap-1.5 p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Zen Meditation Cushion</h3>
            <p className="text-sm text-gray-500">Comfort for your practice</p>
            <h4 className="font-semibold text-lg md:text-xl">$39.99</h4>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Product;