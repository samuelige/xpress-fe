import React, { memo } from 'react'
import Image from "next/image";
import { checked_blue } from '../assets/icons';
import { progress_bar } from '../assets/images';

import { convertToKBOrMB } from '../utils/convertToKBOrMB';


interface ImageDetails {
    image: string;
    name: string;
    size: number;
}

const ImageDetailsCard: React.FC<ImageDetails> = ({image, name, size}) => {
  return (
    <div className="flex flex-row w-full p-4 space-x-4 border-[1px] border-primary-600 bg-white rounded-lg">
        <div className='w-[2rem] h-[2rem] rounded-[1.75rem]'>
            <Image
                src={image}
                width={32}
                height={32}
                alt="asset-image"
                className=' rounded-[1.75rem]'
            />
        </div>
        <div className="flex flex-col space-y-1 flex-1">
            <div className="flex flex-row justify-between">
                <div className="text-sm">
                    <p className="font-medium text-gray-700">{name}</p>
                    <p className="text-gray-600">{convertToKBOrMB(size)}</p>
                </div>
                <Image src={checked_blue} width={20} height={20} className="object-contain" alt="info_image"/>
            </div>
            <div className="flex flex-row items-center space-x-[0.75rem]">
                <Image src={progress_bar} className="w-full" width={"0"} height={8}  alt="progressBar_Image"/>
                <p className="font-medium text-gray-700 text-sm">100%</p>
            </div>
        </div>
    </div>
  )
}

export default memo(ImageDetailsCard)