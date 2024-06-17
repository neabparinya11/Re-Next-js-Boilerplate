import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full bg-violet-400 text-gray-400 antialiased">
      <div className="w-full">
        <header className="flex-col border-b border-gray-300 bg-purple-950 py-6">
          <div className="flex justify-evenly">
            <div>
              <h1>Logo</h1>
            </div>
            <div className="flex justify-between ">
              <nav>
                <ul className="flex flex-wrap gap-x-5 text-xl">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
            <div className="flex justify-between">
              <nav>
                <ul className="flex flex-wrap gap-x-5 text-xl">
                  {props.rightNav}
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex justify-center">
            <form className="mx-auto flex max-w-md">
              <div className="relative">
                <input type="search" className="block w-full p-4 ps-10" />
                <button
                  type="submit"
                  className="absolute bottom-2.5 end-2.5 text-white "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            CreativeDesignsGuru
          </a>
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
