import type { AppProps } from 'next/app'
import Link from 'next/link'

interface ModalProps {
    menssagem: string;
    href: string;
    onClose: () => void
}

export default function ModalForm({ menssagem, href, onClose }: ModalProps) {
    return (
        <div className='flex bg-gray-50 gap-4 flex-col items-center justify-center w-fit p-6 rounded-md shadow-2xl text-black'>
            <p className='text-xl'>{menssagem}</p>
            <div className='flex gap-2'>

                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5] cursor-pointer"
                >
                    Fechar
                </button>
                <Link
                    href={href}
                    className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                >
                    Ok
                </Link>
            </div>
        </div>
    )
}