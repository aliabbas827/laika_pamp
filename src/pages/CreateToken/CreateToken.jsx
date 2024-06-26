import React, { useState } from 'react'
import * as images from "../../assets"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import ButtonImage from '@/components/ButtonImage/ButtonImage'
import ButtonTextImageP from '@/components/ButtonTextImageP/ButtonTextImageP'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom'

const coins = [
  { id: 'ethe', name: 'Ethereum', image: images.ethe },
];


const CreateToken = () => {
  const [selectedOption1, setSelectedOption1] = useState(coins[0].id);
    // State to hold the uploaded image URL
    const [imageSrc, setImageSrc] = useState(images.astrodog);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapsible = () => setIsOpen(!isOpen);

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Not an image file.");
    }
  };
  return (
    <section className='container relative mx-auto lg:my-24 my-16 lg-px-0 px-2'>
      <div className="bg_glass bg_conic border z-[100] w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5">
        <h1 className='font-bungee md:text-3xl text-xl'>Create Token</h1>
        <form action='' className=''>
          <div className='flex justify-between gap-5 lg:gap-10 mt-10 md:flex-row flex-col'>
            <div className='md:w-[50%] w-full'>
              <div className=''>
                <div className="">
                  <Select value={selectedOption1}>
                    <SelectTrigger className="lg:w-[148px] xl:w-[153px] w-[40%] bg-[#151515] p-3 border-0 lg:p-2 xl:p-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151515] border-0">
                      <SelectGroup>
                        {coins.map(coin => (
                          <SelectItem key={coin.id} value={coin.id}>
                            <div className="flex  items-center text-xs sm:text-base gap-2 ">
                              <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                              <span>{coin.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex justify-between md:items-center md:flex-row flex-col items-start lg:gap-2 gap-5 mt-10 w-full'>
                  <div className='flex flex-col gap-2 md:w-[60%] w-full'>
                    <Label htmlFor="username" className="text-gray-200 md:text-lg text-base">Name</Label>
                    <Input type="text" id="username" placeholder="pamptoken..." className="bg_glass2 border-0 md:text-lg text-base rounded-xl py-6 " />
                  </div>
                  <div className='flex flex-col gap-2 md:w-[30%] w-full'>
                    <Label htmlFor="ticker" className="text-gray-200 md:text-lg text-base">Ticker</Label>
                    <Input type="text" id="ticker" placeholder="PAMP" className="bg_glass2 border-0 md:text-lg text-base rounded-xl py-6" />
                  </div>
                </div>
                <div className='mt-10 flex flex-col gap-2 w-full'>
                  <Label htmlFor="description" className="text-gray-200 md:text-lg text-base">Description</Label>
                  <Textarea placeholder="pamptoken is a token created on Laïka Network..." id="description" className="bg_glass2 border-0 md:text-lg text-base rounded-xl py-6" />
                </div>
                <div className='flex md:items-center items-start md:flex-row flex-col gap-3 mt-10'>
                  <Input id="picture" type="file" />
                  <p className='text-gray-200 md:text-base text-sm'>Recomended: 1000x1000 px, max 500ko</p>
                </div>
                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  className=" space-y-2"
                >
                  <div className="mt-10">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center gap-3" onClick={toggleCollapsible}>
                        <img src={images.gear} className='w-5' alt="" />
                        <h4 className="md:text-base text-sm font-light">
                          {isOpen ? "Hide advanced settings" : "Show advanced settings"}
                        </h4>
                        {isOpen ? <ChevronUp className="md:w-6 w-4" /> : <ChevronDown className="md:w-6 w-4" />}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="w-full">
                    <div className='flex md:items-center items-start md:flex-row flex-col gap-3 mt-10'>
                      <Input id="banner" type="file" className="" onChange={handleBannerUpload} />
                      <p className='text-gray-200 md:text-base text-sm'>Recomended: 1500x500 px, max 1Mo</p>
                    </div>
                    <div className='flex flex-col gap-4 mt-10'>
                      <div className='flex items-center gap-3'>
                        <img src={images.x} alt="" className='w-5' />
                        <Input type="text" id="twitter" placeholder="Twitter Link..." className="bg_glass2 border-0 md:text-lg text-base rounded-xl lg:w-[280px] w-[250px]" />
                      </div>
                      <div className='flex items-center gap-3'>
                        <img src={images.globe} alt="" className='w-5' />
                        <Input type="text" id="website" placeholder="Website Link..." className="bg_glass2 border-0 md:text-lg text-base rounded-xl lg:w-[280px] w-[250px]" />
                      </div>
                      <div className='flex items-center gap-3'>
                        <img src={images.telegram} alt="" className='w-5' />
                        <Input type="text" id="telegram" placeholder="Telegram Link..." className="bg_glass2 border-0 md:text-lg text-base rounded-xl lg:w-[280px] w-[250px]" />
                      </div>

                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            <div className='md:w-[50%] w-full relative md:rounded-[40px] rounded-[30px] bg_glass2 h-[70vh] flex justify-center items-center '>
              <div className=' bg_pink'>
                <div className={`w-[90%] m-auto bg_header  bg_black_gradient rounded-[30px] py-6 px-8`}>
                  <div className='flex items-start gap-5 '>
                    <div className='rounded-2xl flex-shrink-0 w-24 h-24'>
                      <img src={imageSrc} alt="" className='w-full h-[100%] object-cover rounded-[15px]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h1 className='md:text-2xl text-lg text-white font-medium'>Muttnik the dog <span className='text-[#e9e8ea] font-light'>[$MUTT]</span></h1>
                      <div className='flex items-center gap-1'><p className='md:text-xl text-sm text-[#e9e8ea] '>created by </p><p className='font-semibold text-white md:text-xl text-sm custom_text'>0xErd45...</p></div>
                      <p className='md:text-xl text-sm text-[#e9e8ea]'>market cap: <span className='font-semibold text-white'>--k</span></p>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='italic md:text-xl text-sm text-gray-400 limit_text'>pamptoken is a token created on Laïka Network...</p>
                  </div>
                  <Link to={"/pamp"} className='mt-3 flex justify-center'>
                    <ButtonImage name={"pamp it"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <h2 className="text-white italic md:text-base text-center text-sm">Cost to deploy: XX LAIKA</h2>
            <ButtonTextImageP name="Create Token" img={false} style={"md:w-[35%] w-full m-auto mt-2"} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateToken