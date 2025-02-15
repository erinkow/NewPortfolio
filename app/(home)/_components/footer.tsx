import { Button } from '@/components/ui/button';
import { Waves } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export const Footer = ({
  className,
}: FooterProps) => {
  return (
    <div className={`fixed bottom-0 w-full h-footer p-[1.5rem] border-t bg-slate-100 opacity-80 ${className}`}>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Waves />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size='sm' variant='ghost'>
            Privacy policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
