"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
    const router = useRouter();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string },
            email: { value: string },
            message: { value: string},
        }
        const data = {
            name: target.name.value,
            email:  target.email.value,
            message: target.message.value,
        }

        if(!data.name || !data.email || !data.message) {
            // alert('Please fill in all fields')
            toast.error('Please fill in all fields')
            return
        }

        const formData = new FormData()
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try{
            const endpoint = process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT;
            if(!endpoint) {
                throw new Error('The environment variable NEXT_PUBLIC_NEWT_FORM_ENDPOINT is not defined.')
            }
            console.log('Sending POST request to:', endpoint);
            console.log('FormData:', formData);

            const response = await fetch(
                endpoint,
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );

            console.log('Response:', response);

            if(response.ok) {
                router.push('/contact-form-success')
            } else { 
                console.log('Failed to submit form. Status:', response.status)
                router.push('/contact-form-error')
            }
        } catch(error) {
            console.log('An error ocured:', error);
            router.push('/contact-form-error')
        }
    }
    return(
        <div className="flex justify-center items-center min-h-screen">

            <div className="w-full max-w-[400px]">
                <h1 className=" text-5xl mt-0 mb-7 text-center leading-6">Contact me</h1>
                <p className=' text-xl leading-6 mb-[25px] p-0 text-gray-400 text-center'>
                    Please fill this form in a decent manner.
                </p>
                <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="POST" onSubmit={onSubmit}>
                    <label htmlFor="name" className="block font-bold text-xl mb-[8px]">
                        Name
                    </label>
                    <input 
                        type="text"
                        id="name" 
                        name="name" 
                        className="block w-full box-border text-xl mb-[24px] p-[8px] text-gray-800 border border-gray-300 rounded font-sans"
                        required
                    />
                    <label htmlFor="email" className="block font-bold text-xl mb-[8px]">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        className="block w-full box-border text-xl mb-[24px] p-[8px] text-gray-800 border border-gray-300 rounded font-sans"
                        required
                    />
                    <label htmlFor="message" className="block font-bold text-xl mb-[8px]">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        className="block w-full box-border mb-[24px] p-[8px] text-gray-800 rounded font-sans resize-y h-[200px] align-top break-words"
                        rows={4}
                        required
                    />
                    <div className="w-full flex justify-center">
                        <button type="submit" className="text-xl mx-0 block px-5 py-2.5 rounded border-none font-bold bg-gray-800 transition duration-200 font-sans cursor-pointer hover:bg-neutral-700 items-center">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}