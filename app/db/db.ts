const data = {
    works: [
        {
            img: '/portfolio.png',
            title: 'My Portfolio',
            description: '自己紹介、他のPortfolio紹介、コンタクトページを作成。ナビゲーションバーに各ページへ遷移するボタンを設置し、さらに縦スクロールボタンで次のページにスクロールする機能を追加。コンタクトページはNEWTというAPIを使用して作成しています',
            technology: 'TypeScript, React, Next.js, TailwindCSS, Shadcn-ui',
            github_repository: 'https://github.com/erinkow/NewPortfolio',
            url: '/',
        },
        {
            img: '/first_board_todee.png',
            title: 'Todee',
            description: 'Trelloクローン。Clerkを使ったユーザサインイン、組織ログイン機能、Spriteを使った有料プラン「Pro」、hello-pangea/dndを使ったドラッグアンドドロップ機能をつけています。チュートリアル動画を参考にした二作目で少しだけアレンジを加えました。',
            technology: 'TypeScript, React, Next.js, prisma, Supabase, Clerk, Zod, hello-pangea/dnd, TailwindCSS, Shadcn-ui',
            github_repository: 'https://github.com/erinkow/todee',
            url: 'https://todee-wmz5.vercel.app/',
        },
        {
            img: '/todee-lite.png',
            title: 'Todee-lite',
            description: '簡易Todoアプリ。Todeeを参考にオリジナルTodoアプリを作りました。Clerkの認証機能、hello-pangea/dndのドラッグアンドドロップ機能を搭載しています',
            technology: 'TypeScript, React, Next.js, prisma, Supabase, Clerk, Zod hello-pangea/dnd TailwindCSS, Shadcn-ui',
            github_repository: 'https://github.com/erinkow/Todee-lite',
            url: 'https://todee-lite.vercel.app/',
        },
    ]
};

export default data;