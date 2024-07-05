import { cn } from "@/lib/utils";
import localFont from 'next/font/local';
import Image from "next/image";

const headingFont = localFont({
    src: '../../../public/fonts/font.woff2'
  });

const AboutMePage = () => {
    return(
        <div id='aboutme' className="h-screen flex flex-col justify-center items-center text-white">
            {/*  bg-red-300 */}
            <div className='flex flex-col items-center mb-24'>
                <h1 className={cn(
                    'text-2xl md:text-6xl md:mb-5 items-center justify-center text-neutral-300 mt-10',
                    headingFont.className
                )}>
                    About Me
                </h1>
                <div className="flex flex-col md:flex-row items-center mt-5">
                    <div className="flex justify-center mb-4 md:mb-0">
                        <Image
                            src='/profile.jpeg'
                            alt="Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-full max-w-[150px] max-h-[190px] md:max-w-[300px] md:max-h-[400px] md:ml-5"
                        />

                    </div>
                    <div className="mx-[3rem] max-w-[35rem] items-start lg:mx-[8rem]">
                        <p className="text-[12px] text-neutral-300 breake-words md:text-sm">
                            はじめまして。渡辺 江里子(わたなべ えりこ)と申します。<br />
                            <br />
                            ソフトウェアエンジニアとしてはまだ駆け出しで、独学でJavaScriptやTypeScript, React, Next.JSといったフロントエンドの勉強中心に進めており、もうじき1年が経とうとしています。<br /> 
                            最近は個人でWebアプリケーション開発を中心に進めており、バックエンドの実装にも力を入れています。<br />
                            <br />
                            大学では英語を専攻、キャリアップのためもっと英語力を向上させたいと感じ大学卒業後新卒で入った会社を退職しイギリスへ留学。<br />
                            帰国後は主にPCパーツを扱う商社にて輸入事務や購買業務に携わってきました。<br />
                            <br />
                            長くパソコンに関わるようになるにつれて、徐々にソフトウェアの方に興味を持つようになった頃、ちょうどタイミング良く、前職の会社であるアメリカのサイバーセキュリティの会社の方から増員のため声をかけていただきました。前職の会社への転職後、約3年半の期間となりますが、バックオフィス兼営業事務として従事しました。<br />
                            <br />
                            退職後は本格的にプログラミングの勉強を開始。ポートフォリオとしてWebアプリケーションを制作する上で、バックエンドの知識を養うために、ウェブアプリ開発の職業訓練(PHP+Laravel)も受講中です。<br />
                            <br />
                            趣味は漫画、音楽鑑賞、サーフィンやスノーボードといったアクティビティもオンシーズン毎に楽しんでいます。<br />

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;